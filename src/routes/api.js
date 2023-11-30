const express = require("express");
const {
  getUsersAPI,
  postCreateUsersAPI,
  putUpdateUserAPI,
  deleteUser,
  postUpsimgleFile,
  postMultipleFileAPI,
} = require("../controllers/apiControllers");

const {
  postCreateCustomer,
  postCreateArrCustomer,
  GetCustomer,
  updateCustomer,
  deleteCustomer,
  deleteArrCustomer,
} = require("../controllers/customerController");

const {
  postCreateProject,
  getallProject,
  deleteProject,
  updateProject
} = require("../controllers/projectController")

const {
  postTask,
  getTask,
  putTask,
  deleteTask
} = require("../controllers/taskController")

const routerAPI = express.Router();
//User
routerAPI.get("/users", getUsersAPI);
routerAPI.post("/users", postCreateUsersAPI);
routerAPI.put("/users", putUpdateUserAPI);
routerAPI.delete("/users", deleteUser);
routerAPI.post("/file", postUpsimgleFile);
routerAPI.post("/files", postMultipleFileAPI);
//Customer
routerAPI.post("/customers", postCreateCustomer);
routerAPI.post("/customers-array", postCreateArrCustomer);
routerAPI.get("/customers", GetCustomer);
routerAPI.put("/customers", updateCustomer);
routerAPI.delete("/customer", deleteCustomer);
routerAPI.delete("/customers", deleteArrCustomer);
//Project
routerAPI.post("/projects", postCreateProject);
routerAPI.get("/projects", getallProject);
routerAPI.put("/projects", updateProject);
routerAPI.delete("/project", deleteProject);
//Task
routerAPI.post("/task", postTask);
routerAPI.get("/task", getTask);
routerAPI.put("/task", putTask);
routerAPI.delete("/task", deleteTask);

module.exports = routerAPI;
