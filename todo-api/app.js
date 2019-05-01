const express = require('express')
const todos = require('./todo')

const app = express()

const port = process.env.PORT || 3000

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




app.listen(port, () => console.log(`Server listening on port: ${port}!`))