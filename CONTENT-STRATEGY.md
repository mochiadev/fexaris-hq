# Fexaris Studio - Content & Media Strategy Plan

## Executive Summary

Launch a **Fexaris Studio Blog** to establish thought leadership in Digital Marketing & AI Automation. This content will drive organic search traffic, build trust with prospects, and position Fexaris as the go-to expert in West Africa.

---

## Content Goals

| Goal | Metric | Target (6 months) |
|------|--------|-------------------|
| Organic Traffic | Sessions/month | 5,000+ |
| Lead Generation | Email captures | 200+ |
| Brand Authority | Backlinks | 20+ |
| Engagement | Avg. time on page | 3+ minutes |

---

## Target Audience

| Persona | Pain Points | Content Needs |
|---------|-------------|---------------|
| **SMB Owner** | "I need more customers but don't know where to start" | SEO basics, social media ads intro, ROI tracking |
| **Marketing Manager** | "My campaigns aren't converting" | Advanced ad strategies, conversion rate optimization, email funnels |
| **Tech Founder** | "I need automation to scale" | AI chatbots, workflow automation, CRM integration |
| **Established Business** | "I'm stuck, need growth acceleration" | Case studies, growth audits, strategic planning |

---

## Content Pillars (Core Themes)

### Pillar 1: Digital Marketing Insights
| Topic | Search Volume | Example Posts |
|-------|---------------|---------------|
| SEO | 50K+ monthly | "SEO Checklist for Ghanaian Businesses 2026", "How to Rank on Google Ghana" |
| Paid Ads | 22K+ monthly | "Meta Ads vs LinkedIn Ads for Ghana", "Ad Fatigue: How to Fix It" |
| Social Media | 33K+ monthly | "Instagram Growth for E-commerce", "TikTok for B2B in West Africa" |
| Content Marketing | 14K+ monthly | "Blog Writing for African Businesses", "Video Content Strategy" |

### Pillar 2: AI Automation Guides
| Topic | Search Volume | Example Posts |
|-------|---------------|---------------|
| Chatbots | 40K+ monthly | "Building a Customer Support Chatbot in 2026", "Where to Use AI Chatbots" |
| Workflow Automation | 12K+ monthly | "Make.com vs Zapier for Ghanaian Businesses", "Automating Your Invoicing" |
| Productivity | 27K+ monthly | "AI Tools for Small Teams", "Time Tracking with AI" |

### Pillar 3: Industry-Specific
| Topic | Search Volume | Example Posts |
|-------|---------------|---------------|
| E-commerce | 85K+ monthly | "E-commerce SEO for African Brands", "Shopify vs WooCommerce" |
| SaaS | 25K+ monthly | "SaaS Marketing Funnel", "Onboarding Automation" |
| Local Services | 19K+ monthly | "Google Business Profile Optimization", "Local SEO for Accra Businesses" |

---

## Tech Stack (Astro-Based)

### Blog Implementation
| Tool | Purpose | Status |
|------|---------|--------|
| **Astro Content Collections** | Blog post management | Built-in |
| **Markdown files** | Write posts in plain text | Ready |
| **Dynamic routes** | `/blog/[slug]` pages | Astro native |
| **FormSubmit.co** | Newsletter signup emails | Same as contact form |

### File Structure
```
src/
├── content/
│   └── blog/              # Blog posts (Markdown)
│       ├── 2026-09-08-digital-marketing-trends.md
│       └── ...
├── pages/
│   └── blog/
│       ├── index.astro    # Blog listing page
│       └── [slug].astro   # Individual post page
└── layouts/
    └── BlogLayout.astro   # Blog-specific layout
```

---

## Content Calendar (Month 1-3)

### Week 1
- **Post 1**: "Digital Marketing Trends in West Africa: What Works in 2026"
- **Post 2**: "AI Chatbots for Small Businesses: Start Here"

