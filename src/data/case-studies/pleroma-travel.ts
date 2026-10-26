import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'pleroma-travel',
  title: 'Pleroma Travel Consult',
  category: 'websites',
  tags: ['Travel', 'Immigration', 'Consulting', 'Ghana'],
  thumbnail: '/assets/case-studies/pleroma-01.png',
  summary: 'High-converting website for a travel and immigration consultancy in Accra, Ghana.',
  metrics: [
    { label: 'Consultation Bookings', value: '+220%' },
    { label: 'Page Speed', value: '98/100' },
    { label: 'Organic Traffic', value: '3.1x' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/pleroma-01.png',
      alt: 'Pleroma homepage',
      caption: 'Hero section with clear value proposition',
    },
    {
      src: '/assets/case-studies/pleroma-02.png',
      alt: 'Services section',
      caption: 'Six service offerings with clear descriptions',
    },
    {
      src: '/assets/case-studies/pleroma-03.png',
      alt: 'The Pleroma Standard',
      caption: 'Brand differentiator section',
    },
    {
      src: '/assets/case-studies/pleroma-04.png',
      alt: 'Featured Pathways',
      caption: 'Featured destination cards with CTAs',
    },
    {
      src: '/assets/case-studies/pleroma-06.png',
      alt: 'Featured destinations',
      caption: 'Destination cards for Canada, US, UK, Australia',
    },
    {
      src: '/assets/case-studies/pleroma-05.png',
      alt: 'Contact section',
      caption: 'Contact form with embedded Google Maps',
    },
  ],
  challenge:
    'Pleroma Travel Consult needed a professional website that would establish trust with high-net-worth clients seeking immigration and travel services. The previous site lacked credibility and failed to convert visitors into booked consultations.',
  solution:
    'We designed a premium website with clear service offerings, trust signals, and a streamlined booking flow. The site features destination-specific landing pages, an embedded contact form with map integration, and mobile-first responsive design.',
  results:
    '220% increase in consultation bookings, 98/100 Lighthouse score, and 3.1x more organic traffic within 4 months. The website now serves as the primary lead generation channel.',
  testimonial: {
    quote:
      'The new website has completely transformed how clients perceive our brand. We now close more consultations online than through referrals.',
    author: 'Founder',
    role: 'Pleroma Travel Consult',
  },
};

export default study;
