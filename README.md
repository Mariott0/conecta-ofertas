# Conecta Ofertas

Landing page estática em português para o grupo Conecta Ofertas no WhatsApp. O site usa somente HTML, CSS e JavaScript, sem framework, dependências ou etapa de build.

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente a pasta `dist/` a cada push na branch `main`.

No GitHub, faça apenas esta configuração uma vez:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para a branch `main`.
4. Acompanhe o workflow **Publicar no GitHub Pages** na aba **Actions**.

O arquivo `dist/CNAME` configura o domínio `conectaofertas.com.br`. Os registros DNS do domínio também precisam apontar para o GitHub Pages. Se quiser testar primeiro pelo endereço padrão `mariott0.github.io/conecta-ofertas/`, remova temporariamente o arquivo `dist/CNAME`.

## Rodar localmente

Com Node.js 20 ou superior:

```sh
npm run dev
```

Depois, abra <http://localhost:4173>.

## Estrutura

- `dist/index.html`: conteúdo e metadados da página.
- `dist/styles.css`: identidade visual e layouts responsivos.
- `dist/app.js`: comportamento do botão móvel e ano do rodapé.
- `dist/assets/`: logo, favicon e fontes locais.
- `dist/.nojekyll`: impede processamento desnecessário pelo Jekyll.
- `.github/workflows/deploy-pages.yml`: publicação automática no GitHub Pages.

Todos os caminhos dos arquivos do site são relativos, então a página funciona tanto em um subdiretório do GitHub Pages quanto no domínio personalizado.

## Link do grupo

Os botões levam para <https://achadinho.pro/conectaofertas>. O site não realiza compras nem coleta cadastros; preços, estoque e condições são conferidos nas lojas acessadas por meio das ofertas compartilhadas no grupo.
