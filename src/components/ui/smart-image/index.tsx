import { useState, useRef, useEffect } from "react";
import { icoBrokenImg } from "@/assets";
import { cn } from "@/libs/utils";

type SmartImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  errorClassName?: string;
};

export default function SmartImage({
  src,
  alt,
  className,
  errorClassName,
  ...props
}: SmartImageProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    "idle"
  );
  const [isInView, setIsInView] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Observe wrapper, not img
  useEffect(() => {
    if (!wrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setStatus("loading");
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );

    observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={cn("relative inline-block", className)}
    >
      {isInView && (
        <img
          src={status === "error" ? icoBrokenImg : src}
          alt={alt}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cn(
            "transition-opacity duration-500 w-full h-full object-contain",
            status === "loaded" ? "opacity-100" : "opacity-0",
            status === "error" && errorClassName
          )}
          {...props}
        />
      )}
    </div>
  );
}
