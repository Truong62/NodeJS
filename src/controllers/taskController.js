const {
    CreateTask,
    GetALlTask,
    UpdateTask,
    DeleteTask
} = require("../services/taskServices")

module.exports = {
    postTask: async (req, res) => {
        let result = await CreateTask(req.body)
        console.log(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getTask: async (req, res) => {
        let result = await GetALlTask(req.query)
        console.log(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    putTask: async (req, res) => {
        let result = await UpdateTask(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteTask: async (req, res) => {
        let result = await DeleteTask(req.body.id)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}