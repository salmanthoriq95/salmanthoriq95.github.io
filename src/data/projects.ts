import type { Locale } from "../i18n";

export interface LocalizedProjectContent {
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
  alt: Record<Locale, string>;
  caption?: Record<Locale, string>;
}

export interface Project {
  slug: string;
  company: string;
  featured: boolean;
  stackKind: "technologies" | "tools";
  stack: string[];
  media?: ProjectMedia[];
  content: Record<Locale, LocalizedProjectContent>;
}

export const projects: Project[] = [
  {
    slug: "susi-air-operational-system",
    company: "Susi Air",
    featured: true,
    stackKind: "technologies",
    stack: ["TypeScript", "Node.js", "NestJS", "MySQL", "PostgreSQL", "Docker"],
    content: {
      id: {
        title: "Susi Air Internal Operational System",
        role: "Backend Developer",
        type: "Sistem operasional internal",
        contribution: "Backend development, legacy modernization, automation, database",
        summary: [
          "Platform internal yang mendukung berbagai aktivitas operasional Susi Air.",
          "Saya bergabung ketika sistem sudah berjalan dengan legacy code dan technical debt yang cukup besar. Fokusnya bukan melakukan rewrite, melainkan memperbaiki sistem secara bertahap tanpa mengganggu operasional yang sedang berjalan.",
        ],
        contributions: [
          "Mengembangkan dan memelihara REST API untuk berbagai kebutuhan operasional.",
          "Mengimplementasikan business rule, request validation, dan data normalization.",
          "Mengembangkan email automation dan scheduled processes.",
          "Memperjelas validation, service, dan repository boundary untuk memisahkan application logic dari persistence concern.",
          "Memperkenalkan ORM-based database migration agar perubahan schema dapat dilacak melalui codebase.",
          "Membuat automated database backup scheduler yang berjalan di production.",
          "Menambahkan database index pada slow retrieval path dan mengurangi response time sekitar 0,5 detik.",
          "Membantu membangun API, Git, dan development convention agar pola kerja backend lebih konsisten.",
        ],
      },
      en: {
        title: "Susi Air Internal Operational System",
        role: "Backend Developer",
        type: "Internal operational system",
        contribution: "Backend development, legacy modernization, automation, database",
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
  },
  {
    slug: "susi-environmental-school",
    company: "Susi Air",
    featured: true,
    stackKind: "technologies",
    stack: ["Nuxt", "Nitro", "PostgreSQL", "Drizzle ORM", "MinIO", "Docker"],
    content: {
      id: {
        title: "Susi Environmental School Web",
        role: "Backend Developer / Full-Stack Contributor",
        type: "Website sekolah dinamis",
        contribution: "Backend, data layer, web application, infrastructure",
        summary: [
          "Website untuk Susi Environmental School yang mengubah konten statis menjadi pengalaman yang dapat dikelola secara dinamis.",
          "Aplikasi mendukung informasi sekolah, galeri, berita atau blog, konten multibahasa, dan pengelolaan media.",
        ],
        contributions: [
          "Mendesain dan mengembangkan backend serta data layer aplikasi.",
          "Membuat server API menggunakan Nuxt dan Nitro.",
          "Menggunakan PostgreSQL dan Drizzle ORM sebagai persistence layer.",
          "Mengintegrasikan MinIO sebagai object storage yang dikelola aplikasi untuk media dan gambar.",
          "Mengembangkan configurable content, gallery, serta news/blog publishing.",
          "Mengimplementasikan pengelolaan konten multibahasa.",
          "Menerapkan basic technical SEO melalui metadata dan URL atau slug yang ramah mesin pencari.",
          "Menjalankan aplikasi, PostgreSQL, dan MinIO dalam container terpisah melalui shared Docker network.",
        ],
      },
      en: {
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
  },
  {
    slug: "laku6-web-application",
    company: "Laku6",
    featured: false,
    stackKind: "technologies",
    stack: ["Next.js", "Python", "Symfony 2", "MySQL", "PostgreSQL"],
    content: {
      id: {
        title: "Laku6 Web Application",
        role: "Full-Stack Developer",
        type: "Platform electronics recommerce",
        contribution: "Frontend implementation, backend maintenance, data processing",
        summary: [
          "Saya bergabung ke existing application dan berkontribusi pada beberapa bagian frontend maupun backend.",
          "Proyek ini bukan sistem yang saya bangun dari awal, sehingga pekerjaan utamanya adalah memahami workflow dan convention yang telah digunakan tim.",
        ],
        contributions: [
          "Mengimplementasikan halaman Next.js berdasarkan design dari UX team.",
          "Mengintegrasikan halaman baru dengan existing application workflow.",
          "Melakukan maintenance dan debugging pada existing Symfony 2 services.",
          "Mengimplementasikan perubahan kecil pada backend.",
          "Membuat Python scheduled jobs untuk reporting dan pemrosesan application dataset.",
        ],
      },
      en: {
        title: "Laku6 Web Application",
        role: "Full-Stack Developer",
        type: "Electronics recommerce platform",
        contribution: "Frontend implementation, backend maintenance, data processing",
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
  },
  {
    slug: "rhapsodie-platform-revamp",
    company: "Rhapsodie.co",
    featured: false,
    stackKind: "tools",
    stack: ["Figma", "GitHub", "Trello", "Miro", "Google Docs"],
    content: {
      id: {
        title: "Rhapsodie.co Platform Revamp",
        role: "Project Manager",
        type: "Platform edukasi musik",
        contribution: "System analysis, requirement discovery, product planning",
        summary: [
          "Redevelopment platform yang menghubungkan music teacher dan student.",
          "Existing application menggunakan Laravel dengan dokumentasi dan knowledge transfer yang sangat terbatas. Peran saya lebih banyak berada pada requirement, system analysis, planning, dan coordination dibandingkan direct coding.",
        ],
        contributions: [
          "Menganalisis existing Laravel application yang diperoleh kembali dari hosting environment.",
          "Melakukan requirement discovery bersama business owner dan menerjemahkannya menjadi technical requirements.",
          "Membuat Software Requirements Document, user-role flow, dan feature flow.",
          "Mendefinisikan success criteria, Definition of Done, MVP scope, dan delivery stages.",
          "Mengevaluasi trade-off antara melanjutkan legacy system dan melakukan rebuild.",
          "Membuat initial web structure dan interface framework menggunakan Figma.",
          "Membantu mencari third-party development partner.",
          "Memantau implementasi melalui GitHub activity, local build, dan technical progress review.",
        ],
      },
      en: {
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
  },
  {
    slug: "qonnectic-document-management",
    company: "Kelola Teknologi Digital",
    featured: false,
    stackKind: "technologies",
    stack: ["TypeScript", "Node.js", "Express.js", "React", "Next.js", "MySQL", "Docker"],
    content: {
      id: {
        title: "Qonnectic",
        role: "Full-Stack Developer",
        type: "Enterprise web application",
        contribution: "Full-stack development, document management, data modeling",
        summary: [
          "Qonnectic merupakan existing enterprise application dengan berbagai module.",
          "Bagian yang paling banyak saya kerjakan adalah document-management functionality untuk file dan folder.",
        ],
        contributions: [
          "Memelihara dan mengembangkan document-management module.",
          "Mengembangkan functionality untuk organisasi file dan folder.",
          "Memodelkan hierarchical file-folder relationship menggunakan MySQL.",
          "Menangani parent-child relationship yang dibutuhkan nested folder.",
          "Berkontribusi pada functionality frontend dan backend dalam existing application.",
        ],
      },
      en: {
        title: "Qonnectic",
        role: "Full-Stack Developer",
        type: "Enterprise web application",
        contribution: "Full-stack development, document management, data modeling",
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
  },
  {
    slug: "prima-health-tracking-system",
    company: "Kelola Teknologi Digital",
    featured: false,
    stackKind: "technologies",
    stack: ["TypeScript", "Node.js", "Express.js", "React", "Next.js", "MySQL", "Docker"],
    content: {
      id: {
        title: "Prima Health Tracking System",
        role: "Full-Stack Developer",
        type: "Aplikasi kesehatan dan operasional peternakan",
        contribution: "Full-stack development, backend architecture",
        summary: [
          "Web application yang mengubah proses dan operational calculation dari spreadsheet menjadi sebuah aplikasi.",
          "Formula dan domain calculation berasal dari client. Peran saya adalah membantu menerjemahkan operational logic tersebut menjadi software.",
        ],
        contributions: [
          "Mengembangkan frontend dan backend aplikasi.",
          "Menerjemahkan spreadsheet-based operational calculation menjadi application workflow.",
          "Mengembangkan prototype awal menggunakan Next.js dan database.",
          "Memindahkan backend dari prototype Next.js menjadi dedicated Express.js service ketika proyek berkembang.",
          "Mengusulkan dan menerapkan N-layered architecture dengan feature-based vertical slicing.",
          "Membuat backend boilerplate untuk digunakan development team.",
          "Membagikan architecture approach melalui internal technical session.",
        ],
      },
      en: {
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
  },
  {
    slug: "t3-bakti-kominfo",
    company: "Bangunindo Teknusa Jaya",
    featured: false,
    stackKind: "technologies",
    stack: ["Python", "Flask", "PostgreSQL", "Docker", "Git"],
    content: {
      id: {
        title: "T3 BAKTI KOMINFO",
        role: "Backend Developer",
        type: "Sistem monitoring infrastruktur telekomunikasi",
        contribution: "Backend development, integration, automation",
        summary: [
          "Sistem yang digunakan dalam konteks monitoring infrastruktur telekomunikasi.",
          "Saya tidak mengembangkan core billing system. Kontribusi saya berada pada backend API, integration, automation, dan operational workflow.",
        ],
        contributions: [
          "Mengembangkan dan memelihara Flask API.",
          "Mengembangkan backend integration untuk operational monitoring.",
          "Mengimplementasikan data-processing requirement dari data analytics team.",
          "Membuat incident automation untuk prolonged packet-loss event.",
          "Mengintegrasikan incident workflow dengan Slack notification.",
          "Membuat escalation workflow yang dapat menghasilkan support ticket untuk ISP atau vendor terkait.",
          "Membantu maintenance dan delivery backend functionality pada existing production system.",
        ],
        additional: {
          title: "Kontribusi engineering tambahan",
          paragraphs: [
            "Pada proyek lain yang masih berada pada tahap awal, saya menemukan potensi SQL injection pada raw SQL implementation.",
            "Saya mengangkat risiko tersebut kepada technical lead, membantu menerapkan interim query-safety measures, dan merekomendasikan database-access approach yang lebih aman.",
          ],
        },
      },
      en: {
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
  },
  {
    slug: "online-registration-kyc-platform",
    company: "PT Inovasi Solusi Internasional",
    featured: true,
    stackKind: "technologies",
    stack: ["TypeScript", "JavaScript", "Node.js", "Express.js", "MySQL", "Docker", "OpenAPI"],
    content: {
      id: {
        title: "Online Registration & KYC Platform",
        role: "Backend Developer",
        type: "Platform registrasi dan KYC perdagangan berjangka",
        contribution: "Backend development, legacy migration, authentication, security",
        summary: [
          "Platform registrasi dan KYC calon customer dalam proses onboarding futures trading untuk Solid Gold Berjangka.",
          "Backend awal menggunakan Laravel. Salah satu kontribusi terbesar saya adalah membantu memindahkan existing functionality menuju service berbasis TypeScript dan Express.js.",
        ],
        contributions: [
          "Mempelajari existing Laravel behavior dan business rule sebelum migration.",
          "Memigrasikan registration dan onboarding functionality ke TypeScript dan Express.js sambil mempertahankan existing behavior.",
          "Mengembangkan registration, login, logout, password recovery, profile, dan account-management functionality.",
          "Mengimplementasikan role-based authorization serta KYC dan risk-validation workflow.",
          "Mengintegrasikan external screening process.",
          "Menerapkan server-side validation dengan Joi, rate limiting, dan input sanitization.",
          "Menulis unit test menggunakan Jest dan memelihara dokumentasi Swagger/OpenAPI.",
          "Mengorganisasi backend menggunakan feature atau domain-oriented structure.",
        ],
      },
      en: {
        title: "Online Registration & KYC Platform",
        role: "Backend Developer",
        type: "Futures trading registration and KYC platform",
        contribution: "Backend development, legacy migration, authentication, security",
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
  },
];

export const projectPageContent: Record<Locale, {
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
}> = {
  id: {
    meta: {
      title: "Proyek — Salman Thoriq",
      description: "Pilihan sistem dan produk yang pernah dibangun, dikembangkan, dipelihara, atau dianalisis oleh Salman Thoriq.",
    },
    hero: {
      emphasis: "Dibangun",
      title: "dan diperbaiki.",
      intro: "Kumpulan produk dan sistem yang pernah saya bangun, kembangkan, pelihara, atau analisis—baik dari awal maupun sebagai bagian dari existing system.",
      count: "proyek terdokumentasi",
    },
    featured: {
      label: "Pilihan utama",
      title: "Pekerjaan dengan cerita yang lebih dalam",
      intro: "Tiga proyek yang mewakili cara saya mendekati legacy system, application infrastructure, dan business-critical migration.",
    },
    archive: {
      label: "Project archive",
      title: "Sistem lain yang ikut membentuk cara saya bekerja",
      intro: "Setiap proyek memiliki konteks, constraint, dan bentuk kontribusi yang berbeda.",
    },
    labels: {
      company: "Perusahaan",
      role: "Peran",
      type: "Jenis",
      contribution: "Kontribusi",
      technologies: "Teknologi",
      tools: "Peralatan",
      contributions: "Kontribusi saya",
      back: "Kembali ke semua proyek",
      next: "Proyek berikutnya",
      gallery: "Galeri proyek",
      privacy: "Untuk proyek internal, detail disampaikan pada level yang menjaga konteks pekerjaan tanpa mengekspos data atau proses yang bersifat rahasia.",
    },
  },
  en: {
    meta: {
      title: "Projects — Salman Thoriq",
      description: "Selected systems and products built, developed, maintained, or analysed by Salman Thoriq.",
    },
    hero: {
      emphasis: "Built",
      title: "and improved.",
      intro: "A collection of products and systems I have built, developed, maintained, or analysed—both from scratch and as part of an existing system.",
      count: "documented projects",
    },
    featured: {
      label: "Selected work",
      title: "Work with a deeper story",
      intro: "Three projects representing how I approach legacy systems, application infrastructure, and business-critical migration.",
    },
    archive: {
      label: "Project archive",
      title: "Other systems that shaped how I work",
      intro: "Every project carries a different context, constraint, and form of contribution.",
    },
    labels: {
      company: "Company",
      role: "Role",
      type: "Type",
      contribution: "Contribution",
      technologies: "Technologies",
      tools: "Tools",
      contributions: "My contributions",
      back: "Back to all projects",
      next: "Next project",
      gallery: "Project gallery",
      privacy: "For internal projects, details are presented at a level that preserves the work context without exposing confidential data or processes.",
    },
  },
};
