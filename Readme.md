# CRUD com Node.js e Express

Este projeto demonstra a criação de uma aplicação CRUD (Create, Read, Update, Delete) utilizando Node.js e Express, com armazenamento de dados em um arquivo JSON. Adicionalmente, inclui autenticação baseada em sessões e permite o upload de imagens usando `multer`.

## Requisitos

- [Node.js](https://nodejs.org/) (>= 14.x)
- [npm](https://www.npmjs.com/) (ou [yarn](https://yarnpkg.com/))

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/usuario/nome-do-repositorio.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd nome-do-repositorio
    ```

3. **Instale as dependências:**

    Com npm:

    ```bash
    npm install
    ```

    Ou com yarn:

    ```bash
    yarn install
    ```

## Estrutura do Projeto

- `index.js` - Arquivo principal que configura o servidor e define as rotas.
- `data.json` - Arquivo onde os dados são armazenados.
- `routes/` - Diretório contendo os arquivos de definição de rotas.
- `controllers/` - Diretório contendo os controladores para manipulação de dados.
- `uploads/` - Diretório onde as imagens enviadas são armazenadas.

## Autenticação

Este projeto utiliza autenticação baseada em sessões para login e gerenciamento de usuários. O processo inclui:

1. **Registro e Login**:
   - O usuário deve se registrar com um nome de usuário e senha.
   - Após o registro, o usuário pode fazer login utilizando suas credenciais.
   - As sessões são gerenciadas usando o pacote [express-session](https://www.npmjs.com/package/express-session).

2. **Proteção de Rotas**:
   - Algumas rotas são protegidas e exigem que o usuário esteja autenticado para acessá-las.

## Upload de Imagens

O projeto utiliza o pacote [multer](https://www.npmjs.com/package/multer) para o upload de imagens. As imagens são armazenadas no diretório `uploads/` e podem ser associadas aos itens na aplicação.

1. **Envio de Imagens**:
   - As imagens podem ser enviadas através de um formulário no frontend.
   - O `multer` processa os uploads e salva as imagens no diretório especificado.

## Executando o Projeto

1. **Inicie o servidor:**

    Com npm:

    ```bash
    npm start
    ```

    Ou com yarn:

    ```bash
    yarn start
    ```

2. **Acesse a aplicação:**

    Abra seu navegador e vá para `http://localhost:3000` (ou a porta configurada).

## Endpoints

- `GET /items` - Retorna todos os itens armazenados.
- `GET /items/:id` - Retorna um item específico pelo ID.
- `POST /items` - Adiciona um novo item. O corpo da requisição deve conter um JSON com os dados do item.
- `PUT /items/:id` - Atualiza um item existente pelo ID. O corpo da requisição deve conter um JSON com os dados atualizados.
- `DELETE /items/:id` - Remove um item pelo ID.
- `POST /upload` - Permite o upload de uma imagem. A imagem será salva no diretório `uploads/`.

## Dicas

- **Testes**: Para testar a API, você pode usar ferramentas como [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).
- **Validação de Dados**: Considere adicionar validação de dados para garantir que as entradas do usuário estejam corretas.
- **Segurança**: Mantenha a segurança das senhas usando hashing (por exemplo, [bcrypt](https://www.npmjs.com/package/bcrypt)) e garanta que a autenticação de sessão esteja configurada corretamente.
- **Manutenção do JSON**: Lembre-se de que a escrita e leitura do arquivo JSON são operações síncronas. Para projetos maiores, considere usar um banco de dados real.
- **Ambiente de Desenvolvimento**: Utilize variáveis de ambiente para armazenar configurações, como a porta do servidor e segredos para sessões.

## Contribuindo

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch (`git checkout -b minha-feature`).
3. Faça as suas alterações e adicione testes, se aplicável.
4. Envie um pull request.


## Contato

Para quaisquer dúvidas ou sugestões, entre em contato pelo e-mail: wgtsantos@gmail.com
