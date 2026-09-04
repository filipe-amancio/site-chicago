# Kit de skills para criação de sites

Kit para colar na raiz de qualquer projeto novo de site. Duas coisas juntas:

1. **As skills em si**, vendorizadas em `skills/` — 12 skills de web design e de método de trabalho, copiadas de repositórios públicos.
2. **A documentação de processo** — qual skill usar em cada tipo de projeto, o que perguntar ao cliente antes de começar, e um checklist antes de entregar.

Um script instala as skills em `~/.claude/skills/` (instalação global, uma vez por máquina). Depois disso elas ficam disponíveis em qualquer projeto, com ou sem este kit por perto.

## Instalação das skills

Rode uma vez por máquina, de dentro da pasta do kit:

**Windows (PowerShell):**
```powershell
.\install.ps1            # instala o que ainda não existe
.\install.ps1 -Force     # sobrescreve skills já instaladas
.\install.ps1 -List      # só lista, não copia
```

**macOS / Linux / Git Bash:**
```bash
./install.sh             # instala o que ainda não existe
./install.sh --force     # sobrescreve skills já instaladas
./install.sh --list      # só lista, não copia
```

O script copia cada subpasta de `skills/` que tenha um `SKILL.md` para `~/.claude/skills/` (respeita a variável `CLAUDE_CONFIG_DIR` se você usar outro diretório de config). É idempotente: rodar de novo sem `--force` pula o que já está lá.

Depois de instalar, **abra uma sessão nova do Claude Code** — as skills instaladas aparecem listadas no início da conversa.

### Verificar

```
.\install.ps1 -List      # deve listar as 12
```
Se uma skill não aparecer disponível numa sessão nova depois de instalada, o provável é frontmatter inválido no `SKILL.md` (falta `name:` ou `description:`). A skill embutida `claude-code-guide` ajuda a diagnosticar.

## As 12 skills do kit

### Web design (8)

| Skill | Serve para |
|---|---|
| `frontend-design` | Direção estética e código de interface production-grade, sem cara de template de IA |
| `design-taste-frontend` | Anti-slop para landing pages, portfólios e redesigns — lê o brief e infere a direção de design |
| `high-end-visual-design` | Padrão de agência premium — fontes, espaçamento, sombras, cards, motion que fazem parecer caro |
| `minimalist-ui` | Interface editorial limpa, monocromático quente, bento grid, sem gradiente pesado |
| `responsive-design` | Mobile-first, Grid/Flexbox, imagens responsivas, tipografia fluida, breakpoints, container queries |
| `theme-factory` | 10 temas prontos (cor + fonte) para aplicar a um artefato, ou gera um tema novo na hora |
| `web-design-guidelines` | Audita a UI contra as Web Interface Guidelines (acessibilidade, UX, hierarquia, performance) |
| `full-output-enforcement` | Força geração de código completo — sem placeholder, sem truncamento |

### Método de trabalho (4) — do `obra/superpowers`

| Skill | Serve para |
|---|---|
| `brainstorming` | Refina uma ideia crua em design fechado por perguntas, antes de escrever código — casa com o `BRIEF-TEMPLATE.md` |
| `systematic-debugging` | Framework de 4 fases: investigar causa raiz antes de tentar consertar |
| `verification-before-completion` | Rodar os comandos de verificação e conferir a saída antes de dizer "pronto" — casa com o `CHECKLIST-ENTREGA.md` |
| `test-driven-development` | Teste primeiro, vê falhar, código mínimo pra passar |

As 4 de método são um recorte do plugin `obra/superpowers`. Se quiser a metodologia inteira (planejamento, git worktrees, code review, etc.), instale o plugin em vez desse recorte: `/plugin marketplace add obra/superpowers-marketplace` e `/plugin install`.

Origem, licença e como regenerar cada skill: `skills/ATTRIBUTION.md`.

## Skills que este kit NÃO traz

A versão anterior da documentação citava mais skills (`brandkit`, `gpt-taste`, `imagegen-frontend-web/mobile`, `redesign-existing-projects`, `local-business-rebuild`, `image-to-code`, `industrial-brutalist-ui`, `design-system-generator`, `stitch-design-taste`). Elas existem nos mesmos dois repositórios de web design e são úteis, mas ficaram de fora deste bundle mínimo. Para adicionar uma:

1. Clone `github.com/Leonxlnx/taste-skill` ou `github.com/lotfb86/web-design-skills`.
2. Copie a pasta da skill (a que tem `SKILL.md`) para `skills/` deste kit, com um nome de pasta claro.
3. Rode `install.ps1` de novo.

## Loop visual — Playwright MCP

As 12 skills são só orientação; nenhuma faz o Claude Code *ver* o site. Quem dá isso é o servidor MCP **Playwright**: o Claude navega até `localhost`, tira screenshot, inspeciona o DOM, clica, e ajusta o código olhando o render — sem você no meio.

**Nesta máquina já está configurado** em escopo de usuário (`~/.claude.json`), então vale em qualquer projeto. Chromium do Playwright já baixado. Abra uma sessão nova e o servidor `playwright` aparece; na primeira vez o Claude Code pede pra aprovar.

**Em outra máquina**, uma das duas:

- Escopo de usuário (vale em todo projeto):
  ```
  claude mcp add playwright -s user -- npx -y @playwright/mcp@latest
  ```
  No Windows, se `npx` direto falhar: `claude mcp add playwright -s user -- cmd /c npx -y @playwright/mcp@latest`
- Escopo de projeto (viaja com o repo, bom pra time): copie `mcp.json.template` deste kit para a raiz do projeto como `.mcp.json`.

Depois, uma vez: `npx playwright install chromium`.

Uso típico: Claude escreve a seção → sobe o dev server → screenshot de `localhost:3000` → compara com a intenção → ajusta CSS → screenshot de novo.

## Como usar em um projeto novo

1. Instale as skills uma vez (acima). Isso não precisa ser repetido a cada projeto.
2. Copie a pasta `skills-kit` para a raiz do projeto novo (só pela documentação — as skills já estão globais).
3. Abra `TRILHAS.md`, responda as três perguntas de roteamento, identifique a trilha.
4. Preencha `BRIEF-TEMPLATE.md` com os dados do projeto. A skill `brainstorming` ajuda a fechar as lacunas.
5. Desenvolva usando `CONTEXT-BASE-PROMPT.md` como guia de regras e ativando as skills da trilha pelo nome real. Peça ao Claude pra usar o Playwright MCP pra conferir cada seção no navegador enquanto constrói.
6. Antes de entregar, percorra `CHECKLIST-ENTREGA.md`. A skill `verification-before-completion` reforça o hábito de checar de verdade.

## Limites deste kit

- Não há automação em segundo plano, dashboard nem hook configurado. Se quiser rodar uma checagem toda vez que um arquivo é salvo, isso é possível com hooks reais do Claude Code (`PostToolUse` etc.), configurados à parte — ver `docs.claude.com/en/docs/claude-code/hooks` ou a skill `claude-code-guide`.
- As skills de web design não garantem sozinhas nota de Lighthouse, conversão ou tráfego. São guias de qualidade; meça o resultado de verdade antes de afirmar que uma meta foi atingida.
- O kit não contém os comandos `/iniciar-projeto` e `/validar-projeto` (a versão anterior os mencionava, mas eles nunca existiram aqui). Os passos que eles descreviam estão neste README e nos outros `.md`.
