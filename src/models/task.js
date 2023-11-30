const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const userSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        email: String
    }
)
const projectSchema = new mongoose.Schema({
    name: String,
    starDate: String,
    endDate: String,
    description: String
})
const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        status: String,
        starDate: String,
        endDate: String,
        usersInfo: userSchema,
        projectInfo: projectSchema
    }, {
    timestamps: true
}
)

taskSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const Task = mongoose.model("Task", taskSchema);

module.exports = Task