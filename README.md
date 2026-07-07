# Aaliyah Momodu - Frontend Developer Portfolio ✨

> A personal portfolio that showcases my frontend engineering experiences/projects.

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)](https://www.framer.com/motion/)

## ✨ Overview

This portfolio represents a my projects throughout my years . It combines:


## Tech Stack

### Core Technologies
- **Next.js 14** (App Router) - React framework with SSR/SSG
- **TypeScript 5.3** - Type-safe development
- **Tailwind CSS 3.4** - Utility-first styling
- **shadcn/ui** - Accessible component primitives
- **Framer Motion 11** - Declarative animations
- **Zustand** - Lightweight state management
- **Zod** - Schema validation & type safety

### Testing & Quality
- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Lighthouse** - Performance auditing
- **axe DevTools** - Accessibility testing
- **OWASP ZAP** - Security awareness

### Animation Libraries
- **Aceternity UI** - Premium animated backgrounds & cards
- **Magic UI** - Animated UI components (marquees, loaders)
- **React Spring** - Physics-based animations
- **Lottie** - JSON-based animations (when needed)

### Deployment
- **Vercel** - Optimized for Next.js
- **Netlify** - Alternative deployment option

## 📁 Project Structure

```
PORTFOLIO/
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout with fonts & theme
│   └── page.tsx             # Main page with intro & sections
├── components/
│   ├── providers/
│   │   └── ThemeProvider.tsx    # Dark mode context
│   ├── sections/
│   │   ├── Hero.tsx             # Hero section with animated name
│   │   ├── About.tsx            # Professional summary
│   │   ├── Skills.tsx           # Skills with icons
│   │   ├── Projects.tsx         # Project showcase
│   │   ├── Experience.tsx       # Work timeline
│   │   ├── Education.tsx        # Education history
│   │   ├── Certifications.tsx   # Certifications & achievements
│   │   ├── Blog.tsx             # Medium articles
│   │   ├── Contact.tsx          # Contact form
│   │   └── Footer.tsx           # Footer with social links
│   └── ui/
│       ├── AnimatedBackground.tsx   # Background animations
│       ├── AnimatedCard.tsx         # 3D tilt cards
│       ├── BeamAnimation.tsx        # Aceternity-style beams
│       ├── CinematicIntro.tsx       # Optional intro animation
│       ├── MagicCard.tsx            # Shimmer effect cards
│       ├── Navigation.tsx            # Sticky navigation
│       ├── ParallaxSection.tsx      # Parallax scrolling
│       ├── SocialLinks.tsx           # Social media icons
│       └── ThemeToggle.tsx           # Dark mode toggle
├── lib/
│   ├── animations.ts        # Centralized animation variants
│   ├── skillIcons.tsx       # Technology icon mappings
│   └── utils.ts            # Utility functions
├── public/
│   └── images/
│       └── profile.jpg     # Profile picture
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/aaliyahwithadoublea/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## 🎭 Key Features

### 1. Flying Princess Mascot (Iconic Brand Element) ✨
- Stylized, elegant flying princess/fairy character
- Flies gently across sections of the site
- Leaves subtle sparkle and glow trails
- Interacts with UI elements
- Can be toggled ON/OFF
- Respects `prefers-reduced-motion`
- **Core brand element** that makes the portfolio unforgettable

### 2. Cinematic Intro (Optional & Skippable)
- Magical welcome animation with flying princess
- Sparkle effects and glitter transitions
- "Welcome to Aaliyah's World" text animation
- Respects `prefers-reduced-motion`
- Auto-skips after 3.5 seconds
- Remembers user preference

### 3. Animated Hero Section
- Staggered name reveal: "Aaliyah Momodu" with cinematic glow
- Animated gradient underline
- Floating sparkle background elements
- Profile picture with hover effects
- **Country flags** (France 🇫🇷 & Nigeria 🇳🇬) with hover animations
- Social links with micro-interactions
- Flying princess presence

### 4. Country Flag Integration
- Dynamic flag display using flag API
- France flag for current location (Paris)
- Nigeria flag for heritage
- Hover tooltips with location info
- Smooth animations on interaction

### 5. MAXIMAL Design Elements
- **Floating Elements** - Sparkles, hearts, stars throughout
- **Decorative Bows** - Animated bow elements
- **Magical Trails** - Sparkle trails following interactions
- **Cinematic Glow** - Pulsing glow effects on key elements
- **Layered Visuals** - Multiple depth layers
- **3D Tilt Cards** - Interactive mouse-tracking effects
- **Shimmer Effects** - Magic UI-inspired hover states
- **Beam Animations** - Aceternity UI-style background beams
- **Parallax Scrolling** - Depth and immersion
- **Micro-interactions** - Button pulses, hover feedback

### 4. Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- `prefers-reduced-motion` support
- Proper ARIA labels
- Semantic HTML

### 5. Performance
- Optimized images
- Code splitting
- Lazy loading
- Efficient animations
- Lighthouse score: 90+ (target)

## 📝 Sections

1. **Hero** - Cinematic first impression with flying princess, animated name reveal, country flags
2. **About** - Professional summary with glassmorphism, princess interaction, decorative bows
3. **Skills** - Organized by category with animated icons
4. **Projects** - High-end project cards with 3D effects and magical trails
5. **Experience** - Animated timeline with scroll-driven storytelling
6. **Education** - Academic background with flag integration
7. **Certifications** - Professional achievements
8. **Blog** - Medium articles showcase with featured post
9. **Contact** - Expressive form with validation and animated feedback
10. **Footer** - Cinematic outro with soft glow

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the pastel palette:

```typescript
pastel: {
  pink: { /* ... */ },
  lavender: { /* ... */ },
  peach: { /* ... */ },
  nude: { /* ... */ },
}
```

### Animations
Modify `lib/animations.ts` to adjust animation variants.

### Content
Update section components in `components/sections/` with your information.

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## 📊 Performance

- **Lighthouse Performance**: 90+ (target)
- **Accessibility**: 100 (target)
- **Best Practices**: 95+ (target)
- **SEO**: 100 (target)

## 🔒 Security

- Input validation with Zod
- XSS protection
- Secure form handling
- OWASP best practices awareness

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interactions
- Optimized for all screen sizes

## 🌙 Dark Mode

- System preference detection
- Manual toggle
- Persistent user choice
- Smooth transitions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Developer

**Aaliyah Momodu**
- **Role**: Mid-Level Frontend Developer
- **Location**: Paris, France
- **GitHub**: [@aaliyahwithadoublea](https://github.com/aaliyahwithadoublea)
- **LinkedIn**: [aaliyahmomodu](https://www.linkedin.com/in/aaliyahmomodu)
- **Email**: momoduaaliyah1@gmail.com
- **Medium**: [@momoduaaliyah1](https://medium.com/@momoduaaliyah1)

## 🙏 Acknowledgments

- [Aceternity UI](https://ui.aceternity.com/) - Animation inspiration
- [Magic UI](https://magicui.design/) - Component patterns
- [shadcn/ui](https://ui.shadcn.com/) - Component primitives
- [Framer Motion](https://www.framer.com/motion/) - Animation library

---

**Built with ❤️ and Next.js**

*"Princess Energy × Serious Tech Engineer"*
