import { useEffect, useState, useRef } from "react";
import styles from "./style.module.scss";
import useMediaQuery from "@/hooks/use-mediaQuery";
import { cn } from "@/libs/utils";

interface ResponsiveDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  persistent?: boolean;
  isNoHeader?: boolean;
}

export default function ResponsiveDialog({
  open,
  onClose,
  title,
  children,
  persistent,
  isNoHeader = false
}: ResponsiveDialogProps) {
  const [shouldRender, setShouldRender] = useState(open);
  const [exit, setExit] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const [snapState, setSnapState] = useState<"half" | "full">("full");
  const { lg }= useMediaQuery();

  // Drag states
  const [dragging, setDragging] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const startY = useRef<number | null>(null);
  const lastY = useRef<number>(0);
  const lastTime = useRef<number>(0);

  useEffect(() => {
  if (open) {
    setShouldRender(true);
    setExit(false);
  } else if (shouldRender) {
    setExit(true);
    const timer = setTimeout(() => {
      setShouldRender(false);
      setExit(false); // reset for next open
    }, 400); // match slideDown duration
    return () => clearTimeout(timer);
  }
}, [open]);

useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!persistent && e.key === "Escape") {
      onClose();
    }
  };
  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [onClose, persistent]);



  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if (persistent) return;
  if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
    onClose();
  }
};


  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    lastY.current = startY.current;
    lastTime.current = performance.now();
    setDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging || startY.current === null) return;

    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY.current;

    if (deltaY > 0) setTranslateY(deltaY);

    // Track velocity
    lastY.current = currentY;
    lastTime.current = performance.now();
  };

  const handleTouchEnd = () => {
    if (startY.current === null) return;

    const endTime = performance.now();
    const deltaY = lastY.current - startY.current;
    const time = endTime - lastTime.current || 1;
    const velocity = deltaY / time;

    if (snapState === "full") {
      if (deltaY > 100 || velocity > 0.5) {
        setSnapState("half");
      } else {
        setSnapState("full");
      }
    } else {
      if (deltaY < -100 || velocity < -0.5) {
        setSnapState("full");
      } else if (deltaY > 100) {
        onClose(); // user dragged down to close
      } else {
        setSnapState("half");
      }
    }

    setDragging(false);
    setTranslateY(0);
    startY.current = null;
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div
        ref={dialogRef}
        className={`${styles.dialog} ${exit ? styles.exit : ""}`}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: dragging ? `translateY(${translateY}px)` : undefined,
          transition: dragging ? "none" : undefined
        }}
      >
        <div className="block lg:hidden">
          <div className={styles.handle}></div>
        </div>
        {
          !isNoHeader && (
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              {!persistent && (
                <button onClick={onClose} className={styles.closeButton}>
                  &times;
                </button>
              )}
            </div>
          )
        }
        <div className={cn(styles.body, !lg ? 'no-scrollbar' : '')}>{children}</div>
      </div>
    </div>
  );
}
