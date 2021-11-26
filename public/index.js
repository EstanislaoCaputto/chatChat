const socket = io();

let input = document.getElementById('mensaje')
let user = document.getElementById('user')
input.addEventListener('keyup', (e)=>{
    if(e.key==="Enter"){
        socket.emit('message',{user:user.value, message:e.target.value});
    }
})

socket.on('welcome',data=>{
    alert(data)
})
socket.on('messagelog',data=>{
    let p = document.getElementById('log')
    let todosMesages = data.map(message=>{
        return`<div><span>${message.user} dice: ${message.message}</span></div>`
    }).join('')
    p.innerHTML=todosMesages
})