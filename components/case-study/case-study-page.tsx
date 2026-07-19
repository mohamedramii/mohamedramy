import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function CaseStudyPage({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <main className="case-page">
      <header className="case-page__chrome">
        <div><span>01</span><b>{label} · Case study</b></div>
        <Link href="/#work"><ArrowLeft size={18} aria-hidden="true" /> Back to selected work</Link>
      </header>
      {children}
    </main>
  );
}
