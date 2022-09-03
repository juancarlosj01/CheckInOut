//Models
const { Employee } = require("../models/employee.model");

const employeeExist = async (req, res, next) => {
    try {
        const { id } = req.params;

        const employee = await Employee.findOne({ where: { id } });

        if (!employee) {
            res.status(404).json({
                status: "error",
                message: "employee not found",
            });
        }

        req.employee = employee;
        next();
    } catch (error) {
        console.log(error);
    }
};

module.exports = { employeeExist };
