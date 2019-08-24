const express = require('express');

const app = express();

app.use(express.json());

/**
 * This project does not have a database, the projects will be stored in this variable
 */
const projects = [];

/**
 * It is, simple
 */
let requestCounter = 0;

/**
 * Middleware that checks id project exists
 */
function checkProjectExists(req, res, next) {
    const { id } = req.params;

    const project = projects.find(p => p.id == id);

    if (! project) {
        return res.status(400).json({ error: 'Project not found' });
    }

    return next();
}

/**
 * Global middleware that logs requests
 */
app.use((req, res, next) => {
    requestCounter++;
    console.log(`${requestCounter} = Method: ${req.method}; URL: ${req.url}`);
    
    next();
});

/**
 * Projects routes
 */
app.get('/projects', (req, res) => res.json(projects));

app.post('/projects', (req, res) => {
    const { id, title } = req.body;

    const project = {
        id,
        title,
        tasks: []
    };

    projects.push(project);

    return res.json(project);
});

app.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);
});

app.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    const index = projects.findIndex(p => p.id == id);
    const project = projects.splice(index, 1);

    return res.json(project);
});

/**
 * Tasks routes
 */
 app.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
});

app.listen(3000);
