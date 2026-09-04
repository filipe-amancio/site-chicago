/**
 * SHAPE CONSISTENCY LOCK (regra 4.4) - regra única de raio para a página:
 *   - elementos interativos (botões, tabs, tags, pills): full pill
 *   - cards e superfícies: rounded-[1.25rem]
 *   - mapa e blocos grandes: rounded-[1.5rem]
 * Herdado do CSS original, que já seguia esse sistema.
 *
 * COLOR CONSISTENCY LOCK (regra 4.2) - um único acento na página inteira:
 * --color-accent (#ff5a2b). Não introduzir outra cor de destaque.
 *
 * ATENÇÃO ao editar: btnBase NÃO define cor de borda. Se definisse
 * (ex.: border-transparent), as variantes abaixo não conseguiriam
 * sobrescrevê-la - utilitários da mesma camada são resolvidos pela ordem
 * no CSS gerado, não pela ordem na string de classes. Era esse o bug que
 * deixava os botões de contorno sem borda visível.
 */

const btnBase =
  "inline-flex items-center justify-center gap-[0.6em] font-sans font-semibold uppercase tracking-[0.08em] text-sm " +
  "px-[1.9em] py-[0.95em] min-h-[44px] rounded-full border-[1.5px] " +
  "transition-[background-color,color,border-color,box-shadow] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]";

/** Branco sólido sobre fundo escuro. Contraste AA garantido (regra 4.5). */
export const btnPrimary =
  `${btnBase} border-transparent bg-white text-ink hover:bg-accent hover:text-white hover:shadow-[0_0_0_6px_rgba(255,90,43,0.15)]`;

/** Contorno: texto branco, borda visível contra o fundo escuro. */
export const btnOutline =
  `${btnBase} border-white/25 text-white hover:border-accent hover:text-accent`;

/** Fantasma: mesma família, borda um pouco mais discreta. */
export const btnGhost =
  `${btnBase} border-white/20 text-white hover:border-white`;

/** Rótulo pequeno acima de um título. Uso racionado (regra 4.7:
 *  no máximo 1 a cada 3 seções). */
export const kicker =
  "font-sans text-sm uppercase tracking-[0.28em] text-accent";

/** Título de seção, display condensado da marca. */
export const sectionTitle =
  "font-display font-normal uppercase text-2xl leading-[1.02] tracking-[0.01em]";
