"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { sectionTitle } from "@/lib/styles";

const TRAITS = ["Urbana", "Forte", "Premium", "Americana"];

/* Sem eyebrow nesta secao: orcamento de no maximo 1 a cada 3 secoes
   (regra 4.7). O titulo sozinho ja categoriza o bloco. */
export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="sobre" className="py-[clamp(4rem,10vw,8rem)]">
      <div className="section-shell grid items-center gap-[clamp(2.5rem,6vw,4rem)] lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <h2 className={sectionTitle}>
            Feita pra quem gosta
            <br />
            de cidade grande.
          </h2>
          <p className="mt-5 max-w-[34rem] text-lg text-muted">
            A Chicago Burger nasceu da chapa: carne smash, casca crocante, queijo
            derretendo na borda. Sem frescura, sem cor de sobra, só preto, branco
            e a fome de fazer o melhor burger urbano da cidade.
          </p>
          <p className="mt-5 max-w-[34rem] text-lg text-muted">
            Cada lanche sai da grelha com o mesmo compromisso que está no nosso
            símbolo: impacto, autenticidade e presença. Isso não é fast-food
            descartável, é a nossa assinatura.
          </p>

          <ul className="mt-8 flex flex-wrap gap-[0.6rem]">
            {TRAITS.map((trait, i) => (
              <motion.li
                key={trait}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: reduce ? 0 : 0.5,
                  delay: reduce ? 0 : i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={reduce ? undefined : { y: -3 }}
                className="cursor-default rounded-full border border-line-soft px-[1.1em]
                           py-[0.5em] font-sans text-sm font-semibold uppercase
                           tracking-[0.08em] text-white transition-colors hover:border-accent"
              >
                {trait}
              </motion.li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-4">
            <StatCard label="Smash na chapa">
              <Counter to={100} />
              <small className="ml-[0.15em] font-sans text-[0.4em] text-muted">%</small>
            </StatCard>

            <StatCard label="Da chapa à mesa">
              <Counter to={6} pad={2} />
              <small className="ml-[0.15em] font-sans text-[0.4em] text-muted">min</small>
            </StatCard>

            <StatCard label="Ano de fundação">
              <Counter to={2019} duration={2} />
            </StatCard>

            <StatCard label="Receita própria, sem atalho" accent>
              <span className="flex gap-1 text-accent">
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
                <Star size={20} weight="fill" />
              </span>
            </StatCard>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatCard({
  children,
  label,
  accent = false,
}: {
  children: React.ReactNode;
  label: string;
  accent?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`flex flex-col gap-[0.4rem] rounded-[1.25rem] border p-[clamp(1.25rem,3vw,1.75rem)]
        transition-colors duration-[400ms]
        ${
          accent
            ? "border-[rgba(255,90,43,0.3)] bg-[linear-gradient(160deg,rgba(255,90,43,0.16),rgba(255,90,43,0.02))]"
            : "border-line-soft bg-surface hover:border-line"
        }`}
    >
      <span className="flex items-center font-display text-xl">{children}</span>
      <span className="font-sans text-sm uppercase tracking-[0.04em] text-muted">
        {label}
      </span>
    </motion.div>
  );
}
