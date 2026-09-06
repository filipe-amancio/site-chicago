"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
} from "motion/react";

/**
 * Montagem do lanche: cada camada cai de cima, amassa ao encostar e o pao
 * de cima prensa a pilha inteira (efeito sanduiche).
 *
 * Motivacao (regra "motion must be motivated"): narrativa - a secao fala da
 * construcao do lanche ("luz na comida, sem enfeite"); a animacao mostra a
 * montagem em vez de apenas afirma-la. Roda uma vez ao entrar na viewport e
 * repete no hover/tap, unica interacao possivel com um grafico decorativo.
 *
 * Regra 4.8: o SVG proprio aqui e o produto da marca, nao ilustracao avulsa.
 * Regra 4.2: o queijo e o unico acento da composicao.
 */

/** Atraso entre a queda de uma camada e a seguinte (s). */
const STEP = 0.13;

/** Ordem de montagem, de baixo para cima. Alimenta o `custom` das variantes. */
const BUN_BOTTOM = 0;
const PATTY = 1;
const CHEESE = 2;
const LETTUCE = 3;
const BUN_TOP = 4;

/** Instante em que o pao de cima encosta e a pilha e prensada. */
const PRESS_AT = BUN_TOP * STEP + 0.24;
/** Duracao total, usada para nao reiniciar a montagem no meio. */
const TOTAL = PRESS_AT + 0.9;

const BUN = "#f4f2ec";
const SEED = "#d6d0c2";
const LEAF = "#cfcabf";

