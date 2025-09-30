import { useState, useRef, useEffect, memo } from "react";
import { icoBrokenImg } from "@/assets";
import { cn } from "@/libs/utils";

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  errorClassName?: string;
  fallbackSrc?: string;
  showPlaceholder?: boolean;
  wrapperClassName?: string;
  imgClassName?: string;
};

// --- Shared observer setup ---
type ObserverCallback = (el: Element) => void;

let observer: IntersectionObserver | null = null;
const listeners = new WeakMap<Element, ObserverCallback>();

function getObserver(): IntersectionObserver {
  if (observer) return observer;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cb = listeners.get(entry.target);
          if (cb) cb(entry.target);
          observer?.unobserve(entry.target);
          listeners.delete(entry.target);
        }
      });
    },
    { rootMargin: "100px" }
  );

  return observer;
}

// --- Component ---
const SmartImage = memo(function SmartImage({
  src,
  alt,
  className, // kept for backward-compat (alias for wrapper)
  wrapperClassName,
  imgClassName,
  errorClassName,
  fallbackSrc = icoBrokenImg,
  showPlaceholder = true,
  ...props
}: SmartImageProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "loaded" | "error"
  >("idle");
  const [isInView, setIsInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const current = wrapperRef.current;
    const obs = getObserver();

    listeners.set(current, () => {
      setIsInView(true);
      if (src) setStatus("loading");
      else setStatus("error");
    });

    obs.observe(current);

    return () => {
      listeners.delete(current);
      obs.unobserve(current);
    };
  }, [src]);

  const finalSrc = !src || status === "error" ? fallbackSrc : src;

  return (
    <div
      ref={wrapperRef}
      className={cn("relative inline-block", wrapperClassName, className)}
    >
      {isInView && (
        <>
          {status === "loading" && showPlaceholder && (
            <div className="absolute inset-0 animate-pulse bg-gray-200 rounded" />
          )}
          <img
            src={finalSrc}
            alt={alt}
            loading="lazy"
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
            className={cn(
              "transition-opacity duration-500 w-full h-full object-contain",
              status === "loaded" ? "opacity-100" : "opacity-0",
              status === "error" && errorClassName,
              imgClassName // 👈 apply here
            )}
            {...props}
          />
        </>
      )}
    </div>
  );
});

export default SmartImage;
