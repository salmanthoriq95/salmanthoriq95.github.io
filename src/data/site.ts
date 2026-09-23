export const site = {
  author: {
    fullName: "Salman Thoriq Al Farisyi",
    shortName: "Salman Thoriq",
  },
  brand: {
    name: "Salman",
    accent: ".T",
  },
  contact: {
    email: "salmanthoriq95@gmail.com",
  },
  location: {
    country: "Indonesia",
    timezone: "UTC +7",
  },
  greetings: ["Hello", "Halo", "Ciao", "Bonjour", "Hola", "Hallo", "Olá", "Hej"],
  socialLinks: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/salmanthoriq95",
      external: true,
    },
    {
      id: "gitlab",
      label: "GitLab",
      href: "https://gitlab.com/salmanthoriq95",
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/salmanthoriq95",
      external: true,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:salmanthoriq95@gmail.com",
      external: false,
    },
    {
      id: "threads",
      label: "Threads",
      href: "https://www.threads.net/@salmant___",
      external: true,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/salmant___",
      external: true,
    },
  ],
} as const;

export type SocialLinkId = (typeof site.socialLinks)[number]["id"];
