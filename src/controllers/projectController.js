const { CreateProjsect, GetProjsect, uProject, dProject } = require("../services/projectcv")


module.exports = {
    postCreateProject: async (req, res) => {
        let result = await CreateProjsect(req.body)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    getallProject: async (req, res) => {
        let result = await GetProjsect(req.query)
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    deleteProject: async (req, res) => {
        let result = await dProject(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    },
    updateProject: async (req, res) => {
        let result = await uProject(req.body);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
}