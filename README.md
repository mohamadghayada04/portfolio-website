# Mohammed Ghayada — Developer Portfolio
**Web Technologies — UVT 2026**
**Scenario:** Personal Brand Portfolio + CV

🔗 **Live site:** [https://mohamadghayada04.github.io/portfolio-website/](https://mohamadghayada04.github.io/portfolio-website/)
📁 **Repository:** [https://github.com/mohamadghayada04/portfolio-website](https://github.com/mohamadghayada04/portfolio-website)

---

## HW1 — Requirements Checklist

### Pages (minimum 4)
- [x] `index.html` — Home page with hero, featured projects, and latest updates
- [x] `about.html` — Content page with bio, skills, and education timeline
- [x] `data.html` — Data page with two real tables (projects + skills)
- [x] `contact.html` — Contact/feedback form page

### Semantic HTML Structure (every page)
- [x] Valid `<!doctype html>`, `lang="en"`, `meta charset`, `meta viewport`
- [x] Linked external stylesheet on every page
- [x] One `<h1>` per page with logical heading hierarchy
- [x] Semantic landmarks: `<header>`, `<nav>`, `<main id="main-content">`, `<footer>`
- [x] Skip link on every page

### Navigation
- [x] Same navigation menu on all pages
- [x] Working links between all required pages
- [x] Active page indicated with `aria-current="page"`

### Forms & Tables
- [x] Contact form with 7 controls: name, email, phone, subject, message, contact preference, newsletter checkbox, submit button
- [x] All controls have explicit `<label for="...">` associations
- [x] Controls grouped with `<fieldset>` and `<legend>` (3 groups)
- [x] `required` on mandatory fields
- [x] Two data tables with `<thead>`, `<tbody>`, `<th scope="col/row">`, and `<caption>`

### CSS
- [x] Single external `styles.css` used by all pages
- [x] CSS custom properties (design tokens)
- [x] Body, headings, nav, table, form all styled
- [x] Consistent visual hierarchy and spacing

### Validation & Publication
- [x] HTML validated — no errors
- [x] CSS validated — no errors
- [x] Published on GitHub Pages

---

## HW2 — Requirements Checklist

### Starting Point
- [x] Contains full HW1 project
- [x] All HW1 requirements remain satisfied

### CSS Fundamentals
- [x] `specificity.html` — live demo of 5 specificity scenarios
- [x] `specificity.txt` — written answers explaining each result
- [x] CSS improvements: `:nth-child` on table rows and cards, box model and typography improvements
- [x] CSS placement: External (`styles.css`), Internal (`<style>` in `about.html`, `overview.html`), Inline (quote in `about.html`)

### Business Card Page
- [x] `card.html` + `card.css` — image, name, specialization + year, email link, GitHub link
- [x] Demonstrates element selector (`img`), class selectors (`.card-info`, `.card-name`), ID selector (`#business-card`)

### Responsive Layout Page
- [x] `overview.html` — CSS Grid for main 3-column layout
- [x] Flexbox for profile sidebar and contact aside
- [x] Media query: switches to single column below 768px
- [x] Mobile-first approach
- [x] 4 project cards with one styled differently (`.highlight`)
- [x] Page validated

### UI Design Step (Figma)
- [x] `figma-auth.css` — exported CSS from Figma authentication UI
- [x] `assets/auth-ui.png` — screenshot of the Figma authentication frame
- [x] Reusable button component (primary + secondary variants)
- [x] Design tokens: 2 text styles + 3 colours used consistently

### JavaScript Interactivity
- [x] `chatbot.html`, `chatbot.css`, `chatbot.js`
- [x] Question bank as array of objects
- [x] Dynamic DOM updates via `document.createElement` + `appendChild`
- [x] Form submit event via `addEventListener`
- [x] Input cleared after submit, chat scrolls to latest message
- [x] Suggestion buttons for quick questions
- [x] Linked in main navigation

### Publication
- [x] All pages validated
- [x] Published on GitHub Pages

---

## File Structure

```
portfolio-website/
├── index.html
├── about.html
├── data.html
├── contact.html
├── overview.html
├── chatbot.html
├── card.html
├── specificity.html
├── styles.css
├── card.css
├── chatbot.css
├── chatbot.js
├── figma-auth.css
├── specificity.txt
├── README.md
└── assets/
    ├── avatar.svg
    └── auth-ui.png
```

---

## Known Limitations
- Form submission does not send real data (no backend); `action="#"` used as placeholder.
- Chatbot uses keyword matching; unusual phrasing may trigger fallback responses.

---

*Web Technologies — UVT 2026 | Student: Mohammed Ghayada*
