"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, X } from "lucide-react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";
import { consumeProjectTransition } from "@/lib/project-transition";

gsap.registerPlugin(useGSAP, Flip);

type ProjectModalProps = {
  children: React.ReactNode;
  slug: string;
  label: string;
};

export function ProjectModal({ children, slug, label }: ProjectModalProps) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const closingRef = useRef(false);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  const closeModal = useCallback(() => {
    const modal = modalRef.current;
    if (!modal || closingRef.current) return;
    closingRef.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panel = modal.querySelector<HTMLElement>(".case-modal__panel");
    const backdrop = modal.querySelector<HTMLElement>(".case-modal__backdrop");

    gsap.timeline({
      defaults: { overwrite: true },
      onComplete: () => router.back(),
    })
      .to(panel, {
        autoAlpha: 0,
        y: reduceMotion ? 0 : 24,
        scale: reduceMotion ? 1 : 0.992,
        duration: reduceMotion ? 0.08 : 0.38,
        ease: "power3.in",
      })
      .to(backdrop, { autoAlpha: 0, duration: reduceMotion ? 0.04 : 0.2 }, "-=0.14");
  }, [router]);

  useGSAP(
    () => {
      const modal = modalRef.current;
      if (!modal) return;

      const panel = modal.querySelector<HTMLElement>(".case-modal__panel");
      const backdrop = modal.querySelector<HTMLElement>(".case-modal__backdrop");
      const heroMedia = modal.querySelector<HTMLElement>("[data-case-hero-media]");
      const intro = modal.querySelector<HTMLElement>("[data-case-intro]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const pendingState = consumeProjectTransition(slug) as ReturnType<typeof Flip.getState> | null;

      gsap.set(modal, { autoAlpha: 1 });
      gsap.fromTo(backdrop, { autoAlpha: 0 }, { autoAlpha: 1, duration: reduceMotion ? 0.01 : 0.35 });

      if (!reduceMotion && pendingState && heroMedia) {
        gsap.set(panel, { autoAlpha: 1 });
        Flip.from(pendingState, {
          targets: heroMedia,
          absolute: true,
          simple: true,
          scale: true,
          duration: 0.9,
          ease: "power4.inOut",
          zIndex: 5,
        });
        gsap.from(intro, { autoAlpha: 0, y: 34, duration: 0.72, delay: 0.28, ease: "power3.out" });
      } else {
        gsap.timeline({ defaults: { ease: "power3.out" } })
          .fromTo(panel, { autoAlpha: 0, y: reduceMotion ? 0 : 28 }, { autoAlpha: 1, y: 0, duration: reduceMotion ? 0.08 : 0.55 })
          .from(intro, { autoAlpha: 0, y: reduceMotion ? 0 : 28, duration: reduceMotion ? 0.08 : 0.55 }, "-=0.25");
      }
    },
    { scope: modalRef, dependencies: [slug] },
  );

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    restoreFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const portfolio = document.querySelector<HTMLElement>(".portfolio-shell");
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
    if (portfolio) {
      portfolio.setAttribute("aria-hidden", "true");
      portfolio.inert = true;
    }

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 120);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("hidden"));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = modal.scrollHeight - modal.clientHeight;
        const progress = max > 0 ? modal.scrollTop / max : 0;
        if (progressRef.current) gsap.set(progressRef.current, { scaleX: progress });
      });
    };

    modal.addEventListener("scroll", updateProgress, { passive: true });
    document.addEventListener("keydown", onKeyDown);
    updateProgress();

    return () => {
      window.clearTimeout(focusTimer);
      cancelAnimationFrame(frame);
      modal.removeEventListener("scroll", updateProgress);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      if (portfolio) {
        portfolio.removeAttribute("aria-hidden");
        portfolio.inert = false;
      }
      restoreFocusRef.current?.focus({ preventScroll: true });
    };
  }, [closeModal]);

  return (
    <div
      className="case-modal"
      ref={modalRef}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <div className="case-modal__backdrop" aria-hidden="true" onMouseDown={closeModal} />
      <section className="case-modal__panel" role="dialog" aria-modal="true" aria-labelledby="case-modal-title">
        <header className="case-modal__chrome">
          <span ref={progressRef} className="case-modal__progress" aria-hidden="true" />
          <div>
            <span className="case-modal__index">01</span>
            <span className="case-modal__label">{label} · Case study</span>
          </div>
          <button ref={closeRef} type="button" onClick={closeModal} aria-label="Close case study">
            <ArrowLeft size={17} aria-hidden="true" /> Back to work <X size={18} aria-hidden="true" />
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}
