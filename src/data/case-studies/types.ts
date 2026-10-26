export interface Metric {
  label: string;
  value: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: 'websites' | 'seo' | 'ai-automation';
  tags: string[];
  thumbnail: string;
  summary: string;
  metrics: Metric[];
  gallery: GalleryItem[];
  challenge: string;
  solution: string;
  results: string;
  testimonial?: Testimonial;
}
