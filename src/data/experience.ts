import type { Locale } from "../i18n";

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
    label: string;
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
    technologies: string;
  };
  entries: ExperienceEntry[];
  closing: {
    label: string;
    title: string;
    paragraphs: string[];
    quote: string;
  };
}

export const experienceContent: Record<Locale, ExperienceContent> = {
  id: {
    meta: {
      title: "Pengalaman — Salman Thoriq",
      description:
        "Perjalanan profesional Salman Thoriq dalam software engineering sejak 2021.",
    },
    hero: {
      label: "Perjalanan profesional",
      title: "Pengalaman",
      intro:
        "Catatan tentang pekerjaan, keputusan, masalah, dan pelajaran yang membentuk cara saya berpikir sebagai software engineer.",
      range: "2021 — Sekarang",
    },
    section: {
      label: "Linimasa",
      title: "Tempat saya bertumbuh",
      intro:
        "Saya menuliskan bukan hanya apa yang berhasil, tetapi juga batasan, eksplorasi yang belum masuk production, dan pengalaman yang mengubah cara saya bekerja.",
    },
    labels: {
      industry: "Industri",
      location: "Lokasi",
      contributions: "Kontribusi utama",
      selectedWork: "Pekerjaan pilihan",
      technologies: "Teknologi",
    },
    entries: [
      {
        company: "Susi Air",
        role: "Backend Developer",
        period: "Oktober 2025 — Sekarang",
        industry: "Aviation",
        location: "Pangandaran, Jawa Barat",
        summary: [
          "Saya bekerja di tim engineering yang relatif kecil dan sering menerjemahkan kebutuhan langsung dari tim operasional, pilot, OCC, Chief Pilot, data analyst, dan management menjadi solusi teknis.",
          "Sebagian besar pekerjaan dilakukan secara bertahap pada sistem operasional yang tetap harus berjalan, sehingga saya belajar menyeimbangkan perbaikan arsitektur dengan risiko perubahan di production.",
        ],
        highlights: [
          "Mengembangkan dan memelihara REST API, business rule, validation, data normalization, email automation, serta scheduled process.",
          "Memperjelas pemisahan controller, application logic, dan persistence melalui service serta repository boundary.",
          "Memperkenalkan ORM-based database migration agar evolusi schema dapat dilacak dari codebase.",
          "Membuat automated database backup scheduler untuk environment production.",
          "Menambahkan database index berdasarkan analisis jalur query dan mengurangi response time sekitar 0,5 detik.",
          "Membuat engineering handbook, Git convention, OpenAPI/Postman documentation, ADR, MkDocs, dan panduan onboarding.",
        ],
        projects: [
          {
            title: "Internal Operations Dashboard",
            description:
              "Backend untuk module schedule, pilot, aircraft, airport, logbook, purchase request, dan kebutuhan internal lainnya. Fokus saya meliputi API, konsistensi data, integrasi frontend-backend, dan perbaikan legacy secara gradual.",
          },
          {
            title: "Modernization & Workflow Exploration",
            description:
              "Saya merancang strategi migrasi Node.js 14 menggunakan pendekatan Strangler Fig, modular monolith, dan domain boundary yang lebih jelas. Dynamic approval flow untuk Purchase Request juga dieksplorasi, tetapi belum menjadi implementasi production.",
          },
          {
            title: "Susi Environmental School",
            description:
              "Membangun application layer, backend, database, media storage, dan sebagian frontend untuk website dinamis dengan multilingual content, SEO-friendly slug, PostgreSQL, MinIO, serta service yang terpisah melalui Docker Compose.",
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
        period: "Juli 2024 — Oktober 2024",
        industry: "Electronics Recommerce",
        summary: [
          "Dalam masa probation yang singkat, saya harus memahami beberapa stack dan context dalam waktu bersamaan. Saya lebih banyak bekerja pada frontend karena pengalaman JavaScript dan TypeScript paling relevan dengan kebutuhan tim.",
        ],
        highlights: [
          "Mengimplementasikan sekitar dua halaman production dari design UX menggunakan Next.js dan convention codebase yang sudah ada.",
          "Melakukan debugging serta perubahan kecil pada legacy backend berbasis Symfony 2.",
          "Membuat Python scheduled jobs untuk reporting, database access, dan pemrosesan dataset application.",
        ],
        projects: [
          {
            title: "Production Frontend",
            description:
              "Menerjemahkan design menjadi halaman Next.js sambil mengikuti component structure, styling, dan convention yang telah digunakan tim.",
          },
          {
            title: "Legacy Maintenance & Reporting",
            description:
              "Mempelajari flow aplikasi Symfony 2 untuk maintenance backend dan menggunakan Python untuk pekerjaan reporting terjadwal.",
          },
        ],
        technologies: ["Next.js", "Python", "Symfony 2", "MySQL", "PostgreSQL"],
      },
      {
        company: "Rhapsodie.co",
        role: "Project Manager",
        period: "Februari 2024 — Juli 2024",
        industry: "Music Education Platform",
        summary: [
          "Saya berada di antara business owner dan development team untuk membantu mendefinisikan platform yang menghubungkan music teacher dan student.",
          "Kondisi awalnya adalah legacy Laravel application dengan source code serta knowledge transfer yang terbatas, sementara akses utama hanya melalui hosting dan cPanel.",
        ],
        highlights: [
          "Mendapatkan kembali source code dari hosting dan melakukan initial legacy assessment.",
          "Menerjemahkan diskusi owner menjadi Software Requirements Document, user-role flow, MVP scope, success criteria, dan Definition of Done.",
          "Menjelaskan trade-off antara melanjutkan legacy application dan melakukan rebuild.",
          "Membuat struktur awal produk di Figma dan membantu memilih third-party development partner.",
          "Memantau progress melalui GitHub activity, local build, implementation review, dan technical discussion.",
        ],
        projects: [
          {
            title: "Requirement Discovery",
            description:
              "Memisahkan keinginan, requirement, nice-to-have, MVP, dan future feature agar tim memiliki kesepakatan yang lebih jelas tentang apa yang sedang dibangun.",
          },
          {
            title: "Legacy or Rebuild",
            description:
              "Membantu owner memahami konsekuensi biaya, waktu, dan technical debt dari dua pilihan. Keputusan bisnis akhirnya adalah melanjutkan existing application.",
          },
        ],
        technologies: ["Figma", "GitHub", "Trello", "Miro", "Google Docs", "cPanel"],
      },
      {
        company: "Kelola Teknologi Digital",
        role: "Full-Stack Developer",
        period: "Januari 2023 — Juni 2023",
        industry: "Software Development / IT Services",
        summary: [
          "Saya bekerja secara project-based dan berpindah sesuai kebutuhan. Dua pekerjaan utama saya adalah Qonnectic dan Prima Health Tracking System.",
        ],
        highlights: [
          "Memodelkan hierarchical file-folder relationship untuk document management menggunakan MySQL.",
          "Menerjemahkan calculation dari spreadsheet client menjadi web application untuk kebutuhan operasional peternakan.",
          "Membantu memisahkan prototype backend dari Next.js menjadi dedicated Express.js service.",
          "Mengusulkan N-Layered Architecture dengan feature-based vertical slicing, membuat boilerplate, dan mempresentasikannya kepada tim.",
        ],
        projects: [
          {
            title: "Qonnectic",
            description:
              "Document management dengan file, folder, nested hierarchy, moving, deletion, traversal, dan consistency pada hubungan parent-child.",
          },
          {
            title: "Prima Health Tracking System",
            description:
              "Mengubah formula spreadsheet milik client menjadi application flow, lalu membantu evolusi prototype menuju frontend Next.js dan backend Express.js yang terpisah.",
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
        period: "Agustus 2022 — Januari 2023",
        industry: "Technology & Infrastructure Solutions",
        summary: [
          "Saya mengerjakan backend untuk sistem monitoring infrastruktur telekomunikasi T3 BAKTI KOMINFO, terutama pada API, integration, automation, monitoring workflow, dan production bug fixing.",
        ],
        highlights: [
          "Membuat workflow yang mendeteksi packet-loss incident, mengirim Slack notification, dan membuat support ticket untuk ISP/vendor ketika eskalasi diperlukan.",
          "Membangun dan memelihara Flask API serta data-processing requirement dari data analyst.",
          "Mengidentifikasi risiko SQL injection pada raw query dan mengangkatnya kepada technical lead untuk ditangani.",
        ],
        projects: [
          {
            title: "T3 BAKTI KOMINFO",
            description:
              "Sistem yang memonitor availability BTS atau tower di berbagai lokasi dan menghubungkan monitoring event dengan alur notifikasi serta eskalasi eksternal.",
          },
        ],
        technologies: ["Python", "Flask", "PostgreSQL", "Docker", "Git", "Prisma"],
      },
      {
        company: "PT Inovasi Solusi Internasional",
        role: "Backend Developer",
        period: "Maret 2021 — Agustus 2022",
        industry: "Software Development",
        summary: [
          "Ini adalah tempat saya benar-benar mulai bekerja sebagai programmer profesional setelah sebelumnya belajar secara mandiri.",
          "Project utama saya adalah online registration dan KYC platform untuk Solid Gold Berjangka, termasuk migrasi business behavior dari Laravel menuju TypeScript dan Express.js.",
        ],
        highlights: [
          "Mengembangkan registration, login, logout, forgot password, profile, role-based authorization, dan account management.",
          "Menerjemahkan existing KYC dan risk-validation rule menjadi backend logic serta mengintegrasikannya dengan external screening system.",
          "Menerapkan Joi validation, rate limiting, sanitization, authorization, escaping, dan unit testing menggunakan Jest.",
          "Mendokumentasikan endpoint, payload, response, authentication, dan error menggunakan Swagger/OpenAPI.",
          "Menggunakan feature-based structure untuk mendekatkan code yang berada dalam domain yang sama.",
        ],
        projects: [
          {
            title: "Online Registration & KYC Platform",
            description:
              "Membantu memindahkan functionality dari Laravel dengan terlebih dahulu memahami registration, account, profile, KYC, risk validation, role, dan authorization yang sudah berjalan.",
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
      label: "Yang saya pelajari",
      title: "Software lebih besar dari source code.",
      paragraphs: [
        "Cara berpikir saya berkembang dari membuat fitur bekerja, menuju code yang dapat dipahami, architecture yang dapat dirawat, dan akhirnya memahami problem bisnis yang sebenarnya sedang diselesaikan.",
        "Bagi saya, software adalah gabungan business rule, data, people, infrastructure, operational process, documentation, communication, dan constraint.",
      ],
      quote:
        "Saya ingin membuat software yang tidak hanya bekerja hari ini, tetapi tetap dapat dipahami dan dirawat besok.",
    },
  },
  en: {
    meta: {
      title: "Experience — Salman Thoriq",
      description:
        "Salman Thoriq's professional journey in software engineering since 2021.",
    },
    hero: {
      label: "Professional journey",
      title: "Experience",
      intro:
        "A record of the work, decisions, problems, and lessons that have shaped how I think as a software engineer.",
      range: "2021 — Present",
    },
    section: {
      label: "Timeline",
      title: "Where I have grown",
      intro:
        "I include not only what worked, but also constraints, explorations that never reached production, and experiences that changed how I work.",
    },
    labels: {
      industry: "Industry",
      location: "Location",
      contributions: "Key contributions",
      selectedWork: "Selected work",
      technologies: "Technologies",
    },
    entries: [
      {
        company: "Susi Air",
        role: "Backend Developer",
        period: "October 2025 — Present",
        industry: "Aviation",
        location: "Pangandaran, West Java",
        summary: [
          "I work in a relatively small engineering team and often translate needs directly from operations, pilots, OCC, the Chief Pilot, data analysts, and management into technical solutions.",
          "Most improvements are introduced gradually while operational systems remain live, teaching me to balance architectural progress with production risk.",
        ],
        highlights: [
          "Develop and maintain REST APIs, business rules, validation, data normalization, email automation, and scheduled processes.",
          "Clarify controller, application logic, and persistence responsibilities through service and repository boundaries.",
          "Introduce ORM-based migrations so schema evolution is tracked in the codebase.",
          "Build an automated database backup scheduler for the production environment.",
          "Add a database index after query-path analysis, reducing response time by approximately 0.5 seconds.",
          "Create an engineering handbook, Git conventions, OpenAPI/Postman documentation, ADRs, MkDocs, and onboarding guides.",
        ],
        projects: [
          {
            title: "Internal Operations Dashboard",
            description:
              "Backend work across scheduling, pilots, aircraft, airports, logbooks, purchase requests, and other internal modules, focusing on APIs, data consistency, frontend integration, and incremental legacy improvement.",
          },
          {
            title: "Modernization & Workflow Exploration",
            description:
              "Designed a Node.js 14 migration strategy around the Strangler Fig pattern, a modular monolith, and clearer domain boundaries. I also explored a dynamic approval flow for Purchase Requests, but it did not reach production.",
          },
          {
            title: "Susi Environmental School",
            description:
              "Built the application layer, backend, database, media storage, and parts of the frontend for a dynamic site with multilingual content, SEO-friendly slugs, PostgreSQL, MinIO, and separate Docker Compose services.",
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
        summary: [
          "During a short probation period, I had to learn several stacks and contexts at once. I mostly worked on frontend tasks because my JavaScript and TypeScript background matched the team's immediate needs.",
        ],
        highlights: [
          "Implemented roughly two production pages from UX designs in Next.js while following the existing codebase conventions.",
          "Debugged and made small changes to a legacy Symfony 2 backend.",
          "Built Python scheduled jobs for reporting, database access, and application dataset processing.",
        ],
        projects: [
          {
            title: "Production Frontend",
            description:
              "Translated designs into Next.js pages while learning the component structure, styling, and conventions of an established production codebase.",
          },
          {
            title: "Legacy Maintenance & Reporting",
            description:
              "Learned existing Symfony 2 flows for backend maintenance and used Python for scheduled reporting work.",
          },
        ],
        technologies: ["Next.js", "Python", "Symfony 2", "MySQL", "PostgreSQL"],
      },
      {
        company: "Rhapsodie.co",
        role: "Project Manager",
        period: "February 2024 — July 2024",
        industry: "Music Education Platform",
        summary: [
          "I worked between the business owner and the development team to help define a platform connecting music teachers and students.",
          "The starting point was a legacy Laravel application with little source-code handover or documentation and access primarily through hosting and cPanel.",
        ],
        highlights: [
          "Recovered source code from hosting and performed an initial legacy assessment.",
          "Turned owner discussions into a Software Requirements Document, user-role flows, MVP scope, success criteria, and a Definition of Done.",
          "Explained the trade-offs between continuing the legacy application and rebuilding it.",
          "Created an initial product structure in Figma and helped select a third-party development partner.",
          "Tracked delivery through GitHub activity, local builds, implementation reviews, and technical discussions.",
        ],
        projects: [
          {
            title: "Requirement Discovery",
            description:
              "Separated wishes, requirements, nice-to-haves, MVP scope, and future features so the team could agree on what it was actually building.",
          },
          {
            title: "Legacy or Rebuild",
            description:
              "Helped the owner understand the cost, timeline, and technical-debt implications of both choices. The business ultimately chose to continue the existing application.",
          },
        ],
        technologies: ["Figma", "GitHub", "Trello", "Miro", "Google Docs", "cPanel"],
      },
      {
        company: "Kelola Teknologi Digital",
        role: "Full-Stack Developer",
        period: "January 2023 — June 2023",
        industry: "Software Development / IT Services",
        summary: [
          "I worked across projects as needs changed. The two projects I remember most clearly are Qonnectic and Prima Health Tracking System.",
        ],
        highlights: [
          "Modelled hierarchical file-folder relationships for document management in MySQL.",
          "Translated client-owned spreadsheet calculations into a web application for livestock operations.",
          "Helped move a prototype backend out of Next.js into a dedicated Express.js service.",
          "Proposed an N-Layered Architecture with feature-based vertical slicing, created a boilerplate, and presented it to the team.",
        ],
        projects: [
          {
            title: "Qonnectic",
            description:
              "Document management covering files, folders, nested hierarchies, moves, deletion, traversal, and parent-child consistency.",
          },
          {
            title: "Prima Health Tracking System",
            description:
              "Turned client-owned spreadsheet formulas into application flows and helped evolve the prototype into a separate Next.js frontend and Express.js backend.",
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
        summary: [
          "I worked on the backend of the T3 BAKTI KOMINFO telecommunications infrastructure monitoring system, mainly across APIs, integrations, automation, monitoring workflows, and production bug fixing.",
        ],
        highlights: [
          "Built a workflow that detected packet-loss incidents, sent Slack notifications, and created ISP/vendor support tickets when escalation was required.",
          "Built and maintained Flask APIs and implemented data-processing requirements from data analysts.",
          "Identified a SQL injection risk in raw queries and raised it with the technical lead for remediation.",
        ],
        projects: [
          {
            title: "T3 BAKTI KOMINFO",
            description:
              "A system monitoring the availability of BTS or tower infrastructure across locations and connecting monitoring events with notification and external escalation workflows.",
          },
        ],
        technologies: ["Python", "Flask", "PostgreSQL", "Docker", "Git", "Prisma"],
      },
      {
        company: "PT Inovasi Solusi Internasional",
        role: "Backend Developer",
        period: "March 2021 — August 2022",
        industry: "Software Development",
        summary: [
          "This was where I truly began working as a professional programmer after learning independently.",
          "My primary project was an online registration and KYC platform for Solid Gold Berjangka, including migration of existing business behavior from Laravel to TypeScript and Express.js.",
        ],
        highlights: [
          "Developed registration, login, logout, password recovery, profiles, role-based authorization, and account management.",
          "Translated existing KYC and risk-validation rules into backend logic and integrated an external screening system.",
          "Applied Joi validation, rate limiting, sanitization, authorization, escaping, and Jest unit testing.",
          "Documented endpoints, payloads, responses, authentication, and errors using Swagger/OpenAPI.",
          "Used a feature-based structure to keep code from the same domain close together.",
        ],
        projects: [
          {
            title: "Online Registration & KYC Platform",
            description:
              "Helped migrate functionality from Laravel by first understanding existing registration, account, profile, KYC, risk, role, and authorization behavior.",
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
      label: "What I learned",
      title: "Software is larger than source code.",
      paragraphs: [
        "My thinking evolved from making features work, to writing understandable code, to maintainable architecture, and finally to understanding the business problem being solved.",
        "To me, software is a combination of business rules, data, people, infrastructure, operational processes, documentation, communication, and constraints.",
      ],
      quote:
        "I want to build software that does not only work today, but remains understandable and maintainable tomorrow.",
    },
  },
};
