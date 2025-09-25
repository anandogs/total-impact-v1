# replit.md

## Overview

Total Impact Website is a modern Astro-based website designed for content management through Markdown files. The project serves as a content management system (CMS) for showcasing impact measurement services, portfolio work, partner organizations, and additional services. The architecture emphasizes simplicity and accessibility, allowing non-technical users to add, edit, or remove content without touching code through the structured Markdown file system.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Astro 5.8.1**: Static site generator chosen for optimal performance and SEO capabilities
- **Vite**: Build tool providing fast development server and hot module replacement
- **TypeScript**: Type safety for improved development experience and code reliability

### Content Management Architecture
- **File-based CMS**: Content managed through structured Markdown files in `/src/content/` directory
- **Astro Content Collections**: Type-safe content management with Zod schema validation
- **Automatic content discovery**: New Markdown files automatically appear on the website

### Content Structure
The content is organized into four main collections:
- **Services**: "What We Do" section with icon-based service cards
- **Portfolio**: "Our Work So Far" section showcasing impact reports and case studies
- **Partners**: Partner logos carousel with optional website links
- **Additional Services**: "Other Key Services" section with image-based service cards

### Schema Validation
Each content collection uses Zod schemas to enforce data structure:
- Required fields validation (title, images, descriptions, features)
- Optional fields support (website URLs, report URLs)
- Order-based content sorting
- Featured content flagging for portfolio items

### Asset Management
- Static assets stored in `/public/images/` directory
- Organized by content type (services, portfolio, partners, additional-services)
- Image paths referenced directly in content frontmatter

### Development Environment
- Hot reload development server on port 4321
- Replit-optimized hosting configuration with custom allowed hosts
- TypeScript configuration with strict type checking

## External Dependencies

### Core Framework Dependencies
- **Astro**: Static site generator and core framework
- **Vite**: Build tool and development server

### Content Management
- **Zod**: Runtime type validation for content schemas
- **YAML/Markdown**: Content format and frontmatter parsing

### Deployment Platform
- **Replit**: Development and hosting environment with custom domain configuration

### Asset Dependencies
- External image assets referenced in content files
- No external CDNs or image processing services currently integrated

The architecture prioritizes simplicity and maintainability, enabling content creators to manage website content through familiar Markdown editing without requiring technical expertise or database management.