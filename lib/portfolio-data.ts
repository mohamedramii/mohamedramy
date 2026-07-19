export type Project = {
  index: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  imageAlt: string;
  tags: string[];
  tone: string;
  slug?: string;
};

export const featuredProjects: Project[] = [
  {
    index: "01",
    title: "Nizam Accounting",
    category: "ERP · Product Design · Frontend",
    description:
      "A unified accounting system that turns inventory, invoices, suppliers and financial reporting into one coherent product experience.",
    impact: "Owned the journey from requirements and Figma to React, QA and release.",
    image: "/images/projects/nizam.png",
    imageAlt: "Nizam Accounting landing interface in Arabic",
    tags: ["Next.js", "TypeScript", "RTL", "Design System"],
    tone: "project--olive",
    slug: "nizam-accounting",
  },
  {
    index: "02",
    title: "Khwarizmi Metrics",
    category: "Analytics · APIs · Report Builder",
    description:
      "A data-rich marketing workspace for connecting sources, exploring performance and composing reports without manual busywork.",
    impact: "Connected source integrations, report composition and data states into one maintainable product flow.",
    image: "/images/projects/khwarizmi.png",
    imageAlt: "Khwarizmi Metrics report builder interface",
    tags: ["React", "APIs", "Charts", "Data Studio"],
    tone: "project--sage",
    slug: "khwarizmi-metrics",
  },
  {
    index: "03",
    title: "Snap Action",
    category: "Creative Development · Events",
    description:
      "An energetic event experience where narrative, movement and interface respond as one connected visual system.",
    impact: "Built a bilingual motion system that keeps narrative and interaction coherent across the experience.",
    image: "/images/projects/snap-action.png",
    imageAlt: "Snap Action event website hero",
    tags: ["GSAP", "Three.js", "Motion", "Performance"],
    tone: "project--lime",
    slug: "snap-action",
  },
  {
    index: "04",
    title: "JeelTech",
    category: "Arabic LMS · AI · Dashboard",
    description:
      "An Arabic-first learning platform combining courses, a digital library, reports and an AI assistant in a modular dashboard.",
    impact: "Shaped reusable learning patterns across courses, lessons, reports, library and AI-assisted guidance.",
    image: "/images/projects/jeeltech.png",
    imageAlt: "JeelTech Arabic learning dashboard",
    tags: ["Next.js", "Arabic UX", "AI", "Architecture"],
    tone: "project--warm",
    slug: "jeeltech",
  },
];

export const archiveProjects = [
  { title: "vbooking", type: "Travel operations", image: "/images/case-studies/vbooking/cover.webp", imageAlt: "vbooking travel CRM and booking operations interface", slug: "vbooking" },
  { title: "RADX", type: "Smart hospitality", image: "/images/case-studies/radx/cover.webp", imageAlt: "RADX smart hospitality and QR concierge interface", slug: "radx" },
  { title: "BookYourVibes", type: "Yacht booking", image: "/images/case-studies/bookyourvibes/cover.webp", imageAlt: "BookYourVibes yacht discovery and booking interface", slug: "bookyourvibes" },
  { title: "Travelio", type: "Travel DMC", image: "/images/case-studies/travelio/cover.webp", imageAlt: "Travelio destination management website for Turkey", slug: "travelio" },
  { title: "Culin", type: "Editorial interiors", image: "/images/case-studies/culin/cover.webp", imageAlt: "Culin custom interiors editorial website", slug: "culin" },
  { title: "i-Fish", type: "Marine operations", image: "/images/case-studies/i-fish/cover.webp", imageAlt: "i-Fish Arabic marine operations platform", slug: "i-fish" },
];

export const experience = [
  {
    period: "2024 — Now",
    company: "Multi Marketer",
    role: "Frontend Developer & UI/UX Designer",
    detail: "Owning product delivery across analytics and accounting products from requirements to release.",
  },
  {
    period: "2025 — 2026",
    company: "vbooking",
    role: "Frontend Developer",
    detail: "Travel booking flows, package logic, API-driven screens and operational dashboards.",
  },
  {
    period: "2024 — 2025",
    company: "Sharakat",
    role: "UI/UX Designer",
    detail: "Product flows and design systems with 60+ reusable components across multiple product lines.",
  },
  {
    period: "2025",
    company: "AAST",
    role: "Teaching Assistant",
    detail: "Guided 30+ students from product thinking and Figma through successful React deployment.",
  },
];
