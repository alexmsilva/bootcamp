const express = require('express');

const app = express();

app.use(express.json());

const users = ['Alex', 'Alessandra', 'Aline'];

app.get('/users', (req, res) => res.json(users));

app.get('/users/:index', (req, res) => res.json(users[req.params.index]));

app.post('/users', (req, res) => {
    const { name } = req.body;
    users.push(name);

    return res.json(users);
});

app.put('/users/:index', (req, res) =>{
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    
    return res.json(users);
});

app.delete('/users/:index', (req, res) => {
    const { index } = req.params;
    
    const user = users.splice(index, 1);

    return res.json(user);
});

app.listen(3000);
