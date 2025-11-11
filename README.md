# 🔥 Mousami Kalidindi - Wasteland Engineer Portfolio

A **Mad Max-inspired** developer portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. This portfolio showcases my journey as a full-stack cloud engineer with a gritty, post-apocalyptic aesthetic.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🌵 About This Project

This portfolio is not your typical polished corporate site. It's a **wasteland survival kit** — gritty, raw, and engineered to last. Built with a Mad Max aesthetic, it reflects my journey through:

- **4+ years** of cloud engineering and DevOps
- **Enterprise-scale** microservices and distributed systems
- **99.9% uptime** battle-tested infrastructure
- Current exploration of **Agentic AI** and custom GPT solutions

---

## ⚙️ Tech Stack

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS 3.3** - Utility-first CSS framework

### Animation & Effects
- **Framer Motion** - Smooth animations and transitions
- **Custom Canvas** - Particle effects for atmospheric background
- **React Icons** - Icon library for tech stack and UI elements

### Styling
- **Custom Wasteland Theme** - Post-apocalyptic color palette
  - `#0A0A0A` - Deep black background
  - `#E86A33` - Rust orange accent
  - `#F9D342` - Sand yellow highlight
  - `#1E1E1E` - Dark surface
- **Orbitron & Share Tech Mono** - Google Fonts for that tech/industrial feel

---

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+** installed
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/mousami-code/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

---

## 📂 Project Structure

```
mousami-port/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main page component
│   └── globals.css        # Global styles and custom animations
├── components/
│   ├── Hero.js            # Landing section with animated intro
│   ├── Navigation.js      # Sticky navigation bar
│   ├── About.js           # Profile and skills overview
│   ├── Experience.js      # Work history as "missions"
│   ├── TechStack.js       # Interactive tech badges
│   ├── Projects.js        # Project showcase
│   ├── Contact.js         # Terminal-style contact form
│   └── Particles.js       # Background particle effects
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

---

## 🎨 Features

### 🔥 **Cinematic Hero Section**
- Animated typewriter effect
- Metallic gradient text
- Stats dashboard
- CTA buttons with hover effects

### 👤 **About Section**
- Personal profile with bio
- Skills matrix organized by category
- Contact information display
- Location and education stats

### 🎯 **Experience Timeline**
- Expandable mission cards
- Detailed achievement lists
- Company logos and tech tags
- Education credentials

### 💻 **Interactive Tech Stack**
- Filterable by category
- Animated hover effects with glow
- Skill level indicators
- 50+ technologies displayed

### 🏆 **Projects Showcase**
- Grid layout with project cards
- Impact metrics for each project
- Tech stack badges
- GitHub profile CTA

### 📮 **Terminal-Style Contact**
- Retro terminal UI
- Form validation
- Animated submission states
- Direct contact links

### ✨ **Atmospheric Effects**
- Canvas-based particle system
- Floating dust and sparks
- Connection lines between particles
- Subtle animations throughout

---

## 🎯 Customization

### Update Your Information

**Personal Details** (`components/About.js`):
```javascript
// Update your contact info, bio, and skills
```

**Experience** (`components/Experience.js`):
```javascript
const experienceData = [
  {
    company: 'Your Company',
    role: 'Your Role',
    period: 'Start – End',
    achievements: [
      'Your achievement 1',
      'Your achievement 2',
    ],
    tags: ['Tech1', 'Tech2'],
  },
]
```

**Tech Stack** (`components/TechStack.js`):
```javascript
// Add/remove technologies and adjust skill levels
```

### Customize Colors

Edit `tailwind.config.js`:
```javascript
wasteland: {
  black: '#0A0A0A',   // Background
  rust: '#E86A33',    // Primary accent
  sand: '#F9D342',    // Secondary accent
  metal: '#3A3A3A',   // Borders
}
```

### Modify Animations

Global animations in `app/globals.css`:
```css
@keyframes your-animation {
  /* Add custom keyframes */
}
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Deploy to GitHub Pages

Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "next build && next export && gh-pages -d out"
}
```

---

## 📧 Contact

**Mousami Kalidindi**

- 📧 Email: [mousamikalidindi01@gmail.com](mailto:mousamikalidindi01@gmail.com)
- 📱 Phone: +1 (940) 977-1702
- 💼 GitHub: [@mousami-code](https://github.com/mousami-code)
- 📍 Location: Texas, USA

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- **Mad Max** franchise for aesthetic inspiration
- **Next.js** team for amazing framework
- **Tailwind CSS** for making styling enjoyable
- **Framer Motion** for smooth animations
- **Google Fonts** for Orbitron and Share Tech Mono

---

## 🔧 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or run on different port
npm run dev -- -p 3001
```

### Canvas not rendering
Make sure you're using a modern browser with HTML5 Canvas support.

### Animation performance issues
Reduce particle count in `components/Particles.js`:
```javascript
const particleCount = 30  // Reduce from 50
const sparkCount = 10     // Reduce from 15
```

---

## 🚀 Future Enhancements

- [ ] Blog section for technical articles
- [ ] Dark/Light theme toggle (wasteland/cyberpunk modes)
- [ ] 3D background effects with Three.js
- [ ] Resume download functionality
- [ ] Testimonials section
- [ ] Project filtering and search
- [ ] Analytics integration
- [ ] SEO optimization

---

<div align="center">

**Built with 💪 in the digital wasteland**

**MOUSAMI KALIDINDI** | **2025**

*Engineering reliability in hostile environments*

</div>

