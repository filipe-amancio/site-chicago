"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { InstagramLogo } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import { LINKS } from "@/lib/menu-data";
import { btnGhost, kicker, sectionTitle } from "@/lib/styles";

export function Showcase() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /* Congela a ENTRADA em vez de colapsar os ranges.
     Os ranges aqui nao comecam em zero (offset "start end": a secao ainda
     esta abaixo da viewport no progresso 0), entao zera-los mudaria o
     primeiro frame e quebraria a hidratacao - o servidor renderizaria
     rotate(-6deg) e o cliente com reduce, transform:none.
     Alimentando um MotionValue parado, os dois lados produzem o mesmo
     frame inicial e o parallax simplesmente nunca avanca. */
  const frozen = useMotionValue(0);
  const progress = reduce ? frozen : scrollYProgress;

  /* As camadas do lanche se separam conforme a secao cruza a tela.
     Motivacao: narrativa - a marca se descreve pela construcao do lanche
     ("luz na comida, sem enfeite"); separar as camadas mostra isso em vez
     de apenas afirmar. Cada camada anda numa taxa diferente. */
  const bunTopY = useTransform(progress, [0, 1], [-26, 18]);
  const cheeseY = useTransform(progress, [0, 1], [-14, 10]);
  const lettuceY = useTransform(progress, [0, 1], [-6, 4]);
  const pattyY = useTransform(progress, [0, 1], [8, -6]);
  const bunBottomY = useTransform(progress, [0, 1], [22, -16]);
  const plateRotate = useTransform(progress, [0, 1], [-6, 6]);

  return (
    <section id="vitrine" className="py-[clamp(4rem,10vw,8rem)]">
      <div
        ref={ref}
        /* relative e obrigatorio: useScroll precisa de um container
           posicionado para calcular o offset corretamente. */
        className="section-shell relative grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-2"
      >
        <Reveal>
          {/* Eyebrow 2 de 2 na pagina (regra 4.7) */}
          <p className={`${kicker} mb-3 block`}>Direção visual</p>
          <h2 className={sectionTitle}>
            Fundo preto.
            <br />
            Luz na comida.
            <br />
            Sem enfeite.
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg text-muted">
            Contraste alto, luz lateral, sombra marcada. É assim que a Chicago
            Burger aparece: no prato, na embalagem e na tela. Sem gradiente
            colorido, sem distração, o hambúrguer é a estrela.
          </p>
          <div className="mt-8">
            <MagneticButton href={LINKS.instagram} external className={btnGhost}>
              <InstagramLogo size={18} weight="fill" />
              Seguir no Instagram
            </MagneticButton>
          </div>
        </Reveal>

        <div className="flex justify-center" aria-hidden="true">
          <motion.svg
            viewBox="0 0 200 200"
            style={{ rotate: plateRotate }}
            className="w-[min(100%,22rem)] drop-shadow-[0_30px_60px_rgba(255,90,43,0.12)]"
          >
            <circle cx="100" cy="100" r="98" fill="#0a0a0a" stroke="#3a3d40" strokeWidth="1" />

            <motion.ellipse
              cx="100"
              cy="66"
              rx="52"
              ry="18"
              fill="#fff"
              style={{ y: bunTopY }}
            />
            <motion.rect
              x="48"
              y="78"
              width="104"
              height="10"
              rx="5"
              fill="#ff5a2b"
              style={{ y: cheeseY }}
            />
            <motion.path
              d="M44 96 q56 22 112 0 l-6 20 q-50 18 -100 0 z"
              fill="#e8e6e1"
              style={{ y: lettuceY }}
            />
            <motion.rect
              x="46"
              y="118"
              width="108"
              height="14"
              rx="7"
              fill="#1b1d20"
              stroke="#3a3d40"
              style={{ y: pattyY }}
            />
            <motion.path
              d="M46 138 q54 20 108 0 l-4 18 q-50 16 -100 0 z"
              fill="#fff"
              style={{ y: bunBottomY }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
}
