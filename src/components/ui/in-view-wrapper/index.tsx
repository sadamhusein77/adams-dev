import { useEffect, useRef, useState, type ReactNode } from "react";

interface InViewWrapperProps {
  children: ReactNode;
  rootMargin?: string;
  once?: boolean;
  placeholder?: ReactNode;
}

export default function InViewWrapper({
  children,
  rootMargin = "100px",
  once = true,
  placeholder = <div className="h-48 bg-gray-200 animate-pulse rounded-xl" />,
}: InViewWrapperProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [once, rootMargin]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
}
