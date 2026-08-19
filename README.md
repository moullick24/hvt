# HealthVoitho

Next.js site for HealthVoitho Technologies (Esperer Group) — research-oriented technology for the cancer ecosystem.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router + TypeScript + Tailwind CSS
- Motion (`motion/react`) for enter/scroll animations
- Content modules in `src/content/` (from `WEBSITE_CONTENT.md`)
- Contact form posts to `POST /api/contact` (validated stub — no email yet)

## Routes

| Path | Page |
|------|------|
| `/` | Hero + progress cards |
| `/science` | AI, data, device R&D, early detection |
| `/approach` | Cancer insight, founder note, collaboration models |
| `/partnerships` | Saltlick, Niq |
| `/people` | Team placeholders |
| `/group` | Esperer Group |
| `/contact` | Dummy contact form |

## Email later

Wire sending inside `src/app/api/contact/route.ts` using `CONTACT_TO_EMAIL` (and a provider such as Resend). Keep the request shape unchanged.
