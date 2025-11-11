# 🎯 Cursor AI Instructions for This Portfolio

This document contains instructions you can give to **Cursor AI** to help you customize and extend this Mad Max-themed portfolio.

---

## 🚀 Getting Started Instructions

### If you want to run the portfolio:

```
Install all dependencies and run the development server for this Next.js portfolio.
```

### If you want to build for production:

```
Build this Next.js portfolio for production deployment.
```

---

## ✏️ Customization Instructions

### Update Personal Information

```
Update the About section in components/About.js with my new bio, skills, and contact information:
- Bio: [your new bio]
- Email: [your email]
- Phone: [your phone]
- Location: [your location]
```

### Add New Experience

```
Add a new job experience to components/Experience.js:
- Company: [company name]
- Role: [your role]
- Period: [start date] – [end date]
- Achievements: [list your achievements]
- Tech Stack: [technologies used]
Format it as a "mission" like the existing ones.
```

### Update Tech Stack

```
In components/TechStack.js, add these new technologies to my arsenal:
- [Technology 1] in the [category] category
- [Technology 2] in the [category] category
Give them appropriate skill levels and icons.
```

### Add New Project

```
Add a new project to components/Projects.js:
- Title: [project title]
- Description: [project description]
- Tech Stack: [technologies]
- Impact: [measurable impact]
- Type: [project type - e.g., Cloud Infrastructure, Full-Stack Platform]
```

### Change Color Scheme

```
Update the color scheme in tailwind.config.js:
- Change wasteland-rust from #E86A33 to [new color]
- Change wasteland-sand from #F9D342 to [new color]
Make sure to update all references throughout the components.
```

### Modify Hero Section

```
In components/Hero.js:
- Change the tagline from "Engineering reliability in a digital wasteland" to "[your new tagline]"
- Update the role badges to: [list your new roles]
- Modify the stats to show: [your stats]
```

---

## 🎨 Styling Instructions

### Make it less gritty / more professional

```
Soften the Mad Max aesthetic by:
- Reducing particle effects opacity
- Changing border styles from 2px to 1px
- Using more subtle colors (grays instead of rust/sand)
- Removing corner bracket decorations
- Simplifying animations
```

### Add a light mode

```
Create a light mode theme for this portfolio:
- Add a theme toggle button in the navigation
- Create a new color scheme with light backgrounds
- Preserve the wasteland aesthetic but with lighter tones
- Use React context or localStorage to persist the theme
```

### Increase animation speed

```
In all components using Framer Motion, reduce animation duration from 0.6s to 0.3s for snappier transitions.
```

---

## 🔧 Feature Addition Instructions

### Add a Blog Section

```
Create a new blog section for this portfolio:
- Add a new route /blog using Next.js App Router
- Create a blog list page showing article cards in wasteland style
- Add MDX support for writing blog posts
- Include reading time and tags
- Keep the Mad Max aesthetic consistent
```

### Add Resume Download

```
Add a resume download button:
- Place it in the Hero section and Contact section
- Style it with wasteland theme (rust border, etc.)
- Make it download a PDF from /public/resume.pdf
- Add a download icon from react-icons
```

### Integrate Real Contact Form

```
Update the contact form in components/Contact.js to actually send emails:
- Use Formspree API or EmailJS
- Keep the terminal styling
- Add proper error handling
- Show success/error messages with wasteland styling
```

### Add Analytics

```
Integrate Google Analytics (or Plausible) into this Next.js portfolio:
- Add tracking to app/layout.js
- Track page views and form submissions
- Keep it privacy-friendly
```

### Add Project Filtering

```
In components/Projects.js, add filtering by project type:
- Add filter buttons at the top (ALL, Cloud Infrastructure, Full-Stack, etc.)
- Animate project cards when filtering
- Keep the wasteland button styling
```

---

## 🐛 Bug Fix Instructions

### If animations aren't working:

```
Fix Framer Motion animations that aren't triggering on scroll. Check useInView hooks and make sure the margin and once properties are set correctly.
```

### If particles slow down the site:

```
Optimize the particle system in components/Particles.js by:
- Reducing particle count
- Simplifying the animation loop
- Adding performance checks
```

