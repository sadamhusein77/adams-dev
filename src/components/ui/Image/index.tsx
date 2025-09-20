import React, { useState, useMemo } from "react";
import { cn } from "@/libs/utils";

type SmartImageProps = {
  src?: string | null;
  alt?: string;
  width: number;
  height: number;
  fallbackSrc?: string;
  className?: string;
  priority?: boolean; // eager load if above-the-fold
  rounded?: boolean;
  responsive?: boolean; // auto-generate srcSet like next/image
  quality?: number; // compression quality
  blurDataURL?: string; // tiny base64 / low-quality preview
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
};

const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt = "image",
  width,
  height,
  fallbackSrc = "/fallback.png",
  className,
  priority = false,
  rounded = true,
  responsive = true,
  quality = 80,
  blurDataURL,
  objectFit = "cover",
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const isValidSrc = src && src.trim() !== "";

  // Generate responsive srcSet automatically
  const { srcSet, sizes } = useMemo(() => {
    if (!responsive || !isValidSrc) return { srcSet: undefined, sizes: undefined };

    const breakpoints = [400, 800, 1200, 1600, 2000];
    const srcSet = breakpoints
      .map((bp) => `${src}?w=${bp}&q=${quality} ${bp}w`)
      .join(", ");

    const sizes = `(max-width: ${width}px) 100vw, ${width}px`;
    return { srcSet, sizes };
  }, [src, responsive, quality, width, isValidSrc]);

  return (
    <div
      style={{ width, height }}
      className={cn(
        "relative overflow-hidden bg-gray-100",
        rounded && "rounded-lg",
        className
      )}
    >
      {/* Skeleton shimmer */}
      {!loaded && !blurDataURL && (
        <div
          className="absolute inset-0 animate-pulse bg-gray-200"
          style={{ width, height }}
        />
      )}

      {/* Blur placeholder */}
      {blurDataURL && !loaded && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover blur-md scale-110"
        />
      )}

      {/* Main Image */}
      <img
        src={error || !isValidSrc ? fallbackSrc : src!}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={cn(
          "transition-opacity duration-500 absolute inset-0 w-full h-full",
          `object-${objectFit}`,
          loaded ? "opacity-100" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
      />
    </div>
  );
};

export default React.memo(SmartImage);
