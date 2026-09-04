# Trilhas de projeto

Como identificar a trilha certa para um projeto novo e qual conjunto de skills usar em cada uma. Os nomes de skill abaixo são os nomes reais (campo `name:` do `SKILL.md`) — use exatamente estes ao chamar a ferramenta Skill. Todas as citadas nas trilhas A–D estão no bundle deste kit (ver `README.md`); a trilha E depende de uma skill opcional.

## As três perguntas

Antes de começar qualquer projeto, responda:

**1. Qual é o objetivo do site?**
- A) Vender / converter (e-commerce, geração de leads, serviço)
- B) Informar / estabelecer presença (institucional, portfólio, blog)
- C) Melhorar um site que já existe (redesign)
- D) Interface app-like / mobile-first (plataforma, dashboard)
- E) Pitch especulativo para um negócio local que ainda não é cliente

**2. Quanto tempo disponível?**
- Urgente (menos de 3 dias) · Normal (1 a 2 semanas) · Tranquilo (2 semanas ou mais)

**3. Qual estilo visual o cliente ou o nicho pede?**
- Ousado (cores fortes, moderno) · Premium (sofisticado, editorial) · Minimalista (limpo, monocromático) · Corporativo (sóbrio, confiável)

A resposta 1 define a trilha. As respostas 2 e 3 ajustam quais skills entram e quanto tempo dedicar a cada etapa.

## Antes de escolher a trilha

Rode a skill `brainstorming` junto com o `BRIEF-TEMPLATE.md` para fechar lacunas do brief antes de decidir a estrutura.

## Tabela de trilhas

| Trilha | Quando usar | Skills (nomes reais) |
|---|---|---|
| **A — Venda / conversão** | Landing page comercial, e-commerce, captação de leads | `design-taste-frontend`, `frontend-design`, `web-design-guidelines`, `responsive-design`, `full-output-enforcement`. Estilo premium: adicione `high-end-visual-design`. |
| **B — Institucional / presença** | Site institucional, portfólio, blog, páginas de serviço | `minimalist-ui` (estilo limpo) **ou** `high-end-visual-design` (premium) — escolha um conforme a pergunta 3 —, mais `frontend-design`, `web-design-guidelines`, `responsive-design`, `full-output-enforcement`. Para documentos/slides/landing com tema pronto: `theme-factory`. |
| **C — Redesign** | O site já existe e precisa de upgrade visual ou de UX | `design-taste-frontend` (tem fluxo audit-first embutido), `frontend-design`, `web-design-guidelines`, `responsive-design`. Opcional, fora do bundle: `redesign-existing-projects`. |
| **D — App-like / mobile** | Plataforma, dashboard, interface com cara de app nativo | `frontend-design`, `responsive-design`, `web-design-guidelines`, `full-output-enforcement`. Opcional, fora do bundle: `imagegen-frontend-mobile`. |
| **E — Pitch para negócio local** | Prospecção especulativa: site de demonstração antes de ter contrato | Precisa da skill `local-business-rebuild`, que **não está no bundle mínimo**. Instale-a de `github.com/lotfb86/web-design-skills` (pasta `06-local-business-rebuild`) antes de usar esta trilha. Ela define um fluxo próprio de 10 fases — não combine com skills das outras trilhas. |

Regra prática: nunca ative todas as skills de uma vez. Escolha 3 a 4 por etapa do projeto (direção visual → estrutura → desenvolvimento → revisão).

## Complementares (não amarradas a uma trilha)

| Skill | No bundle? | Para que serve |
|---|---|---|
| `theme-factory` | sim | 10 temas de cor/fonte prontos para aplicar a um artefato, ou gera um tema novo |
| `verification-before-completion` | sim | Rodar os comandos de verificação antes de dizer "pronto" — use com o `CHECKLIST-ENTREGA.md` |
| `systematic-debugging` | sim | Quando algo quebra: investigar causa raiz antes de tentar consertar |
| `test-driven-development` | sim | Quando o projeto tem lógica testável (formulários, cálculo, integração) |
| `image-to-code` | não | Quando já existe uma referência visual (print, mockup) e o objetivo é implementar fiel a ela |
| `design-system-generator` | não | Gera um `DESIGN.md` estruturado, útil em projetos maiores ou com mais de uma pessoa |
| `brandkit` | não | Identidade visual, moodboard, logo, guia de marca |

## Skills do bundle (referência rápida)

Instaladas por `install.ps1` / `install.sh` em `~/.claude/skills/`. Origem e licença em `skills/ATTRIBUTION.md`.

| Nome real | Descrição resumida |
|---|---|
| `frontend-design` | Interface production-grade com alta qualidade de design, sem estética genérica de IA |
| `design-taste-frontend` | Anti-slop para landing pages, portfólios e redesigns; lê o brief e infere a direção |
| `high-end-visual-design` | Padrão de agência premium: fontes, espaçamento, sombras, cards, motion |
| `minimalist-ui` | Interface editorial limpa, monocromático quente, bento grid, sem gradiente pesado |
| `responsive-design` | Mobile-first, Grid/Flexbox, imagens responsivas, tipografia fluida, breakpoints |
| `theme-factory` | 10 temas prontos (cor + fonte) ou geração de tema na hora |
| `web-design-guidelines` | Auditoria da UI contra as Web Interface Guidelines |
| `full-output-enforcement` | Força código completo, sem placeholder nem truncamento |
| `brainstorming` | Refina ideia crua em design fechado por perguntas, antes de codar |
| `systematic-debugging` | Framework de 4 fases: causa raiz antes de consertar |
| `verification-before-completion` | Verificar de verdade antes de afirmar que terminou |
| `test-driven-development` | Teste primeiro, vê falhar, código mínimo pra passar |
