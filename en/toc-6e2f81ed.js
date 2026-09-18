// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="index.html">Home</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="metodo.html">Study method</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="padroes.html">Pattern index</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="anki.html">Anki — spaced repetition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="catalogo.html">Full LeetCode catalog</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="template.html">Problem template</a></span></li><li class="chapter-item "><li class="part-title">Languages</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linguagens/python.html">Python — your home turf</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linguagens/rust.html">Rust</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linguagens/cpp.html">C++</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linguagens/c.html">C</a></span></li><li class="chapter-item "><li class="part-title">Arrays &amp; Hashing</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/two-sum.html">Two Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/valid-anagram.html">Valid Anagram</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/group-anagrams.html">Group Anagrams</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/top-k-frequent-elements.html">Top K Frequent Elements</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/product-of-array-except-self.html">Product of Array Except Self</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/longest-consecutive-sequence.html">Longest Consecutive Sequence</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/encode-decode-strings.html">Encode and Decode Strings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/contains-duplicate.html">Contains Duplicate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="arrays/valid-sudoku.html">Valid Sudoku</a></span></li><li class="chapter-item "><li class="part-title">Two Pointers</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="two-pointers/valid-palindrome.html">Valid Palindrome</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="two-pointers/two-sum-ii.html">Two Sum II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="two-pointers/three-sum.html">3Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="two-pointers/container-with-most-water.html">Container With Most Water</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="two-pointers/trapping-rain-water.html">Trapping Rain Water</a></span></li><li class="chapter-item "><li class="part-title">Sliding Window</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/best-time-to-buy-and-sell-stock.html">Best Time to Buy and Sell Stock</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/longest-substring-without-repeating-characters.html">Longest Substring Without Repeating Characters</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/longest-repeating-character-replacement.html">Longest Repeating Character Replacement</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/minimum-window-substring.html">Minimum Window Substring</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/sliding-window-maximum.html">Sliding Window Maximum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="sliding-window/permutation-in-string.html">Permutation in String</a></span></li><li class="chapter-item "><li class="part-title">Stack</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/valid-parentheses.html">Valid Parentheses</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/generate-parentheses.html">Generate Parentheses</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/min-stack.html">Min Stack</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/evaluate-reverse-polish-notation.html">Evaluate Reverse Polish Notation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/daily-temperatures.html">Daily Temperatures</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/car-fleet.html">Car Fleet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="stack/largest-rectangle-in-histogram.html">Largest Rectangle in Histogram</a></span></li><li class="chapter-item "><li class="part-title">Binary Search</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/binary-search.html">Binary Search</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/search-a-2d-matrix.html">Search a 2D Matrix</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/koko-eating-bananas.html">Koko Eating Bananas</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/find-minimum-in-rotated-sorted-array.html">Find Minimum in Rotated Sorted Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/search-in-rotated-sorted-array.html">Search in Rotated Sorted Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/time-based-key-value-store.html">Time Based Key-Value Store</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="binary-search/median-of-two-sorted-arrays.html">Median of Two Sorted Arrays</a></span></li><li class="chapter-item "><li class="part-title">Linked List</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/reverse-linked-list.html">Reverse Linked List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/merge-two-sorted-lists.html">Merge Two Sorted Lists</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/linked-list-cycle.html">Linked List Cycle</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/reorder-list.html">Reorder List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/remove-nth-node-from-end-of-list.html">Remove Nth Node From End of List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/copy-list-with-random-pointer.html">Copy List with Random Pointer</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/lru-cache.html">LRU Cache</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/add-two-numbers.html">Add Two Numbers</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/find-the-duplicate-number.html">Find the Duplicate Number</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/merge-k-sorted-lists.html">Merge k Sorted Lists</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="linked-list/reverse-nodes-in-k-group.html">Reverse Nodes in k-Group</a></span></li><li class="chapter-item "><li class="part-title">Trees</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/invert-binary-tree.html">Invert Binary Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/maximum-depth-of-binary-tree.html">Maximum Depth of Binary Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/same-tree.html">Same Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/subtree-of-another-tree.html">Subtree of Another Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/lowest-common-ancestor-of-a-bst.html">Lowest Common Ancestor of a BST</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/binary-tree-level-order-traversal.html">Binary Tree Level Order Traversal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/binary-tree-right-side-view.html">Binary Tree Right Side View</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/count-good-nodes-in-binary-tree.html">Count Good Nodes in Binary Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/balanced-binary-tree.html">Balanced Binary Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/diameter-of-binary-tree.html">Diameter of Binary Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/validate-binary-search-tree.html">Validate Binary Search Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/kth-smallest-element-in-a-bst.html">Kth Smallest Element in a BST</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/construct-binary-tree-from-preorder-and-inorder.html">Construct Binary Tree from Preorder and Inorder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/binary-tree-maximum-path-sum.html">Binary Tree Maximum Path Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trees/serialize-and-deserialize-binary-tree.html">Serialize and Deserialize Binary Tree</a></span></li><li class="chapter-item "><li class="part-title">Trie</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trie/implement-trie-prefix-tree.html">Implement Trie (Prefix Tree)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trie/design-add-and-search-words.html">Design Add and Search Words</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="trie/word-search-ii.html">Word Search II</a></span></li><li class="chapter-item "><li class="part-title">Heap</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="heap/kth-largest-element-in-a-stream.html">Kth Largest Element in a Stream</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="heap/last-stone-weight.html">Last Stone Weight</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="heap/k-closest-points-to-origin.html">K Closest Points to Origin</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="heap/kth-largest-element-in-an-array.html">Kth Largest Element in an Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="heap/find-median-from-data-stream.html">Find Median from Data Stream</a></span></li><li class="chapter-item "><li class="part-title">Backtracking</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/subsets.html">Subsets</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/combination-sum.html">Combination Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/permutations.html">Permutations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/subsets-ii.html">Subsets II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/word-search.html">Word Search</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/palindrome-partitioning.html">Palindrome Partitioning</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/letter-combinations-of-a-phone-number.html">Letter Combinations of a Phone Number</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="backtracking/n-queens.html">N-Queens</a></span></li><li class="chapter-item "><li class="part-title">Graphs</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/number-of-islands.html">Number of Islands</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/clone-graph.html">Clone Graph</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/course-schedule.html">Course Schedule</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/course-schedule-ii.html">Course Schedule II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/pacific-atlantic-water-flow.html">Pacific Atlantic Water Flow</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/number-of-connected-components.html">Number of Connected Components</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/redundant-connection.html">Redundant Connection</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/rotting-oranges.html">Rotting Oranges</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/walls-and-gates.html">Walls and Gates</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/graph-valid-tree.html">Graph Valid Tree</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/word-ladder.html">Word Ladder</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="graphs/surrounded-regions.html">Surrounded Regions</a></span></li><li class="chapter-item "><li class="part-title">Advanced Graphs</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/network-delay-time.html">Network Delay Time</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/cheapest-flights-within-k-stops.html">Cheapest Flights Within K Stops</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/min-cost-to-connect-all-points.html">Min Cost to Connect All Points</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/swim-in-rising-water.html">Swim in Rising Water</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/alien-dictionary.html">Alien Dictionary</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="advanced-graphs/reconstruct-itinerary.html">Reconstruct Itinerary</a></span></li><li class="chapter-item "><li class="part-title">Dynamic Programming</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/climbing-stairs.html">Climbing Stairs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/min-cost-climbing-stairs.html">Min Cost Climbing Stairs</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/house-robber.html">House Robber</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/house-robber-ii.html">House Robber II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/longest-palindromic-substring.html">Longest Palindromic Substring</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/palindromic-substrings.html">Palindromic Substrings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/decode-ways.html">Decode Ways</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/coin-change.html">Coin Change</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/word-break.html">Word Break</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/partition-equal-subset-sum.html">Partition Equal Subset Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/longest-increasing-subsequence.html">Longest Increasing Subsequence</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/unique-paths.html">Unique Paths</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp/longest-common-subsequence.html">Longest Common Subsequence</a></span></li><li class="chapter-item "><li class="part-title">2-D Dynamic Programming</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/best-time-to-buy-and-sell-stock-with-cooldown.html">Best Time to Buy and Sell Stock with Cooldown</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/coin-change-ii.html">Coin Change II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/target-sum.html">Target Sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/interleaving-string.html">Interleaving String</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/edit-distance.html">Edit Distance</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="dp2/distinct-subsequences.html">Distinct Subsequences</a></span></li><li class="chapter-item "><li class="part-title">Greedy</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/maximum-subarray.html">Maximum Subarray</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/jump-game.html">Jump Game</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/jump-game-ii.html">Jump Game II</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/gas-station.html">Gas Station</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/hand-of-straights.html">Hand of Straights</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/merge-triplets-to-form-target-triplet.html">Merge Triplets to Form Target Triplet</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/partition-labels.html">Partition Labels</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="greedy/task-scheduler.html">Task Scheduler</a></span></li><li class="chapter-item "><li class="part-title">Intervals</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intervals/insert-interval.html">Insert Interval</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intervals/merge-intervals.html">Merge Intervals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intervals/non-overlapping-intervals.html">Non-overlapping Intervals</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intervals/meeting-rooms.html">Meeting Rooms</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="intervals/meeting-rooms-ii.html">Meeting Rooms II</a></span></li><li class="chapter-item "><li class="part-title">Math &amp; Geometry</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/rotate-image.html">Rotate Image</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/spiral-matrix.html">Spiral Matrix</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/set-matrix-zeroes.html">Set Matrix Zeroes</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/happy-number.html">Happy Number</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/plus-one.html">Plus One</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/powx-n.html">Pow(x, n)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/multiply-strings.html">Multiply Strings</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="math-geometry/detect-squares.html">Detect Squares</a></span></li><li class="chapter-item "><li class="part-title">Bit Manipulation</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/single-number.html">Single Number</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/number-of-1-bits.html">Number of 1 Bits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/counting-bits.html">Counting Bits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/reverse-bits.html">Reverse Bits</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/missing-number.html">Missing Number</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="bit-manipulation/sum-of-two-integers.html">Sum of Two Integers</a></span></li><li class="chapter-item "><li class="part-title">System Design</li></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/metodo.html">Method</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/encurtador-url.html">URL Shortener</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/rate-limiter.html">Rate Limiter</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/chat-whatsapp.html">Chat / WhatsApp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="system-design/news-feed.html">News Feed</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

