/* ==========================================================================
   Bier, Schlamm & Glitzer – geteilte Site-Navigation (Verhalten)
   Hamburger-Menü (mobil) + Empfehlungen-Dropdown. Keine Abhängigkeiten.
   ========================================================================== */
(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(function () {
    var toggle = document.getElementById('bsgNavToggle');
    var nav = document.getElementById('bsgNav');
    var dropdown = document.getElementById('bsgDropdown');
    var caret = document.getElementById('bsgDropdownCaret');

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    if (dropdown && caret) {
      caret.addEventListener('click', function (e) {
        e.preventDefault();
        var isOpen = dropdown.classList.toggle('open');
        caret.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    document.addEventListener('click', function (e) {
      if (dropdown && caret && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        caret.setAttribute('aria-expanded', 'false');
      }
      if (nav && toggle && !nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (dropdown && caret) {
        dropdown.classList.remove('open');
        caret.setAttribute('aria-expanded', 'false');
      }
      if (nav && toggle) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
