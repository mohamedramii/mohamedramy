import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { caseStudies } from "@/lib/case-studies";

const study = caseStudies["snap-action"];

export function SnapActionCaseStudy({ titleId }: { titleId: string }) {
  return (
    <article className="case-study case-study--snap" aria-labelledby={titleId}>
      <section className="case-hero">
        <div className="case-snap-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="case-hero__copy" data-case-intro>
          <p className="case-kicker">03 / Selected case · {study.category}</p>
          <h1 id={titleId}>An event brand should not sit still.<em>So the interface never does.</em></h1>
          <p className="case-hero__lead">{study.description}</p>
          <div className="case-tags" aria-label="Project disciplines"><span>Creative development</span><span>GSAP</span><span>Three.js</span><span>Arabic + English</span></div>
        </div>
        <div className="case-hero__media case-hero__media--snap" data-case-hero-media data-flip-id="project-snap-action">
          <div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>snapaction.com</b></div>
          <Image src="/images/case-studies/snap-action/hero-en.png" alt="Snap Action English hero with velocity meets precision message" fill priority sizes="(max-width: 899px) 100vw, 92vw" />
          <div className="case-snap-stamp" aria-hidden="true">MOVE<br />WITH<br />INTENT</div>
        </div>
      </section>

      <section className="case-section case-section--snap-film">
        <div className="case-section__heading case-section__heading--light">
          <div><p className="case-kicker">The live experience</p><h2>Pace is part of the message.</h2></div>
          <p>The product film shows how headline transitions, spatial depth, capability reveals and the bilingual switch work as one continuous experience.</p>
        </div>
        <figure className="case-feature-film">
          <div className="case-video-player"><CaseStudyVideo src="/videos/case-studies/snap-action/experience.mp4" poster="/images/case-studies/snap-action/hero-en.png" label="Snap Action bilingual website and motion experience" /></div>
          <figcaption><span>01 / Full experience</span><p>English and Arabic interfaces moving through the same visual rhythm.</p></figcaption>
        </figure>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading">
          <div><p className="case-kicker">The product</p><h2>A digital expression of precision under pressure.</h2></div>
          <div className="case-section__copy">
            <p>Snap Action produces events, activations, roadshows and branded experiences. The site translates that operational energy into a focused narrative instead of presenting services as a static corporate catalogue.</p>
            <dl className="case-facts"><div><dt>Role</dt><dd>{study.role}</dd></div><div><dt>Platform</dt><dd>{study.platform}</dd></div><div><dt>Languages</dt><dd>{study.direction}</dd></div><div><dt>Direction</dt><dd>{study.modes}</dd></div></dl>
          </div>
        </div>
      </section>

      <section className="case-section case-section--ink">
        <div className="case-section__heading case-section__heading--light">
          <div><p className="case-kicker">Creative challenge</p><h2>Cinematic, not chaotic.<br />Fast, not disposable.</h2></div>
          <p>The visual system needed enough movement to express the brand while preserving readable content, usable controls and equivalent storytelling in both directions.</p>
        </div>
        <div className="case-challenges"><article><span>01</span><h3>Motion with purpose</h3><p>Every reveal must support pace, hierarchy or spatial meaning—not decorate the screen.</p></article><article><span>02</span><h3>Two directions</h3><p>The composition has to feel intentional in English LTR and Arabic RTL.</p></article><article><span>03</span><h3>Visual restraint</h3><p>Atmosphere, particles and contrast cannot compete with the service narrative.</p></article></div>
      </section>

      <section className="case-section case-section--bilingual">
        <div className="case-centered-heading"><p className="case-kicker">Bilingual composition</p><h2>Same brand velocity. Native reading direction.</h2><p>The language change mirrors navigation, alignment, controls and content rhythm instead of translating words inside an unchanged layout.</p></div>
        <div className="case-language-grid">
          <figure><div><Image src="/images/case-studies/snap-action/hero-en.png" alt="Snap Action English left-to-right homepage" fill sizes="(max-width: 899px) 94vw, 48vw" /></div><figcaption><b>EN / LTR</b><span>Velocity leads. Supporting actions follow.</span></figcaption></figure>
          <figure><div><Image src="/images/case-studies/snap-action/hero-ar.png" alt="Snap Action Arabic right-to-left services interface" fill sizes="(max-width: 899px) 94vw, 48vw" /></div><figcaption><b>AR / RTL</b><span>Navigation and service hierarchy mirror naturally.</span></figcaption></figure>
        </div>
      </section>

      <section className="case-section case-section--snap-system">
        <div className="case-section__heading case-section__heading--light"><div><p className="case-kicker">Motion language</p><h2>One choreography across the whole site.</h2></div><p>The system combines controlled typography, spatial layers and responsive timing. Motion remains a brand behavior, not a one-off hero trick.</p></div>
        <div className="case-motion-rules"><article><span>01</span><strong>Type shifts</strong><p>Headlines change weight, position and contrast to create tension and release.</p></article><article><span>02</span><strong>Depth cues</strong><p>Particles and soft fields create space while keeping the content plane stable.</p></article><article><span>03</span><strong>Sequenced reveals</strong><p>Copy, cards and calls to action enter in a readable order through scoped GSAP timelines.</p></article><article><span>04</span><strong>Responsive restraint</strong><p>Smaller screens receive shorter distances and quieter effects while preserving the story.</p></article></div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading"><div><p className="case-kicker">Capability system</p><h2>From promise to a clear production arsenal.</h2></div><p>Services are organized as a modular grid so a wide offer still feels scannable. A concise protocol section connects the brand promise to the way the team works.</p></div>
        <div className="case-snap-shots">
          <figure><Image src="/images/case-studies/snap-action/protocol.png" alt="Snap Action protocol and production capability section" fill sizes="(max-width: 899px) 94vw, 48vw" /><figcaption>The protocol / working principles and proof</figcaption></figure>
          <figure><Image src="/images/case-studies/snap-action/services.png" alt="Snap Action modular event production services grid" fill sizes="(max-width: 899px) 94vw, 48vw" /><figcaption>The arsenal / modular capability architecture</figcaption></figure>
        </div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-outcome"><div><p className="case-kicker">Outcome</p><h2>A brand website that behaves like the work it represents.</h2><p>Snap Action feels energetic without losing its structure: a bilingual narrative, a reusable motion grammar and a capability system that stays understandable.</p></div><div className="case-outcome__points"><span><b>01</b>One motion-led brand narrative</span><span><b>02</b>Native LTR and RTL compositions</span><span><b>03</b>Reusable capability modules</span></div></div>
        <div className="case-next"><p>Built to move.<br /><em>Made to land.</em></p><a href="mailto:mohamedramy101@gmail.com">Discuss a motion-led build <Mail size={18} /><ArrowUpRight size={18} /></a></div>
      </section>
    </article>
  );
}
