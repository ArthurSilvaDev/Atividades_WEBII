const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

const {v4: uuidv4} = require ('uuid')
const path = require('path')

let cursos =[
    {
        id: uuidv4(), 
        sigla: 'ADS',
        nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas'
    },
    {
        id: uuidv4() ,
        sigla: 'TPG',
        nome: 'Tecnologia em Processos Gerenciais'
    }
]

app.get('/', (req,res) => {
    res.redirect('/curso')
})

app.get('/curso', (req, res)=>{
    res.json(cursos)
})

app.get('/curso/new', (req,res) =>{
    res.sendFile(path.join(__dirname, '/views/new.html'))
})



app.post('/curso', (req,res) =>{
    const {sigla, nome} = req.body
    const id = uuidv4()
    cursos.push({id, sigla, nome})
    res.redirect('/curso')
})

app.get('/curso/:id', (req,res) => {
    const {id} = req.params
    const curso = cursos.find(curso => curso.id == id)
    if (curso)
        res.json(curso)
    else
        res.json({})
})


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!")
})