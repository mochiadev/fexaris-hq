import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'ellmak-home-care',
  title: 'Ellmak — Home Care Agency SEO',
  category: 'seo',
  tags: ['SEO', 'Local SEO', 'Healthcare', 'USA'],
  thumbnail: '/assets/case-studies/ellmak-lighthouse.png',
  summary:
    'Complete SEO overhaul for a home care agency, including Core Web Vitals optimization and Google Search Console growth.',
  metrics: [
    { label: 'Total Clicks', value: '11.5K' },
    { label: 'Impressions', value: '314K' },
    { label: 'Avg CTR', value: '3.7%' },
    { label: 'Performance', value: '99/100' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/ellmak-lighthouse.png',
      alt: 'Lighthouse performance report',
      caption: 'Performance 99, Accessibility 100, Best Practices 100, SEO 100 — Core Web Vitals all green',
    },
    {
      src: '/assets/case-studies/ellmak-gsc.png',
      alt: 'Google Search Console analytics',
      caption: '11.5K clicks, 314K impressions, 3.7% CTR over one month',
    },
  ],
  challenge:
    'Ellmak, a home care agency in Shelton, CT, had a website that was slow, poorly structured, and invisible in local search results. They were losing potential clients to competitors who ranked higher and provided a better user experience.',
  solution:
    'We executed a complete SEO overhaul: technical SEO fixes (page speed, Core Web Vitals), on-page optimization (meta tags, schema markup, content restructuring), and local SEO (Google Business Profile optimization, local citations). The website was rebuilt with performance as a priority.',
  results:
    '11.5K clicks and 314K impressions in one month, 3.7% average CTR, 99/100 Lighthouse performance score. All Core Web Vitals pass. The agency now ranks on page 1 for "home care Shelton CT" and related keywords.',
  testimonial: {
    quote:
      'We went from being invisible to getting 5-6 qualified inquiries per week from Google. The investment in SEO has paid for itself many times over.',
    author: 'Owner',
    role: 'Ellmak Home Care, Shelton CT',
  },
};

export default study;
