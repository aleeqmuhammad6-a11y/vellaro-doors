# Vellaro Doors — Premium Doors Website

> **Premium Doors Crafted for Lasting Impressions**  
> Serving Florida 🌴 • Alabama ⭐ • South Carolina 🌊

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom CSS Variables
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Email**: EmailJS (configure in `Contact.tsx`)
- **Fonts**: Cormorant Garamond + Montserrat (Google Fonts)
- **Deployment**: Vercel

## Sections

1. **Navbar** — Sticky, blur-on-scroll, mobile hamburger menu
2. **Hero** — Full-screen dark luxury, animated stats, door silhouette
3. **Why Vellaro** — 6 feature cards with hover effects
4. **Our Collection** — Interactive carousel with 5 door styles
5. **Marquee** — Auto-scrolling brand strip
6. **States Served** — Florida, Alabama, South Carolina
7. **CTA Banner** — "Ready to Transform Your Space?"
8. **Contact Form** — With validation, state selector, door type selector
9. **Footer** — Full footer with social links + large brand watermark

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

```bash
vercel --prod
```

Or connect this GitHub repo to Vercel for automatic deployments on push.

## Email Setup (Contact Form)

To activate the contact form, sign up at [emailjs.com](https://emailjs.com) and add to `Contact.tsx`:

```ts
import emailjs from '@emailjs/browser';
// Replace with your credentials:
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', data, 'PUBLIC_KEY');
```

---

Built with ❤️ for Vellaro Doors | FL • AL • SC
