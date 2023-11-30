const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
    {
        name: String,
        address: String,
        email: String
    }
)
const userSchema = new mongoose.Schema({
    name: String,
    email: String
})
const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        },
        starDate: String,
        endDate: String,
        description: String,
        customerInfo: customerSchema,
        usersInfo: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        leader: userSchema,
        tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }]
    },
    {
        timestamps: true
    }
)

projectSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const project = mongoose.model("project", projectSchema);

module.exports = project