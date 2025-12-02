# Zacky Kurniansyah — Portfolio Site

Starter Next.js project with Tailwind, Dark Mode, Montserrat font, Framer Motion animations, and a simple MD blog.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (recommended)

1. Create a GitHub repository named **zacky-kurniansyah-site** and push this project.
2. Sign in to https://vercel.com and import the GitHub repo.
3. Set framework to **Next.js**, build command `npm run build`, output directory `.next`.
4. Deploy — Vercel will provide a default domain.

## Custom domain

You *do not* currently have a registrar listed. To add `zackykurniansyah.my.id`:

1. Buy the domain (e.g., from Niagahoster / Domainesia / Rumahweb / IDCloudhost / or PANDI-registered sellers).
2. In Vercel dashboard → Domains → Add `zackykurniansyah.my.id`.
3. Vercel will show DNS records to add at your registrar (usually CNAME or A records).
4. Add those records in your registrar DNS panel and wait for propagation.
5. Vercel will provision SSL automatically.

If you tell me which registrar you choose, I will give exact record entries.

## Customization done for you

- Theme: **Blue Tech (Korporat Modern)** — accent color set to `--accent: #0b74d1`.
- Font: **Montserrat**
- Animation: Soft zoom + blur reveal (CSS + small JS)
- Avatar: `public/avatar.jpg` (replace if desired)
- Blog: add markdown files to `content/posts/`

## Notes

This is a minimal starter intended for quick deploy. If you want I can:
- Push to GitHub for you (you create empty repo and give me its name)
- Connect to Vercel (guide provided)
- Provide DNS records once you have a registrar