### If mobile menu isn't working:

```
Fix the mobile navigation menu in components/Navigation.js. Make sure the hamburger icon toggles the menu and smooth scroll works on mobile.
```

---

## 🚀 Deployment Instructions

### Deploy to Vercel

```
Help me deploy this Next.js portfolio to Vercel:
1. Create a vercel.json configuration if needed
2. Explain what environment variables I need
3. Guide me through the Vercel dashboard setup
```

### Deploy to Netlify

```
Configure this portfolio for Netlify deployment:
- Create a netlify.toml file
- Set up the build command and publish directory
- Configure redirects for the SPA
```

### Deploy to GitHub Pages

```
Set up this portfolio for GitHub Pages deployment:
- Add gh-pages package
- Create a deploy script in package.json
- Configure Next.js for static export
- Add necessary GitHub Actions workflow
```

---

## 📱 Responsive Design Instructions

### Fix mobile layout issues

```
Improve mobile responsiveness for screens under 768px:
- Stack all two-column layouts vertically
- Reduce font sizes appropriately
- Make touch targets at least 44px
- Test the particle effects on mobile
```

### Optimize for tablets

```
Add tablet-specific breakpoints (md: 768px to 1024px) to improve layout on iPad and similar devices.
```

---

## ⚡ Performance Instructions

### Optimize images

```
Add Next.js Image component optimization:
- Replace any img tags with next/image
- Add proper width, height, and alt attributes
- Implement lazy loading
```

### Reduce bundle size

```
Analyze and reduce the JavaScript bundle size:
- Check what's taking up space
- Lazy load components that aren't immediately visible
- Remove unused dependencies
- Use dynamic imports where appropriate
```

### Improve loading speed

```
Optimize the portfolio for better Core Web Vitals:
- Add loading skeletons
- Implement code splitting
- Optimize font loading
- Reduce Cumulative Layout Shift
```

---

## 🎯 SEO Instructions

### Improve SEO

```
Enhance SEO for this portfolio:
- Add proper meta tags to app/layout.js
- Create an Open Graph image
- Add structured data (JSON-LD) for Person
- Generate a sitemap.xml
- Add robots.txt
```

### Add meta descriptions

```
Add unique meta descriptions for each section that would be a separate page if needed.
```

---

## 🔐 Security Instructions

### Sanitize form inputs

```
Add input sanitization and validation to the contact form to prevent XSS attacks.
```

### Add rate limiting

```
Implement rate limiting on the contact form to prevent spam submissions.
```

---

## 💡 General Modification Template

Use this template for any other modifications:

```
In [component/file name]:
- [What you want to change]
- [New behavior or appearance]
- [Any specific requirements]
Keep the Mad Max wasteland aesthetic consistent.
```

---

## 🎨 Style Guide Reference

When asking Cursor to create new components, reference this style guide:

```
Create a new [component name] component following the wasteland theme:
- Use wasteland color palette (rust #E86A33, sand #F9D342, black #0A0A0A)
- Add corner bracket decorations with border-rust
- Use Orbitron font for headings, Share Tech Mono for body
- Include Framer Motion animations (0.6s duration)
- Add hover effects with glow shadows
- Keep terminal/technical aesthetic
- Make it mobile responsive
```

---

## 📚 Architecture Notes

When discussing architecture with Cursor:

**Component Structure:**
- Each section is a separate component in `/components`
- Main page is in `/app/page.js`
- Global styles in `/app/globals.css`
- Tailwind config in `tailwind.config.js`

**Animation Pattern:**
- Use `useInView` from Framer Motion
- Set `once: true` to animate only on first view
- Use `margin: '-100px'` for early trigger
- Stagger animations with delays

**Color Usage:**
- Primary accent: `wasteland-rust` (#E86A33)
- Secondary accent: `wasteland-sand` (#F9D342)
- Background: `wasteland-black` (#0A0A0A)
- Surface: `wasteland-dark` (#1E1E1E)

---

<div align="center">

**Ready to build something that survives? Give these instructions to Cursor AI!**

</div>

