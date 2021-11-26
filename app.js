const express = require('express')
const {Server} = require('socket.io')
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT,()=>{
    console.log('Escuchando en el puerto'+PORT);
})
app.use(express.static(__dirname+'/public'))
const io = new Server(server);


let message = [];
io.on('connection',socket=>{
    console.log('Cliente conectado')
    socket.emit('messagelog', message)
    socket.emit('welcome', 'Bienvenido a mi socket FumaPasto!! :D')

    socket.on('message',data=>{
        message.push(data)
        io.emit('messagelog', message);
    })
})