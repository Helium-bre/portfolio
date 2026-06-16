/**
 * Shared utilities
 * ================
 * Small helpers used by both the home renderer (render.js) and the research
 * page renderer (research.js). Exposed as window.Portfolio.util.
 */
(function () {
  "use strict";

  function escape(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  /** URL-friendly slug from a title, e.g. "My Project!" -> "my-project". */
  function slugify(text) {
    return String(text || "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function byId(id) {
    var node = document.getElementById(id);
    if (!node) console.warn("[util] missing #" + id);
    return node;
  }

  /** Show/hide the .section that owns a container, based on its content. */
  function toggleSection(container, hasContent) {
    if (!container) return;
    var section = container.closest(".section");
    if (section) section.hidden = !hasContent;
  }

  function initials(name) {
    if (!name) return "·";
    return name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(function (w) {
        return w.charAt(0).toUpperCase();
      })
      .join("");
  }

  function periodText(start, end) {
    return [start, end].filter(Boolean).map(escape).join(" – ");
  }

  function tagsMarkup(tags) {
    if (!tags || !tags.length) return "";
    return (
      '<ul class="tags">' +
      tags
        .map(function (t) {
          return '<li class="tag">' + escape(t) + "</li>";
        })
        .join("") +
      "</ul>"
    );
  }

  /** External link button; returns "" when the url is empty. */
  function linkMarkup(link, className) {
    if (!link || !link.url) return "";
    return (
      '<a class="' +
      (className || "card__link") +
      '" href="' +
      escape(link.url) +
      '" target="_blank" rel="noopener">' +
      escape(link.label || "Link") +
      window.Icons.svg("link", "icon--sm") +
      "</a>"
    );
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.util = {
    escape: escape,
    slugify: slugify,
    byId: byId,
    toggleSection: toggleSection,
    initials: initials,
    periodText: periodText,
    tagsMarkup: tagsMarkup,
    linkMarkup: linkMarkup,
  };
})();
