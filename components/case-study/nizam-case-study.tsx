import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { CaseStudyVideo } from "@/components/case-study/case-study-video";
import { caseStudies } from "@/lib/case-studies";

const study = caseStudies["nizam-accounting"];

export function NizamCaseStudy({ titleId }: { titleId: string }) {
  return (
    <article className="case-study case-study--nizam" aria-labelledby={titleId}>
      <section className="case-hero">
        <div className="case-hero__copy" data-case-intro>
          <p className="case-kicker">01 / Selected case · {study.category}</p>
          <h1 id={titleId}>
            Financial work was scattered.
            {" "}
            <em>Nizam brought it together.</em>
          </h1>
          <p className="case-hero__lead">{study.description}</p>
          <div className="case-tags" aria-label="Project disciplines">
            <span>Product design</span>
            <span>Frontend</span>
            <span>Design system</span>
            <span>{study.year}</span>
          </div>
        </div>

        <div
          className="case-hero__media"
          data-case-hero-media
          data-flip-id="project-nizam-accounting"
        >
          <div className="case-browser-bar" aria-hidden="true">
            <span /><span /><span />
            <b>nizam-accounting.com</b>
          </div>
          <Image
            src="/images/case-studies/nizam/landing-hero.png"
            alt="Nizam Arabic accounting product overview"
            fill
            priority
            sizes="(max-width: 899px) 100vw, 92vw"
          />
          <div className="case-hero__float case-hero__float--one" aria-hidden="true">
            <small>Total revenue</small><strong>325,750 <b>EGP</b></strong>
          </div>
          <div className="case-hero__float case-hero__float--two" aria-hidden="true">
            <small>Product language</small><strong>Arabic · RTL</strong>
          </div>
        </div>
      </section>

      <section className="case-section case-section--paper case-motion">
        <div className="case-centered-heading">
          <p className="case-kicker">The product in motion</p>
          <h2>See the story. Then see the system working.</h2>
          <p>
            The first film introduces Nizam&apos;s product story. The second moves inside the ERP and
            shows real interface states across daily accounting workflows.
          </p>
        </div>
        <div className="case-video-grid">
          <figure>
            <div className="case-video-player">
              <CaseStudyVideo
                src="/videos/case-studies/nizam/website-story.mp4"
                poster="/images/case-studies/nizam/landing-hero.png"
                label="Nizam website story and product positioning video"
              />
            </div>
            <figcaption><span>01 / Product story</span><p>How the website turns scattered financial work into one connected narrative.</p></figcaption>
          </figure>
          <figure>
            <div className="case-video-player">
              <CaseStudyVideo
                src="/videos/case-studies/nizam/erp-product.mp4"
                poster="/images/case-studies/nizam/vendors-dark.jpg"
                label="Nizam ERP product workflow video"
              />
            </div>
            <figcaption><span>02 / Working product</span><p>Customers, quotes, invoices and records moving across light and dark product states.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-section__heading">
          <div>
            <p className="case-kicker">The product</p>
            <h2>One operating system for the financial side of the business.</h2>
          </div>
          <div className="case-section__copy">
            <p>
              Nizam replaces fragmented spreadsheets and disconnected tools with a single,
              structured experience. Daily financial operations stay easy to follow without
              hiding the depth required by accountants and business owners.
            </p>
            <dl className="case-facts">
              <div><dt>Role</dt><dd>{study.role}</dd></div>
              <div><dt>Platform</dt><dd>{study.platform}</dd></div>
              <div><dt>Direction</dt><dd>{study.direction}</dd></div>
              <div><dt>Modes</dt><dd>{study.modes}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="case-section case-section--ink">
        <div className="case-section__heading case-section__heading--light">
          <div>
            <p className="case-kicker">The challenge</p>
            <h2>Complex by nature.<br />Clear by design.</h2>
          </div>
          <p>
            Accounting products carry dense information, dependent steps and high-stakes actions.
            The challenge was preserving that depth while making the product calm, predictable and
            easy to scan in Arabic.
          </p>
        </div>
        <div className="case-challenges">
          <article><span>01</span><h3>Scattered workflows</h3><p>Customers, suppliers, products, quotes and invoices need to behave like one connected system.</p></article>
          <article><span>02</span><h3>Dense financial data</h3><p>Tables and forms must remain readable at speed while carrying status, tax and payment details.</p></article>
          <article><span>03</span><h3>RTL at product scale</h3><p>Navigation, hierarchy, icons, inputs and number handling need deliberate bidirectional behavior.</p></article>
        </div>
      </section>

      <section className="case-section case-section--paper case-architecture">
        <div className="case-centered-heading">
          <p className="case-kicker">Product architecture</p>
          <h2>Every module connects to the same financial picture.</h2>
          <p>The product is organized around real business cycles—not a collection of disconnected screens.</p>
        </div>
        <div className="case-system-map" dir="rtl" aria-label="Nizam connected product modules">
          <span>التقارير</span>
          <span>المبيعات والعملاء</span>
          <span>المشتريات والموردون</span>
          <strong><b>ن</b>نظام المحاسبة<small>مصدر مالي موحّد</small></strong>
          <span>المخزون والمنتجات</span>
          <span>عروض الأسعار والفواتير</span>
          <span>البنوك والخزينة</span>
        </div>
      </section>

      <section className="case-section case-section--mint">
        <div className="case-centered-heading">
          <p className="case-kicker">Design principles</p>
          <h2>Clarity first. Confidence always.</h2>
        </div>
        <div className="case-principles">
          <article><span>⌁</span><h3>Show the next step</h3><p>Actions, status and context stay visible at the moment a decision is made.</p></article>
          <article><span>◎</span><h3>Design for scanning</h3><p>Strong alignment and quiet surfaces help users read dense information quickly.</p></article>
          <article><span>↔</span><h3>Keep behavior consistent</h3><p>Reusable patterns reduce relearning between business modules.</p></article>
        </div>
      </section>

      <section className="case-section case-section--deep case-workflow">
        <div className="case-section__heading case-section__heading--light">
          <div>
            <p className="case-kicker">Key workflow</p>
            <h2>From quote to action,<br />without losing context.</h2>
          </div>
          <p>
            Creating a quote touches customers, products, quantities, tax and totals. Nizam keeps
            those dependencies in one structured page and keeps the primary action visible.
          </p>
        </div>
        <ol className="case-flow" aria-label="Quote creation flow">
          <li><b>01</b>Customer</li><li><b>02</b>Quote details</li><li><b>03</b>Line items</li><li><b>04</b>Save &amp; send</li>
        </ol>
        <figure className="case-product-shot case-product-shot--wide">
          <div className="case-browser-bar" aria-hidden="true"><span /><span /><span /><b>nizam-accounting.com/screens/quotes/add</b></div>
          <Image
            src="/images/case-studies/nizam/quote-form.png"
            alt="Nizam quote creation form in Arabic and dark mode"
            fill
            sizes="(max-width: 899px) 96vw, 88vw"
          />
        </figure>
        <div className="case-callouts">
          <p><b>Primary action stays visible</b><span>Save, send or keep a draft without searching the page.</span></p>
          <p><b>Progressive structure</b><span>Quote data is grouped before line-item detail and totals.</span></p>
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="case-centered-heading case-centered-heading--narrow">
          <p className="case-kicker">Design decisions</p>
          <h2>Small interface choices make large systems feel manageable.</h2>
        </div>
        <div className="case-decisions">
          <article>
            <span>01</span>
            <div><h3>Persistent navigation for a large product</h3><p>The right-side navigation mirrors Arabic reading direction and gives every business cycle a stable home.</p></div>
            <div className="case-decision-demo case-decision-demo--nav" dir="rtl" aria-hidden="true">
              <strong>المبيعات والعملاء</strong>
              <i>العملاء</i><i className="is-active">عروض الأسعار</i><i>أوامر البيع</i><i>الفواتير</i>
            </div>
          </article>
          <article>
            <span>02</span>
            <div><h3>Forms grouped by business meaning</h3><p>Related fields live inside clear sections, reducing visual load and making validation easier to understand.</p></div>
            <div className="case-decision-demo case-decision-demo--form" dir="rtl" aria-hidden="true">
              <strong>بيانات عرض السعر</strong>
              <label>العميل <b>اختر العميل⌄</b></label>
              <label>تاريخ العرض <b>08 / 07 / 2026</b></label>
              <button type="button" tabIndex={-1}>حفظ العرض</button>
            </div>
          </article>
          <article>
            <span>03</span>
            <div><h3>Status is more than a color</h3><p>Labels, placement and restrained color keep financial states understandable under pressure.</p></div>
            <div className="case-decision-demo case-decision-demo--status" dir="rtl" aria-hidden="true">
              <strong>حالة المستند</strong>
              <i className="is-paid">مدفوع <b>✓</b></i>
              <i className="is-pending">معلّق <b>•</b></i>
              <i className="is-overdue">متأخر <b>!</b></i>
              <i className="is-draft">مسودة <b>—</b></i>
            </div>
          </article>
        </div>
      </section>

      <section className="case-section case-section--ink case-foundations">
        <div className="case-centered-heading case-centered-heading--light">
          <p className="case-kicker">Foundations</p>
          <h2>A system built to scale beyond one screen.</h2>
          <p>Reusable foundations align product and future modules while keeping the interface unmistakably Nizam.</p>
        </div>
        <div className="case-foundation-grid">
          <article className="case-type-card"><small>Typography</small><p dir="rtl">نظام محاسبي<br /><em>يفهم شغلك.</em></p><span>Display / Heading / Body / Label</span></article>
          <article className="case-color-card"><small>Color tokens</small><div aria-hidden="true"><i /><i /><i /><i /><i /></div><span>Emerald · Midnight · Mint · Violet · Paper</span></article>
          <article className="case-radius-card"><small>Spacing &amp; radius</small><div aria-hidden="true"><i /><i /><i /><i /></div><span>8 · 12 · 16 · 24</span></article>
        </div>
      </section>

      <section className="case-section case-section--paper case-modes">
        <div className="case-section__heading">
          <div><p className="case-kicker">Light + dark</p><h2>Two modes.<br />One visual language.</h2></div>
          <p>Each mode preserves the same hierarchy and interaction patterns while supporting different working conditions.</p>
        </div>
        <div className="case-mode-grid">
          <figure><Image src="/images/case-studies/nizam/bills-light.jpg" alt="Nizam due bills table in Arabic light mode" fill sizes="(max-width: 899px) 94vw, 46vw" /><figcaption>Light / due bills and operational tables</figcaption></figure>
          <figure><Image src="/images/case-studies/nizam/vendors-dark.jpg" alt="Nizam vendors table in Arabic dark mode" fill sizes="(max-width: 899px) 94vw, 46vw" /><figcaption>Dark / vendor records and dense data</figcaption></figure>
        </div>
      </section>

      <section className="case-section case-section--outcome">
        <div className="case-outcome">
          <div><p className="case-kicker">Outcome</p><h2>From separate tasks to one coherent financial workflow.</h2><p>Nizam shows how an Arabic-first ERP can feel capable without feeling chaotic: one navigation model, one component language and a clear path through daily accounting work.</p></div>
          <div className="case-outcome__points"><span><b>01</b>Connected business cycles</span><span><b>RTL</b>Native Arabic hierarchy</span><span><b>2×</b>Consistent visual modes</span></div>
        </div>
        <div className="case-next">
          <p>Accounting in order.<br /><em>Business in motion.</em></p>
          <a href="mailto:mohamedramy101@gmail.com">Discuss a product like this <Mail size={18} /><ArrowUpRight size={18} /></a>
        </div>
      </section>
    </article>
  );
}
