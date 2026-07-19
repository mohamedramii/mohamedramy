import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/case-study/case-study-page";
import { ProjectCaseStudy } from "@/components/case-study/project-case-study";
import { getCaseStudy } from "@/lib/case-studies";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};

  return {
    title: `${study.title} — Case Study · Mohamed Ramy`,
    description: study.description,
    openGraph: {
      title: `${study.title} — Product Case Study`,
      description: study.description,
      images: [study.cover],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <CaseStudyPage label={study.shortTitle}>
      <ProjectCaseStudy slug={study.slug} titleId="case-page-title" />
    </CaseStudyPage>
  );
}
