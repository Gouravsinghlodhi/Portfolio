# Backend Developer Portfolio

A responsive React + Vite portfolio website with a dark developer-focused design.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Before publishing

Search `src/main.jsx` and update:
- `your.email@example.com` with your professional email
- GitHub and LinkedIn links with your actual profile URLs
- Project descriptions/tags to reflect only work you are allowed to share
- Skills and experience to match your actual profile

## Free deployment: Netlify

1. Create/sign in to a Netlify account at https://www.netlify.com/.
2. Push this project to a GitHub repository, or deploy the project using Netlify's manual deploy workflow.
3. For Git-based deployment, choose **Add new site → Import an existing project**, select the repository, and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click Deploy. Netlify will provide a public `*.netlify.app` URL.
5. In Site configuration / Domain management, change the generated site name if the desired name is available.

Netlify's free subdomain is included. A custom domain such as `gourav.dev` is generally a separately purchased domain; the `netlify.app` subdomain is the free option.

## Alternative: Cloudflare Pages

Import the Git repository into Cloudflare Pages and set the build command to `npm run build` and output directory to `dist`. Cloudflare provides a `*.pages.dev` URL.

This is a static frontend portfolio; it does not require a backend server unless you later add dynamic features such as a working contact API or admin dashboard.
