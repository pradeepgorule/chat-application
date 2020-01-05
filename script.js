const socket = io('http://localhost:3000')
const messageContainer = document.getElementById("message-container")
const messageForm = document.getElementById("send-container")
const messageInput = document.getElementById("message-input")

socket.on('chat-message',data=>{
    appendMessage(data)  // call that function to send data to the other User and display
})

messageForm.addEventListener("submit",e=>{
    e.preventDefault();
    const message = messageInput.value
    socket.emit('send-chat-message',message) //emit will send message to client to the server
    messageInput.value = ""  // this will clear textbox after click on submit
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageContainer.append(messageElement)
}