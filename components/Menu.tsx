"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MENU, LINKS } from "@/lib/menu-data";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { btnPrimary, sectionTitle } from "@/lib/styles";

/* Sem eyebrow: orcamento ja gasto no hero (regra 4.7). */
export function Menu() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(MENU[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeCategory = MENU.find((c) => c.id === active) ?? MENU[0];

  /* Navegacao por setas no tablist - melhoria de acessibilidade sobre o
     site original, que so respondia a clique. */
  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const isNext = event.key === "ArrowRight" || event.key === "ArrowDown";
    const isPrev = event.key === "ArrowLeft" || event.key === "ArrowUp";
    if (!isNext && !isPrev) return;

    event.preventDefault();
    const nextIndex = isNext
      ? (index + 1) % MENU.length
      : (index - 1 + MENU.length) % MENU.length;
    const nextId = MENU[nextIndex].id;
    setActive(nextId);
    tabRefs.current[nextId]?.focus();
  };

  return (
    <section
      id="cardapio"
      className="border-y border-line-soft bg-ink-2 py-[clamp(4rem,10vw,8rem)]"
    >
      <div className="section-shell">
        <Reveal>
          <div className="mb-10 text-center">
            <h2 className={sectionTitle}>Cardápio</h2>
            <p className="mx-auto mt-5 max-w-[32rem] text-sm text-muted">
              Prévia com os itens mais pedidos. Cardápio completo, fotos e
              promoções no pedido online.
            </p>
            <div className="mt-6 flex justify-center">
              <MagneticButton href={LINKS.pedido} external className={btnPrimary}>
                Ver cardápio completo
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        {/* Abas com indicador deslizante.
            Motivacao: transicao de estado - o pill acompanha a selecao, deixando
            claro o que mudou em vez de trocar o conteudo sem aviso. */}
        <div
          role="tablist"
          aria-label="Categorias do cardápio"
          className="mb-10 flex flex-wrap justify-center gap-[0.6rem]"
        >
          {MENU.map((category, index) => {
            const isActive = category.id === active;
            return (
              <button
                key={category.id}
                ref={(el) => {
                  tabRefs.current[category.id] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${category.id}`}
                id={`tab-${category.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(category.id)}
                onKeyDown={(e) => onTabKeyDown(e, index)}
                className={`relative min-h-[44px] cursor-pointer rounded-full border px-[1.4em]
                            py-[0.65em] font-sans text-sm font-semibold uppercase
                            tracking-[0.06em] transition-colors duration-300
                            ${
                              isActive
                                ? "border-white text-ink"
                                : "border-line-soft text-muted hover:text-white"
                            }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={reduce ? undefined : "menu-tab-pill"}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    /* z-0, nao -z-10: um z negativo joga o pill para tras do
                       fundo da secao, deixando o texto escuro ilegivel. */
                    className="absolute inset-0 z-0 rounded-full bg-white"
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <div className="mx-auto max-w-[46rem]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeCategory.id}
              id={`panel-${activeCategory.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${activeCategory.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              {activeCategory.items.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.45,
                    delay: reduce ? 0 : i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group border-b border-line-soft py-6 first:pt-0"
                >
                  <div className="flex items-baseline gap-3">
                    <h3
                      className="whitespace-nowrap font-sans text-lg font-semibold uppercase
                                 tracking-[0.02em] transition-colors duration-300
                                 group-hover:text-accent"
                    >
                      {item.name}
                    </h3>
                    <span className="menu-dots" aria-hidden="true" />
                    <span className="whitespace-nowrap font-display text-lg text-accent">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[38rem] text-muted">{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
