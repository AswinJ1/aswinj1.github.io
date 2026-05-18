# Minimalist, Text-Only Web Design Rules

These rules must be strictly followed when generating or updating the website to ensure a clean, "no-image" minimalist aesthetic.

## 1. Zero Image Policy
- **DO NOT** use `<img>` tags, CSS `background-image`, SVG illustrations, or icon libraries.
- The website must rely entirely on text, typography, and CSS-based structural elements (borders, dividers) for its visual identity.

## 2. Typography is the Interface
- **Font Stack**: Use clean, modern sans-serif fonts (e.g., `Inter`, `Helvetica Neue`, `system-ui`, `sans-serif`).
- **Hierarchy**: Establish clear visual hierarchy using font sizes, font weights (e.g., bold for headings, regular for body), and line heights.
- **Readability**: Body text should have a generous line-height (e.g., `1.6` or `1.7`) and a constrained maximum width (e.g., `max-w-2xl` or `65ch`) to ensure comfortable reading.

## 3. Spacing and Whitespace
- Embrace whitespace. Use generous margins and padding to separate sections and create breathing room around text blocks.
- Layouts should not feel cramped. The design should feel airy, open, and heavily padded.

## 4. Minimalist Color Palette
- **Background**: Use a soft, warm off-white (e.g., `#fafafa`, `#fbfbfb`) or pure white.
- **Text**: Use deep gray or soft black (e.g., `#1a1a1a`, `#333`) to reduce eye strain compared to pure `#000`.
- **Accents**: Use a single, subtle accent color for interactive elements (like a soft blue for specific links, e.g., `#0066cc`).

## 5. Structural Details
- Use subtle CSS borders (e.g., left borders for highlighted sections or blockquotes) to break up text without being obtrusive.
- Keep navigation clean, inline, and text-based. Buttons should be styled minimally (e.g., simple borders).

## 6. Performance and Accessibility
- Without images, the site should load instantly. Keep the DOM small and CSS light.
- Ensure high contrast ratios for all text.
- Use strict semantic HTML5 tags (`<header>`, `<main>`, `<article>`, `<nav>`, `<section>`).
