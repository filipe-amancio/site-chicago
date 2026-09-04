"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { BrandBadge, BrandWord } from "./BrandBadge";
import { NAV_LINKS } from "@/lib/menu-data";
import { btnGhost } from "@/lib/styles";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();

  /* Barra de progresso do scroll.
     Motivacao: feedback de posicao numa pagina longa de rolagem unica. */
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  /* Limiar discreto (booleano), nao valor continuo - useState e adequado
     aqui; o valor continuo do scroll fica no MotionValue acima. */
  useMotionValueEvent(scrollY, "change", (latest) => {
    setCondensed(latest > 40);
  });

  /* Trava o scroll do body enquanto o menu mobile esta aberto. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  /* Escape fecha o menu - acessibilidade preservada do main.js original. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-[100] pt-3" id="topo">
      {/* progresso do scroll */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 h-[2px] w-full origin-left bg-accent"
      />

      <motion.div
        animate={
          reduce
            ? undefined
            : {
                paddingTop: condensed ? "0.4rem" : "0.55rem",
                paddingBottom: condensed ? "0.4rem" : "0.55rem",
                backgroundColor: condensed
                  ? "rgba(10,10,11,0.88)"
                  : "rgba(10,10,11,0.7)",
              }
        }
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        /* z acima do overlay mobile (z-99): sem isso o overlay cobre a
           propria barra e o botao de fechar fica inalcancavel. */
        className="relative z-[101] mx-3 flex max-w-[68rem] items-center justify-between gap-4
                   rounded-full border border-line-soft bg-[rgba(10,10,11,0.7)] py-[0.55rem]
                   pl-4 pr-[0.7rem] backdrop-blur-[16px] backdrop-saturate-150 xl:mx-auto"
      >
        <a href="#topo" className="flex items-center gap-[0.65rem]" aria-label="Chicago Burger, início">
          <BrandBadge className="h-[2.6rem] w-[2.6rem] flex-none" />
          <BrandWord className="hidden sm:inline" />
        </a>

        {/* Desktop: uma unica linha, sempre (regra 4.7) */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          <ul className="flex gap-[clamp(1.1rem,2.4vw,2rem)]">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative block py-[0.35rem] font-sans text-sm font-medium
                             uppercase tracking-[0.06em] text-muted transition-colors
                             duration-300 hover:text-white"
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-accent
                               transition-[width] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]
                               group-hover:w-full"
                  />
                </a>
              </li>
            ))}
          </ul>
          <a href="#pedir" className={btnGhost}>
            Pedir agora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-principal"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 flex-none items-center justify-center lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={reduce ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduce ? undefined : { rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex"
            >
              {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-principal"
            aria-label="Principal"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center gap-10
                       bg-[rgba(5,5,5,0.97)] backdrop-blur-[20px] lg:hidden"
          >
            <ul className="flex flex-col items-center gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-sans text-xl font-medium uppercase tracking-[0.06em]
                               text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href="#pedir" onClick={() => setOpen(false)} className={btnGhost}>
              Pedir agora
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
