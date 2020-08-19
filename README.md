 Nodejs-Multer
 small nodejs server to handle image uploads
 
##Tecnologias Usadas para construção do server

Multer-para instalação(npm i multer)
Express-para instalação(npm i express)
Nodemon-para instalação(npm i nodemon)

##Clonando o Repositorio atual

Para utilizar a base do server-nodejs deste repositorio basta utilizar o comando (git clone https://github.com/raultocantins/nodejs-multer-img.git) 
e na pasta do projeto basta digitar o comando npm i e as dependências do package.json irão instalar automaticamente.


##Funcionamento do Server-Nodejs

As principais configurações do server estão no arquivo server.js,utilizo o import do proprio nodejs para importar os modulos multer e o framework web express
e instâncio em constantes, feito isso passo essas configurações para express, como é um aplicação teste eu utilizo o proprio express para servir o meu frontend
estatico index.html.
Para que tudo funcione como o esperado utilizo o middleware upload.single('avatar') para tratar o arquivo vindo do body da requisição na rota '/profile'
e após essas configurações passo para o express a porta onde o server irá aguardar req que é a porta '3000'.


##Iniciando o Server

Na pasta do projeto que foi clonado atráves do comando git clone 'rep' certifique-se de que todas as dependências estejam instaladas
feito isso basta acessar o terminal integrado e digitar o comando #npm start e verá que em 'http://localhost:3000' a pagina com o form ficará disponivel
Agora escolha uma imagem e clique em enviar, agora no console do server você verá os dados da imagem e na pasta upload verá um novo arquivo ser criado.





