import React from "react";
import styles from "./style.module.scss";

type Direction = "horizontal" | "vertical";

export function Marquee({
  items,
  className = "",
  gap = 2,
  duration = 20,
  reverse = false,
  pauseOnHover = true,
  gradientFade = true,
  direction = "horizontal",
}: {
  items: React.ReactNode[];
  className?: string;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  pauseOnHover?: boolean;
  gradientFade?: boolean;
  direction?: Direction;
}) {
  const sequence = React.useMemo(() => [...items, ...items], [items]);

  const isVertical = direction === "vertical";

  return (
    <div
      className={[
        "relative overflow-hidden",
        isVertical ? "h-64 w-full" : "w-full",
        gradientFade
          ? isVertical
            ? "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
            : "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          : "",
        className,
      ].join(" ")}
    >
      <div
        className={[
          isVertical ? "flex flex-col" : "flex",
          isVertical ? styles.marqueeTrackY : styles.marqueeTrackX,
          reverse ? styles.reverse : "",
          pauseOnHover ? styles.pauseOnHover : "",
        ].join(" ")}
        style={{
          [isVertical ? "height" : "width"]: "200%",
          gap: `${gap}rem`,
          "--duration": `${duration}s`,
        } as React.CSSProperties}
      >
        {sequence.map((node, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center whitespace-nowrap"
          >
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
