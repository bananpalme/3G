//opret server med express
const express = require('express')
const app = express()
const port = 8888
app.use('/', express.static('public'))
const server = app.listen(port, ()=>{
    console.log('server lytter på adressen: http://localhost:' + port)
})
//opret en socket
const io = require('socket.io')
const serverSocket = io(server)



let players = []
//al snak med klienterne sker på connection
serverSocket.on('connection', socket => {
    //okay der kommer en ny spiller
    console.log('Ny spiller forsøger at komme ind, der er i fovejen' + players.length + ' spillere')
    //vi putter spillerens ID ind i players arrayet
    players.push( { 'id' : socket.id } )
    //er der plads til flere spillere
    if(players.length > 2){
        socket.emit('join', false)
        socket.disconnect()
    }else{
        socket.emit('join', true)
    }
})