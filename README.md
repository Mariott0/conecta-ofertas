# Conecta Ofertas

Landing page estática em português para o Conecta Ofertas. O site divulga o grupo no WhatsApp e o perfil oficial no Instagram usando somente HTML, CSS e JavaScript, sem framework, dependências ou etapa de build.

## Site e canais oficiais

- Site publicado: <https://mariott0.github.io/conecta-ofertas/>
- Endereço permanente do grupo: <https://mariott0.github.io/conecta-ofertas/grupo/>
- Instagram: <https://www.instagram.com/conecta.ofertas0/?hl=pt-br>
- Domínio planejado: <https://conectaofertas.com.br/>

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica automaticamente a pasta `dist/` a cada push na branch `main`.

No GitHub, faça apenas esta configuração uma vez:

1. Abra **Settings → Pages** no repositório.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Envie as alterações para a branch `main`.
4. Acompanhe o workflow **Publicar no GitHub Pages** na aba **Actions**.

O arquivo `dist/CNAME` registra o domínio pretendido, `conectaofertas.com.br`. Para ativá-lo, também é necessário adicionar o domínio em **Settings → Pages → Custom domain** e configurar os registros DNS no provedor do domínio. O arquivo `CNAME` sozinho não altera o DNS.

## Rodar localmente

Com Node.js 20 ou superior:

```sh
npm run dev
```

Depois, abra <http://localhost:4173>.

O servidor local também reconhece páginas em subpastas. Para testar o redirecionador, abra <http://localhost:4173/grupo/>.

## Estrutura

- `dist/index.html`: conteúdo e metadados da página.
- `dist/styles.css`: identidade visual e layouts responsivos.
- `dist/app.js`: comportamento do botão móvel e ano do rodapé.
- `dist/assets/`: logo, favicon e fontes locais.
- `dist/grupo/index.html`: redirecionador permanente para o convite ativo do WhatsApp.
- `dist/.nojekyll`: impede processamento desnecessário pelo Jekyll.
- `.github/workflows/deploy-pages.yml`: publicação automática no GitHub Pages.

Todos os caminhos dos arquivos do site são relativos, então a página funciona tanto em um subdiretório do GitHub Pages quanto no domínio personalizado.

## Link do grupo

Os quatro botões de entrada levam para `/grupo/`, um endereço permanente do próprio site. Essa página encaminha o visitante ao convite ativo usando JavaScript, redirecionamento HTML e um botão manual de segurança.

Convite ativo (grupo 1): <https://chat.whatsapp.com/EzeW2WLFdlSBqIMMpygiN5>.

### Trocar o convite

Quando o convite expirar ou um novo grupo for criado:

1. Abra `dist/grupo/index.html`.
2. Substitua as três ocorrências do convite atual pela nova URL do WhatsApp.
3. Teste localmente em <http://localhost:4173/grupo/>.
4. Faça commit e push para a branch `main`.
5. Aguarde o workflow **Publicar no GitHub Pages** terminar.

Não é necessário alterar os botões da página principal. Eles continuam apontando para `/grupo/`.

## Instagram

O perfil oficial é `@conecta.ofertas0`. O link aparece no menu, na chamada principal, na chamada final e no rodapé da página.

## Últimas ofertas

A página principal possui uma vitrine fixa em `#ultimas-ofertas`. Cada card reúne loja, horário da publicação, descrição curta, preço anterior, preço atual, desconto e link externo.

Para atualizar a vitrine, edite os quatro elementos com a classe `offer-card` em `dist/index.html`. Atualize também a data exibida no cabeçalho e no aviso abaixo dos cards. As ilustrações são SVGs locais e não dependem de imagens hospedadas pelas lojas.

## Privacidade e compras

O site não realiza compras nem coleta cadastros; preços, estoque e condições são conferidos nas lojas acessadas por meio das ofertas compartilhadas no grupo.
