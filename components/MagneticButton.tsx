"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  /** Forca do ima em px de deslocamento maximo. */
  strength?: number;
};

/**
 * CTA que e atraido levemente pelo cursor.
 * Motivacao: feedback tatil na acao de conversao principal (pedir).
 *
 * Regra 3.B: posicao do ponteiro e valor continuo - useMotionValue, NUNCA
 * useState. useState re-renderizaria a arvore a cada pixel de mouse.
 */
export function MagneticButton({
  children,
  href,
  className = "",
  external = false,
  ariaLabel,
  strength = 12,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set((relX / rect.width) * strength * 2);
    y.set((relY / rect.height) * strength * 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      /* Style sempre anexado: omiti-lo sob reduce mudaria o markup entre
         SSR e hidratacao. Com reduce, handleMove sai cedo e as springs
         ficam paradas em 0, entao o efeito nao acontece de todo jeito. */
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
