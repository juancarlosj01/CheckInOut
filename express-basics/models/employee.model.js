const { DataTypes, db } = require("../utils/database.util");

const workTimeIsOver = new Date("'December 25, 1995 19:30:00'");
const finalHour = workTimeIsOver.getHours();

const defineStatus = () => {
    if (entranceTime !== null) {
        return "working";
    } else if (exitTime !== null) {
        return "out";
    } else if (exitTime < finalHour) {
        return "cancelled";
    }
};

const Employee = db.define("employee", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "working",
    },
});

module.exports = { Employee };
