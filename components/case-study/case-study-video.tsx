"use client";

import { useEffect, useRef } from "react";

type CaseStudyVideoProps = {
  src: string;
  poster: string;
  label: string;
};

export function CaseStudyVideo({ src, poster, label }: CaseStudyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin: "0px", threshold: 0.3 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      aria-label={label}
      controls
      controlsList="nodownload noremoteplayback"
      disablePictureInPicture
      loop
      muted
      playsInline
      preload="metadata"
    />
  );
}
