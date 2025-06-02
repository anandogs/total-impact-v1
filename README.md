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

# Content Management Guide - Markdown Edition 📝

This guide helps you easily manage website content using simple Markdown files. No coding knowledge required!

## 📁 Content Structure

All content is stored in the `src/content/` folder:

```
src/content/
├── services/              # What We Do section
├── portfolio/             # Our Work So Far section  
├── partners/              # Partner information
└── additional-services/   # Other Key Services section
```

## 📝 What is Markdown?

Markdown is a simple way to format text using plain text. Here are the basics:

```markdown
# This is a main heading
## This is a subheading
### This is a smaller heading

**This text is bold**
*This text is italic*

- This is a bullet point
- Another bullet point
- And another one

This is a regular paragraph with normal text.
```

## ✏️ Editing Services

Location: `src/content/services/`

Each service is a `.md` file with frontmatter (info between `---` lines) and content below:

```markdown
---
title: "Your Service Name"
icon: "/images/services/your-icon.png"
description: "Brief description of what this service does."
features:
  - "Feature or benefit 1"
  - "Feature or benefit 2" 
  - "Feature or benefit 3"
order: 5
---

# Service Name

Write detailed information about this service here. You can use:

## Subheadings

Regular paragraphs with more explanation.

### Key Benefits

- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- Regular text for descriptions

## How We Help

Explain your process, methodology, or approach here.
```

### 📝 Service Fields Explained:
- **title**: Service name (appears as heading on website)
- **icon**: Path to service icon image
- **description**: Brief explanation (shows on service card)
- **features**: List of 3-4 key features/benefits
- **order**: Controls display order (1 = first, 2 = second, etc.)
- **Content below `---`**: Detailed information (for future service pages)

### ✅ Service Tips:
- Keep descriptions under 150 characters
- Use action-oriented language
- List 3-4 concrete features
- Upload icons to `public/images/services/`
- Keep file names lowercase with hyphens: `impact-measurement.md`

## 📊 Managing Portfolio Items

Location: `src/content/portfolio/`

Portfolio files include project details and impact metrics:

```markdown
---
title: "Report Name"
image: "/images/portfolio/report-image.jpg"
alt: "Description of the image"
impacts:
  - "306 Metric Tonnes CO2e emissions saved"
  - "88 MT virgin metals saved"
  - "200.7 MT total waste avoided"
order: 1
featured: true
---

# Report Title

Write a detailed description of the report and project here.

## Key Highlights

Explain the most important outcomes and findings.

## Methodology

Describe how the impact was measured:
- Life Cycle Assessment (LCA)
- Social Return on Investment (SROI)
- Stakeholder surveys

## Results

Detail the specific outcomes and their significance.
```

### 📝 Portfolio Fields Explained:
- **title**: Report/project name
- **image**: Path to report cover image
- **alt**: Image description for accessibility
- **impacts**: List of measurable outcomes (shows on card)
- **order**: Display order (1 = first)
- **featured**: `true` or `false` - highlights important reports
- **Content**: Full project story and details

## 🤝 Adding Partners

Location: `src/content/partners/`

Partner files include basic info and collaboration details:

```markdown
---
name: "Partner Company Name"
logo: "/images/partners/partner-logo.png"
order: 1
---

# Partnership with [Company Name]

Describe your collaboration and partnership focus.

## What We Do Together

Explain the specific areas of collaboration:
- Impact measurement projects
- Sustainability reporting
- Community engagement

## Partnership Highlights

Share notable achievements or projects from this partnership.
```

## 🎯 Additional Services

Location: `src/content/additional-services/`

These appear in the dark section of the website:

```markdown
---
title: "SERVICE NAME"
image: "/images/additional-services/service-icon.png" 
description: "Detailed explanation of this specialized service."
features:
  - "Specific capability 1"
  - "Specific capability 2"
  - "Specific capability 3"
order: 1
---

# Service Name

Provide detailed information about this additional service.

## Our Approach

Explain your methodology and approach.

## Key Benefits

List the main advantages and outcomes clients can expect.
```

## 🖼️ Image Guidelines

### File Locations:
- **Service icons**: `public/images/services/`
- **Portfolio images**: `public/images/portfolio/`
- **Partner logos**: `public/images/partners/`
- **Additional service icons**: `public/images/additional-services/`

### Image Requirements:
- **Service icons**: 60x60px, PNG with transparency
- **Portfolio images**: 800px width max, JPG/PNG
- **Partner logos**: 120px height max, PNG preferred
- **File names**: Use lowercase with hyphens (e.g., `impact-measurement.png`)

## 📝 Content Writing Tips

### Frontmatter (Between `---` lines):
- **Always use quotes** around text: `title: "My Service"`
- **Use proper list format** for arrays:
  ```yaml
  features:
    - "First feature"
    - "Second feature"
  ```
- **Numbers don't need quotes**: `order: 1`
- **Booleans**: `featured: true` or `featured: false`

### Content Writing:
- **Use headings** to organize information (`#`, `##`, `###`)
- **Bold important terms**: `**important**`
- **Create lists** with `-` or `*`
- **Keep paragraphs short** for better readability

### Services & Additional Services:
- **Titles**: Keep under 20 characters
- **Descriptions**: 1-2 sentences, focus on benefits
- **Features**: Start with action words (Design, Build, Create, etc.)

### Portfolio Items:
- **Titles**: Include company/project name
- **Impacts**: Use specific numbers and metrics
- **Content**: Tell the complete story of the project's success

## 📱 Markdown Editors

### Recommended Free Editors:
- **Typora** (Windows/Mac) - Live preview while you type
- **Mark Text** (Windows/Mac/Linux) - Simple and clean
- **VS Code** (All platforms) - With Markdown preview extension
- **Online**: Dillinger.io, StackEdit.io

### Editor Features to Look For:
- **Live preview** - See formatted result as you type
- **Syntax highlighting** - Colors to help identify markdown
- **File management** - Easy access to your content folders

## 🔄 Making Changes

### To Add New Content:
1. **Create new `.md` file** in appropriate folder
2. **Copy template** from existing file
3. **Update frontmatter** with your information
4. **Write content** using Markdown formatting
5. **Save file** with descriptive name

### To Edit Existing Content:
1. **Open the `.md` file** in your editor
2. **Make changes** to frontmatter or content
3. **Save the file**
4. **Test locally** (if technical person available)

### To Reorder Items:
- **Change the `order` number** in frontmatter
- Lower numbers appear first (1, 2, 3, etc.)

## ❓ Getting Help

**Syntax Questions**: Check the Markdown basics section above
**Can't Find File**: Check the folder structure diagram
**Made a Mistake**: Don't worry! All changes can be reversed
**Need New Images**: Follow the image guidelines section

### Quick Troubleshooting:
- **Missing quotes** around text values in frontmatter
- **Wrong indentation** in lists (use 2 spaces)
- **Incorrect file extension** (should be `.md`)
- **Missing frontmatter** (content between `---` lines)

---

**Remember**: Markdown files are just text files - you can edit them in any text editor, even Notepad! But a good Markdown editor makes the experience much more pleasant.