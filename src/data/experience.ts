export interface ExperienceProject {
  title: string;
  description: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  industry: string;
  location?: string;
  summary: string[];
  highlights: string[];
  projects: ExperienceProject[];
  technologies: string[];
}

export function getExperienceId(company: string) {
  const slug = company
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return `experience-${slug}`;
}

interface ExperienceContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    intro: string;
    range: string;
  };
  section: {
    label: string;
    title: string;
    intro: string;
  };
  labels: {
    industry: string;
    location: string;
    contributions: string;
    selectedWork: string;
  };
  entries: ExperienceEntry[];
  closing: {
    label: string;
    title: string;
    paragraphs: string[];
  };
}

export const experienceContent: ExperienceContent = {
  meta: {
    title: "Experience — Salman Thoriq",
    description:
      "Places I’ve worked, things I’ve worked on, and what I learned along the way.",
  },
  hero: {
    title: "Where I’ve worked ",
    intro:
      "A record of the places, people, problems, and work that have shaped how I build software today.",
    range: "2021 — Present",
  },
  section: {
    label: "Along the way",
    title: "Places that became part of the journey",
    intro:
      "Not everything here was perfect or made it to production. Some things worked, some changed direction, and some simply taught me a better way to approach the next problem.",
  },
  labels: {
    industry: "Industry",
    location: "Location",
    contributions: "What I worked on",
    selectedWork: "A few things I did",
  },
  entries: [
    {
      company: "Susi Air",
      role: "Backend Developer",
      period: "October 2025 — Present",
      industry: "Aviation",
      location: "Pangandaran, West Java",

      summary: [
        "I work in a small engineering team, so requirements often come directly from the people using the systems — staff, pilots, OCC, the Chief Pilot, data analysts, and management.",
        "Most of these systems are already running day to day, which means changes usually have to happen gradually. Over time, I have become more careful about improving the structure without forgetting that someone still depends on it working tomorrow morning.",
      ],

      highlights: [
        "Work on REST APIs, business rules, validation, data normalization, email automation, and scheduled processes across several internal systems.",
        "Gradually separate controller, application, and persistence responsibilities using clearer service and repository boundaries.",
        "Started using ORM-based migrations so database changes could be tracked alongside the code instead of living only in the database.",
        "Built an automated database backup scheduler that now runs in the production environment.",
        "Added an index after tracing a slow data-retrieval path, cutting roughly 0.5 seconds from its response time.",
        "Put together an engineering handbook, Git conventions, API documentation, ADRs, MkDocs documentation, and onboarding notes so fewer things had to live only in someone's head.",
      ],

      projects: [
        {
          title: "Internal Operations Dashboard",
          description:
            "Most of my day-to-day backend work happens here. The system covers scheduling, pilots, aircraft, airports, logbooks, purchase requests, and several other internal modules. I work mostly around APIs, business rules, data consistency, frontend integration, and small improvements to parts of the legacy codebase.",
        },
        {
          title: "Legacy modernization & workflow ideas",
          description:
            "Some of the work never became production code, but it still shaped how I thought about the system. I explored a gradual migration away from Node.js 14 using the Strangler Fig pattern, clearer domain boundaries, and a modular monolith. I also designed a more flexible approval flow for Purchase Requests. Both stayed at the exploration and planning stage.",
        },
        {
          title: "Susi Environmental School",
          description:
            "A newer project where I worked across the application layer, backend, database, media storage, and parts of the frontend. The site supports dynamic and multilingual content, galleries, news and blog posts, SEO-friendly URLs, PostgreSQL, MinIO, and separate services running through Docker Compose.",
        },
      ],

      technologies: [
        "TypeScript",
        "Node.js",
        "NestJS",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Nuxt",
        "Nitro",
        "Drizzle ORM",
        "MinIO",
        "OpenAPI",
      ],
    },
    {
      company: "Laku6",
      role: "Full-Stack Developer",
      period: "July 2024 — October 2024",
      industry: "Electronics Recommerce",
      location: "Jakarta",

      summary: [
        "I joined an established product with a much broader mix of technologies than I had worked with before. Most of my time went into frontend work, where my JavaScript and TypeScript background matched what the team needed at the time.",
        "It was a short chapter, but it gave me a closer look at what it means to work inside a larger codebase — following existing conventions, understanding unfamiliar parts, and making changes without treating the system as if it started with me.",
      ],

      highlights: [
        "Implemented a couple of production pages in Next.js from UX designs while following the existing component, styling, and application conventions.",
        "Worked through existing Symfony 2 flows to debug issues and make small backend changes.",
        "Built Python scheduled jobs for reporting, database access, and processing application datasets.",
      ],

      projects: [
        {
          title: "Frontend work in an existing product",
          description:
            "Most of my work was on the frontend, translating UX designs into Next.js pages inside an application that already had its own structure and conventions. The interesting part was less about building from scratch and more about learning how to fit into something that was already running.",
        },
        {
          title: "Legacy maintenance & scheduled jobs",
          description:
            "I also spent some time tracing existing Symfony 2 backend flows, fixing smaller issues, and using Python for scheduled reporting and data-processing tasks. It was a different kind of work from what I was used to, and a useful introduction to working across several stacks in the same environment.",
        },
      ],

      technologies: ["Next.js", "Python", "Symfony 2", "MySQL", "PostgreSQL"],
    },
    {
      company: "Rhapsodie.co",
      role: "Project Manager",
      period: "February 2024 — July 2024",
      industry: "Music Education Platform",
      location: "BSD City, Tangerang",

      summary: [
        "I worked somewhere between the business owner and the development team, helping turn ideas for a platform connecting music teachers and students into something the team could actually plan and build.",
        "The project did not begin from a blank page. There was already a Laravel application, but very little documentation or source-code handover, so part of the work was first figuring out what already existed before deciding where to go next.",
      ],

      highlights: [
        "Recovered the existing source code from the hosting environment and went through it to get an initial picture of the system.",
        "Turned conversations with the owner into software requirements, user-role and feature flows, MVP scope, success criteria, and a Definition of Done.",
        "Mapped out the trade-offs between continuing with the legacy application and rebuilding it, including the time, cost, and technical debt that came with either direction.",
        "Put together an initial product structure in Figma and helped look for a third-party development partner to continue the implementation.",
        "Followed the work through GitHub activity, local builds, implementation reviews, and technical discussions as the project moved forward.",
      ],

      projects: [
        {
          title: "Figuring out what we were actually building",
          description:
            "A large part of the work was turning conversations into something more concrete. We separated requirements from nice-to-haves, defined what belonged in the MVP, and kept future ideas somewhere they would not quietly become part of today's scope.",
        },
        {
          title: "Keep it or rebuild it?",
          description:
            "The existing Laravel application came with technical debt, but starting again would also mean more time and cost. I helped lay out both paths so the decision could be made with those trade-offs in view. The business eventually chose to continue from the existing application.",
        },
      ],

      technologies: [
        "Figma",
        "GitHub",
        "Trello",
        "Miro",
        "Google Docs",
        "cPanel",
      ],
    },
    {
      company: "Kelola Teknologi Digital",
      role: "Full-Stack Developer",
      period: "January 2023 — June 2023",
      industry: "Software Development / IT Services",
      location: "BSD City, Tangerang",

      summary: [
        "I moved between projects as the team's needs changed, which meant getting used to different domains, codebases, and problems fairly quickly. The two I remember most clearly are Qonnectic and Prima Health Tracking System.",
        "This was also where I started paying more attention to how a codebase is organized — not because architecture needed to be complicated, but because I wanted it to be easier to follow when someone had to debug, change, or continue the work later.",
      ],

      highlights: [
        "Modeled hierarchical file and folder relationships in MySQL for a document-management feature.",
        "Helped turn client-owned spreadsheet calculations into application flows for livestock operations.",
        "Moved a growing prototype backend out of Next.js into a dedicated Express.js service as the project became more complete.",
        "Proposed an N-layered architecture with feature-based vertical slicing, put together a reusable boilerplate, and walked the team through how it could be used.",
      ],

      projects: [
        {
          title: "Folders inside folders",
          description:
            "Qonnectic included a document-management feature that looked familiar on the surface — files, folders, and nested folders much like a desktop file explorer. Behind that simple interaction was the less visible problem of keeping parent-child relationships, moves, deletion, traversal, and hierarchy consistent in MySQL.",
        },
        {
          title: "From spreadsheet to application",
          description:
            "Prima started from operational calculations that already lived in the client's spreadsheets. The job was not to invent the formulas, but to understand how they were being used and turn that existing logic into application flows. As the prototype grew, I also helped separate the backend from Next.js into its own Express.js service.",
        },
        {
          title: "Making the code easier to move around",
          description:
            "While working on Prima, I proposed organizing the backend with an N-layered structure and feature-based vertical slicing. The idea was fairly practical: keep things that change together closer together, so developers spend less time jumping across unrelated folders just to understand one feature. I later turned the structure into a boilerplate and shared it with the team.",
        },
      ],

      technologies: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "React",
        "Next.js",
        "MySQL",
        "Docker",
        "GitLab",
      ],
    },
    {
      company: "Bangunindo Teknusa Jaya",
      role: "Backend Developer",
      period: "August 2022 — January 2023",
      industry: "Technology & Infrastructure Solutions",
      location: "Jakarta",

      summary: [
        "Most of my time was spent around the backend of T3 BAKTI KOMINFO, where infrastructure monitoring data eventually had to turn into something people could act on. My work mostly touched APIs, integrations, automation, data processing, and production fixes.",
        "This was one of the places where I started noticing that backend work is often less about one system working alone, and more about helping several systems talk to each other reliably.",
      ],

      highlights: [
        "Built an escalation flow for prolonged packet-loss events, connecting monitoring events to Slack notifications and support tickets for the relevant ISP or vendor.",
        "Worked on Flask APIs, backend integrations, and data-processing requirements that came from the data analytics team.",
        "Helped maintain and troubleshoot backend functionality that was already running in production.",
        "On a separate early-stage project, noticed a possible SQL injection risk in raw queries, raised it with the technical lead, and helped put temporary query-safety measures in place.",
      ],

      projects: [
        {
          title: "When monitoring needed somewhere to go",
          description:
            "T3 BAKTI KOMINFO monitored telecommunications infrastructure across different locations. One part I worked on was what happened after the system noticed something was wrong: prolonged packet loss could trigger a Slack notification and, when it needed external attention, create a support ticket for the relevant ISP or vendor.",
        },
        {
          title: "A query that felt a little too trusting",
          description:
            "On another project that was still taking shape, I came across raw SQL that relied on validation happening before the request reached the backend. It made me stop and ask what would happen if someone simply skipped the frontend. I raised the concern with the technical lead, and we added a safer intermediate approach while discussing better database access for later.",
        },
      ],

      technologies: [
        "Python",
        "Flask",
        "PostgreSQL",
        "Docker",
        "Git",
        "Prisma",
      ],
    },
    {
      company: "PT Inovasi Solusi Internasional",
      role: "Backend Developer",
      period: "March 2021 — August 2022",
      industry: "Software Development",
      location: "Jakarta",

      summary: [
        "This was the first place where programming stopped being something I was learning on my own and became part of a system that other people actually depended on.",
        "Most of my time went into an online registration and KYC platform for Solid Gold Berjangka, where I helped move existing Laravel functionality into TypeScript and Express.js without losing the business behavior that was already there.",
      ],

      highlights: [
        "Worked on registration, login, logout, password recovery, user profiles, account management, and role-based authorization.",
        "Translated existing KYC and risk-validation rules into backend logic and connected the application to an external screening system.",
        "Added server-side validation, rate limiting, sanitization, authorization checks, escaping, and Jest unit tests as I became more aware of how much an API should distrust incoming input.",
        "Documented endpoints, payloads, responses, authentication, and errors with Swagger/OpenAPI so the frontend did not have to guess how the backend behaved.",
        "Organized backend code by feature so related logic stayed closer together instead of being scattered across unrelated folders.",
      ],

      projects: [
        {
          title: "Moving behavior, not just code",
          description:
            "The existing backend was written in Laravel, and part of my work was helping move its functionality into TypeScript and Express.js. I slowly learned that migration was not really about translating PHP into JavaScript. The harder part was understanding how registration, accounts, profiles, KYC, roles, and risk rules already behaved, then making sure those expectations survived the move.",
        },
        {
          title: "Learning where trust should stop",
          description:
            "This was also where I started paying more attention to application security. Validation moved to the server, permissions had to be checked instead of assumed, and incoming data needed to be treated carefully. Things like Joi validation, rate limiting, sanitization, authorization, and tests gradually became part of how I thought about an API rather than something added at the end.",
        },
        {
          title: "Leaving fewer things to guess",
          description:
            "As the backend grew, keeping the API understandable became part of the work too. I used Swagger/OpenAPI to document endpoints, payloads, responses, authentication, and errors, and started grouping code by feature so the pieces of one domain were easier to find together.",
        },
      ],

      technologies: [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MySQL",
        "Knex",
        "Docker",
        "OpenAPI",
        "Joi",
        "Jest",
      ],
    },
  ],
  closing: {
    label: "Looking back",
    title: "Software engineering is larger than source code.",
    paragraphs: [
      "I started by trying to make things work. Over time, I began caring more about whether the code could be understood, changed, and carried forward by someone else.",
      "Somewhere along the way, software became less about code alone and more about everything around it — business rules, data, infrastructure, documentation, communication, people, and the constraints holding them together. I still enjoy making things work. I just no longer think that is where the work ends.",
    ],
  },
};
