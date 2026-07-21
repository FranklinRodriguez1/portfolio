// Diccionario de idiomas — inglés / español.
// Cada texto traducible se referencia por su clave (data-i18n="clave").

export const defaultLang = "en" as const;
export type Lang = "en" | "es";

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    // Nav
    "nav.work": "Work",
    "nav.philosophy": "Philosophy",
    "nav.stack": "Stack",
    "cta.start": "Start a Project",
    "toggle.theme": "Toggle theme",
    "toggle.lang": "Language",

    // Hero
    "hero.eyebrow": "Full-Stack Development & Cloud",
    "hero.name": "Franklin Rodriguez",
    "hero.title1": "Full-Stack",
    "hero.title2": "Developer",
    "hero.lead":
      "I build modern web applications with a focus on software architecture and cloud computing. On the path to becoming a Software Engineer with a strong command of both development and infrastructure.",
    "hero.viewWork": "View Work →",
    "hero.startProject": "Start a Project",
    "hero.stat1.v": "4+",
    "hero.stat1.l": "Projects built",
    "hero.stat2.v": "Full-Stack",
    "hero.stat2.l": "TypeScript-first",
    "hero.stat3.v": "Azure",
    "hero.stat3.l": "Cloud in progress",

    // Philosophy
    "philo.eyebrow": "Principles",
    "philo.title": "Development\nPhilosophy",
    "philo.1.t": "Maintainable, Scalable Software",
    "philo.1.b":
      "I design systems for the long run: clean component architecture, clear separation between frontend and backend, and Feature Driven organization that keeps projects easy to grow and reason about.",
    "philo.2.t": "Security by Default",
    "philo.2.b":
      "Every application I build treats access as a first-class concern — JWT authentication, role-based access control (RBAC) and documented REST APIs, so systems stay reliable as they scale.",
    "philo.3.t": "Modern, Performant Frontends",
    "philo.3.b":
      "I leverage the Next.js App Router, Server Components, hybrid rendering and lazy loading to deliver interfaces that are fast, typed end-to-end and pleasant to maintain.",

    // Stack
    "stack.eyebrow": "Tech Stack",
    "stack.title": "Technology Stack",
    "stack.1.n": "TypeScript",
    "stack.1.d": "Typed end-to-end",
    "stack.2.n": "React / Next.js",
    "stack.2.d": "App Router & RSC",
    "stack.3.n": "Node.js / Express",
    "stack.3.d": "APIs & server logic",
    "stack.4.n": "PostgreSQL",
    "stack.4.d": "Relational data",
    "stack.5.n": "MongoDB",
    "stack.5.d": "Document data",
    "stack.6.n": "Prisma ORM",
    "stack.6.d": "Models & migrations",
    "stack.7.n": "Supabase",
    "stack.7.d": "Backend as a service",
    "stack.8.n": "Microsoft Azure",
    "stack.8.d": "Cloud infrastructure",
    "stack.learning": "Currently learning",

    // Projects
    "work.eyebrow": "Projects",
    "work.title": "Featured\nWork",
    "work.quote":
      "“Good architecture makes complex systems simple to build, secure and maintain.”",
    "work.1.tag": "Logistics / SaaS",
    "work.1.b":
      "A logistics management platform for coordinating fleets and shipments. Built as a full-stack application with a typed API layer and a modern, component-driven interface.",
    "work.2.tag": "AI / Automation",
    "work.2.b":
      "An automation platform powered by AI agents. Designed to orchestrate tasks and workflows, integrating server logic with real-time data and external services.",
    "work.3.tag": "Full-Stack / Web",
    "work.3.b":
      "A full-stack web project applying clean architecture and a clear frontend / backend separation, with a database layer modeled through Prisma.",
    "work.4.tag": "Auth / Security",
    "work.4.b":
      "A platform centered on authentication and role-based access control (RBAC), with JWT-secured REST APIs and documented endpoints via Swagger.",
    "work.link": "View details →",

    // Contact
    "contact.title": "Let's build\nthe future.",
    "contact.text":
      "Open to full-stack roles and collaborative projects. If you're building something ambitious, let's talk.",
    "contact.emailLabel": "Direct Email",
    "contact.locationLabel": "Based in",
    "contact.location": "Remote — Worldwide",
    "form.identity": "Identity",
    "form.name.ph": "Your Name",
    "form.email": "Email",
    "form.email.ph": "Email Address",
    "form.brief": "Message",
    "form.brief.ph": "Describe your project or idea…",
    "form.submit": "Send Message",
    "form.success": "Message Sent ✓",

    // Footer
    "footer.copy": "Built with Astro",
  },

  es: {
    // Nav
    "nav.work": "Proyectos",
    "nav.philosophy": "Filosofía",
    "nav.stack": "Stack",
    "cta.start": "Iniciar Proyecto",
    "toggle.theme": "Cambiar tema",
    "toggle.lang": "Idioma",

    // Hero
    "hero.eyebrow": "Desarrollo Full-Stack y Nube",
    "hero.name": "Franklin Rodriguez",
    "hero.title1": "Desarrollador",
    "hero.title2": "Full-Stack",
    "hero.lead":
      "Construyo aplicaciones web modernas con enfoque en arquitectura de software y computación en la nube. En camino a convertirme en ingeniero de software con dominio sólido tanto del desarrollo como de la infraestructura.",
    "hero.viewWork": "Ver Proyectos →",
    "hero.startProject": "Iniciar Proyecto",
    "hero.stat1.v": "4+",
    "hero.stat1.l": "Proyectos construidos",
    "hero.stat2.v": "Full-Stack",
    "hero.stat2.l": "Enfocado en TypeScript",
    "hero.stat3.v": "Azure",
    "hero.stat3.l": "Nube en progreso",

    // Philosophy
    "philo.eyebrow": "Principios",
    "philo.title": "Filosofía de\nDesarrollo",
    "philo.1.t": "Software Mantenible y Escalable",
    "philo.1.b":
      "Diseño sistemas pensados para durar: arquitectura por componentes limpia, separación clara entre frontend y backend, y organización Feature Driven que mantiene los proyectos fáciles de crecer y entender.",
    "philo.2.t": "Seguridad por Defecto",
    "philo.2.b":
      "Cada aplicación que construyo trata el acceso como prioridad — autenticación con JWT, control de acceso basado en roles (RBAC) y APIs REST documentadas, para que los sistemas sigan siendo confiables al escalar.",
    "philo.3.t": "Frontends Modernos y Rápidos",
    "philo.3.b":
      "Aprovecho el App Router de Next.js, Server Components, renderizado híbrido y lazy loading para entregar interfaces rápidas, tipadas de extremo a extremo y agradables de mantener.",

    // Stack
    "stack.eyebrow": "Stack Técnico",
    "stack.title": "Stack Tecnológico",
    "stack.1.n": "TypeScript",
    "stack.1.d": "Tipado de extremo a extremo",
    "stack.2.n": "React / Next.js",
    "stack.2.d": "App Router y RSC",
    "stack.3.n": "Node.js / Express",
    "stack.3.d": "APIs y lógica de servidor",
    "stack.4.n": "PostgreSQL",
    "stack.4.d": "Datos relacionales",
    "stack.5.n": "MongoDB",
    "stack.5.d": "Datos por documentos",
    "stack.6.n": "Prisma ORM",
    "stack.6.d": "Modelos y migraciones",
    "stack.7.n": "Supabase",
    "stack.7.d": "Backend como servicio",
    "stack.8.n": "Microsoft Azure",
    "stack.8.d": "Infraestructura en la nube",
    "stack.learning": "Aprendiendo actualmente",

    // Projects
    "work.eyebrow": "Proyectos",
    "work.title": "Proyectos\nDestacados",
    "work.quote":
      "“Una buena arquitectura hace que los sistemas complejos sean simples de construir, seguros y mantenibles.”",
    "work.1.tag": "Logística / SaaS",
    "work.1.b":
      "Plataforma de gestión logística para coordinar flotas y envíos. Construida como aplicación full-stack con una capa de API tipada y una interfaz moderna basada en componentes.",
    "work.2.tag": "IA / Automatización",
    "work.2.b":
      "Plataforma de automatización impulsada por agentes de IA. Diseñada para orquestar tareas y flujos de trabajo, integrando lógica de servidor con datos en tiempo real y servicios externos.",
    "work.3.tag": "Full-Stack / Web",
    "work.3.b":
      "Proyecto web full-stack que aplica arquitectura limpia y una separación clara entre frontend y backend, con una capa de datos modelada mediante Prisma.",
    "work.4.tag": "Auth / Seguridad",
    "work.4.b":
      "Plataforma centrada en autenticación y control de acceso basado en roles (RBAC), con APIs REST protegidas por JWT y endpoints documentados con Swagger.",
    "work.link": "Ver detalles →",

    // Contact
    "contact.title": "Construyamos\nel futuro.",
    "contact.text":
      "Abierto a roles full-stack y proyectos colaborativos. Si estás construyendo algo ambicioso, hablemos.",
    "contact.emailLabel": "Correo directo",
    "contact.locationLabel": "Ubicación",
    "contact.location": "Remoto — Global",
    "form.identity": "Identidad",
    "form.name.ph": "Tu Nombre",
    "form.email": "Correo",
    "form.email.ph": "Dirección de correo",
    "form.brief": "Mensaje",
    "form.brief.ph": "Describe tu proyecto o idea…",
    "form.submit": "Enviar Mensaje",
    "form.success": "Mensaje Enviado ✓",

    // Footer
    "footer.copy": "Hecho con Astro",
  },
};

export function t(lang: Lang, key: string): string {
  return ui[lang][key] ?? ui[defaultLang][key] ?? key;
}
