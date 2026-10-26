import type { CaseStudy } from './types';

const study: CaseStudy = {
  slug: 'spl-speed-to-lead',
  title: 'Speed-to-Lead Automation — HVAC',
  category: 'ai-automation',
  tags: ['n8n', 'AI Automation', 'Lead Generation', 'HVAC'],
  thumbnail: '/assets/case-studies/spl-n8n.webp',
  summary:
    'Custom n8n automation pipeline for instant lead qualification and follow-up for an HVAC company in Pretoria, South Africa.',
  metrics: [
    { label: 'Response Time', value: '<2min' },
    { label: 'Lead Qualification', value: '100%' },
    { label: 'Hours Saved', value: '30+/week' },
  ],
  gallery: [
    {
      src: '/assets/case-studies/spl-n8n.webp',
      alt: 'n8n automation workflow',
      caption: 'Custom n8n pipeline: Webhook → AI Agent → OpenAI → SMS/WhatsApp → Google Sheets',
    },
  ],
  challenge:
    "A local HVAC company in Pretoria was losing leads because they couldn't respond fast enough. By the time they called back, the customer had already hired a competitor. Manual follow-up was eating 30+ hours per week.",
  solution:
    'We built a custom n8n automation pipeline that instantly captures leads via webhook, qualifies them using an AI agent with OpenAI integration, sends personalized SMS/WhatsApp follow-ups, and logs everything to Google Sheets. The system runs 24/7 without human intervention.',
  results:
    'Response time dropped from hours to under 2 minutes. 100% of leads now receive instant follow-up. The company saves 30+ hours per week on manual tasks and has seen a significant increase in booked appointments.',
  testimonial: {
    quote:
      'This automation has completely changed our business. We never miss a lead anymore, and my team can focus on service instead of chasing calls.',
    author: 'Owner',
    role: 'HVAC Company, Pretoria',
  },
};

export default study;
