// controllers/taskController.js
let tasks = require('../models/taskModel');

const getTasks = (req, res) => {
    res.json(tasks);
};

const addTask = (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const updatedTask = req.body;
    tasks = tasks.map(task => task.id === parseInt(id) ? updatedTask : task);
    res.json(updatedTask);
};

const deleteTask = (req, res) => {
    const { id } = req.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    res.status(204).send();
};

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
};
