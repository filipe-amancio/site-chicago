"use client";

import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { ArrowUp } from "@phosphor-icons/react";

export function ToTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  /* Limiar booleano - o valor continuo fica no MotionValue (regra 3.B). */
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 600);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Voltar ao topo"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduce ? "auto" : "smooth",
            })
          }
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.9 }}
          whileHover={reduce ? undefined : { scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 340, damping: 22 }}
          className="fixed bottom-5 right-5 z-[80] flex h-12 w-12 cursor-pointer items-center
                     justify-center rounded-full bg-white text-ink transition-colors
                     hover:bg-accent hover:text-white"
        >
          <ArrowUp size={20} weight="bold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