export function BurgerBuild({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  /* Remontar o grupo reinicia as variantes - forma mais direta de reproduzir
     a sequencia inteira sem orquestrar controls manualmente. */
  const [run, setRun] = useState(0);
  const playing = useRef(false);

  function replay() {
    if (!inView || playing.current || reduce) return;
    playing.current = true;
    setRun((r) => r + 1);
    window.setTimeout(() => {
      playing.current = false;
    }, TOTAL * 1000);
  }

  /* `initial` e igual no servidor e no cliente: useReducedMotion() vale null
     no SSR, entao trocar o estado inicial aqui geraria mismatch de hidratacao
     (mesmo cuidado do Reveal). Quem pediu menos movimento recebe a mesma
     variante final, so que com duracao zero. */
  const layer: Variants = {
    hidden: { y: -150, opacity: 0 },
    built: (i: number) =>
      reduce
        ? { y: 0, opacity: 1, transition: { duration: 0 } }
        : {
            y: 0,
            opacity: 1,
            scaleY: [1, 0.78, 1.07, 1],
            transition: {
              y: {
                type: "spring",
                stiffness: 540,
                damping: 21,
                delay: i * STEP,
              },
              opacity: { duration: 0.14, delay: i * STEP },
              scaleY: {
                duration: 0.44,
                delay: i * STEP + 0.15,
                times: [0, 0.3, 0.66, 1],
                ease: "easeOut",
              },
            },
          },
  };

  /* A pilha inteira cede quando o pao de cima chega. */
  const press: Variants = {
    hidden: { scaleY: 1 },
    built: reduce
      ? { scaleY: 1 }
      : {
          scaleY: [1, 0.92, 1.02, 1],
          transition: {
            delay: PRESS_AT,
            duration: 0.5,
            times: [0, 0.28, 0.64, 1],
            ease: "easeOut",
          },
        },
  };

  /* Onda de impacto no prato: so aparece no momento da prensada. */
  const shock: Variants = {
    hidden: { opacity: 0, scale: 0.72 },
    built: reduce
      ? { opacity: 0, scale: 1 }
      : {
          opacity: [0, 0.35, 0],
          scale: [0.72, 1.02, 1.1],
          transition: { delay: PRESS_AT, duration: 0.9, ease: "easeOut" },
        },
  };

  /* Gergelim entra depois que o pao pousa, para nao competir com a queda. */
  const seeds: Variants = {
    hidden: { opacity: 0 },
    built: reduce
      ? { opacity: 1, transition: { duration: 0 } }
      : { opacity: 1, transition: { delay: PRESS_AT + 0.16, duration: 0.35 } },
  };

  const state = inView ? "built" : "hidden";

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 200 200"
      aria-hidden="true"
      onPointerEnter={replay}
      onClick={replay}
      className={`w-[min(100%,22rem)] drop-shadow-[0_30px_60px_rgba(255,90,43,0.12)] ${className}`}
    >
      {/* Prato: fica fora da remontagem, so as camadas reiniciam. */}
      <circle cx="100" cy="100" r="98" fill="#0a0a0a" stroke="#3a3d40" strokeWidth="1" />
      <circle
        cx="100"
        cy="100"
        r="84"
        fill="none"
        stroke="#3a3d40"
        strokeWidth="0.6"
        opacity="0.5"
      />

      <motion.g key={run} initial="hidden" animate={state}>
        {/* translate: centra a pilha montada no prato */}
        <g transform="translate(0,-4)">
          <motion.circle
            cx="100"
            cy="150"
            r="76"
            fill="none"
            stroke="#ff5a2b"
            strokeWidth="1.5"
            variants={shock}
            style={{ transformBox: "view-box", transformOrigin: "100px 150px" }}
          />

          {/* Prensa: origem na base para a pilha ceder contra o prato. */}
          <motion.g
            variants={press}
            style={{ transformBox: "view-box", transformOrigin: "100px 166px" }}
          >
            {/* pao de baixo */}
            <motion.path
              d="M44 142 H156 V148 Q156 166 100 166 Q44 166 44 148 Z"
              fill={BUN}
              variants={layer}
              custom={BUN_BOTTOM}
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            />

            {/* carne */}
            <motion.rect
              x="38"
              y="120"
              width="124"
              height="22"
              rx="11"
              fill="#1b1d20"
              stroke="#3a3d40"
              strokeWidth="1"
              variants={layer}
              custom={PATTY}
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            />

            {/* queijo - unico acento da composicao. Os pingos vem antes da
                fatia para escorrerem por tras dela. */}
            <motion.g
              variants={layer}
              custom={CHEESE}
              fill="#ff5a2b"
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            >
              <rect x="66" y="112" width="12" height="15" rx="6" />
              <rect x="119" y="112" width="13" height="19" rx="6.5" />
              <rect x="44" y="104" width="112" height="14" rx="4" />
            </motion.g>

            {/* alface: mais larga que o pao, para sobrar nas laterais */}
            <motion.path
              d="M36 92 H164 V100 q-4 8 -12 8 q-16 10 -33 -2 q-16.5 14 -33 0 q-16.5 14 -33 0 q-9 6 -17 -6 z"
              fill={LEAF}
              variants={layer}
              custom={LETTUCE}
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            />

            {/* pao de cima */}
            <motion.g
              variants={layer}
              custom={BUN_TOP}
              style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
            >
              <path d="M40 96 Q40 46 100 46 Q160 46 160 96 Z" fill={BUN} />
              <motion.g variants={seeds} fill={SEED}>
                <ellipse cx="78" cy="70" rx="4.5" ry="2.2" transform="rotate(-24 78 70)" />
                <ellipse cx="100" cy="61" rx="4.5" ry="2.2" transform="rotate(4 100 61)" />
                <ellipse cx="122" cy="70" rx="4.5" ry="2.2" transform="rotate(24 122 70)" />
                <ellipse cx="88" cy="83" rx="4.5" ry="2.2" transform="rotate(-12 88 83)" />
                <ellipse cx="113" cy="84" rx="4.5" ry="2.2" transform="rotate(14 113 84)" />
              </motion.g>
            </motion.g>
          </motion.g>
        </g>
      </motion.g>
    </motion.svg>
  );
}
