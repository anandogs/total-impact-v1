# Total Impact Website

A modern, responsive website built with Astro showcasing Total Impact's services in impact measurement, management, communication, and technology.

## 🚀 Quick Start

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/                     # Static assets served directly
│   ├── images/                # All website images
│   │   ├── services/          # Service icons
│   │   ├── portfolio/         # Portfolio/report images
│   │   ├── partners/          # Partner logos
│   │   ├── additional-services/ # Additional service icons
│   │   ├── hero-background.jpg
│   │   ├── about-main.jpg
│   │   ├── logo.png
│   │   └── footer-logo.png
│   └── favicon.svg
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── sections/          # Page sections
│   │   │   ├── Hero.astro
│   │   │   ├── About.astro
│   │   │   ├── Services.astro
│   │   │   ├── Portfolio.astro
│   │   │   ├── AdditionalServices.astro
│   │   │   ├── Partners.astro
│   │   │   └── Footer.astro
│   │   └── ui/                # Reusable UI elements
│   │       ├── Button.astro
│   │       ├── ServiceCard.astro
│   │       ├── PortfolioCard.astro
│   │       └── SectionDivider.astro
│   ├── data/
│   │   └── content.js         # All website content and data
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML layout
│   ├── pages/
│   │   └── index.astro        # Homepage
│   └── styles/
│       └── global.css         # Global styles and CSS variables
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🎨 Design System

### CSS Variables
All colors and spacing are defined in `src/styles/global.css`:

```css
:root {
  --primary-color: rgb(22, 125, 128);    # Main brand color
  --text-dark: #1f2937;                  # Dark text
  --text-light: #6b7280;                 # Light text
  --white: #ffffff;                      # White
  --bg-light: #f8fafc;                   # Light background
  --bg-dark: #1f2937;                    # Dark background
  --section-padding: 5rem 0;             # Standard section padding
  --border-radius: 12px;                 # Standard border radius
  --shadow-light: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;           # Standard transition
}
```

### Typography
- **Headings**: Helvetica Neue, responsive sizing with `clamp()`
- **Body text**: Arial, consistent line-height and spacing
- **Font weights**: 300 (light), 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold)

### Button Variants
- **Primary**: Teal background (`rgb(22, 125, 128)`)
- **Secondary**: Transparent with white border
- **Sizes**: Default and large

## 📝 Content Management

All website content is centralized in `src/data/content.js`:

### Services
```javascript
export const services = [
  {
    icon: "/images/services/icon.png",
    title: "Service Name",
    description: "Service description...",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
];
```

### Portfolio Items
```javascript
export const portfolioItems = [
  {
    image: "/images/portfolio/report.jpg",
    alt: "Report description",
    impacts: ["Impact 1", "Impact 2", "Impact 3"]
  }
];
```

### Images
```javascript
export const images = {
  logo: "/images/logo.png",
  heroBackground: "/images/hero-background.jpg",
  aboutMain: "/images/about-main.jpg",
  footerLogo: "/images/footer-logo.png"
};
```

## 🖼️ Image Management

### Adding New Images
1. Place images in appropriate `public/images/` subdirectory
2. Use descriptive filenames (kebab-case)
3. Optimize images before uploading (WebP recommended)
4. Reference with absolute paths: `/images/folder/filename.ext`

### Image Guidelines
- **Services icons**: 60x60px, PNG with transparency
- **Portfolio images**: Max 800px width, maintain aspect ratio
- **Partner logos**: Max 120px height, preserve aspect ratio
- **Hero background**: 1920x1080px minimum, high quality

## 🏗️ Component Architecture

### Section Components (`src/components/sections/`)
Large page sections with specific functionality:
- Use semantic HTML5 elements (`<section>`, `<main>`, `<footer>`)
- Import data from `content.js`
- Responsive grid layouts
- Consistent padding using CSS variables

### UI Components (`src/components/ui/`)
Reusable interface elements:
- Accept props for customization
- Use TypeScript interfaces for prop typing
- Include hover and interaction states
- Follow consistent naming conventions

### Component Naming Conventions
- **PascalCase** for component files: `ServiceCard.astro`
- **camelCase** for props: `variant`, `iconSrc`
- **kebab-case** for CSS classes: `.service-item`, `.hero-content`

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

### Mobile-First Approach
```css
/* Base styles for mobile */
.component { }

/* Tablet and up */
@media (min-width: 768px) { }

/* Desktop and up */
@media (min-width: 1200px) { }
```

### Grid Layouts
- **Services**: 4 columns → 2 columns → 1 column
- **Portfolio**: 3 columns → 2 columns → 1 column
- **Footer**: 2 columns → 1 column (centered)

## 🎭 Animations and Interactions

### Built-in Animations
- **Fade in on scroll**: Intersection Observer for service/portfolio items
- **Hover effects**: Transform and shadow changes
- **Button ripple effect**: Click animation
- **Smooth scrolling**: For anchor navigation

### Adding New Animations
```css
.new-element {
  transition: var(--transition);
  transform: translateY(0);
}

.new-element:hover {
  transform: translateY(-5px);
}
```

## 🔧 Development Guidelines

### Making Content Changes
1. **Text updates**: Edit `src/data/content.js`
2. **Styling changes**: Update component `.astro` files or `global.css`
3. **New sections**: Create in `src/components/sections/`
4. **New UI elements**: Create in `src/components/ui/`

### Adding New Pages
1. Create `.astro` file in `src/pages/`
2. Import and use `Layout.astro`
3. Follow existing component patterns
4. Update navigation if needed

### Code Style
- **Indentation**: 2 spaces
- **Quotes**: Single quotes for JavaScript, double for HTML attributes
- **Semicolons**: Required
- **Component props**: Always define TypeScript interfaces

### Performance Best Practices
- Use Astro's static generation
- Optimize images before upload
- Leverage CSS variables for consistency
- Minimize JavaScript in components

## 🚀 Deployment

### Build Process
```sh
npm run build
```
Generates static files in `dist/` directory.

### Environment Setup
- **Node.js**: 18.20.8+ required
- **Package manager**: npm, pnpm, or yarn
- **Astro version**: 5.8.1+

## 🐛 Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths start with `/images/`
2. **Styles not applying**: Verify CSS variable usage
3. **Mobile layout issues**: Test responsive breakpoints
4. **TypeScript errors**: Check component prop interfaces

### Debug Mode
```sh
npm run dev -- --verbose
```