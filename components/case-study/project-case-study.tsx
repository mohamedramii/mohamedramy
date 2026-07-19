import { ArchiveCaseStudy } from "@/components/case-study/archive-case-study";
import { JeelTechCaseStudy } from "@/components/case-study/jeeltech-case-study";
import { KhwarizmiCaseStudy } from "@/components/case-study/khwarizmi-case-study";
import { NizamCaseStudy } from "@/components/case-study/nizam-case-study";
import { SnapActionCaseStudy } from "@/components/case-study/snap-action-case-study";
import { isArchiveCaseStudySlug } from "@/lib/archive-case-studies";
import type { CaseStudySlug } from "@/lib/case-studies";

export function ProjectCaseStudy({ slug, titleId }: { slug: CaseStudySlug; titleId: string }) {
  if (isArchiveCaseStudySlug(slug)) {
    return <ArchiveCaseStudy slug={slug} titleId={titleId} />;
  }

  switch (slug) {
    case "nizam-accounting":
      return <NizamCaseStudy titleId={titleId} />;
    case "khwarizmi-metrics":
      return <KhwarizmiCaseStudy titleId={titleId} />;
    case "snap-action":
      return <SnapActionCaseStudy titleId={titleId} />;
    case "jeeltech":
      return <JeelTechCaseStudy titleId={titleId} />;
  }
}
