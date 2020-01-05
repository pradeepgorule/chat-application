const io = require('socket.io')(3000)
io.on('connection',socket =>{

//    socket.emit('chat-message','hello-world')

    socket.on('send-chat-message',message=>{  //here we getting the message from User
       
        socket.broadcast.emit('chat-message',message) //this gone send that message every single person connected to the server
    })
})