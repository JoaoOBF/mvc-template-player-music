# Player de Música

## Table of Contents

- [Introdução](#introdução)
- [Arquitetura](#arquitetura)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Como Usar](#como-usar)

## Introdução
O Player de musica é projetado com uma arquitetura **MVC com Templates**

## Arquitetura

- **Model**: É como a aplicação ver os dados. É aqui onde fica as caracteristicas de uma entidade. Nesse caso a musica.

- **View**: Trata da interface do usuário. Como os detalhes das músicas selecionadas e a lista de itens.

- **Controller**: É a ponte entre o banco de dados e a aplicação. É aqui que buscamos os dados.

### Backend

- **Node.js**: Plataforma JavaScript assíncrona para o servidor backend.

- **Express.js**: Framework web para construção de rotas e gestão de solicitações HTTP.


### Frontend

- **HTML, CSS**: Para criação da estrutura e estilo da interface do usuário.
EJS (Embedded JavaScript): Para renderização dinâmica de elementos da página.

- **Manipulação do DOM**:
JavaScript: Para interações dinâmicas com os elementos da página, como atualização de detalhes da música e reprodução.

### Como Usar
- **Clone este repositório**.
- **Execute npm install para instalar as dependências.**
- **Inicie o servidor usando node app.js ou outra abordagem de sua preferência.**
- **Acesse http://localhost:3000 para utilizar o player de música**.