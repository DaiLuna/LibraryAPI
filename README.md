# LibraryAPI
## Autores:
Arthur Albuquerque Pereira, Analista dev.   
Luana da Nobrega Duarte, Documentador 
Davi Fontes Barbosa, Scrum Master
Miguel Luna Giovannetti de Arruda Amorim, Gerente de configuração

# Sobre o projeto
Este projeto é um projeto da faculdade UNINASSAU, do curso de Ciência da Computação, do professor João Ferreira, da disciplina de Back-end Frameworks

Para o projeto, os alunos devem criar uma API RESTful para gerenciar livros em uma biblioteca, permitindo o controle de usuários (leitores), livros e empréstimos.


# Como baixar o repositório
Antes de utilizar o repositório, é necessário algumas ferramentas.

[Um editor de código](https://code.visualstudio.com/)  
[Node.js](https://nodejs.org/pt)  
[Git](https://git-scm.com/downloads)  
[MySQL](https://www.mysql.com/downloads/)

**1: Abra seu explorador de arquivos e entre na pasta desejada para guardar o repositório**

**2: Clone o repositório na pasta desejada:**
`git clone https://github.com/DaiLuna/LibraryAPI.git`  
Isso criará uma cópia local do repositório na pasta selecionada

**3: Acesse a pasta do repositório com o comando:**  
`cd LibraryAPI`  

**4: Abra o repositório em seu editor de código de sua escolha**

**5: Instale os pré-requisitos para poder utilizar o repositório:**
`npm install express mysql2 sequelize dotenv`

**6: Crie uma conexão MySQL usando MySQL Workbench ou MySQL terminal**

**7: No MySQL crie um banco de dados e chame-o de *library***

**8: Crie um arquivo *".env"*, copie os dados em *".env.example"* nele e o edite para estar de acordo com seus próprios dados do MySQL**
- *DB_HOST=localhost* - Representa o seu computador local, ou seja, o servidor vai rodar diretamente no seu computador e só pode ser acessado por computadores ligados a ele.  

- *DB_USER=seu_nome_usuario* - Representa seu nome de usuário **da sua conexão MySQL**, o padrão é root, mas você deve usar o nome que estiver na sua conexão.

- *DB_PASSWORD=sua_senha* - Representa a senha **da sua conexão MySQL**, o padrão é não ter senha(''), mas você deve usar a senha para sua conexão.

- *DB_NAME=nome_da_database* - Representa o nome do banco de dados, usamos library como padrão.

- *DB_DIALECT=mysql* - Representa o dialeto que o Sequelize vai usar para interagir com o banco de dados.

- *DB_PORT=porta_da_database* - Representa a porta conectada **Na sua conexão com o banco de dados**, a porta padrão é 3306.

**9: Após ter concluido os passos anteriores você já pode começar a contribuir!** 

## Pré-requisitos:
- **Git** - Uma ferramenta de versionamento do código
- **Nodejs** - Ambiete para desenvolvimento com JavaScrpit
- **MySQL** - Ferramenta utlizada no gerenciamento de banco de dados
- **Express** - Framework de Back-end
-**mysql2** - Driver de conexão do projeto com o banco de dados
- **Sequelize** - ORM para facilitação das operações com o banco de dados
- **dotenv** - Biblioteca do Node.js que carrega variáveis de ambiente definidas num arquivo .env e permite armazenar configurações sensíveis de forma segura  

## Contribuindo com este projeto
Para contribuir neste projeto basta apenas seguir os passos abaixo:  
**IMPORTANTE:** Antes de seguir os passos verique se baixou/clonou o repositório com `git status`, caso não tenha baixado/clonado siga os passos da sessão "Como baixar o repositório"  

**1: Crie sua própria branch designada:**  
`git checkout -b nome-da-branch`  
**Favor evitar a criação de branches sem necessidade.** Uma branch para cada dev é o padrão, o gerente de configuração edita a branch principal diretamente  
Após a criação da branch, para acessa-lá sem criar mais branches basta usar o seguinte comando:  
`git checkout nome-da-branch`  

**2: Antes de começar a trabalhar no projeto, atualize sua branch com as últimas mudanças da branch *main* para evitar conflitos:**  
**IMPORTANTE**: Repita o processo antes de fazer seu commit final, garantindo que você esteja em dia com o código antes de enviar as mudanças.  
```
git checkout main
git pull origin main
git checkout nome-da-sua-branch
git merge main  
```  
**3: Faça suas alterações e commits:**  
- adicione os arquivos que você alterou:  
`git add .`  
- faça o commit das alterações com uma descrição do que foi feito:  
`git commit -m "Descrição das alterações"`  

**4: Atualize sua branch com a última versão da *main*(caso não tenha feito no passo 3):**  
- Para evitar conflitos nos códigos, sincronize sua branch com a *main* antes de fazer o push:  
```
git checkout main
git pull origin main
git checkout nome-da-sua-branch
git merge main
```  
**5: Envie sua branch para o repositório remoto:**  
`git push origin nome-da-branch`  
**6: Anra um Pull Request:**  
- No GitHub, vá até o repositório e abra um Pull Request da sua branch para a main. Descreva as mudanças feitas e peça para uma revisão para garantir que o código esteja de acordo com o projeto.  

## Licença  
Creative Commons CC0 1.0 Universal.  
Para mais detalhes sobre a licença, favor ver o arquivo LICENSE na lista de arquivos do projeto.
