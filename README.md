# Aqsa Khan — Developer Portfolio (Express + EJS)

High-end, dark-themed portfolio showcasing skills, services, and 8 featured projects. Built with Express.js, EJS, and modern frontend (HTML5, CSS3, JS) using AOS animations.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   - Copy `.env.example` to `.env` and set SMTP credentials for contact form.
3. Run locally:
   ```bash
   npm run dev
   # opens http://localhost:3000
   ```

## Project Structure

- `server.js` – Express app setup
- `views/` – EJS templates
  - `partials/` – head, navbar, footer
  - pages: home, about, projects, services, contact, project-detail, 404
- `public/` – static assets (css, js, resume)
- `src/routes/` – page and API routes
- `src/controllers/` – site data and contact controller

## Environment Variables

See `.env.example` for all variables. On Render, define these in the “Environment” section of the service.

## Deploy on Render

1. Create a new Web Service in Render.
2. Connect your repository and select this project.
3. Set build command:
   - No build step needed; Render will run `npm install` automatically.
4. Set start command:
   ```
   node server.js
   ```
5. Add environment variables (SMTP settings and optional `PORT` if needed). Render sets `PORT` automatically.
6. Deploy. The site will be available at your Render URL.

## Notes

- If SMTP is not configured, the contact route logs the message in dev mode.
- Replace `/public/resume/aqsa-khan-resume.pdf` with your actual PDF.# portfolio_website
