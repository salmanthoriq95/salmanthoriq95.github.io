export interface ProjectContent {
  title: string;
  role: string;
  type: string;
  contribution: string;
  summary: string[];
  contributions: string[];
  additional?: {
    title: string;
    paragraphs: string[];
  };
}

export interface ProjectMedia {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  company: string;
  featured: boolean;
  stackKind: "technologies" | "tools";
  stack: string[];
  media?: ProjectMedia[];
  content: ProjectContent;
}

export const projects: Project[] = [
  {
    slug: "susi-air-operational-system",
    company: "Susi Air",
    featured: true,
    stackKind: "technologies",
    stack: ["TypeScript", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Docker"],

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1PodZioFklC73IMtY0ggjklCXwTo_LG-R&sz=w2000",
        alt: "Susi Air operational dashboard - Login Page",
        caption: "Login page for the Susi Air operational dashboard.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1ZbUF26xBDT1S0jTNO4T_QxZtnmxhNjKi&sz=w2000",
        alt: "Susi Air operational dashboard - Dashboard",
        caption: "A view of the internal operational dashboard.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=19daB-sEi2a2Mqbt5ClqcbXwby7G2p4dY&sz=w2000",
        alt: "Susi Air operational dashboard - Dashboard",
        caption: "Another view of the internal operational dashboard.",
      },
    ],

    content: {
      title: "Susi Air Internal Operational System",
      role: "Backend Developer",
      type: "Internal operational system",

      contribution:
        "Keeping a running system understandable, safer to change, and a little easier to maintain",

      summary: [
        "An internal platform supporting several parts of Susi Air's day-to-day operations.",
        "The system had already been running for years before I joined. Rather than trying to replace everything at once, most of my work happened in smaller steps — understanding what was already there, changing what needed to change, and trying not to disturb the parts people still depended on every day.",
      ],

      contributions: [
        "Most of my time went into keeping an existing operational system moving: maintaining APIs, adding business rules, validating and normalizing data, building automation, and slowly untangling places where application logic and database access had grown too close together. I also started using ORM-based migrations so database changes could be tracked with the rest of the code.",

        "I spent just as much attention on the quieter parts around the system — automated backups, a small indexing improvement, API documentation, Git conventions, ADRs, MkDocs, an engineering handbook, and onboarding notes. None of these changed the whole system overnight, but together they made it a little easier to understand, change, and keep running.",
      ],
    },
  },
  {
    slug: "susi-environmental-school",
    company: "Susi Air",
    featured: true,
    stackKind: "technologies",
    stack: ["Nuxt", "Nitro", "PostgreSQL", "Drizzle ORM", "MinIO", "Docker"],

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1Uf-H8ekKzbShw_t_YZTrWPfHiLs9aCL_&sz=w2000",
        alt: "Susi Environmental School - Public View",
        caption: "A public view of the Susi Environmental School website.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1Od7rw7X2In8bFezSJwYNOBXF6TxAERVF&sz=w2000",
        alt: "Susi Environmental School - Admin View",
        caption: "The admin side used to manage the site's content.",
      },
    ],

    content: {
      title: "Susi Environmental School",
      role: "Backend Developer / Full-Stack Contributor",
      type: "Dynamic school website",

      contribution:
        "Turning a mostly static website into something the school could update and grow on its own",

      summary: [
        "The site needed to become more than a set of pages that changed only when someone touched the code.",
        "The idea was to let school information, galleries, news, blog posts, media, and multilingual content be managed through the application itself.",
      ],

      contributions: [
        "I worked mostly across the backend and data layer, building server APIs with Nuxt and Nitro, shaping the PostgreSQL data model with Drizzle ORM, and using MinIO for application-managed media storage. I also worked on parts of the frontend where they connected closely to the content and data flowing through the system.",

        "The application was split into separate services for the app, database, and object storage, all running through Docker on a shared network. Along the way, I also added multilingual content handling and basic technical SEO through metadata and search-friendly URLs so the site could stay flexible without turning every content change into a development task.",
      ],
    },
  },
  {
    slug: "maujual-device-valuation",
    company: "Laku6",
    featured: false,
    stackKind: "technologies",
    stack: ["Next.js", "Symfony 2", "python", "MySQL", "PostgreSQL"],

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=18SWDU_r4ho0RKvaPyEaIJucytSMaHFqA&sz=w2000",
        alt: "Maujual by Laku6",
        caption: "A view of the Maujual device-valuation experience.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1g0SibCOgJh53LNdrWXP_AhRSgx6H81Bo&sz=w2000",
        alt: "Maujual product selection",
        caption: "Choosing the device to be evaluated.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1ft5ReE1S4UEEQIrvqKBYApZJh-3ECpzZ&sz=w2000",
        alt: "Maujual product type selection",
        caption: "Narrowing the device down by model and type.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1emxJKBSvCmpw_qd8g5sIC8jfZWqCowQ6&sz=w2000",
        alt: "Maujual device condition assessment",
        caption:
          "Part of the condition-assessment flow used before a valuation is calculated.",
      },
    ],

    content: {
      title: "Maujual — Device Valuation Flow",
      role: "Full-Stack Developer",
      type: "Electronics recommerce application",

      contribution:
        "Working on the user-facing side of a valuation flow that was shared across a much larger product ecosystem",

      summary: [
        "Maujual was one of the user-facing applications around Laku6's device-valuation platform. The same underlying systems supported different kinds of users and channels, from end customers and retail staff to integrations used by larger commerce platforms.",
        "My part was mostly on the interface. I worked from UX designs and turned them into Next.js pages while fitting into an application and backend ecosystem that had already been running long before I arrived.",
      ],

      contributions: [
        "I worked on parts of the flow where users choose a device, narrow down its type, and describe its condition before a valuation is returned. The calculation itself lived elsewhere in a gRPC and Go service, so my job was less about the pricing logic and more about making the steps around it clear, consistent, and connected to the existing application.",

        "The product also had to work across different markets, which meant dealing with English, Indonesian, Malay, and Vietnamese content rather than assuming one language or one audience. Around the same ecosystem, I also spent time maintaining shared Symfony 2 services that had grown into part of the foundation used by several applications.",
      ],
    },
  },
  {
    slug: "rhapsodie-platform-revamp",
    company: "Rhapsodie.co",
    featured: false,

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1875Zchw7VtAUy_jQQgPHMrSh6mtkdwmN&sz=w2000",
        alt: "Rhapsodie.co platform",
        caption: "A view of the Rhapsodie.co platform.",
      },
    ],

    stackKind: "tools",
    stack: ["Figma", "GitHub", "Trello", "Miro", "Google Docs"],

    content: {
      title: "Rhapsodie.co Platform Revamp",
      role: "Project Manager",
      type: "Music education platform",

      contribution:
        "Turning a loosely defined redevelopment idea into something the owner and development team could actually reason about together",

      summary: [
        "Rhapsodie.co was a platform connecting music teachers and students, and the project started with an existing Laravel application rather than a blank slate.",
        "There was very little documentation or source-code handover, so before planning what came next, part of the work was simply understanding what was already there and what could realistically be carried forward.",
      ],

      contributions: [
        "I worked closely with the owner to turn conversations into something more concrete: software requirements, user-role and feature flows, MVP scope, success criteria, and a Definition of Done. I also mapped out the trade-offs between continuing with the existing application and rebuilding it, so the decision was not just about which option sounded cleaner technically.",

        "From there, I put together an initial product structure in Figma, helped look for a third-party development partner, and followed the implementation through GitHub activity, local builds, and technical reviews. My role was less about writing the code myself and more about reducing ambiguity around what the team was trying to build and how far the current system could reasonably take us.",
      ],
    },
  },
  {
    slug: "qonnectic-document-management",
    company: "Kelola Teknologi Digital",
    featured: false,
    stackKind: "technologies",

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1sLNe-RNcGDBi44JPtHASu_Vy_85k9IYW&sz=w2000",
        alt: "Qonnectic web application",
        caption: "A view of the Qonnectic web application.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=12hN0OuyCWgivCt6qW_DQrs-BZ2pNAedA&sz=w2000",
        alt: "Qonnectic dashboard",
        caption: "A dashboard view from Qonnectic.",
      },
    ],

    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "MySQL",
      "Docker",
    ],

    content: {
      title: "Qonnectic",
      role: "Full-Stack Developer",
      type: "Enterprise web application",

      contribution:
        "Working on the part of the system that made files and folders behave the way people naturally expected them to",

      summary: [
        "Qonnectic was an existing enterprise application with several modules already in place.",
        "Most of my time there was spent around document management — files, folders, nested structures, and the small rules that make something familiar on the surface behave consistently underneath.",
      ],

      contributions: [
        "I worked across both frontend and backend parts of the document-management flow, but the piece I remember most was modeling the hierarchy behind it. In the interface, putting one folder inside another feels obvious. In the database, that simplicity depends on keeping parent-child relationships, moves, deletion, traversal, and nested structures consistent.",

        "It was one of those features that looked ordinary until I had to think through what made it feel ordinary to the user. Most of the work was not about inventing something new, but about making sure the structure underneath behaved in the quiet, predictable way people already expected.",
      ],
    },
  },
  {
    slug: "prima-health-tracking-system",
    company: "Kelola Teknologi Digital",
    featured: false,
    stackKind: "technologies",

    stack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "MySQL",
      "Docker",
    ],

    content: {
      title: "Prima Health Tracking System",
      role: "Full-Stack Developer",
      type: "Livestock health and operations application",

      contribution:
        "Turning an existing spreadsheet-based way of working into an application that could grow beyond the spreadsheet itself",

      summary: [
        "Prima started from operational calculations that already lived in the client's spreadsheets. The formulas and domain knowledge were not ours to invent — the work was understanding how they were being used and giving that existing logic a place inside an application.",
        "It began as a fairly compact prototype, but as the project became more real, the structure around it had to grow too.",
      ],

      contributions: [
        "I worked across the frontend and backend, translating spreadsheet-driven processes into application flows and building the early version with Next.js and a database. As the prototype grew into a fuller application, I helped move the backend into its own Express.js service so the responsibilities were easier to separate and continue developing.",

        "This was also where I started experimenting more deliberately with code organization. I proposed an N-layered structure with feature-based vertical slicing, turned it into a reusable backend boilerplate, and walked the team through the approach. The goal was not to make the architecture look more sophisticated, but to make the code easier to follow when someone needed to change one part of the system.",
      ],
    },
  },
  {
    slug: "t3-bakti-kominfo",
    company: "Bangunindo Teknusa Jaya",
    featured: false,
    stackKind: "technologies",

    stack: ["Python", "Flask", "PostgreSQL", "Docker", "Git"],

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1O5o5PR-A1ZUtHcCjoECZQWBHNLOttQXE&sz=w2000",
        alt: "T3 BAKTI KOMINFO dashboard",
        caption: "A view of the T3 BAKTI KOMINFO monitoring system.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1A1RkuKmUHUVWTE7XmIhI6eewGK4dAvz7&sz=w2000",
        alt: "T3 BAKTI KOMINFO login page",
        caption: "The login page for the T3 BAKTI KOMINFO system.",
      },
    ],

    content: {
      title: "T3 BAKTI KOMINFO",
      role: "Backend Developer",
      type: "Telecommunications infrastructure monitoring system",

      contribution:
        "Helping monitoring events turn into notifications, escalations, and actions people could actually follow up on",

      summary: [
        "T3 was an existing system used around the monitoring of telecommunications infrastructure across different locations.",
        "My part was mostly on the backend side — APIs, integrations, data processing, automation, and the operational workflows around what happened when the system noticed something was wrong.",
      ],

      contributions: [
        "I worked on Flask APIs and backend integrations that supported the monitoring flow, including data-processing requirements from the data analytics team. One part I remember clearly was prolonged packet loss: instead of stopping at detection, the system could send a Slack notification and, when the issue needed outside attention, create a support ticket for the relevant ISP or vendor.",

        "A lot of the work happened inside a production system that was already running, so the job was often less about introducing something completely new and more about connecting existing pieces in a way that made the next step clearer. It was one of the projects that made me notice how often backend systems sit quietly between events, people, and other systems.",
      ],

      additional: {
        title: "A small security detour",
        paragraphs: [
          "On a separate early-stage project, I came across raw SQL that depended too much on validation happening before the request reached the backend. It made me wonder what would happen if someone simply bypassed the frontend.",
          "I raised the concern with the technical lead, helped put temporary query-safety measures in place, and suggested moving toward a safer database-access approach as the project matured.",
        ],
      },
    },
  },
  {
    slug: "online-registration-kyc-platform",
    company: "PT Inovasi Solusi Internasional",
    featured: true,
    stackKind: "technologies",

    media: [
      {
        src: "https://drive.google.com/thumbnail?id=1QWkWp95cmJ264_u7QY7zIWLyUY75scI0&sz=w2000",
        alt: "Solid Gold Berjangka login page",
        caption:
          "The login page for the Solid Gold Berjangka registration platform.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1dt5Y3HrJa9yL5YW2JZg88PgdJzTkDAmN&sz=w2000",
        alt: "Solid Gold Berjangka registration page",
        caption: "Part of the customer registration flow.",
      },
    ],

    stack: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Docker",
      "OpenAPI",
    ],

    content: {
      title: "Online Registration & KYC Platform",
      role: "Backend Developer",
      type: "Futures trading registration and KYC platform",

      contribution:
        "Moving an existing onboarding system forward without losing the business rules people already relied on",

      summary: [
        "The platform handled registration and KYC for prospective customers during the Solid Gold Berjangka onboarding process.",
        "Its backend originally lived in Laravel, and much of my work was helping move existing functionality into TypeScript and Express.js while first understanding how the old system was expected to behave.",
      ],

      contributions: [
        "The migration started with reading the existing flows rather than rewriting them immediately. Registration, account management, profiles, authentication, roles, KYC, and risk rules already had expectations attached to them, so the work was as much about preserving behavior as it was about changing the technology underneath.",

        "As I spent more time on the backend, I also became more careful about where trust should stop. I worked on server-side validation, authorization, rate limiting, sanitization, external screening, and unit tests, while keeping the API documented with Swagger/OpenAPI. It was one of the projects that taught me that a backend is not only responsible for returning the right data, but also for being clear about what it accepts, what it allows, and how other parts of the system are supposed to use it.",
      ],
    },
  },
];

