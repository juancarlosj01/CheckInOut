const { Employee } = require("../models/employee.model");

const getEmployeesRegistrations = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json({
            status: "succses",
            data: {
                employees,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
const getRegistrationOfOneEmployee = async (req, res) => {
    try {
        const { employee } = req;

        res.status(200).json({
            status: "succses",
            data: {
                employee,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

const createCheckIn = async (req, res) => {
    try {
        const { entranceTime } = req.body;

        const newData = await Employee.create({ entranceTime });

        res.status(201).json({
            status: "success",
            data: { newData },
        });
    } catch (error) {
        console.log(error);
    }
};

const updateToCheckOut = async (req, res) => {
    try {
        const { exitTime } = req.body;
        const { employee } = req;

        await employee.update({ exitTime, status: "out" });

        res.status(200).json({
            status: "success",
            data: { employee },
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteChechInToCancelled = async (req, res) => {
    try {
        const { employee } = req;
        await employee.update({ status: "cancelled" });

        res.status(204).json({ status: "success" });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getEmployeesRegistrations,
    getRegistrationOfOneEmployee,
    createCheckIn,
    updateToCheckOut,
    deleteChechInToCancelled,
};
