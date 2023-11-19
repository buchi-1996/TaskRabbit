const express = require('express');
const TaskController = require('../controllers/task');
const router = express.Router()

router.get('/tasks', TaskController.getTask)
router.post('/tasks', TaskController.addTask)

module.exports = router;