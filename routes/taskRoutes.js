// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');

router.get('/api/tasks', getTasks);
router.post('/api/tasks', addTask);
router.put('/api/tasks/:id', updateTask);
router.delete('/api/tasks/:id', deleteTask);

module.exports = router;
