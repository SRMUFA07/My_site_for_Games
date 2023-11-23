// const http = require('http');
// const fs = require('fs');

// let server = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html; charset = utf-8' });
    
//     const stream = fs.createReadStream('./index.html');
//     stream.pipe(response);
// });

// const PORT = 1000;
// const HOST = 'localhost';

// server.listen(PORT, HOST, () => {
//     console.log("Сервер запущен: http://${HOST}:${PORT}");
// });

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send('Это главная страница');
});

app.get('/games', (request, response) => {
    response.send('Это страница с играми');
});

app.get('/user/:username/:id', (request, response) => {
    response.send(`Ваш id: ${request.params.id}, Ваше имя пользователя: ${request.params.username}`);
});

const PORT = 1000;

app.listen(PORT, () => {
    console.log(`Cервер запущен: http://localhost:${PORT}`);
});