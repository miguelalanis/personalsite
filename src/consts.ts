import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Miguel Alanís",
  EMAIL: "miguel@miguelalanis.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Una colección de artículos sobre temas que me apasionan.",
};

export const WORK: Metadata = {
  TITLE: "Experiencia",
  DESCRIPTION: "Dónde he trabajado y qué he hecho.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Una colección de mis proyectos, con enlaces a repositorios y demos",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/miguelalanispro",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/miguelalanis"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/miguelalanisdev",
  }
];
