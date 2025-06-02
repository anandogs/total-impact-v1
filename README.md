# Total Impact Website - Content Management Guide

A modern Astro website with simple content management through Markdown files. Add, edit, or remove content without touching code!

## 🚀 Quick Start

```sh
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 How Content Works

All website content is managed through simple Markdown (`.md`) files in the `src/content/` folder. **When you add new files, they automatically appear on the website!**

```
src/content/
├── services/              # "What We Do" section (4 cards)
├── portfolio/             # "Our Work So Far" section
├── partners/              # Partner logos carousel
└── additional-services/   # "Other Key Services" section
```

## ✏️ Adding New Content

### 1. Services (What We Do Section)

**File location:** `src/content/services/`

Create a new `.md` file (e.g., `new-service.md`):

```markdown
---
title: "Your New Service"
icon: "/images/services/your-icon.png"
description: "Brief description of what this service does (150 chars max)."
features:
  - "Key feature or benefit 1"
  - "Key feature or benefit 2" 
  - "Key feature or benefit 3"
order: 5
---

# Your New Service

Write detailed information about this service here.

## Our Approach

Explain your methodology...

## Key Benefits

- Benefit one
- Benefit two
```

**Steps:**
1. Create new `.md` file in `src/content/services/`
2. Add service icon to `public/images/services/`
3. Copy template above and customize
4. Set `order` number for positioning (1 = first, 5 = last)

### 2. Portfolio Items (Our Work So Far)

**File location:** `src/content/portfolio/`

```markdown
---
title: "Project/Report Name"
image: "/images/portfolio/report-cover.jpg"
alt: "Description of the image"
impacts:
  - "306 Metric Tonnes CO2e emissions saved"
  - "88 MT virgin metals saved"
  - "200.7 MT total waste avoided"
order: 1
featured: true
---

# Project Name

Detailed description of the project and its outcomes...

## Key Findings

Important results and metrics...
```

**Steps:**
1. Add report image to `public/images/portfolio/`
2. Create new `.md` file with descriptive name
3. List specific impacts with numbers/metrics
4. Set `featured: true` for highlighted reports

### 3. Partners

**File location:** `src/content/partners/`

```markdown
---
name: "Partner Company Name"
logo: "/images/partners/partner-logo.png"
order: 1
---

# Partnership with [Company Name]

Description of your collaboration...

## What We Do Together

- Impact measurement projects
- Sustainability reporting
- Community engagement
```

**Steps:**
1. Add partner logo to `public/images/partners/`
2. Create `.md` file named after partner
3. Keep logos under 120px height for best display

### 4. Additional Services (Bottom Section)

**File location:** `src/content/additional-services/`

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

Detailed service information...
```

## 🖼️ Managing Images

### File Structure
```
public/images/
├── services/              # Service icons (60x60px PNG)
├── portfolio/             # Report covers (800px width max)
├── partners/              # Partner logos (120px height max)
├── additional-services/   # Service icons
├── logo.png              # Main logo
├── footer-logo.png       # Footer logo
├── hero-background.jpg   # Hero section background
└── about-main.jpg        # About section image
```

### Adding Images
1. **Save to correct folder** in `public/images/`
2. **Use descriptive names:** `impact-measurement.png`
3. **Reference in Markdown:** `/images/services/impact-measurement.png`
4. **Optimize first:** Compress images for web use

### Image Guidelines
- **Services:** 60x60px, PNG with transparency
- **Portfolio:** Max 800px width, JPG/PNG
- **Partners:** Max 120px height, PNG preferred
- **Names:** Use lowercase with hyphens

## 📋 Content Editing Rules

### Frontmatter (Between `---` lines)
```yaml
# ✅ CORRECT
title: "My Service Name"
description: "Service description here."
features:
  - "Feature one"
  - "Feature two"
order: 1
featured: true

# ❌ WRONG
title: My Service Name    # Missing quotes
features: Feature one     # Wrong list format
order: "1"               # Numbers don't need quotes
```

### Writing Tips
- **Titles:** Keep under 20 characters for services
- **Descriptions:** 1-2 sentences, focus on benefits
- **Features:** Start with action words (Design, Build, Create)
- **Impacts:** Use specific numbers and metrics
- **Order:** Lower numbers appear first (1, 2, 3...)

## 🔄 How Auto-Update Works

When you add a new `.md` file:

1. **Astro automatically detects** the new file
2. **`getCollection()`** function fetches all files from that folder
3. **Content appears** on the website immediately
4. **No code changes** needed!

The website sections automatically update when you:
- ✅ Add new `.md` files
- ✅ Edit existing files
- ✅ Change the `order` field
- ✅ Add new images

## 📱 Recommended Editors

### Free Markdown Editors
- **Typora** (Windows/Mac) - Live preview
- **Mark Text** (All platforms) - Clean interface
- **VS Code** (All platforms) - With Markdown preview
- **Online:** Dillinger.io, StackEdit.io

### What to Look For
- Live preview while you type
- File management for easy access
- Syntax highlighting

## 🎨 Customizing Other Content

### Hero Section Text
**File:** `src/components/sections/Hero.astro`
```html
<h1>Fuel your story with <span class="highlight">Impact Intelligence.</span></h1>
<h3>Ditch the guesswork. Measure metrics that matter.</h3>
```

### About Section Text
**File:** `src/components/sections/About.astro`
Edit the paragraphs in the `<p>` tags.

### Footer Links
**File:** `src/data/images.js`
```javascript
export const footerLinks = [
  { 
    title: "Questions?", 
    links: [{ text: "Contact us", href: "/contact" }] 
  }
  // Add more sections...
];
```

## 🎯 Quick Reference

### To Add New Content:
1. **Services:** Create `.md` in `src/content/services/`
2. **Portfolio:** Create `.md` in `src/content/portfolio/`
3. **Partners:** Create `.md` in `src/content/partners/`
4. **Additional Services:** Create `.md` in `src/content/additional-services/`

### To Change Order:
- Edit the `order: 1` number in the frontmatter
- Lower numbers appear first

### To Hide/Show:
- Delete the `.md` file to remove content
- Add new `.md` file to show content

### To Update Images:
1. Replace file in `public/images/folder/`
2. Keep the same filename, or
3. Update the path in the `.md` file

## 🐛 Common Issues

| Problem | Solution |
|---------|----------|
| Content not showing | Check frontmatter syntax (quotes, indentation) |
| Images not loading | Verify path starts with `/images/` |
| Wrong order | Check `order` numbers in frontmatter |
| Markdown not formatting | Check for missing blank lines |

## 🚀 Publishing Changes

### Local Testing
```sh
# Test your changes locally
npm run dev

# Build for production (optional)
npm run build
```

### Live Website Updates
The website is **hosted on Vercel** and automatically rebuilds when changes are pushed to the repository.

**Live site:** [totalimpact.co.in](https://totalimpact.co.in)

**Deployment Process:**
1. Make your content changes locally
2. Test with `npm run dev`
3. Commit and push changes to the repository
4. Vercel automatically detects the changes
5. Site rebuilds and deploys (usually takes 2-3 minutes)
6. Changes are live at totalimpact.co.in

### Deployment Status
You can monitor deployment status and view build logs in the Vercel dashboard. Any errors during build will be reported there.

## 📞 Need Help?

- **Markdown syntax:** [Basic Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- **File missing?** Check the folder structure above
- **Frontmatter errors?** Validate YAML syntax
- **Images not working?** Verify file paths and names

---

**Remember:** All content changes happen through simple text files. No coding required!