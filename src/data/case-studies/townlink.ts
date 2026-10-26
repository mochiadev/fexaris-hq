import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'townlink-services',
  title: 'TownLink Services',
  category: 'websites',
  tags: ['SaaS', 'Marketplace', 'Service Directory', 'Ghana'],
  thumbnail: '/assets/case-studies/townlink-01.png',
  summary: 'Service provider marketplace and connection platform for local businesses in Ghana.',
  metrics: [
    { label: 'Provider Signups', value: '+150%' },
    { label: 'Service Bookings', value: '2.8x' },
    { label: 'User Engagement', value: '+75%' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/townlink-01.png',
      alt: 'TownLink homepage',
      caption: 'Homepage with search and category browsing',
    },
    {
      src: '/assets/case-studies/townlink-02.png',
      alt: 'How it works',
      caption: 'Three-step process: WhatsApp us, find a match, get it done',
    },
    {
      src: '/assets/case-studies/townlink-03.png',
      alt: 'Trust features',
      caption: 'Identity verification, transparent pricing, client reviews',
    },
  ],
  challenge:
    'Local service providers in Ghana lacked a centralized platform to connect with customers. The process of finding trusted plumbers, electricians, cleaners, and other service providers was fragmented and unreliable.',
  solution:
    'We built TownLink as a service provider marketplace with dual-audience support (customers and providers). The platform includes WhatsApp integration for booking, identity verification via Ghana Card, transparent pricing, and a review system.',
  results:
    '150% increase in provider signups, 2.8x more service bookings, and 75% improvement in user engagement. The platform is now expanding across all 16 regions of Ghana.',
  testimonial: {
    quote:
      'TownLink has made it so easy for customers to find me. I no longer rely on word-of-mouth alone — the platform brings me new clients every week.',
    author: 'Service Provider',
    role: 'Plumber, Accra',
  },
};

export default study;
