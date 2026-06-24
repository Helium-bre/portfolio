/**
 * Site content
 * =============
 * This is the ONLY file you need to edit to update the website's content.
 * It is plain data — no HTML required. The renderer (assets/js/render.js)
 * turns each entry below into the matching section on the page.
 *
 * Tips:
 *   - To add an item to any list, copy an existing entry and edit it.
 *   - Leave a field as an empty string "" or an empty list [] to hide it.
 *   - Dates are free-form text ("2021", "Jan 2024", "Present") so you can
 *     format them however you like.
 */
window.PORTFOLIO = {
  /* ---------------------------------------------------------------- */
  /* Basic info, shown in the header, hero and contact sections.      */
  /* ---------------------------------------------------------------- */
  profile: {
    name: "Your Name",
    // Short professional title shown under your name.
    title: "Researcher · Engineer",
    // One-line tagline for the hero section.
    tagline: "I build things and study how they work.",
    // A few sentences about you. Each string is its own paragraph.
    about: [
      "Write a short introduction here. Describe who you are, what you work on, and what you care about.",
      "Add a second paragraph if you like — for example your current focus, research interests, or what you are looking for.",
    ],
    location: "City, Country",
    email: "you@example.com",
    // Path to your photo. Put the file in assets/images/profile/.
    // Leave as "" to show your initials instead.
    avatar: "",
    // Optional resume/CV. Put the file in assets/files/ and point to it.
    // Leave as "" to hide the button.
    resumeUrl: "",
    // Links shown in the header footer and contact section.
    // "icon" must match a key in assets/js/icons.js (github, linkedin,
    // scholar, orcid, email, link, twitter).
    socials: [
      { label: "GitHub", url: "https://github.com/yourusername", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/yourusername", icon: "linkedin" },
      { label: "Google Scholar", url: "", icon: "scholar" },
      { label: "ORCID", url: "", icon: "orcid" },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Career / work experience. Most recent first.                      */
  /* ---------------------------------------------------------------- */
  experience: [
    {
      role: "Job Title",
      organization: "Company or Lab",
      location: "City, Country",
      start: "2023",
      end: "Present",
      summary: "One sentence on your role and what the team does.",
      highlights: [
        "A concrete accomplishment, ideally with a measurable result.",
        "Another responsibility or achievement.",
      ],
      tags: ["Skill", "Tool", "Domain"],
    },
    {
      role: "Previous Job Title",
      organization: "Previous Company",
      location: "City, Country",
      start: "2020",
      end: "2023",
      summary: "What you did here.",
      highlights: ["Notable accomplishment."],
      tags: ["Skill", "Tool"],
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Education. Most recent first.                                     */
  /* ---------------------------------------------------------------- */
  education: [
    {
      degree: "Ph.D. / M.Sc. / B.Sc. in Field",
      institution: "University Name",
      location: "City, Country",
      start: "2016",
      end: "2020",
      summary: "Thesis title, specialization, or honors.",
      highlights: ["Relevant coursework, distinction, or activity."],
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Achievements: awards, honors, certifications, publications, etc.  */
  /* ---------------------------------------------------------------- */
  achievements: [
    {
      title: "Award or Honor",
      issuer: "Awarding Body",
      date: "2024",
      description: "One line on why it was given or what it recognizes.",
    },
    {
      title: "Certification or Publication",
      issuer: "Issuer or Venue",
      date: "2023",
      description: "Short description. Add a link below if relevant.",
      // Optional link, shown as a button on the card.
      link: { label: "View", url: "" },
    },
  ],

  /* ---------------------------------------------------------------- */
  /* Research. Populates the dedicated research.html page.             */
  /* It describes your time in a lab and the different projects you    */
  /* worked on, each with its own images and/or videos.                */
  /* ---------------------------------------------------------------- */
  research: {
    // Lab / group and the period you were there (shown under the title).
    lab: "Lab or Research Group, University",
    period: "2018 – 2021",
    // Intro paragraphs at the top of the page. Each string is a paragraph.
    intro: [
      "Describe your overall role in the lab: what the group works on, how you contributed, and what you took from the experience.",
      "Most of my work supported other researchers across the projects below.",
    ],
    // One entry per project. They render top to bottom on the page.
    projects: [
      {
        // "slug" gives the section a stable #anchor (research.html#project-one).
        // Omit it to auto-generate one from the title.
        slug: "project-one",
        title: "Project One",
        role: "Research Assistant — supporting Dr. Researcher",
        period: "2019 – 2020",
        // One-line summary, shown emphasized at the top of the project.
        summary: "A sentence summarising the project and your contribution.",
        // Longer write-up. Each string is its own paragraph.
        body: [
          "Explain the project: the research question, what the team was building, and specifically what you did to help.",
          "Add as many paragraphs as you need.",
        ],
        tags: ["Topic", "Method", "Tool"],
        // Images and videos shown in a gallery under the text.
        // type is one of:
        //   "image" — a picture in assets/images/projects/
        //   "video" — a video file you host in assets/videos/
        //   "embed" — a YouTube/Vimeo *embed* URL (…/embed/VIDEO_ID)
        media: [
          {
            type: "image",
            src: "assets/images/projects/example.jpg",
            caption: "Caption describing the figure.",
          },
          {
            type: "video",
            src: "assets/videos/demo.mp4",
            poster: "", // optional still shown before playback
            caption: "A short demo video.",
          },
          {
            type: "embed",
            src: "https://www.youtube.com/embed/VIDEO_ID",
            caption: "An embedded video.",
          },
        ],
        // Optional related links (paper, code, dataset...).
        links: [
          { label: "Paper", url: "" },
          { label: "Code", url: "" },
        ],
      },
      {
        slug: "project-two",
        title: "Project Two",
        role: "Research Assistant",
        period: "2020 – 2021",
        summary: "What this project was about.",
        body: ["Describe this project here."],
        tags: ["Topic"],
        media: [
          {
            type: "image",
            src: "assets/images/projects/example2.jpg",
            caption: "",
          },
        ],
        links: [],
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  /* Projects. Populates the dedicated projects.html page.            */
  /* A showcase of things you have built, each with its own images    */
  /* and/or videos. Structured like the research page above.          */
  /* ---------------------------------------------------------------- */
  projects: {
    // Intro paragraphs at the top of the page. Each string is a paragraph.
    intro: [
      "A selection of projects I have designed and built. Each one links to its code, a demo, or a write-up where available.",
    ],
    // One entry per project. They render top to bottom on the page.
    items: [
      {
        // "slug" gives the section a stable #anchor (projects.html#my-project).
        // Omit it to auto-generate one from the title.
        slug: "my-project",
        title: "My Project",
        // Optional one-line role/subtitle shown under the title.
        role: "Solo project · Web app",
        // Optional date or date range.
        period: "2024",
        // One-line summary, shown emphasized at the top of the project.
        summary: "A sentence summarising what this project is and why it matters.",
        // Longer write-up. Each string is its own paragraph.
        body: [
          "Explain the project: the problem it solves, how you built it, and the interesting technical decisions along the way.",
          "Add as many paragraphs as you need.",
        ],
        tags: ["Tech", "Tool", "Domain"],
        // Images and videos shown in a gallery under the text.
        // type is one of:
        //   "image" — a picture in assets/images/projects/
        //   "video" — a video file you host in assets/videos/
        //   "embed" — a YouTube/Vimeo *embed* URL (…/embed/VIDEO_ID)
        media: [
          {
            type: "image",
            src: "assets/images/projects/example.jpg",
            caption: "Caption describing the screenshot or figure.",
          },
          {
            type: "video",
            src: "assets/videos/demo.mp4",
            poster: "", // optional still shown before playback
            caption: "A short demo video.",
          },
          {
            type: "embed",
            src: "https://www.youtube.com/embed/VIDEO_ID",
            caption: "An embedded video.",
          },
        ],
        // Optional related links (live demo, code, write-up...).
        links: [
          { label: "Live demo", url: "" },
          { label: "Code", url: "" },
        ],
      },
      {
        slug: "another-project",
        title: "Another Project",
        role: "Team of 3",
        period: "2023",
        summary: "What this project was about.",
        body: ["Describe this project here."],
        tags: ["Tech"],
        media: [
          {
            type: "image",
            src: "assets/images/projects/example2.jpg",
            caption: "",
          },
        ],
        links: [],
      },
    ],
  },
};
