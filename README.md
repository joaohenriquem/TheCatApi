# TheCatApi

**Pré requisitos**
- Nodejs versão (18.12.1).
- Git.

### Configuração
 Abra o prompt de comando e cole o código abaixo:
 
 ```
 git clone https://github.com/joaohenriquem/TheCatApi.git
```

Entre na pasta do projeto

```
 cd api ou cd front
```

### Rodando o projeto a partir do PM2
Parar iniciar o servidor com a api rode o comando abaixo:

```
 npm i -g pm2
```

### Rodando a api + front (PM2)

pm2 start api/app.js
pm2 start front/server.js
OU
pm2 start api/app.js -i 3
pm2 start front/server.js -i 3 

a api estará disponivel no endereço:

```
 localhost:3000 - api
 localhost:4200 - front
```

### Setando inicio automatico (PM2)
pm2 startup

### Salvando conf inicio automatico (PM2)
pm2 save

### Listando aplicações (PM2)
pm2 list

### Parando aplicações (PM2)
pm2 stop NUMERO
pm2 stop all

### Apagando aplicações (PM2)
pm2 delete NUMERO

### Listando aplicações (PM2)
pm2 list

### Monitorando aplicações (PM2)
pm2 monit

### Monitorando aplicação especifica (PM2)
pm2 show NUMERO

### Monitorando aplicações KeyMetrics
pm2 link 25mgcdcoevwf90d y3l0z6lk0fw81ek - teste


### Tecnologias utilizadas
- Angular v15
- Material UI
- Express.
- MongoDB.
- Mongoose.
- Bcrypt.
- Jsonwebtoken.




