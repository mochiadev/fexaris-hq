import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'scbl-seo',
  title: 'Signature Crest Builders — SEO Campaign',
  category: 'seo',
  tags: ['SEO', 'Local SEO', 'Google Search Console', 'Real Estate'],
  thumbnail: '/assets/case-studies/scbl-seo-gsc.png',
  summary: 'SEO campaign that drove 3,750 clicks in 7 days with 8.2% CTR and #1 local rankings.',
  metrics: [
    { label: 'Clicks (7 days)', value: '3,750' },
    { label: 'CTR', value: '8.2%' },
    { label: 'Impressions', value: '46K' },
    { label: 'Avg Position', value: '8.3' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/scbl-seo-gsc-annotated.jpg',
      alt: 'GSC with client analysis',
      caption: 'Annotated GSC results for client presentation',
    },
    {
      src: '/assets/case-studies/scbl-seo-gsc.png',
      alt: 'Google Search Console',
      caption: 'Raw GSC performance data — 3.75K clicks in 7 days',
    },
    {
      src: '/assets/case-studies/scbl-seo-lighthouse.jpg',
      alt: 'Core Web Vitals',
      caption: 'Lighthouse scores: 96 Performance, 95 Accessibility, 100 Best Practices, 100 SEO',
    },
  ],
  challenge:
    'Signature Crest Builders was invisible in Google search results for high-value keywords like "land for sale in Tema" and "property developers in Ghana." Competitors dominated the first page, capturing all qualified traffic.',
  solution:
    'We executed a comprehensive SEO strategy combining technical SEO, content optimization, and local search optimization. Key actions included schema markup implementation, page speed optimization, Google Business Profile enhancement, and targeted content creation for high-intent keywords.',
  results:
    '3,750 clicks in the first 7 days (up from near zero), 8.2% click-through rate, 46K impressions, and average position of 8.3 for target keywords. The annotated GSC report became a powerful client communication tool.',
  testimonial: {
    quote:
      'The GSC report Fexaris provided was incredible — our clients could finally see the impact of SEO in black and white.',
    author: 'SEO Specialist',
    role: 'Fexaris Studio',
  },
};

export default study;
