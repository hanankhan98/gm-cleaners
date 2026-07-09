"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

type Animation = "fade-up" | "fade-left" | "fade-right" | "fade-in" | "scale-in";

interface Props {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const initialStyles: Record<Animation, Record<string, string>> = {
  "fade-up": { opacity: "0", transform: "translateY(40px)" },
  "fade-left": { opacity: "0", transform: "translateX(-40px)" },
  "fade-right": { opacity: "0", transform: "translateX(40px)" },
  "fade-in": { opacity: "0", transform: "none" },
  "scale-in": { opacity: "0", transform: "scale(0.95)" },
};

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const initial = initialStyles[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : initial.opacity,
        transform: visible ? "translateX(0) translateY(0) scale(1)" : initial.transform,
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
