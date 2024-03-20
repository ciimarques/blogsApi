# Blog Content API

## Sobre o Projeto

Este projeto foi desenvolvido durante o curso da Trybe, com o objetivo de criar uma API para a produção de conteúdo de um blog. A API permite a criação, leitura, atualização e exclusão (CRUD) de posts, além do gerenciamento de usuários e categorias, seguindo os princípios do REST.

## Tecnologias Utilizadas

- Node.js
- Sequelize
- Express

## Como Instalar e Rodar o Projeto

### Pré-requisitos

- Git
- Node.js

### Instalação

1. Clone o repositório:

git@github.com:ciimarques/blogsApi.git

2. Instale as dependências:

npm install

3. Inicie o servidor:

npm start


## Endpoints

### Autenticação

- **Login de Usuário**
- **Endpoint**: `POST /login`
- **Descrição**: Autentica um usuário.

### Usuários

- **Criar Usuário**
- **Endpoint**: `POST /user`
- **Descrição**: Cadastra um novo usuário.

## Categorias

### Criar Categoria
- **Endpoint**: `POST /categories`
- **Descrição**: Cria uma nova categoria para os posts. Requer autenticação.

### Listar Todas as Categorias
- **Endpoint**: `GET /categories`
- **Descrição**: Retorna uma lista de todas as categorias. Requer autenticação.

## Posts

### Cria Post
- **Endpoint**: `POST /post`
- **Descrição**: Cria um novo post. Requer autenticação.

### Listar Todos os Posts
- **Endpoint**: `GET /post`
- **Descrição**: Retorna uma lista de todos os posts. Requer autenticação.

### Obter Post por ID
- **Endpoint**: `GET /post/:id`
- **Descrição**: Retorna os detalhes de um post específico pelo seu ID. Requer autenticação.

### Atualizar Post
- **Endpoint**: `PUT /post/:id`
- **Descrição**: Atualiza um post existente. Requer autenticação.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## Contato

Cíntia Marques - cintiamarques.mk@gmail.com
LinkedIn - https://www.linkedin.com/in/ciimarques
