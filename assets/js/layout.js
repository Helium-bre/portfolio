/**
 * Shared layout (header + footer)
 * ===============================
 * The site's header and footer are defined ONCE here and injected into the
 * [data-site-header] / [data-site-footer] placeholders on every page, so the
 * navigation never drifts out of sync between index.html and research.html.
 *
 * To add a page to the nav, add an entry to NAV below.
 */
(function () {
  "use strict";

  // Nav items. Use "hash" for sections of the home page, or "page" for a
  // separate page. The active page is derived from <body data-page="...">.
  var NAV = [
    { label: "About", hash: "#about" },
    { label: "Experience", hash: "#experience" },
    { label: "Education", hash: "#education" },
    { label: "Achievements", hash: "#achievements" },
    { label: "Research", page: "research.html" },
    { label: "Contact", hash: "#contact" },
  ];

  function currentPage() {
    return document.body.getAttribute("data-page") || "home";
  }

  // From another page, hash links must point back to the home page.
  function hrefFor(item, page) {
    if (item.page) return item.page;
    return page === "home" ? item.hash : "index.html" + item.hash;
  }

  function isActive(item, page) {
    return !!item.page && page === "research" && item.page.indexOf("research") === 0;
  }

  function buildHeader(profile, page) {
    var esc = window.Portfolio.util.escape;
    var links = NAV.map(function (item) {
      var cls = "nav__link" + (isActive(item, page) ? " is-active" : "");
      return (
        '<li><a class="' +
        cls +
        '" href="' +
        hrefFor(item, page) +
        '">' +
        esc(item.label) +
        "</a></li>"
      );
    }).join("");

    return (
      '<div class="container site-header__inner">' +
      '<a class="brand" href="' +
      (page === "home" ? "#" : "index.html") +
      '">' +
      esc((profile && profile.name) || "Portfolio") +
      "</a>" +
      '<nav class="nav" id="primary-nav" aria-label="Primary">' +
      '<ul class="nav__list">' +
      links +
      "</ul>" +
      '<div class="nav__controls">' +
      '<button class="icon-button theme-toggle" type="button" aria-label="Toggle dark mode">' +
      window.Icons.svg("sun", "icon-sun") +
      window.Icons.svg("moon", "icon-moon") +
      "</button>" +
      "</div>" +
      "</nav>" +
      '<button class="icon-button nav-toggle" type="button" aria-label="Toggle menu" aria-controls="primary-nav" aria-expanded="false">' +
      window.Icons.svg("menu") +
      "</button>" +
      "</div>"
    );
  }

  function buildFooter(profile) {
    var esc = window.Portfolio.util.escape;
    var year = new Date().getFullYear();
    return (
      '<div class="container site-footer__inner">' +
      "<span>&copy; " +
      year +
      " " +
      esc((profile && profile.name) || "") +
      "</span>" +
      "<span>Built with plain HTML, CSS &amp; JavaScript.</span>" +
      "</div>"
    );
  }

  function build() {
    var profile = (window.PORTFOLIO || {}).profile;
    var page = currentPage();
    var header = document.querySelector("[data-site-header]");
    var footer = document.querySelector("[data-site-footer]");
    if (header) header.innerHTML = buildHeader(profile, page);
    if (footer) footer.innerHTML = buildFooter(profile);
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.layout = { build: build };
})();
