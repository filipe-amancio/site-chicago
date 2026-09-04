# Origem das skills

As pastas em `skills/` foram copiadas (vendorizadas) de repositórios públicos.
Nada foi modificado no conteúdo de cada `SKILL.md`.

| Pasta neste kit | Repositório de origem | Pasta original | Licença |
|---|---|---|---|
| `frontend-design` | github.com/lotfb86/web-design-skills | `01-frontend-design` | uso livre (ver README do repo) |
| `responsive-design` | github.com/lotfb86/web-design-skills | `02-responsive-design` | uso livre |
| `web-design-guidelines` | github.com/lotfb86/web-design-skills | `03-web-design-guidelines` | uso livre |
| `theme-factory` | github.com/lotfb86/web-design-skills | `04-theme-factory` | uso livre |
| `design-taste-frontend` | github.com/Leonxlnx/taste-skill | `skills/taste-skill` | MIT |
| `high-end-visual-design` | github.com/Leonxlnx/taste-skill | `skills/soft-skill` | MIT |
| `minimalist-ui` | github.com/Leonxlnx/taste-skill | `skills/minimalist-skill` | MIT |
| `full-output-enforcement` | github.com/Leonxlnx/taste-skill | `skills/output-skill` | MIT |
| `brainstorming` | github.com/obra/superpowers-skills | `skills/collaboration/brainstorming` | MIT |
| `systematic-debugging` | github.com/obra/superpowers-skills | `skills/debugging/systematic-debugging` | MIT |
| `verification-before-completion` | github.com/obra/superpowers-skills | `skills/debugging/verification-before-completion` | MIT |
| `test-driven-development` | github.com/obra/superpowers-skills | `skills/testing/test-driven-development` | MIT |

## Notas

- As 3 skills vindas de `superpowers-skills` fazem parte de um plugin maior (`obra/superpowers`)
  desenhado para rodar como conjunto. Trechos de texto dentro delas dizem coisas como
  "switch to skills/collaboration/writing-plans" — esses caminhos não resolvem aqui porque só
  trouxemos um subconjunto. As skills funcionam mesmo assim; as referências cruzadas apenas
  não levam a lugar nenhum. Se quiser a metodologia completa, instale o plugin:
  `/plugin marketplace add obra/superpowers-marketplace` e depois `/plugin install`.
- Para atualizar uma skill: re-clone o repositório de origem, copie a pasta por cima da versão
  neste kit e rode `install.ps1 -Force` (ou `install.sh --force`).

## Como regenerar este bundle do zero

```
git clone --depth 1 https://github.com/lotfb86/web-design-skills
git clone --depth 1 https://github.com/Leonxlnx/taste-skill
git clone --depth 1 https://github.com/obra/superpowers-skills
```

Depois copie as pastas conforme a tabela acima para `skills/`, usando o nome da coluna
"Pasta neste kit".
