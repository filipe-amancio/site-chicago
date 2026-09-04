# Checklist de entrega

Percorrer antes de entregar o projeto ao cliente. Peça ao Claude para percorrer este checklist item a item, checando o que for possível checar de fato (rodando build, Lighthouse, teste) e sinalizando o resto como pendente de verificação humana. A skill `verification-before-completion` reforça esse hábito: nada é declarado pronto sem o comando de verificação ter rodado e a saída ter sido conferida.

## Visual

- [ ] Hierarquia clara (título, subtítulo, corpo)
- [ ] Tipografia consistente (no máximo 3 fontes)
- [ ] Paleta de cores harmônica (3-4 cores principais + neutros)
- [ ] Espaçamento uniforme
- [ ] CTA principal visível acima da dobra, em desktop e mobile

## Responsividade

- [ ] Testado em pelo menos 375px, 768px e 1920px
- [ ] Sem scroll horizontal
- [ ] Alvos de toque com no mínimo 48px
- [ ] Imagens responsivas

## Performance

- [ ] Imagens otimizadas
- [ ] Lazy loading em conteúdo abaixo da dobra
- [ ] Tempo de carregamento medido de verdade (Lighthouse, PageSpeed Insights ou ferramenta equivalente) — não estimado
- [ ] JS/CSS sem código morto óbvio

## Acessibilidade

- [ ] Contraste mínimo WCAG AA
- [ ] Alt text em toda imagem de conteúdo
- [ ] Label em todo campo de formulário
- [ ] Navegação funcional por teclado (Tab percorre a página em ordem lógica)
- [ ] HTML semântico

## SEO

- [ ] Meta title e meta description preenchidos em cada página
- [ ] H1 único por página
- [ ] URLs legíveis
- [ ] Se o negócio tem endereço físico: NAP consistente, schema `LocalBusiness`, Google Business Profile configurado

## Conformidade de nicho regulado

- [ ] Se o brief indicou nicho regulado: copy revisada contra as restrições identificadas (preço, promessa de resultado, depoimento, antes/depois)
- [ ] Registro profissional do cliente exibido, se exigido pelo conselho de classe
- [ ] Cliente confirmou a copy final — esta confirmação não pode ser assumida, precisa vir do cliente ou de quem o representa

## Dados e acessos

- [ ] Todos os dados da seção 3 do `BRIEF-TEMPLATE.md` foram recebidos (ou a ausência foi resolvida com o cliente)
- [ ] Domínio e hospedagem configurados
- [ ] Acessos entregues ao cliente ao final (hospedagem, DNS, Google Business Profile, redes)

## Código

- [ ] Sem placeholder ou TODO esquecido
- [ ] Componentes nomeados de forma descritiva
- [ ] Sem lógica duplicada óbvia
