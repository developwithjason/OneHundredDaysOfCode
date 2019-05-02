const express = require('express')
const todos = require('./todo')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!!!!')
})

app.get('/api', (req, res) => res.json(todos))

app.get('/api/:id', (req, res) => {
    const check = todos.some(todo => todo.id === parseInt(req.params.id))

    if(check) {
        res.json(todos.filter(todo => todo.id === parseInt(req.params.id)))
    }else {
        res.status(404).json({msg: `There is no todo with the id of ${req.params.id}`})
    }
    
})

app.post('/api', (req, res) => {
    if(!req.body.title) {
        res.status(404).json({msg: 'The title is required'})
    }

    const id = todos.length + 1
    todos.push({
        id,
        "title": req.body.title,
        "desc": req.body.desc
    })
    res.send(todos)
})

app.put('/api/:id', (req, res) =>{
    const located = todos.some(todo => todo.id === parseInt(req.params.id))
    
    if(located) {
        const updTodo = req.body
        todos.forEach(todo => {
            if(todo.id === parseInt(req.params.id)) {
                todo.title = updTodo.title ? updTodo.title : todo.title
                todo.desc = updTodo.desc ? updTodo.desc : todo.desc

                res.send(todos)
            }
        })
    }else {
        res.status(404).json({msg: `Todo with the id of ${req.params.id} does not exist`})
    }
})

app.delete('/api/:id', (req, res) => {
    const check = todos.some(todo => todo.id === parseInt(req.params.id))

    if(check) {
        res.json(todos.filter(todo => todo.id !== parseInt(req.params.id)))
    }else {
        res.status(404).json({msg: `There is no todo with the id of ${req.params.id}`})
    }
})



app.listen(port, () => console.log(`Server listening on port: ${port}!`))