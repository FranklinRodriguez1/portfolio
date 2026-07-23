# Franklin Rodriguez — Portfolio

Portafolio personal de **Franklin Rodriguez**, Full-Stack Developer enfocado en arquitectura de software y computación en la nube. Construido con [Astro](https://astro.build) como sitio estático, rápido y sin frameworks de JS pesados en el cliente.

🔗 GitHub: [github.com/FranklinRodriguez1](https://github.com/FranklinRodriguez1)
🔗 LinkedIn: [linkedin.com/in/franklirodriguez](https://www.linkedin.com/in/franklirodriguez/)

## ¿Qué vas a encontrar aquí?

- **Hero** — presentación con foto de perfil, resumen profesional y estadísticas rápidas (proyectos construidos, stack, nube en progreso).
- **Filosofía de desarrollo** — tres principios que guían el trabajo: software mantenible y escalable, seguridad por defecto (JWT/RBAC) y frontends modernos y performantes (Next.js App Router, Server Components).
- **Stack tecnológico** — TypeScript, React/Next.js, Node.js/Express, PostgreSQL, MongoDB, Prisma ORM, Supabase y Microsoft Azure, además de tecnologías actualmente en aprendizaje (NestJS, Docker, CI/CD, GitHub Actions, DevOps, IaC).
- **Proyectos destacados** — casos de estudio de proyectos reales:
  - **TRUX** — plataforma de gestión logística (Next.js, TypeScript, PostgreSQL).
  - **Semtex** — plataforma de automatización con agentes de IA (Node.js, AI Agents, MongoDB).
  - **Atrius Verborum** — plataforma de autenticación y control de acceso basado en roles (JWT, RBAC, Swagger).
- **Contacto** — formulario de contacto, correo directo y enlaces a redes (GitHub y LinkedIn).

El sitio es completamente **bilingüe (Español/Inglés)** con detección automática de idioma del navegador, y soporta **tema claro/oscuro** con persistencia en `localStorage`.

## Stack técnico del proyecto

- [Astro 5](https://astro.build) — generación de sitio estático
- TypeScript
- CSS nativo con variables (design tokens) — sin frameworks de estilos
- i18n propio (diccionario en [`src/i18n/ui.ts`](src/i18n/ui.ts))

## Estructura

```
src/
├── assets/          # Imágenes optimizadas por Astro (astro:assets)
├── components/      # Header, Hero, Philosophy, Stack, Projects, Contact, Footer
├── i18n/            # Diccionario de traducciones ES/EN
├── layouts/         # Layout base (head, fuentes, scripts de tema/idioma)
├── pages/           # index.astro
└── styles/          # Design tokens y estilos globales
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Previsualizar el build
npm run preview
```

### Formulario de contacto

El formulario de contacto envía un correo real a través de [Resend](https://resend.com). Necesitas una API key:

1. Crea una cuenta gratuita en [resend.com](https://resend.com) y genera una API key.
2. Copia `.env.example` a `.env` y pega tu key:
   ```bash
   cp .env.example .env
   ```
3. En producción (Vercel), agrega `RESEND_API_KEY` como variable de entorno del proyecto.

El sitio se despliega con el [adapter de Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel/) — el resto de las páginas siguen siendo estáticas; solo `src/pages/api/contact.ts` corre on-demand para procesar el envío.

| Comando           | Acción                                           |
| :----------------- | :------------------------------------------------ |
| `npm install`       | Instala las dependencias                          |
| `npm run dev`       | Levanta el servidor de desarrollo en `localhost:4321` |
| `npm run build`     | Genera el sitio de producción en `./dist/`        |
| `npm run preview`   | Previsualiza el build de producción localmente    |

## Contacto

¿Buscas colaborar en un proyecto full-stack o en la nube? Escríbeme a [franklinrodriguezdev@gmail.com](mailto:franklinrodriguezdev@gmail.com).
