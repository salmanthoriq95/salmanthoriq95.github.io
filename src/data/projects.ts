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
        caption: "1st page of the dashboard.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=19daB-sEi2a2Mqbt5ClqcbXwby7G2p4dY&sz=w2000",
        alt: "Susi Air operational dashboard - Dashboard",
        caption: "Dashboard view for the Susi Air operational dashboard.",
      },
    ],
    content: {
      title: "Susi Air Internal Operational System",
      role: "Backend Developer",
      type: "Internal operational system",
      contribution:
        "Backend development, legacy modernization, automation, database",
      summary: [
        "An internal platform supporting a range of operational activities at Susi Air.",
        "I joined while the system was already running with substantial legacy code and technical debt. The goal was not a rewrite, but gradual improvement without disrupting live operations.",
      ],
      contributions: [
        "Developed and maintained REST APIs for operational needs.",
        "Implemented business rules, request validation, and data normalization.",
        "Built email automation and scheduled processes.",
        "Clarified validation, service, and repository boundaries to separate application logic from persistence concerns.",
        "Introduced ORM-based database migrations so schema changes could be tracked in the codebase.",
        "Built an automated production database backup scheduler.",
        "Added an index to a slow retrieval path, reducing response time by approximately 0.5 seconds.",
        "Helped establish API, Git, and development conventions for a more consistent backend workflow.",
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
        caption: "1st view of the Susi Environmental School website.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1Od7rw7X2In8bFezSJwYNOBXF6TxAERVF&sz=w2000",
        alt: "Susi Environmental School - Admin View",
        caption: "Admin panel view of the Susi Environmental School website.",
      }
    ],
    content: {
      title: "Susi Environmental School Web",
      role: "Backend Developer / Full-Stack Contributor",
      type: "Dynamic school website",
      contribution: "Backend, data layer, web application, infrastructure",
      summary: [
        "A website for Susi Environmental School that turns previously static content into a dynamically managed experience.",
        "The application supports school information, galleries, news or blog publishing, multilingual content, and media management.",
      ],
      contributions: [
        "Designed and developed the application backend and data layer.",
        "Built server APIs with Nuxt and Nitro.",
        "Used PostgreSQL and Drizzle ORM as the persistence layer.",
        "Integrated MinIO as application-managed object storage for media and images.",
        "Developed configurable content, galleries, and news or blog publishing.",
        "Implemented multilingual content handling.",
        "Added basic technical SEO through metadata and search-friendly URLs or slugs.",
        "Ran the application, PostgreSQL, and MinIO as separate containers on a shared Docker network.",
      ],
    },
  },
  {
    slug: "laku6-web-application",
    company: "Laku6",
    featured: false,
    stackKind: "technologies",
    stack: ["Next.js", "Python", "Symfony 2", "MySQL", "PostgreSQL"],
    media: [
      {
        src: "https://drive.google.com/thumbnail?id=18SWDU_r4ho0RKvaPyEaIJucytSMaHFqA&sz=w2000",
        alt: "Laku6 Web View",
        caption: "Laku6 Web View.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1g0SibCOgJh53LNdrWXP_AhRSgx6H81Bo&sz=w2000",
        alt: "Laku6 (maujual) select product",
        caption: "Laku6 (maujual) select product view.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1ft5ReE1S4UEEQIrvqKBYApZJh-3ECpzZ&sz=w2000",
        alt: "Laku6 (maujual) select product type",
        caption: "Laku6 (maujual) select product type view.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1emxJKBSvCmpw_qd8g5sIC8jfZWqCowQ6&sz=w2000",
        alt: "Laku6 (maujual) calculate damage view",
        caption: "Laku6 (maujual) calculate damage view.",
      },
    ],
    content: {
      title: "Laku6 Web Application",
      role: "Full-Stack Developer",
      type: "Electronics recommerce platform",
      contribution:
      "Frontend implementation, backend maintenance, data processing",
      summary: [
        "I joined an existing application and contributed across selected frontend and backend areas.",
        "This was not a system I built from scratch, so the work centred on understanding the workflow and conventions already used by the team.",
      ],
      contributions: [
        "Implemented Next.js pages from designs prepared by the UX team.",
        "Integrated new pages with existing application workflows.",
        "Maintained and debugged existing Symfony 2 services.",
        "Implemented small backend changes.",
        "Built Python scheduled jobs for reporting and application dataset processing.",
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
        alt: "Rhapsodie.co Web View",
        caption: "Rhapsodie.co Web View.",
      }
    ],
    stackKind: "tools",
    stack: ["Figma", "GitHub", "Trello", "Miro", "Google Docs"],
    content: {
      title: "Rhapsodie.co Platform Revamp",
      role: "Project Manager",
      type: "Music education platform",
      contribution: "System analysis, requirement discovery, product planning",
      summary: [
        "A redevelopment initiative for a platform connecting music teachers and students.",
        "The existing Laravel application had very limited documentation and knowledge transfer. My role focused more on requirements, system analysis, planning, and coordination than direct coding.",
      ],
      contributions: [
        "Assessed an existing Laravel application recovered from the hosting environment.",
        "Ran requirement discovery with the business owner and translated needs into technical requirements.",
        "Created a Software Requirements Document, user-role flows, and feature flows.",
        "Defined success criteria, a Definition of Done, MVP scope, and delivery stages.",
        "Evaluated the trade-offs between continuing the legacy system and rebuilding it.",
        "Created an initial web structure and interface framework in Figma.",
        "Helped source a third-party development partner.",
        "Monitored implementation through GitHub activity, local builds, and technical progress reviews.",
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
        alt: "Qonnectic Web View",
        caption: "Qonnectic Web View.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=12hN0OuyCWgivCt6qW_DQrs-BZ2pNAedA&sz=w2000",
        alt: "Qonnectic Dashboard Web View",
        caption: "Qonnectic Dashboard Web View.",
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
        "Full-stack development, document management, data modeling",
      summary: [
        "Qonnectic is an existing enterprise application made up of several modules.",
        "Most of my work focused on document-management functionality for files and folders.",
      ],
      contributions: [
        "Maintained and developed the document-management module.",
        "Built functionality for organizing files and folders.",
        "Modelled hierarchical file-folder relationships in MySQL.",
        "Handled the parent-child relationships required by nested folders.",
        "Contributed to frontend and backend functionality within the existing application.",
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
      contribution: "Full-stack development, backend architecture",
      summary: [
        "A web application that turned spreadsheet-based processes and operational calculations into software.",
        "The formulas and domain calculations came from the client. My role was to help translate that operational logic into an application.",
      ],
      contributions: [
        "Developed the application frontend and backend.",
        "Translated spreadsheet-based operational calculations into application workflows.",
        "Built the initial prototype with Next.js and a database.",
        "Moved the backend out of the Next.js prototype into a dedicated Express.js service as the project evolved.",
        "Proposed and applied an N-layered architecture with feature-based vertical slicing.",
        "Created a backend boilerplate for the development team.",
        "Shared the architecture approach through internal technical sessions.",
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
        alt: "T3 Bakti Web View",
        caption: "T3 Bakti Web View.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1A1RkuKmUHUVWTE7XmIhI6eewGK4dAvz7&sz=w2000",
        alt: "T3 Bakti Login Page",
        caption: "T3 Bakti Login Page.",
      },
    ],
    content: {
      title: "T3 BAKTI KOMINFO",
      role: "Backend Developer",
      type: "Telecommunications infrastructure monitoring system",
      contribution: "Backend development, integration, automation",
      summary: [
        "A system used in the monitoring of telecommunications infrastructure.",
        "I did not develop the core billing system. My contribution focused on backend APIs, integrations, automation, and operational workflows.",
      ],
      contributions: [
        "Developed and maintained Flask APIs.",
        "Built backend integrations for operational monitoring.",
        "Implemented data-processing requirements from the data analytics team.",
        "Created incident automation for prolonged packet-loss events.",
        "Integrated incident workflows with Slack notifications.",
        "Created an escalation workflow that generated support tickets for the relevant ISP or vendor.",
        "Supported maintenance and delivery of backend functionality in an existing production system.",
      ],
      additional: {
        title: "Additional engineering contribution",
        paragraphs: [
          "On another early-stage project, I identified a potential SQL injection issue in a raw SQL implementation.",
          "I raised the risk with the technical lead, helped apply interim query-safety measures, and recommended a safer database-access approach.",
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
        alt: "SG Berjangka Login Page",
        caption: "SG Berjangka Login Page.",
      },
      {
        src: "https://drive.google.com/thumbnail?id=1dt5Y3HrJa9yL5YW2JZg88PgdJzTkDAmN&sz=w2000",
        alt: "Register to SG Berjangka",
        caption: "Register to SG Berjangka.",
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
        "Backend development, legacy migration, authentication, security",
      summary: [
        "A registration and KYC platform for prospective customers during the Solid Gold Berjangka futures-trading onboarding process.",
        "The original backend used Laravel. One of my largest contributions was helping migrate existing functionality to TypeScript and Express.js services.",
      ],
      contributions: [
        "Studied existing Laravel behaviour and business rules before migration.",
        "Migrated registration and onboarding functionality to TypeScript and Express.js while preserving existing behaviour.",
        "Developed registration, login, logout, password recovery, profiles, and account-management functionality.",
        "Implemented role-based authorization alongside KYC and risk-validation workflows.",
        "Integrated an external screening process.",
        "Applied server-side validation with Joi, rate limiting, and input sanitization.",
        "Wrote unit tests with Jest and maintained Swagger/OpenAPI documentation.",
        "Organized the backend around a feature or domain-oriented structure.",
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
