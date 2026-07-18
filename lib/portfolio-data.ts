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
  },
  {
    index: "02",
    title: "Khwarizmi Metrics",
    category: "Analytics · APIs · Report Builder",
    description:
      "A data-rich marketing workspace for connecting sources, exploring performance and composing reports without manual busywork.",
    impact: "Integrated product flows that reduced manual reporting effort by approximately 40%.",
    image: "/images/projects/khwarizmi.png",
    imageAlt: "Khwarizmi Metrics report builder interface",
    tags: ["React", "APIs", "Charts", "Data Studio"],
    tone: "project--sage",
  },
  {
    index: "03",
    title: "Snap Action",
    category: "Creative Development · Events",
    description:
      "An energetic event experience where narrative, movement and interface respond as one connected visual system.",
    impact: "A motion-led build tuned for a sub-two-second load and smooth 60fps interactions.",
    image: "/images/projects/snap-action.png",
    imageAlt: "Snap Action event website hero",
    tags: ["GSAP", "Three.js", "Motion", "Performance"],
    tone: "project--lime",
  },
  {
    index: "04",
    title: "JeelTech",
    category: "Arabic LMS · AI · Dashboard",
    description:
      "An Arabic-first learning platform combining courses, a digital library, reports and an AI assistant in a modular dashboard.",
    impact: "Built a scalable architecture across 15+ screens with reusable product patterns.",
    image: "/images/projects/jeeltech.png",
    imageAlt: "JeelTech Arabic learning dashboard",
    tags: ["Next.js", "Arabic UX", "AI", "Architecture"],
    tone: "project--warm",
  },
];

export const archiveProjects = [
  { title: "vbooking", type: "Travel operations", image: "/images/projects/vbooking.png" },
  { title: "RADX", type: "Smart hospitality", image: "/images/projects/radx.jpg" },
  { title: "BookYourVibes", type: "Yacht booking", image: "/images/projects/bookyourvibes.jpg" },
  { title: "Travelio", type: "Travel DMC", image: "/images/projects/travelio.png" },
  { title: "Culin", type: "Editorial interiors", image: "/images/projects/culin.png" },
  { title: "i-Fish", type: "Marine operations", image: "/images/projects/ifish.png" },
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
