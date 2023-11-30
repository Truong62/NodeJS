const project = require("../models/project")
const aqp = require("api-query-params");

module.exports = {
    CreateProjsect: async (data) => {
        if (data.type === "EMPTY-PROJECT") {
            let result = await project.create(data)
            return result
        }
        if (data.type === "ADD-USERS") {
            // let result = await project.create(data)
            let myProject = await project.findById(data.projectID).exec()

            for (let i = 0; i <= data.UserArr.length; i++) {
                myProject.usersInfo.push(data.UserArr[i])
            }
            let newResult = await myProject.save()

            console.log(myProject)
            console.log(data)
            return newResult
        }
        if (data.type === "REMOVE-USERS") {
            let myProject = await project.findById(data.projectID).exec();
            console.log(data.UserArr)
            for (let i = 0; i <= data.UserArr.length; i++) {
                myProject.usersInfo.pull(data.UserArr[i])
            }
            let newResult = await myProject.save();
            return newResult
        }
        if (data.type === "ADD-TASK") {
            let myProject = await project.findById(data.projectID).exec();
            console.log(data.projectID)
            for (let i = 0; i <= data.idTask.length; i++) {
                myProject.tasks.push(data.idTask[i])
            }
            let newResult = await myProject.save();
            return newResult
        }
    },
    GetProjsect: async (data) => {
        const page = data.page
        const { filter, limit, population } = aqp(data)
        // console.log(population)
        // console.log(filter)
        // console.log(limit)
        delete filter.page
        let offset = (page - 1) * limit

        result = await project
            .find(filter)
            .populate(population)
            .skip(offset)
            .limit(limit)
            .exec();
        return result
    },
    uProject: async (data) => {
        console.log(data)
        let result = await project.updateOne({ _id: data.id }, { ...data })
        return result
    },
    dProject: async (data) => {
        console.log(data)
        let result = await project.deleteById(data);
        return result
    }
}
// {
//     "type": "EMPTY-PROJECT",
//         "name": "test1",
//             "starDate": "29/11/2023",
//                 "endDate": "1/1/2024",
//                     "description": "hahahahhahahaah",
//                         "customerInfo": {
//         "name": "nguyen van a",
//             "address": "HCM",
//                 "email": "aaaa@gmail.com"
//     },
//     "leader": {
//         "name": "nnt",
//             "email": "kkk@gmail.com"
//     }
// }


// {
//     "type": "REMOVE-USERS",
//         "UserArr" : ["6557504a47536e3ad6948a07", "65571dc28bb8a1b1ea6f0b7a"],
//             "projectID": "6567131b861c5c36558e10e8"
// }