const Task = require("../models/task")
const aqp = require("api-query-params");


module.exports = {
    CreateTask: async (data) => {
        if (data.type === "EMPTY-TASK") {
            let result = await Task.create(data)
            return result
        }
        return null
    },
    GetALlTask: async (data) => {
        // console.log(data)
        const page = data.page
        // console.log(page)
        const { filter, limit, population } = aqp(data)
        console.log(limit)
        delete filter.page
        let offset = (page - 1) * limit
        result = await Task
            .find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
        return result
    },
    UpdateTask: async (data) => {
        console.log(data)
        let result = await Task.updateOne({ _id: data.id }, { ...data })
        return result
    },
    DeleteTask: async (data) => {
        let result = await Task.deleteById(data);
        return result
    }
}