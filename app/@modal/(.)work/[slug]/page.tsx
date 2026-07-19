import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/case-study/project-case-study";
import { ProjectModal } from "@/components/case-study/project-modal";
import { getCaseStudy } from "@/lib/case-studies";

export default async function ProjectOverlay({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <ProjectModal slug={slug} label={study.shortTitle}>
      <ProjectCaseStudy slug={study.slug} titleId="case-modal-title" />
    </ProjectModal>
  );
}
