const TaskModel = require("../models/task")


class TaskController {
    static getTask = async (req, res) => {
        try {
            const tasks = await TaskModel.find()
            return res.status(200).json({
                status: "success",
                data: tasks
            })
        } catch (err) {
            console.log(err)
        }
    }

    static addTask = async (req, res) => {
        try {
            const task = await TaskModel.create(req.body);
            console.log(task, req.body)
            return res.status(201).send({
                status: 'success',
                data: {
                    message: 'Task added successfully',
                    task
                }
            })
        } catch (err) {
            `Error: ${err}`
        }
    }
}

module.exports = TaskController;