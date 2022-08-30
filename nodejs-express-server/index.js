

const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res)=>{
    res.send('jeg kan godt lide nagibs numse, den smager godt. Sex')
})

app.get('/itadmin/*', (req, res)=>{
    res.send('tjek under min forhud: ' + req.params[0])
})

app.listen(port, ()=>{
    console.log('Express server is now running on port: ' + port)
})
