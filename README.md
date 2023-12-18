<h1 align="center"> Pet Shop Mister Pet </h1>

<h4 align="center">Grupo 7</h4>
<p align="center">
Henrique Pavani Pedreira | NUSP: 13688200  <br/>
Maria Eduarda Iwashita e Silva | NUSP: 13823979 <br/>
Vinicius Finke Raiter Jose | NUSP: 9791052  <br/>
</p>

<br>

## Tecnologias

Esse projeto está sendo desenvolvido com as seguintes tecnologias e ferramentas:

- HTML e CSS
- JavaScript
- ReactJS
- Github
- Figma

## Projeto

## Projeto

<h3>Requisitos</h3>

- O sistema deve ter 2 tipos de usuários: <strong>Clientes e Administradores.</strong>
  - <strong>Administradores</strong> são responsáveis por registrar/gerenciar administradores, clientes e produtos/serviços fornecidos. O aplicativo já vem com um administrador de conta com a senha "admin".
  - <strong>Clientes</strong> são usuários que acessam o sistema para comprar produtos/serviços.
- Dados que devem ser armazenados:
  - <strong>Administrador</strong>: ID, nome, telefone e e-mail.
  - <strong>Cliente</strong>: ID, nome, endereço, telefone e e-mail.
  - <strong>Produtos</strong>: ID, nome, foto, descrição, preço, quantidade em estoque e quantidade vendida.
- <strong>Venda de produtos</strong>: Produtos são selecionados, a quantidade é escolhida e são incluídos em um carrinho. Eles são adquiridos usando um número de cartão de crédito (qualquer número é aceito pelo sistema). A quantidade do produto vendido é subtraída da quantidade em estoque e adicionada à quantidade vendida. Os carrinhos são esvaziados somente com o pagamento ou pelos clientes.
- <strong>Gestão de Produto</strong>: Os administradores podem criar/atualizar/ler/excluir (CRUD) novos produtos e serviços. Por exemplo, eles podem alterar a quantidade em estoque.
- <strong>Funcionalidade específica</strong>: os clientes poderão filtrar os produtos por categoria de animal (cachorro, gato, pássaro e peixe).
- O sistema deve atender aos <strong>requisitos de acessibilidade e oferecer uma boa usabilidade</strong>. O sistema deve ser responsivo, o que significa que deve concluir as tarefas atribuídas dentro de um tempo razoável.

<h3>Descrição do Projeto</h3>

O projeto se trata de um website para um pet shop denominado "Mister Pet", especializado na venda de produtos destinados a quatro categorias de animais: cães, gatos, pássaros e peixes. Na plataforma, os usuários terão a opção de efetuar o login ou se registrar, permitindo-lhes visualizar, selecionar e adquirir produtos com facilidade.

Você pode visualizar o Diagrama de Navegação no figma atráves [desse link](https://www.figma.com/file/oi4tmWZFQxyB5jCLXuokZR/Pet-Shop-Mister?type=whiteboard&node-id=0%3A1&t=kYAueNnNheYVBv1S-1).

<h3>Plano de Testes</h3>

<p>Serão realizados testes manuais de login e registro, gerenciamento de produtos, filtragem de produtos por categoria e também simulações de compra. Não será utilizado nenhum framework adicional.</p>

- Testar se a filtragem dos produtos está funcionando corretamente
- Visualizar a página de produtos
- Relizar o login/cadastro
- Finalizar compra
- Adicionar e remover produtos do carrinho

<h3>Resultado dos Testes</h3>

<h3>Procedimento de compilação</h3>
<p> Back end: 'npm install' para gerar as dependências e 'node app.js' para iniciar o back end </p>
<p> Front end: 'npm install' para gerar dependências e 'npm start' para iniciar a aplicação </p>
<p> Banco de dados: no MongoDB, importar o arquivo em "Milestone 2/src/assets/compass-connections.json", deve haver duas coleções chamadas Product e User, User deve estar vazia e Product populada. </p>
<p> Em caso de Product estar vazia, importar o arquivo "Milestone 2/src/assets/Product.json" para dentro dela </p>
<p> OBS: É possível que a base de dados não seja criada corretamente (não sei mexer no Mongo desculpa), nesse caso, deve-se criá-la manualmente: Crie uma database nova chamada "mister_pet_db" e dentro adicione duas coleções chamadas "Product" e "User", e então importe para Product o arquivo "Milestone 2/src/assets/Product.json" </p>

## Layout

Você pode acessar o layout do projeto no Figma através [desse link](https://www.figma.com/file/F0mXpmOTapfxoEsVarjIAo/Trabalho-DW?type=design&node-id=0%3A1&mode=design&t=o8G5v310QnMZHMa7-1).
