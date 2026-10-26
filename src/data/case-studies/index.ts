import scblWebsite from './scbl-website';
import scblSeo from './scbl-seo';
import pleromaTravel from './pleroma-travel';
import townlinkServices from './townlink';
import ellmakHomeCare from './ellmak-home-care';
import splAutomation from './spl-automation';

export type { CaseStudy, GalleryItem, Metric, Testimonial } from './types';

export { scblWebsite, scblSeo, pleromaTravel, townlinkServices, ellmakHomeCare, splAutomation };

export const allCaseStudies = [
  scblWebsite,
  scblSeo,
  pleromaTravel,
  townlinkServices,
  ellmakHomeCare,
  splAutomation,
];
