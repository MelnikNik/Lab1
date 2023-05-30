<<<<<<< HEAD
const express = require("express");
const app = express ();
const port = 3000;

app.listen(port, () => {
    console.log('Сервер запущен. Порт LISTENER: ${port}')
});

app.get("/", (req, res) => {
    res.send("Hello world");
=======
const express = require("express");
const app = express ();
const port = 3000;

app.listen(port, () => {
    console.log('Сервер запущен. Порт LISTENER: ${port}')
});

app.get("/", (req, res) => {
    res.send("Hello world");
>>>>>>> 7ace3a5cbbe06075cbbd6bd3a2441b9eb170580e
});