
let clientSocket
let chatHistory 
let myName
let msg
function setup(){
    //spørg serveren om en socket forbindelse
    clientSocket = io.connect()
    //modtag array med chat historik
    clientSocket.on('history', history => {
        console.log('modtog chathistorik: ', history)
        //indsæt historikken i HTML elementet 
        select('#chatBox').html(history)
    })
    //når brugeren trykker ok på navnesiden
    select('#okButton').mousePressed(()=>{
        //Hvis der er skrevet et navn i input feltet
        if(select('#nameInput')!=''){
            //gem brugernavnet i din variabel
            myName = select('#nameInput').value()
            select('#namePage').addClass('hidden')
            select('#chatPage').removeClass('hidden')
            //din kode her - se flowchart
        }
    })

    select('#sendButton').mousePressed(()=>{
        let msg = select('#chatMessage').value()
        let sendMsg = {
            "name": myName,
            "message": msg
        }
        clientSocket.emit('chatMessage', sendMsg)
    })

    clientSocket.on('chatMessage', chatMessage => {
        console.log('modtog besked: ', chatMessage)
        //indsæt beskeden i HTML elementet 
        select('#chatBox').html(chatMessage)
    })
}