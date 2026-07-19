import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { archiveCaseStudyContent, type ArchiveCaseStudySlug } from "@/lib/archive-case-studies";
import { caseStudies } from "@/lib/case-studies";

export function ArchiveCaseStudy({ slug, titleId }: { slug: ArchiveCaseStudySlug; titleId: string }) {
  const study = caseStudies[slug];
  const content = archiveCaseStudyContent[slug];

  return (
    <article className={`case-study case-study--archive case-study--${content.theme}`} aria-labelledby={titleId}>
      <section className="case-hero">
        <div className="case-hero__copy" data-case-intro>
          <p className="case-kicker">More work · {study.category}</p>
          <h1 id={titleId}>{content.headline[0]} <em>{content.headline[1]}</em></h1>
          <p className="case-hero__lead">{study.description}</p>
          <div className="case-tags" aria-label="Project disciplines">
            {content.tags.map((tag) => <span key={tag}>{tag}</span>)}
            <span>{study.year}</span>
          </div>
        </div>

        <div className="case-hero__media case-hero__media--archive" data-case-hero-media data-flip-id={`project-${slug}`}>
          <div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>{content.browserLabel}</b></div>
          <Image src={study.cover} alt={`${study.title} product interface`} fill priority sizes="(max-width: 899px) 100vw, 92vw" />
          <div className="case-archive-mark" aria-hidden="true"><span>{study.shortTitle}</span><b>MR / interface</b></div>
        </div>
      </section>

      <section className="case-section case-section--archive-film">
        <div className="case-centered-heading case-centered-heading--light">
          <p className="case-kicker">The real experience</p>
          <h2>{content.filmTitle}</h2>
          <p>{content.filmCopy}</p>
        </div>
        <figure className="case-feature-film">
          <div className="case-video-player">
            <CaseStudyVideo
              src={`/videos/case-studies/${slug}/walkthrough.mp4`}
              poster={study.cover}
              label={content.filmLabel}
            />
          </div>
          <figcaption><span>01 / Product film</span><p>Autoplays when it reaches the viewport. Pause or replay to inspect the real interface.</p></figcaption>
        </figure>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading">
          <div><p className="case-kicker">The product</p><h2>{content.productTitle}</h2></div>
          <div className="case-section__copy">
            <p>{content.productCopy}</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>{study.role}</dd></div>
              <div><dt>Platform</dt><dd>{study.platform}</dd></div>
              <div><dt>Focus</dt><dd>{content.focus}</dd></div>
              <div><dt>Direction</dt><dd>{study.direction}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-section case-section--ink">
        <div className="case-section__heading case-section__heading--light">
          <div><p className="case-kicker">The challenge</p><h2>Different constraints.<br />One clear product language.</h2></div>
          <p>Each decision had to respect the real domain instead of forcing the project into a generic website pattern.</p>
        </div>
        <div className="case-challenges">
          {content.challenges.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="case-section case-section--archive-gallery">
        <div className="case-centered-heading">
          <p className="case-kicker">Interface story</p>
          <h2>{content.galleryTitle}</h2>
          <p>{content.galleryCopy}</p>
        </div>
        <div className="case-archive-gallery">
          {content.gallery.map((item, index) => (
            <figure key={item.src}>
              <div><Image src={item.src} alt={item.alt} fill sizes="(max-width: 899px) 94vw, 47vw" /></div>
              <figcaption><b>0{index + 1}</b><span>{item.caption}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-centered-heading case-centered-heading--narrow">
          <p className="case-kicker">Interface decisions</p>
          <h2>A system shaped around the job, not the template.</h2>
        </div>
        <div className="case-project-decisions">
          {content.decisions.map(([title, copy], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-outcome">
          <div><p className="case-kicker">Outcome</p><h2>{content.outcomeTitle}</h2><p>{content.outcomeCopy}</p></div>
          <div className="case-outcome__points">
            {content.outcomePoints.map((point, index) => <span key={point}><b>0{index + 1}</b>{point}</span>)}
          </div>
        </div>
        <div className="case-next">
          <p>Built for the domain.<br /><em>Clear to the user.</em></p>
          <a href="mailto:mohamedramy101@gmail.com">Discuss a product like this <Mail size={18} /><ArrowUpRight size={18} /></a>
        </div>
      </section>
    </article>
  );
}
