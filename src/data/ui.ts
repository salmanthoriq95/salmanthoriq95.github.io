export const ui = {
  meta: {
    title: "Salman Thoriq — Software Engineer",
    description: "What I learn, think about, and believe.",
  },
  navigation: {
    label: "Main navigation",
    homeLabel: "Salman Thoriq, homepage",
    links: [
      { label: "Journey", path: "/experience" },
      { label: "Projects", path: "/projects" },
      { label: "Thoughts", path: "/writing" },
    ],
  },
  actions: {
    scrollToTop: "Back to top",
  },
  home: {
    praIdentity: "I'm",
    identity: "Salman Thoriq Al Farisyi",
    intro: "A little box for thoughts that keep growing along the way.",
    scroll: "Walk With Me",
    kicker: "It all start here",
    headingEmphasis: "Where",
    headingRest: "I Grow",
    sectionIntro:
      "Nothing is ever wasted. Every part of the story has shaped who I am today: the places where I learned and grew, the things I built, and the notes I kept along the way.",
    experiencePreview: {
      title: "Places that shaped me",
      intro:
        "This timeline comes directly from my experience archive and will keep growing with each chapter ahead.",
      cta: "Read the full experience",
      ariaLabel: "Salman Thoriq's work journey",
    },
    projectPreview: {
      title: "What I built and improved",
      intro:
        "Products and systems I have built from scratch, developed, maintained, or helped understand as part of an existing system.",
      cta: "Explore all projects",
      ariaLabel: "Projects by Salman Thoriq",
    },
    writingPreview: {
      title: "What I am thinking about",
      intro:
        "The latest writing comes directly from the publish archive and is organized automatically by its folder topics.",
      cta: "Explore all writing",
      ariaLabel: "Latest writing by Salman Thoriq",
      empty: "The first article is being prepared.",
      emptyMark: "03",
    },
    sections: ["Experience", "Projects", "Writing"],
  },
  writing: {
    meta: {
      title: "Writing — Salman Thoriq",
      description:
        "Notes by Salman Thoriq on programming, problem-solving, and things learned along the way.",
    },
    hero: {
      emphasis: "Notes",
      title: "from the journey",
      intro:
        "Things I want to understand for longer: written down, organized by topic, and shared so they can be found again.",
      count: "published articles",
    },
    topics: {
      label: "Explore topics",
      title: "Start with a topic",
      intro:
        "Every folder becomes a reading path. Choose a topic to see everything inside it, including all of its subtopics.",
      empty:
        "Topics will appear automatically when the first article is published.",
      article: "articles",
      childLabel: "Subtopics",
    },
    featured: {
      label: "Selected writing",
      title: "Featured articles",
      intro:
        "A few notes that best represent what I am currently learning, thinking about, or working on.",
    },
    latest: {
      label: "All writing",
      title: "Latest from the archive",
      intro:
        "This list updates automatically whenever a new Markdown or MDX file is added to the publish folder.",
      emptyTitle: "The archive is still empty.",
      emptyBody:
        "The first article will appear here after a file is released from the publish folder.",
    },
    article: {
      back: "Back to writing",
      published: "Published",
      updated: "Updated",
      topics: "Topics",
      contents: "On this page",
      relatedLabel: "Read next",
      relatedTitle: "From the same topic",
    },
    topic: {
      back: "All writing",
      intro:
        "Every article in this topic, including those stored in any subtopics below it.",
    },
  },
  footer: {
    basedIn: "Based in",
    contact: "Contact",
    elsewhere: "Elsewhere",
    archive: "Personal archive",
    contactWord: "Contact",
    emailLabel: "Email Salman Thoriq",
  },
  notFound: {
    meta: {
      title: "Page not found — Salman Thoriq",
      description: "The page you are looking for is not available.",
    },
    code: "404",
    title: "Sorry, the page doesn't exist.",
    description:
      "The address may have changed, the link may be outdated, or I may not have built this page yet.",
    homeCta: "Return to the homepage",
  },
} as const;