export const projectPageContent: {
  meta: { title: string; description: string };
  hero: { emphasis: string; title: string; intro: string; count: string };
  featured: { label: string; title: string; intro: string };
  archive: { label: string; title: string; intro: string };
  labels: {
    company: string;
    role: string;
    type: string;
    contribution: string;
    technologies: string;
    tools: string;
    contributions: string;
    back: string;
    next: string;
    gallery: string;
    privacy: string;
  };
} = {
  meta: {
    title: "Projects — Salman Thoriq",
    description:
      "Things I’ve built, improved, explored, and learned from along the way.",
  },
  hero: {
    emphasis: "Things",
    title: "I’ve worked on.",
    intro:
      "Some started from an empty folder. Some were already running long before I arrived. Each one came with its own problems, constraints, and things to figure out.",
    count: "documented projects",
  },
  featured: {
    label: "A few with more to tell",
    title: "Work with a deeper story",
    intro:
      "A closer look at a few projects where the decisions, trade-offs, and lessons were just as important as what was eventually built.",
  },
  archive: {
    label: "Along the way",
    title: "Other things I’ve worked on",
    intro:
      "Different projects, different contexts, and different kinds of work—some built from scratch, some improved over time, and some simply taught me something worth keeping.",
  },
  labels: {
    company: "Company",
    role: "Role",
    type: "Type",
    contribution: "What I worked on",
    technologies: "Technologies",
    tools: "Tools",
    contributions: "What I did",
    back: "Back to projects",
    next: "Next project",
    gallery: "A closer look",
    privacy:
      "For internal projects, I keep the details broad enough to explain the work without exposing private data, internal processes, or anything that should stay inside the company.",
  },
};
