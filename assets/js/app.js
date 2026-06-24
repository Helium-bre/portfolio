/**
 * App entry point
 * ===============
 * Runs once the DOM is ready (scripts use `defer`, so the other modules are
 * already defined). It injects the shared layout, renders the correct page
 * based on <body data-page="...">, then wires up the UI behaviors.
 */
(function () {
  "use strict";

  function start() {
    var P = window.Portfolio || {};

    try {
      if (P.layout) P.layout.build();
    } catch (e) {
      console.error("[app] layout failed:", e);
    }

    var page = document.body.getAttribute("data-page") || "home";
    try {
      if (page === "research" && P.renderResearchPage) P.renderResearchPage();
      else if (page === "projects" && P.renderProjectsPage)
        P.renderProjectsPage();
      else if (P.render) P.render();
    } catch (e) {
      console.error("[app] render failed:", e);
    }

    try {
      if (P.initUI) P.initUI();
    } catch (e) {
      console.error("[app] UI init failed:", e);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
