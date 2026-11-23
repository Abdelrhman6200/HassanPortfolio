/**
 * STYLE REMINDER — These records preserve the source PDF as the visual truth:
 * each study always unfolds as cover/logo, written brief, then identity applications.
 */
export type StudyPage = {
  label: string;
  kind: "Cover" | "Brief" | "Applications";
  image: string;
  alt: string;
};

export type CaseStudy = {
  slug: string;
  index: string;
  discipline: string;
  title: string;
  clients: string;
  pages: StudyPage[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "panorama-group",
    index: "01",
    discipline: "Brand Identity & Art Direction",
    title: "Panorama Group",
    clients: "Rebranding · CI · Company Profile",
    pages: [
      { label: "Panorama Group — Brand Identity & Art Direction", kind: "Cover", image: "/assets/case-studies/page-01.png", alt: "Panorama Group black cover with red and white logo" },
      { label: "Project brief & design direction", kind: "Brief", image: "/assets/case-studies/page-02.png", alt: "Panorama Group project brief page" },
      { label: "Logo system, colour palette & applications", kind: "Applications", image: "/assets/case-studies/page-03.png", alt: "Panorama Group identity system and applications" },
    ],
  },
  {
    slug: "hava-residence",
    index: "02",
    discipline: "Visual Identity",
    title: "Hava Residence",
    clients: "Logo Design · Campaign Direction",
    pages: [
      { label: "Hava Residence — Visual Identity Case Study", kind: "Cover", image: "/assets/case-studies/page-04.png", alt: "Hava Residence black cover with white logo" },
      { label: "Project brief & visual concept", kind: "Brief", image: "/assets/case-studies/page-05.png", alt: "Hava Residence project brief page" },
      { label: "Identity rollout & social campaign", kind: "Applications", image: "/assets/case-studies/page-06.png", alt: "Hava Residence visual identity and social campaign artworks" },
    ],
  },
  {
    slug: "viale-mrs",
    index: "03",
    discipline: "Branding · Outdoor · Social",
    title: "Viàle Residence & MRS",
    clients: "Identity Rollout · Billboards · Campaigns",
    pages: [
      { label: "Viàle Residence & MRS — Branding, Outdoor & Social Media", kind: "Cover", image: "/assets/case-studies/page-07.png", alt: "Viàle Residence and MRS black cover" },
      { label: "Project brief & campaign rollout", kind: "Brief", image: "/assets/case-studies/page-08.png", alt: "Viàle Residence and MRS project brief page" },
      { label: "Guidelines, social content & outdoor work", kind: "Applications", image: "/assets/case-studies/page-09.png", alt: "Viàle Residence and MRS brand guidelines, social content and billboards" },
    ],
  },
  {
    slug: "bin-shehab",
    index: "04",
    discipline: "Art Direction",
    title: "Bin Shehab Developments",
    clients: "Company Profile · Social Media",
    pages: [
      { label: "Bin Shehab Developments — Art Direction", kind: "Cover", image: "/assets/case-studies/page-10.png", alt: "Bin Shehab Developments black cover" },
      { label: "Project brief & visual art direction", kind: "Brief", image: "/assets/case-studies/page-11.png", alt: "Bin Shehab Developments project brief page" },
      { label: "Company profile & social media direction", kind: "Applications", image: "/assets/case-studies/page-12.png", alt: "Bin Shehab Developments company profile and social media designs" },
    ],
  },
  {
    slug: "dex-gold-bullion",
    index: "05",
    discipline: "Corporate Identity",
    title: "DEX Gold Bullion",
    clients: "Logo Design · CI System",
    pages: [
      { label: "DEX Gold Bullion — Logo Design & Corporate Identity", kind: "Cover", image: "/assets/case-studies/page-13.png", alt: "DEX Gold Bullion black cover with white logo" },
      { label: "Project brief & corporate identity direction", kind: "Brief", image: "/assets/case-studies/page-14.png", alt: "DEX Gold Bullion project brief page" },
      { label: "Logo construction & corporate identity system", kind: "Applications", image: "/assets/case-studies/page-15.png", alt: "DEX Gold Bullion logo construction and identity system" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
