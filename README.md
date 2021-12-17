# DiscordBotv13 

![](https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg)

Nossa equipe estar desenvolvendo um bot da discórdia e resolveu compartilhar com vocês o nosso desenvolvimento, se você quer contribuir com nosso projeto exemplo algum script e etc basta nos enviar!

# O Que São Bots Do Discord?

![](https://psverso.com.br/wp-content/uploads/2021/08/discord-bots-768x432.png)

Os bots são “robôs” que ajudam no gerenciamento de canais no Discord e são muito úteis para adicionar funções que a plataforma não possui nativamente. Essas vão desde identificar spam, criar resposta automáticas automatizar tarefas diárias até mesmo colocar músicas para tocar em um canal

# instalação 

Primeiro, você precisa de um editor de código adequado,para começar a desenvolver seu projeto,baixe o que você ja estar mas acostumado usar e veja os próximos passos!


![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)  

**O que é node js?**

Node.js é um ambiente de tempo de execução JavaScript de código aberto, multiplataforma e back-end que roda no mecanismo V8 e executa o código JavaScript fora de um navegador da web.

disscord.js v13 requer o Node v16.6.0 ou superior.

**Apos ter instalado o node js é so copiar o nosso repositório e começar a programar!**

```
git clone https://github.com/kettraworld/DiscordBotv13
```

**Agora você precisa instalar todas as dependências do nosso projeto que se encontra no "package.json" com o seguinte comando!**
```
npm install 
```
# Configurando um aplicativo do bot

Agora que instalou o Node, discord.js e com sorte o nosso repositório, você está quase pronto para começar a codificar! A próxima etapa que você precisa realizar é configurar um aplicativo de bot Discord real através do site do Discord.

É fácil criar um. As etapas que você precisa realizar são as seguintes:

1 • Abra o portal do desenvolvedor Discord e faça login em sua conta.

2 • Clique no botão "Novo aplicativo".

3 • Insira um nome e confirme a janela pop-up clicando no botão "Criar".

Você deverá ver uma página como esta:
![](https://discordjs.guide/assets/create-app.ed82aede.png)
Você pode editar o nome, a descrição e o avatar do seu aplicativo aqui. Depois de salvar suas alterações, prossiga selecionando a guia "Bot" no painel esquerdo.
![](https://discordjs.guide/assets/create-bot.44c7ea49.png)
Clique no botão "Adicionar Bot" à direita e confirme a janela pop-up clicando em "Sim, faça isso!". Parabéns, agora você é o orgulhoso proprietário de um bot Discord novinho em folha! Você não está totalmente pronto, no entanto.
![](https://discordjs.guide/assets/created-bot.b809fb6e.png)
Neste painel, você pode dar ao seu bot um avatar estiloso, definir seu nome de usuário e torná-lo público ou privado. Você também pode acessar seu token neste painel, revelando-o ou pressionando o botão "Copiar". Quando pedimos que você cole seu token em algum lugar, este é o valor que você precisa inserir. Não se preocupe se acontecer de você perdê-lo em algum momento; você pode sempre voltar a esta página e copiá-la novamente.

**O Que é o token do bot?**

Um token é essencialmente a senha do seu bot; é o que o seu bot usa para fazer o login no Discord. Dito isso , é vital que você nunca compartilhe este token com ninguém, propositalmente ou acidentalmente . Se alguém conseguir obter seu token, ele poderá usar seu bot como se fosse dele - isso significa que pode realizar atos maliciosos com ele.

# arquivos principais 

```
DiscordBotV13/

├── config.json

├── index.js

└── package.json

```

**O que é Config.json?**

Armazenar dados em um config.json é uma maneira comum de manter seus valores confidenciais protegidos. Crie um config.json arquivo no diretório do seu projeto e cole no seu token. Você pode acessar seu token dentro de outros arquivos usando ```require().```

**O que é a index.js?**

index.js é o arquivo mais importante para seu bot ele ira armazena os principais codigos do seu bot,mas voce pode mudar para qualquer nome basta e no package.json arquivo e editar o ```"main": "index.js"``` colocando no lugar do nome index 

**O que é o package.json?**

arquivo package. json é o ponto de partida de qualquer projeto NodeJS. Ele é responsável por descrever o seu projeto, informar as engines (versão do node e do npm), url do repositório, versão do projeto, dependências de produção e de desenvolvimento dentre outras coisas.



...

