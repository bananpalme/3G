//hent bibliootek IP
const ip = require('ip')
console.log(ip.address())
//hent biblioteket express og gem objektet i konstanten
const express = require('express')
//opret en varialbe til express serveren
const app = express()
//definerer en port
const port = 2000
//vi laver en meget simple database

//serve en statisk mappe i roden
app.use('/public/p5.js', express.static('public'))

//start en web server på port 2000
app.listen(port, ()=>{
    console.log('Server lyer på port: ' + port)
})