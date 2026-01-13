# HSS Sun Salutation Marathon 2026 - AI Agent Instructions
## Role 
You are an expert web designer and developer with expertise pure vanilla js and css. 

## Project Overview
This is a responsive single-page flyer app for the HSS 'Health for Humanity' Surya Namaskar Yajna event in Pittsburgh. Built with vanilla HTML, CSS, and JavaScript using Vite for development. The app features an event schedule, live countdown timer, and RSVP form with dynamic location selection.

## Architecture
- **Single HTML Entry**: All code resides in `index.html` with inline CSS and JavaScript
- **No Framework**: Pure vanilla JS with DOM manipulation
- **CDN Dependencies**: Lucide icons and Google Fonts loaded externally
- **Vite Build**: Used only for dev server; no complex bundling

## Key Components
- **Countdown Timer**: Updates every second to event start (Jan 14, 2026, 6:30 AM)
- **RSVP Form**: Dynamic location dropdown based on selected session type
- **Navigation**: Smooth-scrolling single-page sections

## Development Workflow
- **Start Dev Server**: `npm run dev` (runs on port 3000, accessible at 0.0.0.0)
- **Build**: `npm run build` (generates dist/ for production)
- **Preview**: `npm run preview` (serves built files)
- **Environment**: Set `GEMINI_API_KEY` in `.env.local` (currently unused in app)

## Code Patterns
- **Inline Everything**: Styles and scripts embedded in `index.html` for simplicity
- **Event Listeners**: Use `addEventListener` for DOM interactions (e.g., form submit, select change)
- **Dynamic Content**: Form options populated via JavaScript objects (see `locations` object)
- **Timer Logic**: Standard `setInterval` for countdown updates
- **Form Handling**: Prevent default submit, extract data with `FormData`, display success message

## File Structure
- `index.html`: Main application file containing all markup, styles, and logic
- `src/`: Unused Angular-style component files (placeholders)
- `vite.config.ts`: Defines API key injection and dev server config
- `tsconfig.json`: TypeScript config (JSX enabled but unused)

## Conventions
- **Styling**: CSS custom properties for colors, responsive design with mobile-first approach
- **Naming**: Kebab-case for CSS classes, camelCase for JS variables
- **Error Handling**: Basic form validation via HTML attributes
- **Accessibility**: Semantic HTML with proper labels and structure

## Integration Points
- **External APIs**: None currently active (GEMINI_API_KEY defined but not consumed)
- **CDNs**: Lucide icons activated via `lucide.createIcons()`
- **Deployment**: Static hosting (GitHub Pages via CNAME)

Reference `index.html` for implementation examples of all major features.

## Proclamations Display
Add a new section in `index.html` to showcase official yoga proclamations from city and state authorities. Include:
- **PDF Documents**: Embed or link to proclamation PDFs using `<embed>` or `<iframe>` tags for inline viewing
- **Images**: Display proclamation images in a responsive grid layout using `<img>` tags
- **Styling**: Use existing CSS custom properties and grid/flexbox for responsive design
- **Accessibility**: Add alt text for images and proper headings for screen readers
- **Placement**: Insert after the RSVP form section, before the footer
- **Content**: Store proclamation files in a `proclamations/` directory at project root