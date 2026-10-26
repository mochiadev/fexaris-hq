import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'scbl-website',
  title: 'Signature Crest Builders — Website',
  category: 'websites',
  tags: ['Real Estate', 'Construction', 'Property Development'],
  thumbnail: '/assets/case-studies/scbl-website-mockup.jpg',
  summary: 'High-converting website for a premium real estate and construction company in Tema, Ghana.',
  metrics: [
    { label: 'Conversion Rate', value: '+180%' },
    { label: 'Page Speed', value: '100/100' },
    { label: 'Lead Inquiries', value: '2.5x' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/scbl-website-mockup.jpg',
      alt: 'Full website mockup',
      caption: 'Complete homepage design',
    },
    {
      src: '/assets/case-studies/scbl-website-03.png',
      alt: 'Hero section',
      caption: 'Hero with building exterior',
    },
    {
      src: '/assets/case-studies/scbl-website-services.png',
      alt: 'Services section',
      caption: 'Property development and construction services',
    },
    {
      src: '/assets/case-studies/scbl-website-02.png',
      alt: 'Properties section',
      caption: 'Featured land listings',
    },
    {
      src: '/assets/case-studies/scbl-website-contact.png',
      alt: 'Contact page',
      caption: 'Contact form and office info',
    },
    {
      src: '/assets/case-studies/scbl-website-hero.webp',
      alt: 'Hero variant',
      caption: 'Alternative hero design',
    },
  ],
  challenge:
    'Signature Crest Builders needed a professional website that would showcase their premium real estate developments and construction services. Their previous online presence was non-existent, making it impossible for potential buyers and partners to discover their projects.',
  solution:
    "We designed and developed a custom website with property listings, project showcases, and integrated lead capture. The site features a dark, premium aesthetic that reflects the brand's positioning in the luxury real estate market.",
  results:
    '180% increase in qualified lead inquiries, 100/100 Lighthouse performance score, and 2.5x more organic traffic within 3 months. The website now serves as the primary sales channel for new property launches.',
  testimonial: {
    quote:
      "Fexaris built us a website that truly represents our brand. We've seen a dramatic increase in serious buyer inquiries since launch.",
    author: 'Managing Director',
    role: 'Signature Crest Builders Ltd',
  },
};

export default study;
