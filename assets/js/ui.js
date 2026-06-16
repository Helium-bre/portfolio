/**
 * UI behaviors
 * ============
 * Theme (light/dark) toggle, mobile navigation menu, and scroll-spy that
 * highlights the nav link of the section currently in view. None of this is
 * required for the content to render — it just adds polish.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-theme";

  /* ---- Theme ----------------------------------------------------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  function storedTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function initTheme() {
    var prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(storedTheme() || (prefersDark ? "dark" : "light"));

    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (e) {
        /* storage may be unavailable; ignore */
      }
    });
  }

  /* ---- Mobile navigation ----------------------------------------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    }

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    // Close the menu after following a link.
    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) setOpen(false);
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
  }

  /* ---- Scroll-spy ------------------------------------------------ */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll(".nav__link[href^='#']")
    );
    if (!links.length || !("IntersectionObserver" in window)) return;

    var byId = {};
    var sections = [];
    links.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) {
        byId[id] = link;
        sections.push(section);
      }
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.remove("is-active");
          });
          var active = byId[entry.target.id];
          if (active) active.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  function init() {
    initTheme();
    initNav();
    initScrollSpy();
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.initUI = init;
})();