### Week 2
- **Post 1**: "SEO Checklist for Ghanaian Businesses (Free Template)"
- **Post 2**: "Meta Ads: 3 Mistakes Killing Your Campaigns"

### Week 3
- **Post 1**: "How to Build an AI Workflow Automation System"
- **Post 2**: "The Cost of NOT Doing SEO in 2026"

### Week 4
- **Post 1**: "Case Study: How We Helped a Ghanaian E-commerce Brand 3X Sales"
- **Post 2**: "LinkedIn Ads for B2B in West Africa: Complete Guide"

### Month 2 Focus: Deep Dives
- "The Complete Guide to Google Business Profile Optimization"
- "Building a Customer Support Chatbot with No Coding"
- "Email Marketing Funnels That Actually Convert"

### Month 3 Focus: Industry Special
- E-commerce SEO Series (3-part)
- AI Automation for Service Businesses

---

## Newsletter Integration (FormSubmit)

The blog will use the **same email setup** as your contact form:

1. Newsletter signup form sends to `hello@fexaris.com`
2. Uses FormSubmit.co - no backend needed
3. Same styling as contact form

```html
<form action="https://formsubmit.co/hello@fexaris.com" method="POST">
  <input type="email" name="email" placeholder="Your email" required>
  <input type="hidden" name="_subject" value="Blog Newsletter Signup">
  <button type="submit">Subscribe</button>
</form>
```

---

## Distribution Strategy

| Channel | Tactics |
|---------|---------|
| **Email** | Weekly newsletter with top 3 posts (via FormSubmit) |
| **LinkedIn** | Share all posts + commentary, tag clients |
| **Facebook** | Short video summaries, poll questions |
| **Twitter/X** | Tips from posts, stats, quotes |
| **WhatsApp** | Share to business groups, client lists |

---

## Success Metrics

| Metric | How to Track | Target |
|--------|--------------|--------|
| Organic traffic | Google Analytics | 5K+ sessions/mo |
| Backlinks | Ahrefs/Moz | 20+ in 6mo |
| Email captures | Mailchimp/FormSubmit | 200+ subs |
| Social shares | Platform analytics | 100+ total |
| Lead conversions | UTM tracking | 20+ leads/mo |

---

## Implementation Timeline

| Week | Task |
|------|------|
| 1 | Set up content collections, create `/blog/` pages |
| 2 | Write 2 pillar posts, create blog index page |
| 3 | Add newsletter signup, publish posts |
| 4 | Launch newsletter, share on social |

---

## Implementation Complete ✅

### What's Been Set Up

| Task | Status |
|------|--------|
| Content collections config | ✅ Created (`src/content.config.ts`) |
| Blog content directory | ✅ Created (`src/content/blog/`) |
| Blog index page | ✅ Created (`/blog/`) |
| Single post page | ✅ Created (`/blog/[slug]/`) |
| BlogPost component | ✅ Created (`src/components/BlogPost.astro`) |
| First 6 posts | ✅ Written (all in `src/content/blog/`) |
| Newsletter FormSubmit | ✅ Integrated (same as contact form) |

### Blog Posts Created

1. **Digital Marketing Trends in West Africa** - 2026-09-08
2. **AI Chatbots for Small Businesses** - 2026-09-09
3. **SEO Checklist for Ghanaian Businesses** - 2026-09-10
4. **Meta Ads: 3 Mistakes** - 2026-09-11
5. **AI Workflow Automation** - 2026-09-12
6. **E-commerce SEO for African Brands** - 2026-09-13

### To Run the Blog Locally

```bash
cd fexaris-hq
npm run dev
# Visit http://localhost:4321/blog/
```

### Next Steps

1. **Build and test locally** - `npm run build`
2. **Share blog on social** - LinkedIn, Facebook, WhatsApp
3. **Submit to Google Search Console** - Add `/blog/` sitemap
4. **Add to footer** - Link blog from website footer
