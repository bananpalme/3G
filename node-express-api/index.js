//hent biblioteket ip
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i en konstant
const express = require('express')
//opret en variabel til expressserveren
const app = express()
//definer en port
const port = 8888
//vi laver en meget simpel databases
const weekDays = {
    'mandag': 'har ikke rigtig lyst til børn om mandagen, for mange timer :(',
    'tirsdag': 'har ikke rigtig lyst til børn om tirsdagen, dog lidt mere end mandag, stadig mange timer, men lidt bedre :(',
    'onsdag': 'har faktisk ret meget lyst til børn, måske 6/10',
    'torsdag': 'har nok en god lyst for børn 6,8/10',
    'fredag': 'Fredag er altid god for børne lysten',
    'lørdag': 'Lørdag har jeg altid lyst til børn, ligemeget hvad der skulle ske',
    'søndag': 'normalt her hvor lektier laves, lysten er på bunden, men er hjemme så lysten vil altid være der',
}
//start en webserver på port 3002
app.get('/*', (req, res)=>{
    console.log('du prøver at cumme i min numse')
    if(req.params[0]){
        console.log('jeg kan godt lide børn når det er: ' + req.params[0])
        if(weekDays[req.params[0]]){
            res.send(weekDays[req.params[0]])
        }else{
            res.send(req.params[0] + ' is not an api endpoint')
        }
    }else{
        res.send('du cummede i min numse')
    }
})
app.listen(port, ()=>{
    console.log('server er i gang med en orgasme, da balto er i nærheden' + port)
})