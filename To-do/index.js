const express = require('express');
const app = express();

app.use(express.json());
const PORT = 3000;

let todos = [
    {id: 1, task: "Learn Express", status: false},
    {id: 2, task: "Build API", status:false}
]

app.get('/', (req,res) =>{
    res.json(todos);
})

app.get('/todos', (req, res) => {
    console.log('I was clicked');
    res.json(todos)
})

app.get('/todos/:id', (req,res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send("Todo not found");
    res.json(todo)
})

app.post('/todos', (req,res) =>{
    const newTodos = {
        id: todos.length + 1,
        task: req.body.task,
        completed: req.body.completed || false
    }
    todos.push(newTodos);
    res.status(201).json(newTodos);
})

app.put('/todos', (req,res) => {
    const {id, task, completed} = req.body;
    const todo = todos.find(t=>t.id === parseInt(id));
    if(!todo) return res.status(404).send("Todo not found");
    todo.task = task || todo.task;
    todo.completed = completed !== undefined ? completed : todo.completed;
    res.json(todo);
})

app.delete('/todos/:id', (req,res) =>{
    const idForParams = req.params.id;
    const index = todos.findIndex(t => t.id === parseInt(idForParams));

    if(index === -1) return res.status(404).send("Todo Not Found");
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo);
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://127.0.0.1:${PORT}`)
})