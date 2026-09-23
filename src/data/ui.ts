export const ui = {
  meta: {
    title: "Salman Thoriq Al Farisyi — Software Engineer",
    description: "What I learn, what I think, and what I believe.",
  },
  navigation: {
    label: "Navigation",
    homeLabel: "Homepage",
    links: [
      { label: "Experience", path: "/experience" },
      { label: "Projects", path: "/projects" },
      { label: "Notes", path: "/writing" },
    ],
  },
  actions: {
    scrollToTop: "Back to top",
  },
  home: {
    praIdentity: "I'm",
    identity: "Salman Thoriq Al Farisyi",
    intro:
      "A quiet little corner for thoughts, stories, and reflections — where I can pause, look back, and keep growing slowly.",
    scroll: "Come in",
    kicker: "It all start here",
    headingEmphasis: "Things I’ve done,",
    headingRest: "built, and learned",
    sectionIntro:
      "A record of the places I’ve worked, things I’ve built, and notes I’ve kept along the way.",
    experiencePreview: {
      title: "Where I’ve worked",
      intro:
        "A timeline of the roles, teams, and work I’ve been part of.",
      cta: "View experience",
      ariaLabel: "Salman Thoriq's work journey",
    },
    projectPreview: {
      title: "What I built and improved",
      intro:
        "Some of the things I’ve built, both for work and out of curiosity.",
      cta: "View projects",
      ariaLabel: "Projects by Salman Thoriq",
    },
    writingPreview: {
      title: "What I am thinking about",
      intro:
        "Notes on things I’ve learned, noticed, questioned, or simply wanted to remember. ",
      cta: "Read my notes",
      ariaLabel: "Latest writing by Salman Thoriq",
      empty: "The first note is being prepared.",
      emptyMark: "00",
    },
    sections: ["Experience", "Projects", "Notes"],
  },
  writing: {
    meta: {
      title: "Notes — Salman Thoriq",
      description:
        "Things I’ve learned, noticed, questioned, and written down along the way.",
    },
    hero: {
      emphasis: "Things",
      title: "I write down",
      intro:
        "Some are thoughts. Some are stories, poems, questions, or things I believe in. Some may change with time.",
      count: "All notes",
    },
    topics: {
      label: "Topics",
      title: "Find something to read",
      intro:
        "Everything here is loosely organized, just enough to make things easier to find again.",
      empty:
        "Topics will appear here as I add more notes.",
      article: "notes",
      childLabel: "More topics",
    },
    featured: {
      label: "A Few I Keep Close",
      title: "Notes I keep coming back to",
      intro:
        "Some because they still feel true. Some because they remind me of who I was when I wrote",
    },
    latest: {
      label: "ALL NOTES",
      title: "Recently written",
      intro:
        "The latest things I’ve left here—thoughts, stories, poems, questions, and whatever else needed a place to stay.",
      emptyTitle: "Nothing here yet.",
      emptyBody:
        "The first note will appear here when I have something to share.",
    },
    article: {
      back: "Back to notes",
      published: "Published",
      updated: "Updated",
      topics: "Topics",
      contents: "On this page",
      relatedLabel: "More to read",
      relatedTitle: "From the same topic",
    },
    topic: {
      back: "All notes",
      intro:
        "Everything I’ve put under this topic, including notes from the topics inside it.",
    },
  },
  footer: {
    basedIn: "Based in",
    contact: "Contact",
    resume: "Résumé",
    downloadResume: "Download résumé",
    elsewhere: "Elsewhere",
    archive: "Built and written by Salman Thoriq Al Farisyi",
    contactWord: "Connect",
    emailLabel: "Send me an email",
  },
  notFound: {
    meta: {
      title: "Page not found — Salman Thoriq",
      description: "This page couldn’t be found.",
    },
    code: "404",
    title: "Looks like this page isn’t here.",
    description:
      "The link may be outdated, the address may have changed, or there may simply be nothing here yet.",
    homeCta: "Back to home",
  },
} as const;
