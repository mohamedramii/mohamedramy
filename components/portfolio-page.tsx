"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Download, Mail, Menu, MoveRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { Threads } from "@/components/threads";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { archiveProjects, experience, featuredProjects, type Project } from "@/lib/portfolio-data";
import { stageProjectTransition } from "@/lib/project-transition";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

function RouteMonogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      role="img"
      aria-label="Mohamed Ramy monogram"
    >
      <Image
        src="/images/mr-logo.png"
        alt=""
        fill
        sizes="120px"
      />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label="Mohamed Ramy, back to top">
        <RouteMonogram className="brand-mark" />
        <span className="brand-name">Mohamed Ramy</span>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#approach">Approach</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>

      <a className="header-availability" href="mailto:mohamedramy101@gmail.com">
        <span aria-hidden="true" /> Available for selected work
      </a>

      <details className="mobile-menu">
        <summary aria-label="Open navigation">
          <Menu size={20} />
        </summary>
        <nav aria-label="Mobile navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="mailto:mohamedramy101@gmail.com">Let&apos;s talk</a>
        </nav>
      </details>
    </header>
  );
}

function SectionHeader({
  eyebrow,
  title,
  aside,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  aside?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("section-header reveal", light && "section-header--light")}>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {aside && <p className="section-aside">{aside}</p>}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="project-topline">
        <span>{project.index}</span>
        <span>{project.category}</span>
        <span>{project.slug ? "Open case study" : "Selected case"}</span>
      </div>
      <div className="project-layout">
        <div className="project-copy">
          <h3>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-impact"><span>Impact</span>{project.impact}</p>
          <div className="project-tags">
            {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
          {project.slug ? (
            <span className="project-link">
              Explore full case study <ArrowUpRight size={18} />
            </span>
          ) : (
            <a href="#contact" className="project-link">
              Discuss the project <ArrowUpRight size={18} />
            </a>
          )}
        </div>
        <div
          className="project-media"
          data-project-source={project.slug}
          data-flip-id={project.slug ? `project-${project.slug}` : undefined}
        >
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 899px) 92vw, 56vw"
          />
          <span className="project-media-label">Real product screen</span>
        </div>
      </div>
    </>
  );

  if (!project.slug) {
    return <article className={cn("project-card reveal", project.tone)}>{content}</article>;
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      scroll={false}
      className={cn("project-card project-card--interactive reveal", project.tone)}
      aria-label={`Open ${project.title} case study`}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const media = event.currentTarget.querySelector<HTMLElement>("[data-project-source]");
        if (media) stageProjectTransition(project.slug!, Flip.getState(media, { simple: true, props: "borderRadius" }));
      }}
    >
      {content}
    </Link>
  );
}

function ArchiveProjectCard({ project, index }: { project: (typeof archiveProjects)[number]; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      scroll={false}
      className="archive-card archive-card--interactive"
      aria-label={`Open ${project.title} case study`}
      onClick={(event) => {
        if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        const media = event.currentTarget.querySelector<HTMLElement>("[data-project-source]");
        if (media) stageProjectTransition(project.slug, Flip.getState(media, { simple: true, props: "borderRadius" }));
      }}
    >
      <div
        className="archive-image"
        data-project-source={project.slug}
        data-flip-id={`project-${project.slug}`}
      >
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 82vw, 31vw" />
        <span className="archive-open">Open case study <ArrowUpRight size={15} /></span>
      </div>
      <div><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.type}</p></div>
    </Link>
  );
}

