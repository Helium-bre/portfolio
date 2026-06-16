/**
 * Home page renderer
 * ==================
 * Fills the placeholder containers in index.html from window.PORTFOLIO:
 * hero, about, experience, education, achievements and contact.
 * (The research page is rendered separately by research.js.)
 */
(function () {
  "use strict";

  var U = window.Portfolio.util;

  function renderProfile(p) {
    if (!p) return;

    var hero = U.byId("hero");
    if (hero) {
      var actions = [
        '<a class="button button--primary" href="research.html">View research' +
          window.Icons.svg("arrow", "icon--sm") +
          "</a>",
        '<a class="button button--ghost" href="#contact">Get in touch</a>',
      ];
      if (p.resumeUrl)
        actions.push(
          '<a class="button button--ghost" href="' +
            U.escape(p.resumeUrl) +
            '" target="_blank" rel="noopener">Resume</a>'
        );

      var media = p.avatar
        ? '<img class="avatar" src="' +
          U.escape(p.avatar) +
          '" alt="Portrait of ' +
          U.escape(p.name) +
          '" width="176" height="176">'
        : '<div class="avatar avatar--initials" aria-hidden="true">' +
          U.escape(U.initials(p.name)) +
          "</div>";

      hero.innerHTML =
        '<div class="hero__intro">' +
        '<h1 class="hero__title">' +
        U.escape(p.name) +
        "</h1>" +
        (p.title ? '<p class="hero__role">' + U.escape(p.title) + "</p>" : "") +
        (p.tagline
          ? '<p class="hero__tagline">' + U.escape(p.tagline) + "</p>"
          : "") +
        '<div class="hero__actions">' +
        actions.join("") +
        "</div>" +
        "</div>" +
        '<div class="hero__media">' +
        media +
        "</div>";
    }

    var about = U.byId("about-prose");
    if (about && p.about && p.about.length) {
      about.innerHTML = p.about
        .map(function (para) {
          return "<p>" + U.escape(para) + "</p>";
        })
        .join("");
    } else {
      U.toggleSection(about, false);
    }
  }

  function renderTimeline(containerId, items, titleKey, orgKey) {
    var container = U.byId(containerId);
    U.toggleSection(container, items && items.length);
    if (!container || !items || !items.length) return;

    container.innerHTML = items
      .map(function (item) {
        var meta = [item[orgKey], item.location].filter(Boolean);
        var highlights =
          item.highlights && item.highlights.length
            ? '<ul class="timeline__highlights">' +
              item.highlights
                .map(function (h) {
                  return "<li>" + U.escape(h) + "</li>";
                })
                .join("") +
              "</ul>"
            : "";
        return (
          '<article class="timeline__item">' +
          '<div class="timeline__period">' +
          U.periodText(item.start, item.end) +
          "</div>" +
          '<div class="timeline__body">' +
          '<h3 class="timeline__title">' +
          U.escape(item[titleKey]) +
          "</h3>" +
          '<p class="timeline__meta"><span class="timeline__org">' +
          U.escape(meta[0] || "") +
          "</span>" +
          (meta[1] ? " · " + U.escape(meta[1]) : "") +
          "</p>" +
          (item.summary
            ? '<p class="timeline__summary">' + U.escape(item.summary) + "</p>"
            : "") +
          highlights +
          U.tagsMarkup(item.tags) +
          "</div>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderAchievements(items) {
    var container = U.byId("achievements-grid");
    U.toggleSection(container, items && items.length);
    if (!container || !items || !items.length) return;

    container.innerHTML = items
      .map(function (a) {
        var meta = [a.issuer, a.date].filter(Boolean);
        return (
          '<article class="card">' +
          (meta.length
            ? '<div class="card__meta">' +
              meta
                .map(function (m) {
                  return "<span>" + U.escape(m) + "</span>";
                })
                .join("") +
              "</div>"
            : "") +
          '<h3 class="card__title">' +
          U.escape(a.title) +
          "</h3>" +
          (a.description
            ? '<p class="card__text">' + U.escape(a.description) + "</p>"
            : "") +
          (a.link && a.link.url
            ? '<div class="card__links">' + U.linkMarkup(a.link) + "</div>"
            : "") +
          "</article>"
        );
      })
      .join("");
  }

  function renderContact(p) {
    var container = U.byId("contact-socials");
    if (!container || !p) return;

    var links = [];
    if (p.email)
      links.push({ label: p.email, url: "mailto:" + p.email, icon: "email" });
    (p.socials || []).forEach(function (s) {
      if (s.url) links.push(s);
    });

    container.innerHTML = links
      .map(function (s) {
        return (
          '<a class="social-list__link" href="' +
          U.escape(s.url) +
          '"' +
          (s.url.indexOf("mailto:") === 0
            ? ""
            : ' target="_blank" rel="noopener"') +
          ">" +
          window.Icons.svg(s.icon || "link") +
          "<span>" +
          U.escape(s.label) +
          "</span></a>"
        );
      })
      .join("");
  }

  function render() {
    var data = window.PORTFOLIO;
    if (!data) {
      console.error("[render] window.PORTFOLIO is not defined.");
      return;
    }
    renderProfile(data.profile);
    renderTimeline("experience-list", data.experience, "role", "organization");
    renderTimeline("education-list", data.education, "degree", "institution");
    renderAchievements(data.achievements);
    renderContact(data.profile);
  }

  window.Portfolio = window.Portfolio || {};
  window.Portfolio.render = render;
})();
