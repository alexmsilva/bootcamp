const express = require('express');

const app = express();

app.use(express.json());

const users = ['Alex', 'Alessandra', 'Aline'];

app.use((req, res, next) => {
    console.time('Request');
    console.log(`Método: ${req.method}; URL: ${req.url}`);

    next();

    console.timeEnd('Request');
});

function checkNameExists(req, res, next) {
    if (! req.body.name) {
        return res.status(400).json({ "error": "Attribute name is required" });
    }

    return next();
}

function checkUserExists(req, res, next) {
    req.user = users[req.params.index];
    if (! req.user) {
        return res.status(400).json({ "error": "User does not exist" });
    }

    return next();
}

app.get('/users', (req, res) => res.json(users));

app.get('/users/:index', checkUserExists, (req, res) => res.json(req.user));

app.post('/users', checkNameExists, (req, res) => {
    const { name } = req.body;
    users.push(name);

    return res.json(users);
});

app.put('/users/:index', checkNameExists, checkUserExists, (req, res) =>{
    const { name } = req.body;
    const { index } = req.params;
    users[index] = name;
    
    return res.json(users);
});

app.delete('/users/:index', checkUserExists, (req, res) => {
    const { index } = req.params;
    const user = users.splice(index, 1);

    return res.json(user);
});

app.listen(3000);
