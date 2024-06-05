### Título do Repositório no GitHub

`sms-service-nodejs`

### Descrição do Repositório

#### Descrição

Este repositório contém uma API de serviço de SMS construída com Node.js, TypeScript, Express, PostgreSQL, Prisma e Twilio. A API permite o envio de mensagens SMS a usuários registrados no banco de dados, oferecendo uma integração completa com o serviço de mensagens da Twilio. O projeto está containerizado usando Docker para facilitar o gerenciamento e a implantação do banco de dados PostgreSQL.

#### Funcionalidades

- **Criação de Usuários**: Endpoint para criar novos usuários com informações básicas como nome e número de telefone.
- **Envio de SMS**: Endpoint para enviar mensagens SMS para os usuários registrados, utilizando a API da Twilio.
- **Integração com PostgreSQL**: Gerenciamento de dados de usuários usando o Prisma como ORM e PostgreSQL como banco de dados relacional.
- **Containerização com Docker**: Configuração Docker para facilitar o gerenciamento e a implantação do banco de dados PostgreSQL.
- **Implementado com TypeScript**: Garantia de tipos e segurança em tempo de compilação, melhorando a robustez do código.

#### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **TypeScript**: Superset de JavaScript que adiciona tipos estáticos e outros recursos.
- **Express**: Framework web para Node.js, facilitando a criação de APIs.
- **Prisma**: ORM para Node.js e TypeScript, simplificando o acesso ao banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional, utilizado para armazenar os dados dos usuários.
- **Twilio**: Serviço de comunicação em nuvem utilizado para enviar SMS.
- **Docker**: Plataforma de containerização utilizada para gerenciar e implantar o banco de dados PostgreSQL.

#### Como Configurar

1. **Clone o Repositório**:
    ```bash
    git clone https://github.com/seu-usuario/sms-service-nodejs.git
    cd sms-service-nodejs
    ```

2. **Instale as Dependências**:
    ```bash
    npm install
    ```

3. **Configure o Banco de Dados**:
    - Certifique-se de que o Docker esteja instalado e em execução.
    - Execute o comando para iniciar o banco de dados PostgreSQL no Docker:
    ```bash
    docker-compose up -d
    ```

4. **Configure as Variáveis de Ambiente**:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes configurações:
    ```env
    DATABASE_URL="postgresql://user:password@localhost:5441/sms_service?schema=public"
    TWILIO_ACCOUNT_SID=your_twilio_account_sid
    TWILIO_AUTH_TOKEN=your_twilio_auth_token
    TWILIO_PHONE_NUMBER=your_twilio_phone_number
    ```

5. **Execute as Migrações do Prisma**:
    ```bash
    npx prisma migrate dev
    ```

6. **Inicie o Servidor**:
    ```bash
    npm run dev
    ```

#### Endpoints

- **Criação de Usuário**:
    - `POST /api/users`
    - Corpo da requisição: `{ "name": "Nome do Usuário", "phone": "Número de Telefone" }`
    - Resposta: `201 Created`

- **Envio de SMS**:
    - `POST /api/sms`
    - Corpo da requisição: `{ "userId": "ID do Usuário", "message": "Conteúdo da Mensagem" }`
    - Resposta: `200 OK`

#### Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

#### Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.