## Visão geral

Site institucional one-page do massoterapeuta Renato Alves, em português, com a estética da logo (fundo bege quente, traço marrom fino e tipografia leve maiúscula).

## Observação sobre Netlify

O projeto atual usa **TanStack Start** (não Vite SPA puro), então não gera um `index.html` estático pronto para Netlify por padrão. Caminhos possíveis:

1. **Publicar pela Lovable (recomendado, sem trabalho extra):** botão Publish gera um URL público (`*.lovable.app`) e suporta domínio próprio. Funciona imediatamente.
2. **Publicar no Netlify:** você baixa o projeto via GitHub e configura o adapter do TanStack para Netlify (build estático com prerender da home). Posso documentar os passos no README, mas a configuração do Netlify em si é feita fora do Lovable.

Vou seguir com o site e, se você confirmar a opção 2, adiciono o `netlify.toml` + prerender e instruções no README ao final.

## Paleta e tipografia (baseadas na logo)

- Fundo: `#f4efe8` (bege da logo, extraído da imagem) — aplicado em `body`
- Texto: `#5c4433` (marrom da logo)
- Acentos para títulos, divisórias e bordas: `#334b5c` (azul) e `#59335c` (vinho), alternados
- Tipografia: **Cormorant Garamond** (display, títulos em letras espaçadas como na logo) + **Inter** (corpo). Carregadas via `<link>` no `__root.tsx` e registradas em `@theme`

## Imagens

Subir como Lovable Assets (`lovable-assets create --file /mnt/user-uploads/...`) e importar pelos pointers `.asset.json`:

- `logo.png` → header + favicon
- `foto1.jpeg` → hero (foto do profissional) + galeria 1
- `foto2.jpeg` `foto3.jpeg` `foto6.jpeg` → galeria 2, 3, 4
- Galeria 5 e 6 → containers marcadores com borda nas cores de acento e ícone `ImageIcon`, rotulados "Em breve"

## Estrutura (rota única `/` em `src/routes/index.tsx`)

1. **Header fixo** translúcido sobre o bege: logo PNG à esquerda; nav âncoras Sobre · Técnicas · Galeria · Contato; botão WhatsApp à direita. Em mobile, menu em `Sheet`.
2. **Hero / Sobre** — duas colunas: `foto1.jpeg` em retrato à esquerda, à direita H1 "Renato Alves", subtítulo "Massoterapeuta · Estética · Terapias Integrativas", o texto biográfico fornecido na íntegra e CTA "Agendar pelo WhatsApp".
3. **Técnicas** — H2 + 5 cards (Massagem Terapêutica, Desportiva, Reflexologia Podal, Drenagem Linfática Manual, Quick Massage). Cada card: ícone Lucide (`Hand`, `Activity`, `Footprints`, `Droplets`, `Armchair`), nome em display, descrição, lista "Objetivos" com bullets discretos nas cores de acento. Abaixo, bloco destacado com o parágrafo "Cada atendimento é realizado de forma individualizada…".
4. **Galeria** — grid 3×2 (desktop) / 2×3 (tablet) / 1 coluna (mobile), proporção quadrada com cantos suavemente arredondados e moldura fina em `#334b5c`/`#59335c` alternada. 4 fotos reais + 2 placeholders.
5. **Contato / Rodapé** — três blocos lado a lado: Atendimento ("Bairro Santa Mônica, Centro e em domicílio"), WhatsApp `(48) 99167-7275` (link `https://wa.me/5548991677275`), Instagram `@renatoalvesmassoterapeuta` (link externo, `rel="noopener"`). Botão grande "Conversar no WhatsApp". Linha fina e copyright discreto.

## SEO

- `head()` da rota: title "Renato Alves — Massoterapeuta em Florianópolis", description com técnicas principais, og:title/og:description, og:image apontando para `foto1`
- Favicon a partir da logo (asset pointer)
- H1 único no hero; alt text descritivo em cada foto
- JSON-LD `HealthAndBeautyBusiness` com nome, telefone, área atendida e Instagram

## Fora de escopo

- Backend/agendamento online (CTA vai direto ao WhatsApp)
- Galeria 5 e 6 ficam como marcadores até você enviar as fotos
- Configuração efetiva no painel Netlify (apenas instruções, se você confirmar a opção 2)
