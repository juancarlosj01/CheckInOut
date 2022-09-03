const express = require("express");

const {
    getEmployeesRegistrations,
    getRegistrationOfOneEmployee,
    createCheckIn,
    updateToCheckOut,
    deleteChechInToCancelled,
} = require("../controllers/employees.controller");

const employeesRouter = express.Router();

//middlewares

const { employeeExist } = require("../middleware/employees.middleware");

employeesRouter.get("/", getEmployeesRegistrations);

employeesRouter.get("/:id", employeeExist, getRegistrationOfOneEmployee);

employeesRouter.post("/", createCheckIn);

employeesRouter.patch("/:id", employeeExist, updateToCheckOut);

employeesRouter.delete("/:id", employeeExist, deleteChechInToCancelled);

module.exports = { employeesRouter };
