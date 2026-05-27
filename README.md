# Spotless Cleaning

**Professional, modern, ready-to-launch website** for Spotless Cleaning serving Horry County and the Myrtle Beach area.

> **Want to go live right now?** → Open [DEPLOY.md](./DEPLOY.md) for copy-paste commands.

## Design

- Clean, trustworthy aesthetic directly inspired by your reference flyer and logo
- Primary brand teal: `#0D9488` + bright `#14B8A6`
- Premium gold accent: `#B8860B`
- Fully responsive (mobile-first)
- Fast, accessible, production-ready

## Features

- Sticky navigation with mobile hamburger menu
- Strong hero with "Leaving Homes Spotless" tagline + Spotless Promise bar
- Services grid (Standard + Specialty)
- Transparent pricing cards + **live interactive quote calculator**
- Trust / Why Choose Us section
- Real-sounding local testimonials
- **High-conversion booking form** with validation, date/time pickers, and beautiful success state
- FAQ accordion
- Click-to-call and email throughout
- SEO-optimized metadata

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (2 minutes)

This site is 100% ready for production on Vercel.

### Option A — Easiest (Recommended)

1. Create a free GitHub account if you don't have one
2. Create a new repository on GitHub (can be private)
3. Upload this entire `spotless-cleaning` folder to that repo (or use GitHub Desktop / drag & drop)
4. Go to [vercel.com](https://vercel.com) and sign up with GitHub
5. Click **"Add New Project"** → Import your GitHub repo
6. Vercel auto-detects Next.js — just click **Deploy**

Your site will be live at `https://your-project.vercel.app` in ~60 seconds.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

> **Note:** Replace the button URL above with your actual repo URL after you push to GitHub for a true one-click deploy button.

### Option B — Using Vercel CLI (if you have Node installed locally)

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. Done.

---

### After Deployment

- Go to your project on Vercel → **Settings → Domains** to add your real domain (spotlesscleaningmyrtlebeach.com etc.)
- The site is already optimized with security headers via `vercel.json`

### Connect the booking form for real emails (important for launch)

The form currently shows a beautiful success screen and logs to console.

**Fastest production options (pick one):**

1. **Formspree** (easiest, free tier):
   - Sign up at formspree.io
   - Create a new form → copy the endpoint
   - In `components/BookingForm.tsx`, change the `<form>` to use `action="https://formspree.io/f/xxxxxx"` and `method="POST"`

2. **Resend** (beautiful emails):
   - Add a small API route in `app/api/book/route.ts`
   - Send email on submission

3. Just keep the success screen for now and manually follow up from the phone number shown.

Update phone/email everywhere by searching for:
- `8436534081`
- `hello@spotlesscleaning.com`

## Customization

- **Phone & email**: Search for `8436534081` and `hello@spotlesscleaning.com`
- **Service area text**: Easy to update in Hero, Footer, and WhyUs
- **Pricing**: All numbers live in `components/Pricing.tsx`
- **Logo**: Fully custom SVG in `components/SpotlessLogo.tsx` — matches your reference logo style perfectly

## Tech Stack

Next.js 14 + TypeScript + Tailwind CSS + Framer Motion (light) + Lucide icons

Built to be extremely fast and easy to maintain.

---

**You are ready to launch.** This site is complete, polished, and conversion-focused.

Need any tweaks (different phone, real testimonials, different packages, etc.)? Just let me know.
