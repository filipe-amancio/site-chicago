"use client";

import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { Star } from "@phosphor-icons/react";

const WORDS = ["SMASH BURGER", "URBAN STYLE", "CHICAGO", "AMERICAN GRILL"];

/** Mantem um valor dentro de [min, max) para o loop infinito. */
function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

/**
 * Faixa rolante unica da pagina (regra 5: no maximo 1 marquee por pagina).
 *
 * Motivacao: feedback - a velocidade e a direcao reagem ao scroll do
 * usuario, ligando a faixa ao gesto dele em vez de ser um loop decorativo.
 */
export function Marquee() {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  });

  const directionRef = useRef(1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;

    let moveBy = directionRef.current * -2.2 * (delta / 1000);

    const factor = velocityFactor.get();
    /* Rolar para baixo acelera; rolar para cima inverte a faixa. */
    if (factor < 0) directionRef.current = -1;
    else if (factor > 0) directionRef.current = 1;

    moveBy += directionRef.current * moveBy * factor;

    baseX.set(baseX.get() + moveBy);
  });

  /* O track repete o conteudo 2x, entao o loop fecha em -50%. */
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const strip = [...WORDS, ...WORDS];

  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y border-line-soft bg-ink-2 py-[0.9rem]"
    >
      <motion.div
        /* Idem: sempre anexado para o markup do SSR bater com o do cliente.
           Com reduce, o useAnimationFrame sai cedo e a faixa fica parada. */
        style={{ x }}
        className="flex w-max gap-8 px-4 font-sans text-sm font-semibold uppercase
                   tracking-[0.12em] text-muted lg:text-base"
      >
        {strip.map((word, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            {word}
            <Star size={12} weight="fill" className="flex-none text-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
