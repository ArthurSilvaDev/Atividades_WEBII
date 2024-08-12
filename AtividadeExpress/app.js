const express = require('express')
const app = express()


app.get('/', (req,res) =>{
    res.send("<h1> Ola, mundo! <h1>")
})

app.get('/tchau', (req,res) =>{
    res.send('<h1> Tchau meu amigo <h1>')
})

app.get( '/ads', (req, res) =>{
    res.send("Você acessou a rota ADS!")
})

app.get('/r/:subrota', (req, res) => {
    const subrota = req.params.subrota
    res.send ('Voce acessou essa rota aqui:' + subrota)
})

app.get('/rota/:v1/:v2', (req, res) => {
    const {v1, v2} = req.params
    res.send(`Voce digitou: ${v1} e ${v2}`)
})

app.get('/pesquisa', (req, res) =>{
    const {q} = req.query
    const {s} = req.query
    res.send(`<h1> Você pesquisou por: ${q} e ${s} </h1>`)
})



app.get('*', (req, res) =>{
    res.send("Rota inexistente!")
})
app.listen(3000, () =>{
    console.log('Servidor ligado na porta 3000!')
})