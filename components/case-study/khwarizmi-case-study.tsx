import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { caseStudies } from "@/lib/case-studies";

const study = caseStudies["khwarizmi-metrics"];

export function KhwarizmiCaseStudy({ titleId }: { titleId: string }) {
  return (
    <article className="case-study case-study--khwarizmi" aria-labelledby={titleId}>
      <section className="case-hero">
        <div className="case-hero__copy" data-case-intro>
          <p className="case-kicker">02 / Selected case · {study.category}</p>
          <h1 id={titleId}>Many data sources.<em>One reporting canvas.</em></h1>
          <p className="case-hero__lead">{study.description}</p>
          <div className="case-tags" aria-label="Project disciplines">
            <span>Frontend</span><span>API states</span><span>Data visualization</span><span>{study.year}</span>
          </div>
        </div>
        <div className="case-hero__media case-hero__media--workspace" data-case-hero-media data-flip-id="project-khwarizmi-metrics">
          <div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>alkhwarizmi.com/report-builder</b></div>
          <Image src="/images/case-studies/khwarizmi/report-builder.png" alt="Khwarizmi report builder with charts, data table and editing controls" fill priority sizes="(max-width: 899px) 100vw, 92vw" />
          <div className="case-hero__float case-hero__float--one"><small>Workspace</small><strong>Report Studio</strong></div>
          <div className="case-hero__float case-hero__float--two"><small>Building blocks</small><strong>Charts · tables · sources</strong></div>
        </div>
      </section>

      <section className="case-section case-section--paper case-motion">
        <div className="case-centered-heading">
          <p className="case-kicker">Two connected workflows</p>
          <h2>Connect the signal. Compose the story.</h2>
          <p>The product moves from authenticated data sources into a flexible report canvas. These films show the real flows, in that order.</p>
        </div>
        <div className="case-video-grid">
          <figure>
            <div className="case-video-player"><CaseStudyVideo src="/videos/case-studies/khwarizmi/integrations.mp4" poster="/images/case-studies/khwarizmi/integration-connect.png" label="Connecting a marketing data source in Khwarizmi" /></div>
            <figcaption><span>01 / Integrations</span><p>Authenticate an account, select the useful source and confirm it before any report is built.</p></figcaption>
          </figure>
          <figure>
            <div className="case-video-player"><CaseStudyVideo src="/videos/case-studies/khwarizmi/report-builder.mp4" poster="/images/case-studies/khwarizmi/report-builder.png" label="Building a data report in Khwarizmi" /></div>
            <figcaption><span>02 / Report builder</span><p>Place charts and tables, choose their data, arrange the canvas and preserve clear save states.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading">
          <div><p className="case-kicker">The product</p><h2>A working layer between raw channels and readable decisions.</h2></div>
          <div className="case-section__copy">
            <p>Khwarizmi brings connected marketing accounts, source management and report composition into the same product language. The interface has to remain useful while loading, configuring, validating and refreshing live data.</p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>{study.role}</dd></div><div><dt>Platform</dt><dd>{study.platform}</dd></div>
              <div><dt>Focus</dt><dd>Integrations + report builder</dd></div><div><dt>Interface</dt><dd>{study.modes}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-section case-section--ink">
        <div className="case-section__heading case-section__heading--light">
          <div><p className="case-kicker">The challenge</p><h2>Flexible enough to build.<br />Clear enough to trust.</h2></div>
          <p>A configurable analytics product carries more than charts. Every connection, field requirement, empty state and save status must make the next action obvious.</p>
        </div>
        <div className="case-challenges">
          <article><span>01</span><h3>Outside systems</h3><p>Every platform brings different authentication, account and availability states.</p></article>
          <article><span>02</span><h3>Dense configuration</h3><p>Canvas, library and property controls must coexist without hiding the report itself.</p></article>
          <article><span>03</span><h3>Incomplete data</h3><p>Widgets need useful guidance before a source, metric or dimension is fully configured.</p></article>
        </div>
      </section>

      <section className="case-section case-section--data-flow">
        <div className="case-centered-heading">
          <p className="case-kicker">Integration flow</p><h2>Connection is treated as a guided product state.</h2>
          <p>The interface separates authentication, account selection and confirmation so users always know what has happened and what remains.</p>
        </div>
        <ol className="case-flow case-flow--light" aria-label="Data source connection flow">
          <li><b>01</b>Choose platform</li><li><b>02</b>Authenticate</li><li><b>03</b>Select account</li><li><b>04</b>Confirm source</li>
        </ol>
        <div className="case-split-shots">
          <figure><Image src="/images/case-studies/khwarizmi/integration-connect.png" alt="Three-step Facebook account connection modal" fill sizes="(max-width: 899px) 94vw, 48vw" /><figcaption>Guided connection / account selection</figcaption></figure>
          <figure><Image src="/images/case-studies/khwarizmi/connected-sources.png" alt="Connected marketing data sources with status and usage controls" fill sizes="(max-width: 899px) 94vw, 48vw" /><figcaption>Connected state / searchable source management</figcaption></figure>
        </div>
      </section>

      <section className="case-section case-section--builder">
        <div className="case-section__heading">
          <div><p className="case-kicker">Report composition</p><h2>Three work zones. One continuous canvas.</h2></div>
          <p>The builder keeps available visualizations on the left, the report in the center and contextual data or styling controls on the right.</p>
        </div>
        <div className="case-work-zones" aria-label="Report builder work zones"><span><b>Library</b>Choose a visual</span><span><b>Canvas</b>Compose the report</span><span><b>Inspector</b>Configure data</span></div>
        <figure className="case-product-shot"><div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>alkhwarizmi.com/report-builder</b></div><Image src="/images/case-studies/khwarizmi/report-builder.png" alt="Report canvas divided into visualization library, canvas and inspector" fill sizes="(max-width: 899px) 96vw, 88vw" /></figure>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-centered-heading case-centered-heading--narrow"><p className="case-kicker">Interface decisions</p><h2>Configuration stays visible without becoming the product.</h2></div>
        <div className="case-project-decisions">
          <article><span>01</span><h3>Explicit progress</h3><p>Connection steps and report save states stay labeled, not implied through color alone.</p></article>
          <article><span>02</span><h3>Contextual controls</h3><p>The inspector changes with the selected widget so the canvas remains focused.</p></article>
          <article><span>03</span><h3>Useful incomplete states</h3><p>Unconfigured charts explain what is missing and remain editable instead of failing silently.</p></article>
          <article><span>04</span><h3>Stable spatial model</h3><p>Navigation, tool library, canvas and properties keep predictable homes across the workflow.</p></article>
        </div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-outcome">
          <div><p className="case-kicker">Outcome</p><h2>From disconnected sources to a report users can shape.</h2><p>The finished experience connects two difficult jobs—data integration and report composition—through one calm, explicit interaction model.</p></div>
          <div className="case-outcome__points"><span><b>01</b>Guided source connection</span><span><b>02</b>Composable report canvas</span><span><b>03</b>Visible loading, validation and save states</span></div>
        </div>
        <div className="case-next"><p>Data connected.<br /><em>Decisions composed.</em></p><a href="mailto:mohamedramy101@gmail.com">Discuss a product like this <Mail size={18} /><ArrowUpRight size={18} /></a></div>
      </section>
    </article>
  );
}
