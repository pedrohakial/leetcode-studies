// Seletor de idioma PT-BR ↔ EN — fixo no canto superior direito.
// Detecção: o mdBook define <html lang="..."> a partir do book.toml.
(function () {
  "use strict";
  var root = window.path_to_root || "./";
  var isEn = (document.documentElement.lang || "").toLowerCase().indexOf("en") === 0;
  var a = document.createElement("a");
  a.textContent = isEn ? "🇧🇷 PT-BR" : "🇺🇸 EN";
  a.title = isEn ? "Versão em português" : "English version";
  // página EN → raiz do site (um nível acima de en/); página PT → subdir en/
  a.href = isEn ? root + "../" : root + "en/";
  a.style.cssText =
    "position:fixed;top:6px;right:10px;z-index:9998;" +
    "font:600 11px 'JetBrains Mono',monospace;letter-spacing:1px;" +
    "color:#00e5ff;background:rgba(10,14,24,.85);border:1px solid rgba(0,229,255,.25);" +
    "border-radius:4px;padding:3px 8px;text-decoration:none;";
  document.addEventListener("DOMContentLoaded", function () {
    document.body.appendChild(a);
  });
})();
