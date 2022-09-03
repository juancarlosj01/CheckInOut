const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "1234B",
    port: 5432,
    database: "employeesData",
    logging: false,
});

module.exports = { db, DataTypes };
