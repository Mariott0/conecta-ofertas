# Conecta Ofertas

Landing page em português para o grupo Conecta Ofertas no WhatsApp. HTML, CSS e JavaScript puros, sem dependências de instalação ou etapa de build.

## Rodar localmente

Com Node.js 20 ou superior:

```sh
node scripts/serve.mjs
```

Abra http://localhost:4173. Também é possível executar `npm run dev` (ou `npm.cmd run dev` quando a política do PowerShell bloquear scripts `.ps1`).

## Arquivos

- `dist/index.html`: conteúdo, links e metadados.
- `dist/styles.css`: identidade visual e layouts responsivos.
- `dist/app.js`: ano do rodapé e botão fixo de entrada no celular.
- `dist/assets/`: logo original, favicon e fontes locais com licenças OFL.
- `.openai/hosting.json`: identificação da hospedagem Sites e diretório estático.

O diretório `dist/` é o site completo e pode ser servido por qualquer hospedagem estática.

## Grupo e identidade

Todos os botões usam o endereço fornecido: https://achadinho.pro/conectaofertas. O redirecionamento ao convite foi confirmado com headers de navegador de desktop e celular. Clientes automatizados sem headers podem receber a página genérica da plataforma.

A logo foi obtida do convite público do grupo e conferida com a referência fornecida. As ilustrações de categorias são apenas exemplos: a página não anuncia preços ou estoque. Não há formulário, analytics, cookies adicionados pela aplicação ou cadastro próprio. A hospedagem e o destino externo têm seus próprios controles de acesso e políticas.

## Domínio

Domínio informado pelo proprietário: `conectaofertas.com.br`. Comprar o domínio não aponta automaticamente o site: a hospedagem deve fornecer os registros DNS, que precisam ser configurados no provedor autoritativo. Não substituir registros existentes de e-mail.

Novos sites hospedados em Sites começam privados. Antes de divulgar, o acesso público precisa estar liberado e a vinculação do domínio precisa estar ativa. Após ativar o domínio, atualizar `og:image` para a origem pública escolhida e definir a URL canônica.

## Verificação inicial

- HTML e recursos locais respondem HTTP 200; caminhos inexistentes retornam 404.
- Quatro botões apontam para o convite fornecido.
- IDs únicos, âncoras internas e sintaxe JavaScript verificados.
- FAQ usa `details` nativo; os links essenciais funcionam sem JavaScript.
- Layouts preparados para desktop e celular, com foco visível e suporte a movimento reduzido.
- Revisão visual em navegador não concluída: o navegador integrado estava indisponível nesta sessão.

## Estado da retomada

A implementação está completa para a primeira versão da landing page. A revisão local confirmou os arquivos estáticos, os quatro links do grupo, as âncoras internas e a sintaxe JavaScript. O servidor local respondeu HTTP 200.

A publicação **não foi concluída**. A consulta ao projeto preservado em `.openai/hosting.json` retornou `Sites project not found` na conexão atual. É necessário recuperar acesso ao projeto na conta/workspace que o criou antes de retomar a publicação; não substituir o identificador por outro inventado.

O pacote local foi gerado em `.artifacts/conecta-ofertas.tar.gz`. O erro de empacotamento da sessão anterior era uma incompatibilidade entre os caminhos Windows e Bash. Para regenerar neste computador, execute no PowerShell:

```powershell
& 'C:\Program Files\Git\bin\bash.exe' 'C:/Users/natha/.codex/plugins/cache/openai-curated-remote/sites/1.0.0/skills/sites/scripts/package-site.sh' '/d/.Code/conecta-ofertas' '/d/.Code/conecta-ofertas/.artifacts/conecta-ofertas.tar.gz'
```

Esse comando apenas empacota; não sincroniza o código nem publica. Antes de publicar uma alteração, o fluxo de hospedagem deve sincronizar o commit correspondente e gerar o pacote desse mesmo estado.

Pendências de lançamento:

- Recuperar acesso ao projeto de hospedagem e concluir o deploy.
- Conferir visualmente desktop e celular em navegador.
- Liberar o acesso público quando solicitado e configurar o domínio no Registro.br com os registros retornados pela hospedagem.
- Após ativar o domínio, atualizar os metadados de compartilhamento e a URL canônica.
