import React, { useEffect, useRef } from "react";

// Loads the source only once the video scrolls into view.
// With autoPlay it plays muted while visible and pauses when off-screen.
function LazyVideo({ src, className = "", autoPlay = false, controls = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.getAttribute("src")) {
            video.src = autoPlay ? src : `${src}#t=0.1`;
          }
          if (autoPlay) {
            video.play().catch(() => {});
          } else {
            observer.disconnect();
          }
        } else if (autoPlay) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, autoPlay]);

  return (
    <video
      ref={ref}
      className={className}
      muted={autoPlay}
      loop={autoPlay}
      playsInline
      controls={controls}
      controlsList="nodownload noremoteplayback noplaybackrate"
      disablePictureInPicture
      disableRemotePlayback
      onContextMenu={(event) => event.preventDefault()}
      preload={autoPlay ? "auto" : "metadata"}
    />
  );
}

export default LazyVideo;
