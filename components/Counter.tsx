"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

type CounterProps = {
  to: number;
  /** Zeros a esquerda, ex.: 2 gera "06". */
  pad?: number;
  duration?: number;
};

/**
 * Contador que sobe quando entra em tela.
 *
 * Motivacao: hierarquia - nesta secao o numero e o conteudo, e a contagem
 * leva o olho ate ele. Nao usa useState (regra 3.B): o valor e continuo e
 * vive num MotionValue, fora do ciclo de render do React.
 */
export function Counter({ to, pad = 0, duration = 1.6 }: CounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  /* Sempre comeca em 0, inclusive com reduce ligado: useReducedMotion()
     vale null no servidor e o valor real no cliente, entao semear o
     MotionValue com `to` faria o SSR escrever "2019" onde a hidratacao
     escreve "0" - um mismatch de texto que derruba a arvore. Com reduce,
     o efeito abaixo salta direto para o valor final, sem animar. */
  const count = useMotionValue(0);
  const text = useTransform(count, (value) =>
    String(Math.round(value)).padStart(pad, "0")
  );

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      count.set(to);
      return;
    }
    const controls = animate(count, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, to, duration, count, reduce]);

  return <motion.span ref={ref}>{text}</motion.span>;
}
