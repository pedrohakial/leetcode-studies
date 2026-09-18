// ATHOS fuzzy finder — estilo Telescope/fzf do Neovim.
// Atalhos: Ctrl+K / Cmd+K ou '/' (fora de inputs). Setas/Ctrl+P/Ctrl+N,
// Enter abre, Esc fecha. Ranking: substring exato > prefixo > word-start >
// subsequência com bônus de corrida.
(function () {
  "use strict";

  var ROOT = window.path_to_root || "./";
  var INDEX = window.ATHOS_INDEX || [];
  var ABERTO = false, SELECIONADO = 0, RESULTADOS = [];

  // ---------- matcher (fzf-like) ----------
  function fuzzy(consulta, texto) {
    if (!consulta) return { score: 0, pos: [] };
    var q = consulta.toLowerCase(), t = texto.toLowerCase();
    var sub = t.indexOf(q);
    if (sub !== -1) {
      var pos = [];
      for (var i = 0; i < q.length; i++) pos.push(sub + i);
      var bonus = (sub === 0 ? 200 : 0) + q.length * 2;
      return { score: 1000 + bonus - sub, pos: pos };
    }
    var qi = 0, score = 0, corrida = 0, pos2 = [];
    for (var ti = 0; ti < t.length && qi < q.length; ti++) {
      if (t[ti] === q[qi]) {
        corrida++;
        score += 10 + corrida * 4;
        var ant = ti > 0 ? t[ti - 1] : " ";
        if ("-./ 　".indexOf(ant) !== -1 || ti === 0) score += 15; // word-start
        pos2.push(ti);
        qi++;
      } else {
        corrida = 0;
      }
    }
    if (qi < q.length) return { score: -1, pos: [] };
    return { score: score - (t.length - q.length) * 0.4, pos: pos2 };
  }

  // "hard graph", "d:easy", "s:dp", "médio" — dificuldades e seções viram filtros
  var DIF_ALIAS = {
    easy: "easy", facil: "easy", "fácil": "easy",
    medium: "medium", medio: "medium", "médio": "medium",
    hard: "hard", dificil: "hard", "difícil": "hard"
  };

  function parsearConsulta(consulta) {
    var difs = [], secoes = [], termos = [];
    (consulta || "").trim().split(/\s+/).filter(Boolean).forEach(function (tk) {
      var m;
      if ((m = tk.match(/^(?:d|dif):(.+)$/i))) {
        var d = DIF_ALIAS[m[1].toLowerCase()];
        if (d) difs.push(d); else termos.push(tk);
      } else if ((m = tk.match(/^(?:s|sec):(.+)$/i))) {
        secoes.push(m[1].toLowerCase());
      } else {
        var a = DIF_ALIAS[tk.toLowerCase()];
        if (a && tk.length > 3) difs.push(a); else termos.push(tk);
      }
    });
    return { difs: difs, secoes: secoes, termos: termos };
  }

  function buscar(consulta) {
    var c = parsearConsulta(consulta);
    var pool = INDEX.filter(function (e) {
      if (c.difs.length && c.difs.indexOf((e.d || "").toLowerCase()) === -1) return false;
      if (c.secoes.length) {
        var alvo = (e.s + " " + e.k).toLowerCase(), achou = false;
        for (var s = 0; s < c.secoes.length; s++) {
          if (alvo.indexOf(c.secoes[s]) !== -1) { achou = true; break; }
        }
        if (!achou) return false;
      }
      return true;
    });
    if (!c.termos.length) {
      return pool.slice(0, 40).map(function (e) { return { item: e, score: 0, pos: [] }; });
    }
    var saida = [];
    for (var i = 0; i < pool.length; i++) {
      var e = pool[i];
      var haystackTitulo = e.t + " " + (e.n || "");
      var total = 0, pos = null, ok = true;
      for (var k = 0; k < c.termos.length; k++) {
        var m1 = fuzzy(c.termos[k], haystackTitulo);
        var m2 = fuzzy(c.termos[k], e.k + " " + e.s);
        var melhor = m1.score >= m2.score ? m1 : m2;
        if (melhor.score < 0) { ok = false; break; }
        total += melhor.score * (k === 0 ? 1 : 0.6);
        if (melhor === m1 && pos === null) pos = m1.pos;
      }
      if (ok) {
        if (!e.x) total += 40; // página do livro ranqueia acima de link externo
        saida.push({ item: e, score: total, pos: pos || [] });
      }
    }
    saida.sort(function (a, b) { return b.score - a.score; });
    return saida.slice(0, 40);
  }

  // ---------- UI ----------
  var overlay, caixa, input, lista, rodape;

  function corDificuldade(d) {
    return d === "Easy" ? "var(--easy, #4ecdc4)" : d === "Hard" ? "var(--hard, #ff6b6b)" : "var(--medium, #ffb347)";
  }

  function tituloDestacado(e, pos) {
    var t = e.t, marc = {}, i;
    for (i = 0; i < pos.length; i++) marc[pos[i]] = true;
    var html = "";
    for (i = 0; i < t.length; i++) {
      var c = t[i].replace(/&/g, "&amp;").replace(/</g, "&lt;");
      html += marc[i] ? "<mark>" + c + "</mark>" : c;
    }
    return html;
  }

  function render() {
    lista.innerHTML = "";
    for (var i = 0; i < RESULTADOS.length; i++) {
      var r = RESULTADOS[i], e = r.item;
      var li = document.createElement("li");
      li.className = "fz-item" + (i === SELECIONADO ? " fz-sel" : "");
      li.setAttribute("role", "option");
      var badges = "";
      if (e.n) badges += '<span class="fz-num">#' + e.n + "</span>";
      if (e.d) badges += '<span class="fz-dif" style="color:' + corDificuldade(e.d) + '">' + e.d + "</span>";
      li.innerHTML =
        '<span class="fz-titulo">' + tituloDestacado(e, r.pos) + "</span>" +
        '<span class="fz-meta">' + badges + '<span class="fz-secao">' + e.s + "</span></span>";
      (function (url) {
        li.addEventListener("click", function () {
          window.location.href = url.indexOf("http") === 0 ? url : ROOT + url;
        });
      })(e.u);
      lista.appendChild(li);
    }
    var sel = lista.querySelector(".fz-sel");
    if (sel) sel.scrollIntoView({ block: "nearest" });
    if (rodape) {
      rodape.textContent =
        RESULTADOS.length + " resultado" + (RESULTADOS.length === 1 ? "" : "s") +
        " · ↑↓ navegar · ⏎ abrir · esc fechar · filtros: hard / d:easy / s:graphs";
    }
  }

  function abrir() {
    if (ABERTO) return;
    ABERTO = true; SELECIONADO = 0;
    overlay = document.createElement("div");
    overlay.className = "fz-overlay";
    caixa = document.createElement("div");
    caixa.className = "fz-caixa";
    input = document.createElement("input");
    input.className = "fz-input";
    input.type = "text";
    input.placeholder = "buscar problema, tópico, padrão…  (Esc fecha)";
    input.setAttribute("spellcheck", "false");
    lista = document.createElement("ul");
    lista.className = "fz-lista";
    lista.setAttribute("role", "listbox");
    rodape = document.createElement("div");
    rodape.className = "fz-rodape";
    caixa.appendChild(input);
    caixa.appendChild(lista);
    caixa.appendChild(rodape);
    overlay.appendChild(caixa);
    document.body.appendChild(overlay);
    overlay.addEventListener("mousedown", function (ev) { if (ev.target === overlay) fechar(); });
    input.addEventListener("input", function () {
      RESULTADOS = buscar(input.value); SELECIONADO = 0; render();
    });
    input.addEventListener("keydown", tecla);
    RESULTADOS = buscar(""); render();
    input.focus();
  }

  function fechar() {
    if (!ABERTO) return;
    ABERTO = false;
    if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  }

  function tecla(ev) {
    if (ev.key === "Escape") { fechar(); ev.preventDefault(); return; }
    if (ev.key === "ArrowDown" || (ev.ctrlKey && (ev.key === "n" || ev.key === "N"))) {
      SELECIONADO = Math.min(SELECIONADO + 1, RESULTADOS.length - 1); render(); ev.preventDefault(); return;
    }
    if (ev.key === "ArrowUp" || (ev.ctrlKey && (ev.key === "p" || ev.key === "P"))) {
      SELECIONADO = Math.max(SELECIONADO - 1, 0); render(); ev.preventDefault(); return;
    }
    if (ev.key === "Enter" && RESULTADOS[SELECIONADO]) {
      var u = RESULTADOS[SELECIONADO].item.u;
      window.location.href = u.indexOf("http") === 0 ? u : ROOT + u;
      ev.preventDefault();
    }
  }

  document.addEventListener("keydown", function (ev) {
    if ((ev.ctrlKey || ev.metaKey) && (ev.key === "k" || ev.key === "K")) {
      ev.preventDefault(); ABERTO ? fechar() : abrir(); return;
    }
    var tag = (ev.target && ev.target.tagName) || "";
    if (ev.key === "/" && !ABERTO && tag !== "INPUT" && tag !== "TEXTAREA" && !ev.target.isContentEditable) {
      ev.preventDefault(); abrir();
    }
  });
})();
