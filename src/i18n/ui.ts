export const ui = {
  id: {
    meta: {
      title: "Salman Thoriq — Portofolio Pribadi",
      description: "Pengalaman, proyek pilihan, dan tulisan Salman Thoriq.",
    },
    navigation: {
      label: "Navigasi utama",
      homeLabel: "Salman Thoriq, halaman utama",
      links: [
        { label: "Pengalaman", path: "/experience" },
        { label: "Proyek", path: "/projects" },
        { label: "Tulisan", path: "/writing" },
      ],
    },
    language: {
      label: "Pilih bahasa",
    },
    home: {
      praIdentity: "Saya,",
      identity: "Salman Thoriq Al Farisyi",
      intro:
        "Arsip pribadi tentang pengalaman, proyek, dan berbagai hal yang saya pelajari ketika membangun untuk web.",
      scroll: "Jelajahi",
      kicker: "Mulai di sini",
      headingEmphasis: "Jelajahi",
      headingRest: "ruang saya",
      sectionIntro:
        "Tiga bagian dari perjalanan yang sama: tempat saya bertumbuh, hal yang saya buat, dan pelajaran yang saya temukan.",
      experiencePreview: {
        title: "Tempat yang membentuk saya",
        intro:
          "Linimasa ini diambil langsung dari arsip pengalaman saya dan akan terus bertambah bersama perjalanan berikutnya.",
        cta: "Baca pengalaman lengkap",
        ariaLabel: "Perjalanan kerja Salman Thoriq",
      },
      projectPreview: {
        title: "Yang saya bangun dan perbaiki",
        intro:
          "Produk dan sistem yang pernah saya bangun dari awal, kembangkan, pelihara, atau bantu pahami sebagai bagian dari existing system.",
        cta: "Jelajahi semua proyek",
        ariaLabel: "Proyek Salman Thoriq",
      },
      sections: [
        {
          number: "01.",
          title: "Pengalaman",
          description:
            "Linimasa singkat tentang peran, tanggung jawab, dan pelajaran yang membentuk cara saya bekerja.",
          path: "/experience",
          cta: "Lihat perjalanan saya",
        },
        {
          number: "02.",
          title: "Proyek",
          description:
            "Pilihan hal yang pernah saya rancang, bangun, atau eksplorasi beserta pemikiran di baliknya.",
          path: "/projects",
          cta: "Lihat proyek",
        },
        {
          number: "03.",
          title: "Tulisan",
          description:
            "Catatan tentang teknologi, pemecahan masalah, dan hal-hal yang sedang saya pelajari.",
          path: "/writing",
          cta: "Baca catatan saya",
        },
      ],
    },
    footer: {
      basedIn: "Berdomisili di",
      contact: "Kontak",
      elsewhere: "Temukan saya",
      archive: "Arsip pribadi",
      language: "Bahasa",
      languageName: "Indonesia",
      contactWord: "Hubungi",
      emailLabel: "Kirim email kepada Salman Thoriq",
    },
  },
  en: {
    meta: {
      title: "Salman Thoriq — Personal Portfolio",
      description: "Experience, selected projects, and writing by Salman Thoriq.",
    },
    navigation: {
      label: "Primary navigation",
      homeLabel: "Salman Thoriq, homepage",
      links: [
        { label: "Experience", path: "/experience" },
        { label: "Projects", path: "/projects" },
        { label: "Writing", path: "/writing" },
      ],
    },
    language: {
      label: "Choose language",
    },
    home: {
      praIdentity: "I'm",
      identity: "Salman Thoriq Al Farisyi",
      intro:
        "A personal archive of my experience, projects, and notes from things I learn while building for the web.",
      scroll: "Explore",
      kicker: "Start here",
      headingEmphasis: "Explore",
      headingRest: "my space",
      sectionIntro:
        "Three parts of the same ongoing story: where I have been, what I have made, and what I have learned.",
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
      sections: [
        {
          number: "01.",
          title: "Experience",
          description:
            "A concise timeline of the roles, responsibilities, and lessons that have shaped how I work.",
          path: "/experience",
          cta: "See my journey",
        },
        {
          number: "02.",
          title: "Projects",
          description:
            "Selected things I have designed, built, or explored—along with the thinking behind them.",
          path: "/projects",
          cta: "Browse projects",
        },
        {
          number: "03.",
          title: "Writing",
          description:
            "Notes on technology, problem-solving, and whatever I am currently learning along the way.",
          path: "/writing",
          cta: "Read my notes",
        },
      ],
    },
    footer: {
      basedIn: "Based in",
      contact: "Contact",
      elsewhere: "Elsewhere",
      archive: "Personal archive",
      language: "Language",
      languageName: "English",
      contactWord: "Contact",
      emailLabel: "Email Salman Thoriq",
    },
  },
} as const;
