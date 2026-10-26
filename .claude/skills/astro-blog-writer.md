# Astro Blog Writer Skill

**Skill Name:** astro-blog-writer

**Description:** Expert Astro 7 blog content writer - writes, edits, and updates blog posts following established patterns for SEO, readability, and West African audience.

---

## Blog Context

**Platform:** Astro 7 with Content Collections API  
**Niche:** Digital Marketing & AI Automation for West African Businesses  
**Audience:** SMB Owners, Marketing Managers, Tech Founders in Ghana, Nigeria, West Africa  
**Tone:** Professional, practical, actionable - not academic. Speaks to business owners who need results.

---

## Blog Post Structure

### Frontmatter (MUST be at top of every post)
```yaml
---
title: "Clear, SEO-friendly headline"
description: "1-2 sentence summary targeting search intent"
pubDate: 2026-09-10
author: "Fexaris Studio"
tags: ["tag1", "tag2", "tag3"]
image: "https://images.unsplash.com/..."
---
```

### Content Structure
1. **Introduction** - Hook with problem/solution, set expectations
2. **Main Sections** - Use H2 (`##`) for major topics, H3 (`###`) for subsections
3. **Tables** - Use for comparing options, showing data ( Astro renders these well)
4. **Action Steps** - Bullet lists for practical takeaways
5. **Examples** - Real West African business cases
6. **Summary** - Recap key points, include CTA

---

## Styling Guidelines

### Tables (Use for comparisons/data)
```markdown
| Column 1 | Column 2 |
|----------|----------|
| Data A   | Data B   |
```

### Lists
- Use `-` for unordered lists
- Use `1.` for ordered lists
- Include **bold** for key takeaways

### Emphasis
- **Bold** for important terms, metrics, actions
- *Italic* for emphasis where bold feels too strong
- Use code blocks for commands/APIs

### Internal Linking
Link to relevant pages:
- `/about-us/` - About Fexaris
- `/contact-us/` - Get in touch
- `/blog/` - Back to blog

---

## Writing Rules

1. **SEO First:**
   - Include keywords in first 100 words
   - Use H2s with keywords
   - Keep paragraphs under 150 words

2. **West African Context:**
   - Use local examples (Ghana, Nigeria, West Africa)
   - Mention currency in GHS/NGN where relevant
   - Reference local platforms (MTN, Airtel, WhatsApp Business)

3. **Action-Oriented:**
   - "You" focused language
   - Concrete next steps
   - Real metrics (e.g., "42% reduction", "28% increase")

4. **Avoid:**
   - Jargon without explanation
   - Generic advice that could apply anywhere
   - Over-promising results

---

## File Locations

| Action | Location |
|--------|----------|
| New blog post | `src/content/blog/FILENAME.md` |
| Blog template | `src/pages/blog/[...id].astro` |
| Global styles | `src/styles/global.css` (`.prose` class) |
| Content schema | `src/content.config.ts` |

---

## Workflow

### Writing a New Post
1. Create `src/content/blog/YOUR-TITLE.md`
2. Add frontmatter with required fields
3. Write content following structure above
4. Run `npm run build` to verify

### Updating a Post
1. Edit the Markdown file directly
2. Update `pubDate` if significant change
3. Build to check formatting

---

## Example: Blog Post Start

```markdown
---
title: "AI Chatbots for Small Businesses: Start Here"
description: "AI chatbots aren't just for big corporations. Here's how small businesses in West Africa can use them to save time and boost sales."
pubDate: 2026-09-09
author: "Fexaris Studio"
tags: ["ai", "chatbots", "small business", "automation"]
image: "https://images.unsplash.com/photo-1555899667-630595c459ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
---

## Introduction

AI chatbots get a bad reputation for being "stupid" or "useless."

But when set up correctly, they're your **24/7 sales assistant** that never sleeps, never takes breaks, and never gets tired of answering the same questions.

---
```

---

## Quick Reference

| Need | Solution |
|------|----------|
| Add table | Use markdown table syntax with `|` and `-` |
| Add bullet list | Use `- ` prefix |
| Add bold text | Wrap in `**text**` |
| Add separator | Use `---` on its own line |
| Add image in post | `<img src="URL" alt="description" />` |
| Internal link | `[text](/page-path/)` |
| External link | `[text](https://...)` |

---

## Validation Checklist

Before publishing, verify:
- [ ] Title under 70 characters
- [ ] Description under 160 characters
- [ ] At least 1 H2 in content
- [ ] Table has border formatting
- [ ] All links work
- [ ] Build succeeds: `npm run build`
