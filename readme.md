# Quer Apostar Quanto?

## 📋 Sobre o projeto
Back-end do projeto da casa de apostas

## Como usar o projeto

### Deploy
O projeto está disponível na seguinte url:
`link do deploy`

### Rodar localmente
Também é possível baixar e rodar o projeto na sua máquina, para isso faça os seguintes passos:

- Clone o repositório e vá para a raiz do diretório

```bash
$ git clone https://github.com/tutoria-driven-education/scheduled-automations-backend

$ cd scheduled-automations-backend
```

- Instale as dependências do projeto

```bash
$ npm i
```

- Crie cópias do arquivo env.example na raiz do projeto e as renomeie para `.env`
, `.env.dev` e `.env.test`. Abra os arquivos e adicione as configurações para cada variável de ambiente. A principal variável de ambiente é a `DATABASE URL`, usada para se conectar ao banco de dados.


- Execute as migrações do banco de dados para criar as tabelas

```bash
$ npm run prisma:migrate:dev
```

- Por fim, execute o comando para iniciar a aplicação

```bash
$ npm run dev
```