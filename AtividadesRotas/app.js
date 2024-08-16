const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.send("<h1> Bem vindo ao meu exercício <h1>")
})

app.get('/nome/:name', (req,res) => {
    const name = req.params.name

    res.send('<h1> Bem vindo(a) ' + name + ' !<h1>')
})

app.get('/repetir/:word/:qt', (req,res) =>{
    const palavra = req.params.word
    const quantidade = req.params.qt
    var frase = ''

    for(let i=0; i < quantidade; i++){
        frase += palavra
    }

    res.send('<h1>' + frase + '<h1>')
})

app.get('/som/:animal', (req,res) =>{
    const animal = req.params.animal
    var frase = ''

    switch(animal){
        case "cao":
            frase = "O cachorro faz 'Auuu Auuu Auuu'"
            break;
        case "gato":
            frase = "O gato faz 'Miauuu'"
            break;
        case "vaca":
            frase = "A vaca faz 'Moon'"
            break;
        case "ovelha":
            frase = "A Ovelha faz 'Meeeeee'"
            break;
        case "cavalo":
            frase = "O cavalo faz 'Rhiiiii'"
            break;
        default:
            frase = "Animal Desconhecido"
            break;
    }

    res.send('<h1>' + frase + '<h1>')
})

app.get('/forms', (req,res) => {
    res.sendFile(__dirname + '/formulario.html')
})

app.get('/rep', (req,res) =>{
    const {palavra, quantidade} = req.query
    var frase = ''

    for(let i=0; i < quantidade; i++){
        frase += palavra
    }



    res.send('<h1>' + frase + '<h1>')
})


app.listen(3000, () =>{
    console.log('Servidor ligado na porta 3000!')
})