export function PortfolioPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const archiveTrackRef = useRef<HTMLDivElement>(null);
  const [archiveScrollState, setArchiveScrollState] = useState({ canScrollLeft: false, canScrollRight: true });

  useEffect(() => {
    const track = archiveTrackRef.current;
    if (!track) return;

    const updateScrollState = () => {
      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      setArchiveScrollState({
        canScrollLeft: track.scrollLeft > 2,
        canScrollRight: track.scrollLeft < maxScrollLeft - 2,
      });
    };

    updateScrollState();
    track.addEventListener("scroll", updateScrollState, { passive: true });
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(track);

    return () => {
      track.removeEventListener("scroll", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollArchive = (direction: -1 | 1) => {
    const track = archiveTrackRef.current;
    const firstCard = track?.querySelector<HTMLElement>(".archive-card");
    if (!track || !firstCard) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = firstCard.getBoundingClientRect().width + gap;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  useGSAP(
    () => {
      const root = pageRef.current;
      if (!root) return;

      const media = gsap.matchMedia();
      media.add(
        {
          desktop: "(min-width: 900px)",
          mobile: "(max-width: 899px)",
          reduceMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { desktop, reduceMotion } = context.conditions as {
            desktop: boolean;
            reduceMotion: boolean;
          };

          if (reduceMotion) {
            gsap.set(root.querySelectorAll(".hero-kicker, .hero-word, .hero-copy, .hero-actions, .hero-portrait, .proof-item, .reveal"), {
              clearProps: "all",
            });
          } else {
            const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
            intro
              .from(root.querySelector(".hero-kicker"), { autoAlpha: 0, y: 16, duration: 0.5 })
              .from(root.querySelectorAll(".hero-word"), { autoAlpha: 0, yPercent: 105, duration: 0.85, stagger: 0.065 }, "-=0.24")
              .from(root.querySelector(".hero-copy"), { autoAlpha: 0, y: 24, duration: 0.65 }, "-=0.46")
              .from(root.querySelector(".hero-actions"), { autoAlpha: 0, y: 18, duration: 0.55 }, "-=0.4")
              .from(root.querySelector(".hero-portrait"), { autoAlpha: 0, xPercent: 6, scale: 0.97, duration: 0.9 }, 0.28)
              .from(root.querySelectorAll(".proof-item"), { autoAlpha: 0, y: 12, duration: 0.45, stagger: 0.08 }, "-=0.42");

            gsap.to(root.querySelector(".scroll-progress"), {
              scaleX: 1,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "bottom bottom",
                scrub: 0.2,
              },
            });

            gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".reveal")).forEach((element) => {
              if (!desktop && element.matches(".project-card")) return;
              gsap.from(element, {
                autoAlpha: 0,
                y: 42,
                duration: 0.85,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "clamp(top 86%)",
                  toggleActions: "play none none reverse",
                },
              });
            });
          }

          if (!desktop && !reduceMotion) {
            const projectCards = gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".project-card"));
            projectCards.slice(0, -1).forEach((card, index) => {
              gsap.to(card, {
                autoAlpha: 0.5,
                y: -12,
                scale: 0.94,
                ease: "none",
                overwrite: "auto",
                scrollTrigger: {
                  trigger: projectCards[index + 1],
                  start: "top 92%",
                  end: "top 20%",
                  scrub: 0.55,
                  invalidateOnRefresh: true,
                },
              });
            });
          }

          const route = root.querySelector<SVGPathElement>("#process-line");
          if (route) {
            const length = route.getTotalLength();
            gsap.set(route, { strokeDasharray: length, strokeDashoffset: length });
            gsap.to(route, {
              strokeDashoffset: 0,
              duration: reduceMotion ? 1.2 : undefined,
              ease: "none",
              scrollTrigger: reduceMotion
                ? {
                    trigger: root.querySelector(".process-map"),
                    start: "clamp(top 86%)",
                    toggleActions: "play none none reset",
                  }
                : {
                    trigger: root.querySelector(".process-map"),
                    start: "clamp(top 78%)",
                    end: "clamp(bottom 54%)",
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                  },
            });
          }

          const mobileRoute = root.querySelector<HTMLElement>(".process-line-mobile-active");
          if (mobileRoute) {
            gsap.set(mobileRoute, { scaleY: 0, transformOrigin: "top center" });
            gsap.to(mobileRoute, {
              scaleY: 1,
              duration: reduceMotion ? 1.2 : undefined,
              ease: "none",
              scrollTrigger: reduceMotion
                ? {
                    trigger: root.querySelector(".process-map"),
                    start: "clamp(top 86%)",
                    toggleActions: "play none none reset",
                  }
                : {
                    trigger: root.querySelector(".process-map"),
                    start: "clamp(top 78%)",
                    end: "clamp(bottom 54%)",
                    scrub: 0.8,
                    invalidateOnRefresh: true,
                  },
            });
          }

          const capabilityRail = root.querySelector<HTMLElement>(".capability-rail-fill");
          if (capabilityRail) {
            gsap.set(capabilityRail, { scaleX: 0, transformOrigin: "left center" });
            gsap.to(capabilityRail, {
              scaleX: 1,
              duration: reduceMotion ? 1.1 : undefined,
              ease: "none",
              scrollTrigger: reduceMotion
                ? {
                    trigger: root.querySelector(".capability-rail"),
                    start: "clamp(top 88%)",
                    toggleActions: "play none none reset",
                  }
                : {
                    trigger: root.querySelector(".capability-rail"),
                    start: "clamp(top 88%)",
                    end: "clamp(bottom 62%)",
                    scrub: 0.7,
                    invalidateOnRefresh: true,
                  },
            });
          }

          if (desktop && !reduceMotion) {
            gsap.utils.toArray<HTMLElement>(root.querySelectorAll(".project-media img")).forEach((image) => {
              gsap.fromTo(
                image,
                { yPercent: -3, scale: 1.04 },
                {
                  yPercent: 3,
                  scale: 1.04,
                  ease: "none",
                  scrollTrigger: {
                    trigger: image.closest(".project-card"),
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.8,
                  },
                },
              );
            });

            const glow = root.querySelector<HTMLElement>(".hero-glow");
            const hero = root.querySelector<HTMLElement>(".hero");
            if (glow && hero) {
              const xTo = gsap.quickTo(glow, "x", { duration: 0.65, ease: "power3.out" });
              const yTo = gsap.quickTo(glow, "y", { duration: 0.65, ease: "power3.out" });
              const moveGlow = (event: PointerEvent) => {
                const rect = hero.getBoundingClientRect();
                xTo(event.clientX - rect.left - 180);
                yTo(event.clientY - rect.top - 180);
              };
              hero.addEventListener("pointermove", moveGlow);
              return () => hero.removeEventListener("pointermove", moveGlow);
            }
          }
        },
        root,
      );

      let refreshFrame = 0;
      let disposed = false;
      const scheduleRefresh = () => {
        if (disposed) return;
        cancelAnimationFrame(refreshFrame);
        refreshFrame = requestAnimationFrame(() => ScrollTrigger.refresh());
      };
      const images = Array.from(root.querySelectorAll("img"));
      images.forEach((image) => {
        if (!image.complete) image.addEventListener("load", scheduleRefresh, { once: true });
      });
      document.fonts?.ready.then(scheduleRefresh);
      window.addEventListener("load", scheduleRefresh, { once: true });
      scheduleRefresh();

      return () => {
        disposed = true;
        cancelAnimationFrame(refreshFrame);
        images.forEach((image) => image.removeEventListener("load", scheduleRefresh));
        window.removeEventListener("load", scheduleRefresh);
        media.revert();
      };
    },
    { scope: pageRef },
  );

  return (
    <div ref={pageRef} className="portfolio-shell" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" />
      <Header />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <Threads className="hero-threads" color={[0.72, 0.95, 0.42]} amplitude={0.72} distance={0.2} />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-content">
            <div className="hero-copy-column">
              <div className="hero-kicker">
                <span className="availability-dot" aria-hidden="true" />
                Product-focused Frontend Developer × UI/UX Designer
              </div>
              <h1 id="hero-title">
                <span className="hero-line"><span className="hero-word">Complex</span></span>
                <span className="hero-line hero-line--accent"><span className="hero-word">products,</span></span>
                <span className="hero-line hero-line--long"><span className="hero-word">clearly engineered.</span></span>
              </h1>
              <p className="hero-copy">
                I turn complex product requirements into intuitive Figma flows and scalable,
                production-ready React and Next.js interfaces.
              </p>
              <div className="hero-actions">
                <a className={buttonVariants({ variant: "primary", size: "lg" })} href="#work">
                  Explore selected work <ArrowDownRight size={18} />
                </a>
                <a className={buttonVariants({ variant: "outline", size: "lg" })} href="mailto:mohamedramy101@gmail.com">
                  Let&apos;s build something useful
                </a>
              </div>
            </div>

            <figure className="hero-portrait">
              <div className="portrait-frame">
                <Image
                  src="/images/mohamed-ramy-cutout.png"
                  alt="Mohamed Ramy, frontend developer and UI/UX designer"
                  fill
                  priority
                  sizes="(max-width: 899px) 92vw, 46vw"
                />
              </div>
              <figcaption>
                <span>Based in Alexandria, Egypt</span>
                <span>Available worldwide</span>
              </figcaption>
            </figure>
          </div>

          <div className="proof-strip" aria-label="Selected experience highlights">
            <div className="proof-item"><strong>3+</strong><span>Years bridging design and development</span></div>
            <div className="proof-item"><strong>60+</strong><span>Reusable components across product systems</span></div>
            <div className="proof-item"><strong>40%</strong><span>Less manual reporting through integrated workflows</span></div>
            <div className="proof-item proof-item--tools"><span>React · Next.js · TypeScript · Figma</span></div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-wrap">
            <SectionHeader
              eyebrow="01 / Selected work"
              title={<span id="work-title">Products built from the <em>inside out.</em></span>}
              aside="Four projects selected to show product thinking, interface craft and production engineering—not just final screens."
              light
            />

            <div className="project-stack">
              {featuredProjects.map((project) => (
                <FeaturedProjectCard project={project} key={project.title} />
              ))}
            </div>

            <a className="show-more-work reveal" href="#more-work">
              <span><small>Continue exploring</small>Show more</span>
              <i aria-hidden="true"><ArrowDownRight size={22} /></i>
            </a>
          </div>
        </section>

        <section className="process-section" id="approach" aria-labelledby="approach-title">
          <div className="section-wrap">
            <SectionHeader
              eyebrow="02 / The bridge"
              title={<span id="approach-title">From tangled requirements to a <em>system people can use.</em></span>}
              aside="My value lives in the handoff that never needs to happen: product thinking, UX decisions and frontend architecture stay connected."
            />

            <div className="process-map reveal">
              <svg viewBox="0 0 1100 460" aria-hidden="true" preserveAspectRatio="none">
                <path className="process-line-base" d="M50 340 C170 340 185 95 330 115 S510 350 645 285 S805 80 1050 115" />
                <path id="process-line" d="M50 340 C170 340 185 95 330 115 S510 350 645 285 S805 80 1050 115" />
              </svg>
              <div className="process-line-mobile" aria-hidden="true">
                <span className="process-line-mobile-base" />
                <span className="process-line-mobile-active" />
              </div>
              <div className="process-node process-node--1"><span>01</span><strong>Product logic</strong><p>Goals, rules and constraints become a shared map.</p></div>
              <div className="process-node process-node--2"><span>02</span><strong>UX flow</strong><p>Complex tasks become focused decisions and clear states.</p></div>
              <div className="process-node process-node--3"><span>03</span><strong>Interface system</strong><p>Patterns, hierarchy and components create consistency.</p></div>
              <div className="process-node process-node--4"><span>04</span><strong>Production code</strong><p>Scalable React architecture carries the intent to release.</p></div>
            </div>

            <div className="capability-rail reveal" aria-label="One connected workflow from definition to delivery">
              <div className="capability-rail-intro">
                <span>One continuous workflow</span>
                <p>Decisions stay connected from the first requirement to the released interface.</p>
              </div>
              <div className="capability-rail-track" aria-hidden="true">
                <span className="capability-rail-base" />
                <span className="capability-rail-fill" />
                <span className="capability-rail-dot capability-rail-dot--1" />
                <span className="capability-rail-dot capability-rail-dot--2" />
                <span className="capability-rail-dot capability-rail-dot--3" />
              </div>
              <div className="capability-rail-labels" aria-hidden="true">
                <span><b>01</b>Define</span>
                <span><b>02</b>Shape</span>
                <span><b>03</b>Ship</span>
              </div>
            </div>

            <div className="capability-grid">
              <article className="capability-card reveal">
                <span className="capability-number">A</span>
                <h3>Product & UX</h3>
                <p>User flows, information architecture, prototypes and dashboard UX grounded in business logic.</p>
                <small>Think clearly</small>
              </article>
              <article className="capability-card reveal">
                <span className="capability-number">B</span>
                <h3>Interface systems</h3>
                <p>Responsive UI, RTL, accessibility, themes and reusable patterns that keep products coherent.</p>
                <small>Design consistently</small>
              </article>
              <article className="capability-card reveal">
                <span className="capability-number">C</span>
                <h3>Frontend engineering</h3>
                <p>React, Next.js, TypeScript, API integrations, state management and motion with purpose.</p>
                <small>Ship confidently</small>
              </article>
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-wrap">
            <SectionHeader
              eyebrow="03 / Experience"
              title={<span id="experience-title">Working across the <em>whole product surface.</em></span>}
              aside="From remote product teams to the classroom: every role strengthened the connection between clear thinking and reliable execution."
            />
            <div className="experience-list">
              {experience.map((item, index) => (
                <article className="experience-row reveal" key={`${item.company}-${item.period}`}>
                  <span className="experience-index">0{index + 1}</span>
                  <span className="experience-period">{item.period}</span>
                  <div><h3>{item.company}</h3><p>{item.role}</p></div>
                  <p className="experience-detail">{item.detail}</p>
                  <MoveRight className="experience-arrow" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="archive-section" id="more-work" aria-labelledby="archive-title">
          <div className="section-wrap">
            <SectionHeader
              eyebrow="04 / More work"
              title={<span id="archive-title">Different industries. <em>One obsession with clarity.</em></span>}
              aside="A wider selection of travel, hospitality, editorial and operational interfaces."
              light
            />
            <div className="archive-navigation reveal" aria-label="More work carousel controls">
              <button
                type="button"
                onClick={() => scrollArchive(-1)}
                disabled={!archiveScrollState.canScrollLeft}
                aria-label="Show previous projects"
                aria-controls="archive-track"
              >
                <ArrowLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollArchive(1)}
                disabled={!archiveScrollState.canScrollRight}
                aria-label="Show next projects"
                aria-controls="archive-track"
              >
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="archive-track reveal" id="archive-track" ref={archiveTrackRef}>
            {archiveProjects.map((project, index) => (
              <ArchiveProjectCard project={project} index={index} key={project.title} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-wrap about-grid">
            <div className="about-heading reveal">
              <p className="section-eyebrow">05 / About Mohamed</p>
              <h2 id="about-title">Designer enough to ask <em>why.</em><br />Developer enough to ship <em>how.</em></h2>
            </div>
            <div className="about-copy reveal">
              <p className="about-lead">
                I&apos;m most useful when a product is still a little messy—when the business rules are real,
                the interface needs structure and the implementation has to hold up after launch.
              </p>
              <p>
                Based in Alexandria and working remotely, I collaborate with product teams, agencies and
                founders who care about both the experience people see and the architecture beneath it.
              </p>
              <div className="about-actions">
                <a
                  className={buttonVariants({ variant: "ink", size: "lg" })}
                  href="https://drive.google.com/file/d/1I0FlHp7pkS5BwcnIPWdFU7CTX2reB-uS/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download résumé <Download size={18} />
                </a>
                <a className="text-link" href="https://www.linkedin.com/in/mohamed-ramy11" target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" aria-labelledby="faq-title">
          <div className="section-wrap faq-grid">
            <div className="reveal">
              <p className="section-eyebrow">06 / Working together</p>
              <h2 id="faq-title">A few useful answers before we start.</h2>
            </div>
            <div className="faq-list reveal">
              <details>
                <summary>What kind of work is the best fit?<span>+</span></summary>
                <p>Complex web products, SaaS dashboards, design systems and frontend builds where UX and engineering need to stay aligned.</p>
              </details>
              <details>
                <summary>Can you work from an existing Figma file?<span>+</span></summary>
                <p>Yes. I can audit the flow and component logic, tighten edge cases, then translate it into maintainable React or Next.js code.</p>
              </details>
              <details>
                <summary>Do you handle both Arabic and English products?<span>+</span></summary>
                <p>Yes. I design and build bilingual experiences with RTL behavior treated as part of the system, not as a late patch.</p>
              </details>
              <details>
                <summary>Remote collaboration?<span>+</span></summary>
                <p>Absolutely. I&apos;m based in Egypt and already work with remote teams across the MENA region and beyond.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-grid" aria-hidden="true" />
          <div className="section-wrap contact-content reveal">
            <p className="section-eyebrow">Have a complex product in mind?</p>
            <h2 id="contact-title">Let&apos;s make it <em>clear, useful</em><br />and ready to ship.</h2>
            <a href="mailto:mohamedramy101@gmail.com" className="contact-email">
              <span>mohamedramy101@gmail.com</span>
              <span className="contact-icon"><Mail size={28} /></span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="brand-link" href="#top"><RouteMonogram className="brand-mark" /><span className="brand-name">Mohamed Ramy</span></a>
          <p>Clarity, designed and built.</p>
          <div className="footer-links">
            <a href="https://github.com/mohamedramii" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mohamed-ramy11" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://mostaql.com/u/mohamedramy11" target="_blank" rel="noreferrer">Mostaql</a>
          </div>
        </div>
        <Separator />
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Mohamed Ramy</span>
          <span>Alexandria · Egypt · GMT+3</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
