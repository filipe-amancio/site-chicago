"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos, para escalonar irmaos. */
  delay?: number;
  /** Distancia inicial em px no eixo Y. */
  y?: number;
  className?: string;
};

/**
 * Substitui o IntersectionObserver do main.js original.
 * Motivacao (regra "motion must be motivated"): hierarquia - revela o
 * conteudo na ordem em que deve ser lido, em vez de entregar tudo de uma vez.
 */
export function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    /* `initial` igual no servidor e no cliente: useReducedMotion() vale
       null no SSR, entao troca-lo aqui geraria mismatch de hidratacao.
       Quem pediu menos movimento recebe duracao e atraso zero. */
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0 : 0.8,
        delay: reduce ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
