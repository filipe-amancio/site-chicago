# Prompt base por trilha

Regras gerais que valem para qualquer projeto, seguidas de um prompt específico por trilha (ver `TRILHAS.md` para a tabela completa de trilhas e skills).

## Regras de ouro (qualquer projeto)

**Qualidade visual**
- Hierarquia clara: título > subtítulo > corpo
- Espaçamento consistente (uma escala fixa, por exemplo múltiplos de 8px)
- No máximo 3 fontes (heading, corpo, destaque)
- Paleta de 3-4 cores principais mais neutros
- Evitar excesso visual

**Responsividade**
- Projetar mobile-first
- Testar pelo menos em 375px, 768px e 1920px
- Alvos de toque com no mínimo 48px
- Sem scroll horizontal
- Imagens responsivas (`srcset` ou equivalente)

**Conversão e CTA**
- CTA principal visível acima da dobra, inclusive em mobile
- Copy direta: uma frase, uma ideia
- Prova social presente quando disponível (avaliação, número, depoimento — respeitando restrições de nicho regulado)
- Formulários curtos, no máximo 5 campos

**Performance**
- Imagens otimizadas
- Lazy loading em imagens abaixo da dobra
- CSS crítico inline, resto adiado
- JS: só o necessário, code-splitting quando fizer sentido
- Lighthouse 85+ é uma meta razoável para perseguir, não uma métrica que qualquer skill garanta sozinha — meça de verdade antes de declarar como atingida

**Acessibilidade**
- Contraste mínimo WCAG AA (4.5:1 texto, 3:1 elementos gráficos)
- Alt text em toda imagem de conteúdo
- Label em todo campo de formulário
- Navegação funcional por teclado
- HTML semântico (`header`, `nav`, `main`, `section`, `article`)

**Código**
- Nomes descritivos, sem comentário óbvio
- Componentes reutilizáveis
- Sem repetição de lógica
- TypeScript quando possível
- Estrutura que facilita teste

## Prompt — Trilha A (venda / conversão)

```
Você está construindo uma landing page ou site comercial com foco em conversão.

Estrutura de referência: hero com benefício + CTA, problema/solução, features
(no máximo 5), prova social, urgência quando cabível, FAQ se houver dúvida
recorrente, CTA final.

Skills a considerar: design-taste-frontend, frontend-design,
web-design-guidelines, responsive-design, full-output-enforcement. Estilo
premium: adicione high-end-visual-design.

Antes de escrever qualquer copy: confirme se o nicho é regulado (ver seção 2
do BRIEF-TEMPLATE.md). Nicho regulado muda o que pode aparecer como prova
social, preço e promessa de resultado.
```

## Prompt — Trilha B (institucional / presença)

```
Você está construindo um site institucional, portfólio ou blog.

Estrutura de referência: home (sobre + serviços + contato), página de
serviços detalhada, sobre/história/time, blog ou recursos se aplicável,
contato com múltiplos canais.

Skills a considerar: minimalist-ui (estilo limpo) ou high-end-visual-design
(estilo premium) — escolha uma das duas conforme o estilo pedido no brief,
mais frontend-design, web-design-guidelines, responsive-design,
full-output-enforcement. Para documentos/slides/landing com tema pronto:
theme-factory.

Se o negócio tem endereço físico, aplique a seção de SEO local do
BRIEF-TEMPLATE.md (NAP consistente, schema LocalBusiness, Google Business
Profile).
```

## Prompt — Trilha C (redesign)

```
Você está melhorando um site que já existe. Prioridade: não quebrar o que
funciona.

Abordagem: auditar o site atual (estrutura, UX, visual) antes de qualquer
mudança, identificar os problemas principais, propor mudanças priorizadas,
implementar em fases, preservar URLs e estrutura de navegação existente.

Skills a considerar: design-taste-frontend (tem fluxo audit-first embutido),
frontend-design, web-design-guidelines, responsive-design. A skill
redesign-existing-projects é opcional e não vem no bundle deste kit.

Não prometa ao usuário que o tráfego ou a conversão vão melhorar — isso só
se sabe medindo depois da mudança no ar.
```

## Prompt — Trilha D (app-like / mobile)

```
Você está construindo uma interface mobile-first ou com cara de aplicativo
nativo.

Estrutura de referência: navegação inferior ou menu hambúrguer, cards
grandes para toque, gestos simples (tap, swipe), interface enxuta.

Skills a considerar: frontend-design, responsive-design,
web-design-guidelines, full-output-enforcement. A skill
imagegen-frontend-mobile é opcional e não vem no bundle deste kit.

Alvos de toque: mínimo 44-48px. Tipografia base 16px ou maior. Sem
dependência de hover — é toque, não mouse.
```

## Prompt — Trilha E (pitch para negócio local)

```
Você está construindo um site de demonstração especulativo para tentar
fechar um negócio local que ainda não é cliente — não há brief completo
nem acesso a todos os dados reais ainda.

Use a skill local-business-rebuild diretamente (não vem no bundle deste kit —
instale de github.com/lotfb86/web-design-skills, pasta 06-local-business-rebuild).
Ela já define as fases do
processo (extração de marca a partir do que existe publicamente, auditoria
de SEO, auditoria de design, plano de reconstrução, build, otimização de
copy, QA, checklist pré-deploy). Não combine com skills de outra trilha
neste fluxo.
```
