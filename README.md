
# GenSaúde SUS — Landing Page

Site de **divulgação do projeto acadêmico GenSaúde SUS**, criado para apresentar seus objetivos, principais áreas e integrantes, com foco em comunicação clara, prevenção e orientação sobre o Sistema Único de Saúde (SUS).

**Repositório do projeto principal:** https://github.com/J0a0m/GenSaude

## Conteúdo da página

A landing page é organizada em uma única página com navegação por âncoras:

- **Início:** apresentação da proposta e ilustração da experiência do aplicativo.
- **O desafio:** sobrecarga das UPAs, cuidado tardio e falta de informação em saúde.
- **Nossa solução:** os dois pilares — histórico familiar/prevenção e orientação sobre a rede SUS.
- **Como funciona:** etapas educativas da jornada proposta.
- **UBS ou UPA?:** diferenças entre a Atenção Primária e o atendimento de urgência.
- **Sobre o grupo:** contexto acadêmico e nomes dos cinco integrantes.
- **Dúvidas frequentes:** informações complementares e limites do projeto.

## Tecnologias

- **HTML5:** estrutura semântica e conteúdo.
- **CSS3:** identidade visual, grade responsiva, animações e adaptações para dispositivos móveis.
- **JavaScript (vanilla):** menu mobile, animações de entrada e ano automático no rodapé.
- **SVG inline:** ícones vetoriais, incluindo a **marca de DNA original**; não há dependência de arquivo de logo externo.
- **Google Fonts:** fontes Manrope e DM Sans. A página continua funcionando com fontes de sistema caso as fontes externas não carreguem.

Não há framework, ferramenta de build, backend nem dependências de instalação para esta página.

## Estrutura de arquivos

```text
landing-page/
├── index.html     # Conteúdo e seções
├── style.css      # Layout e identidade visual
├── script.js      # Menu, animações e rodapé
└── README.md      # Esta documentação
```

## Executar localmente

1. Baixe ou copie os quatro arquivos acima para a **mesma pasta**.
2. Abra `index.html` em um navegador moderno (Chrome, Firefox, Edge ou Safari).
3. Para editar, utilize qualquer editor de código, como o VS Code. Um servidor local (por exemplo, Live Server) é opcional.

A página não requer configuração de ambiente. O acesso à internet é utilizado apenas para carregar as fontes externas e para abrir links do GitHub.

## Publicar no GitHub Pages

Você pode publicar o site como **projeto separado** ou dentro de uma pasta `docs/` de um repositório existente:

1. Envie `index.html`, `style.css`, `script.js` e `README.md` ao diretório que será publicado.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch desejada (por exemplo, `main`) e a pasta publicada (`/ (root)` ou `/docs`, conforme onde os arquivos foram colocados).
5. Salve e consulte o endereço gerado pelo GitHub Pages.

Os caminhos entre os arquivos são relativos; preserve os nomes e mantenha `index.html`, `style.css` e `script.js` juntos.

## Personalização

- **Textos e links:** edite `index.html`.
- **Cores, fontes, tamanhos e espaçamentos:** edite `style.css` (variáveis `:root`).
- **Comportamento do menu e animações:** edite `script.js`.
- **Ícone da marca:** o desenho em SVG é referenciado por `#icon-dna` no HTML e o favicon está incorporado na própria página.
- **Equipe:** os nomes estão na lista `ol.team-list` dentro da seção `#sobre`.

## Integrantes

- **Arthur Ribeiro Araújo**
- **Hadan Ferreira Desidério**
- **João Marcelo Boock Pagano**
- **Joaquim Meirelles Cunha**
- **Kauê Santana Morales**

## Acessibilidade e responsividade

O site inclui marcação semântica, menu com atributos acessíveis, link para pular ao conteúdo, navegação por teclado e preferência por movimento reduzido (`prefers-reduced-motion`).

O layout se adapta a desktop, tablet e celular.

## Observação importante

A página é **informativa e acadêmica**: não oferece diagnóstico, consulta, triagem médica automatizada nem serviço oficial do SUS.

Em emergências, o cidadão deve buscar os canais apropriados, como o **SAMU (192)**.

A interface mostrada na capa é uma ilustração de apresentação, não uma promessa de disponibilidade das funções mostradas.

---

**GenSaúde SUS — prevenir começa com informação.**
