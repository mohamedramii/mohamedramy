import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { caseStudies } from "@/lib/case-studies";

const study = caseStudies.jeeltech;

export function JeelTechCaseStudy({ titleId }: { titleId: string }) {
  return (
    <article className="case-study case-study--jeel" aria-labelledby={titleId}>
      <section className="case-hero">
        <div className="case-jeel-doodle" aria-hidden="true"><i>✦</i><i>↗</i><i>01</i></div>
        <div className="case-hero__copy" data-case-intro>
          <p className="case-kicker">04 / Selected case · {study.category}</p>
          <h1 id={titleId}>Learning has many paths.<em>JeelTech keeps them connected.</em></h1>
          <p className="case-hero__lead">{study.description}</p>
          <div className="case-tags" aria-label="Project disciplines"><span>Frontend</span><span>Arabic UX</span><span>Learning dashboard</span><span>AI assistant</span></div>
        </div>
        <div className="case-hero__media case-hero__media--jeel" data-case-hero-media data-flip-id="project-jeeltech">
          <div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>jeeltech.com/dashboard/home</b></div>
          <Image src="/images/case-studies/jeeltech/home.png" alt="JeelTech Arabic learner home with course progress, categories and assistant" fill priority sizes="(max-width: 899px) 100vw, 92vw" />
          <div className="case-hero__float case-hero__float--one"><small>Learning model</small><strong>Courses + progress</strong></div>
          <div className="case-hero__float case-hero__float--two"><small>Guidance</small><strong>AI-assisted · Arabic-first</strong></div>
        </div>
      </section>

      <section className="case-section case-section--jeel-film">
        <div className="case-section__heading"><div><p className="case-kicker">Product walkthrough</p><h2>The learner journey, from home to insight.</h2></div><p>The film moves through the real product: dashboard, courses, lesson structure, AI guidance and progress reporting.</p></div>
        <figure className="case-feature-film"><div className="case-video-player"><CaseStudyVideo src="/videos/case-studies/jeeltech/experience.mp4" poster="/images/case-studies/jeeltech/home.png" label="JeelTech Arabic learning platform walkthrough" /></div><figcaption><span>01 / Platform journey</span><p>A connected view of how learners discover, continue and understand their progress.</p></figcaption></figure>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading"><div><p className="case-kicker">The product</p><h2>One Arabic-first home for learning and reflection.</h2></div><div className="case-section__copy"><p>JeelTech combines content discovery with active learning tools. Courses and lessons sit beside notes, a digital library, progress analytics and an AI assistant so support stays close to the work.</p><dl className="case-facts"><div><dt>Role</dt><dd>{study.role}</dd></div><div><dt>Platform</dt><dd>{study.platform}</dd></div><div><dt>Direction</dt><dd>{study.direction}</dd></div><div><dt>Focus</dt><dd>Learning journey + reusable UI</dd></div></dl></div></div>
      </section>

      <section className="case-section case-section--ink">
        <div className="case-section__heading case-section__heading--light"><div><p className="case-kicker">The challenge</p><h2>Many learning tools.<br />One mental model.</h2></div><p>The platform has to support browsing, focused lessons, long-form reading, conversations and data-heavy reports without feeling like separate products stitched together.</p></div>
        <div className="case-challenges"><article><span>01</span><h3>Different modes of focus</h3><p>Discovery, lesson playback and reporting each need a different information density.</p></article><article><span>02</span><h3>RTL product hierarchy</h3><p>Navigation, course structure and chart labels must read naturally in Arabic.</p></article><article><span>03</span><h3>Support in context</h3><p>AI guidance should help a learner act, not become an isolated novelty screen.</p></article></div>
      </section>

      <section className="case-section case-section--journey">
        <div className="case-centered-heading"><p className="case-kicker">Core journey</p><h2>Discover. Start. Continue. Understand.</h2><p>Each step has its own layout, but progress, language and interaction patterns remain consistent.</p></div>
        <ol className="case-journey-rail"><li><b>01</b><span>Discover</span><small>Categories and course cards</small></li><li><b>02</b><span>Choose</span><small>Clear course information</small></li><li><b>03</b><span>Learn</span><small>Lesson and syllabus together</small></li><li><b>04</b><span>Reflect</span><small>Reports and AI guidance</small></li></ol>
        <div className="case-learning-pair">
          <figure><Image src="/images/case-studies/jeeltech/courses.png" alt="JeelTech Arabic course catalogue with categories and course cards" fill sizes="(max-width: 899px) 94vw, 50vw" /><figcaption><b>Discover</b>Browse categories without losing course-level detail.</figcaption></figure>
          <figure><Image src="/images/case-studies/jeeltech/lesson.png" alt="JeelTech lesson screen with video, course summary and syllabus" fill sizes="(max-width: 899px) 94vw, 50vw" /><figcaption><b>Learn</b>Keep the lesson, syllabus and progress in one view.</figcaption></figure>
        </div>
      </section>

      <section className="case-section case-section--jeel-rtl">
        <div className="case-section__heading case-section__heading--light"><div><p className="case-kicker">Arabic product system</p><h2>RTL is part of the architecture, not a final flip.</h2></div><p>The strongest hierarchy begins at the right, while media, times and data preserve familiar reading behavior. Reusable patterns keep every module recognizably JeelTech.</p></div>
        <div className="case-rtl-rules" dir="rtl"><article><span>١</span><h3>اتجاه طبيعي</h3><p>التنقل والعناوين والإجراءات تبدأ من مكانها المتوقع للمستخدم العربي.</p></article><article><span>٢</span><h3>كثافة مناسبة</h3><p>الشاشات الهادئة للتعلم، والأكثر كثافة للتقارير، تتشارك نفس اللغة البصرية.</p></article><article><span>٣</span><h3>تقدم واضح</h3><p>نسب الإنجاز وحالة الدرس والخطوة التالية تظل ظاهرة دون تشتيت.</p></article></div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading"><div><p className="case-kicker">Progress reporting</p><h2>Turn activity into a picture learners can read.</h2></div><p>Reports combine time, lesson completion, subject distribution and return behavior. Strong chart grouping makes a dense view easier to scan from right to left.</p></div>
        <figure className="case-product-shot case-product-shot--light"><div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>jeeltech.com/dashboard/stats</b></div><Image src="/images/case-studies/jeeltech/reports.png" alt="JeelTech Arabic learning analytics with line, donut and bar charts" fill sizes="(max-width: 899px) 96vw, 88vw" /></figure>
      </section>

      <section className="case-section case-section--assistant">
        <div className="case-section__heading"><div><p className="case-kicker">AI in context</p><h2>A helper that begins with the learner&apos;s intent.</h2></div><p>Suggested prompts turn an empty conversation into practical entry points for coding, data, interface design and project ideas.</p></div>
        <div className="case-assistant-layout"><figure><Image src="/images/case-studies/jeeltech/assistant.png" alt="JeelTech Arabic AI assistant with suggested learning prompts" fill sizes="(max-width: 899px) 94vw, 64vw" /></figure><div><span>01</span><h3>Start from a real task</h3><p>Prompt starters make the assistant useful before the learner has learned how to ask.</p><span>02</span><h3>Keep the same product language</h3><p>The assistant uses the same navigation, surfaces and action hierarchy as the rest of JeelTech.</p></div></div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-outcome"><div><p className="case-kicker">Outcome</p><h2>A learning platform that stays coherent as the learner moves.</h2><p>JeelTech turns courses, lesson structure, analytics and AI guidance into one Arabic-first system with clear reusable patterns.</p></div><div className="case-outcome__points"><span><b>RTL</b>Native Arabic product hierarchy</span><span><b>01</b>Connected learning journey</span><span><b>AI</b>Guidance inside the same system</span></div></div>
        <div className="case-next"><p>Learn with structure.<br /><em>Grow with context.</em></p><a href="mailto:mohamedramy101@gmail.com">Discuss a learning product <Mail size={18} /><ArrowUpRight size={18} /></a></div>
      </section>
    </article>
  );
}
