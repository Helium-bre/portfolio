/**
 * Research page renderer
 * ======================
 * Builds research.html from window.PORTFOLIO.research: a lab intro followed by
 * one section per project, each with a text write-up and a media gallery
 * (images, hosted videos, or embedded videos).
 */
(function () {
  "use strict";

  var U = window.Portfolio.util;

  function slugFor(project, index) {
    return project.slug || U.slugify(project.title) || "project-" + (index + 1);
  }

  /** One <figure> for an image / video / embed media item. */
  function figureMarkup(m) {
    if (!m || !m.src) return "";
    var caption = m.caption
      ? "<figcaption>" + U.escape(m.caption) + "</figcaption>"
      : "";

    if (m.type === "video") {
      return (
        '<figure class="media"><video controls preload="metadata" playsinline' +
        (m.poster ? ' poster="' + U.escape(m.poster) + '"' : "") +
        '><source src="' +
        U.escape(m.src) +
        '" type="video/mp4">Your browser does not support embedded video.</video>' +
        caption +
        "</figure>"
      );
    }

    if (m.type === "embed") {
      return (
        '<figure class="media media--embed"><div class="embed"><iframe src="' +
        U.escape(m.src) +
        '" title="' +
        U.escape(m.caption || "Embedded video") +
        '" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>' +
        caption +
        "</figure>"
      );
    }

    // Default: image
    return (
      '<figure class="media"><img src="' +
      U.escape(m.src) +
      '" alt="' +
      U.escape(m.caption || "") +
      '" loading="lazy">' +
      caption +
      "</figure>"
    );
  }

  function mediaGrid(media) {
    if (!media || !media.length) return "";
    var figures = media.map(figureMarkup).filter(Boolean).join("");
    return figures ? '<div class="media-grid">' + figures + "</div>" : "";
  }

  function projectLinks(links) {
    if (!links || !links.length) return "";
    var items = links
      .map(function (l) {
        return U.linkMarkup(l, "card__link");
      })
      .filter(Boolean)
      .join("");
    return items
      ? '<div class="card__links project__links">' + items + "</div>"
      : "";
  }

  function projectSection(project, index) {
    var slug = slugFor(project, index);
    var body = (project.body || [])
      .map(function (para) {
        return "<p>" + U.escape(para) + "</p>";
      })
      .join("");

    return (
      '<section class="section project" id="' +
      U.escape(slug) +
      '">' +
      '<div class="container">' +
      '<header class="section__header project__header">' +
      (project.period
        ? '<p class="project__period">' + U.escape(project.period) + "</p>"
        : "") +
      "<h2>" +
      U.escape(project.title) +
      "</h2>" +
      (project.role
        ? '<p class="project__role">' + U.escape(project.role) + "</p>"
        : "") +
      "</header>" +
      '<div class="prose project__body">' +
      (project.summary
        ? '<p class="project__summary">' + U.escape(project.summary) + "</p>"
        : "") +
      body +
      "</div>" +
      U.tagsMarkup(project.tags) +
      mediaGrid(project.media) +
      projectLinks(project.links) +
      "</div>" +
      "</section>"
    );
  }

  function tableOfContents(projects) {
    if (!projects || projects.length < 2) return "";
    var links = projects
      .map(function (p, i) {
        return (
          '<a href="#' +
          U.escape(slugFor(p, i)) +
          '">' +
          U.escape(p.title) +
          "</a>"
        );
      })
      .join("");
    return '<nav class="research-toc" aria-label="Projects">' + links + "</nav>";
  }

  function renderResearchPage() {
    var root = document.getElementById("research-page");
    if (!root) return;

    var data = (window.PORTFOLIO || {}).research;
    if (!data) {
      root.innerHTML =
        '<section class="container research-hero"><h1>Research</h1>' +
        "<p>No research added yet.</p></section>";
      return;
    }

    var projects = data.projects || [];
    var intro = (data.intro || [])
      .map(function (para) {
        return "<p>" + U.escape(para) + "</p>";
      })
      .join("");
    var meta = [data.lab, data.period].filter(Boolean).map(U.escape).join(" · ");

    var hero =
      '<section class="container research-hero">' +
      '<span class="section__eyebrow">Research</span>' +
      "<h1>Research</h1>" +
      (meta ? '<p class="research-hero__meta">' + meta + "</p>" : "") +
      (intro ? '<div class="prose">' + intro + "</div>" : "") +
      tableOfContents(projects) +
      "</section>";

    var sections = projects
      .map(function (p, i) {
        return projectSection(p, i);
      })
      .join("");

    root.innerHTML = hero + sections;
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.renderResearchPage = renderResearchPage;
})();
