import { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from './style.module.scss';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  delay?: number;
  position?: "top" | "bottom" | "left" | "right";
}

export default function Tooltip({
  children,
  content,
  delay = 200,
  position = "top",
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [finalPosition, setFinalPosition] = useState(position);

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const show = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    if (!visible) return;

    const trigger = triggerRef.current?.getBoundingClientRect();
    const tooltip = tooltipRef.current?.getBoundingClientRect();

    if (!trigger || !tooltip) return;

    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const padding = 8;

    let top = 0;
    let left = 0;
    let newPos = position;

    // Calculate base positions first
    const centerX = trigger.left + trigger.width / 2;
    const centerY = trigger.top + trigger.height / 2;

    switch (position) {
      case "top":
        top = scrollY + trigger.top - tooltip.height - padding;
        left = scrollX + centerX - tooltip.width / 2;
        if (top < 0) newPos = "bottom";
        break;

      case "bottom":
        top = scrollY + trigger.bottom + padding;
        left = scrollX + centerX - tooltip.width / 2;
        if (top + tooltip.height > window.innerHeight) newPos = "top";
        break;

      case "left":
        top = scrollY + centerY - tooltip.height / 2;
        left = scrollX + trigger.left - tooltip.width - padding;
        if (left < 0) newPos = "right";
        break;

      case "right":
        top = scrollY + centerY - tooltip.height / 2;
        left = scrollX + trigger.right + padding;
        if (left + tooltip.width > window.innerWidth) newPos = "left";
        break;
    }

    // Secondary horizontal overflow check for top/bottom
    if ((newPos === "top" || newPos === "bottom") && (left + tooltip.width > window.innerWidth)) {
      left = window.innerWidth - tooltip.width - padding;
    }
    if ((newPos === "top" || newPos === "bottom") && left < 0) {
      left = padding;
    }

    // Vertical overflow check for left/right
    if ((newPos === "left" || newPos === "right") && (top + tooltip.height > window.innerHeight)) {
      top = window.innerHeight - tooltip.height - padding;
    }
    if ((newPos === "left" || newPos === "right") && top < 0) {
      top = padding;
    }

    setFinalPosition(newPos);
    setCoords({ top, left });
  }, [visible, position]);

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>

      {visible &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            className={`${styles.tooltipContent} ${styles[finalPosition]}`}
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              background: "#111",
              color: "#fff",
              padding: "6px 10px",
              fontSize: "12px",
              borderRadius: "6px",
              whiteSpace: "nowrap",
              pointerEvents: "none",
              zIndex: 9999,
              maxWidth: "200px",
              overflowWrap: "break-word",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            {content}
          </div>,
          document.body
        )}
    </>
  );
}
