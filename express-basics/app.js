/* first intall the dependecies:

1- npm init
2- npm i express 
3- npm pg pg-hstore
4- npm i sequelize
5- npm nodemone --save-dev
6- create the .prettierrc file with the object: {"tabWith": 2, "printWidth": 80, "singleQuote": true, "semi": true}
7- change text script with start: "nodemone server.js"
*/
const { employeesRouter } = require("./routes/employees.routes");
// 1.then create express
const express = require("express");

// 2. then create the app
const app = express();

// 3 add json middleware
app.use(express.json());

// 4. Define endpoints -> create the models folder
app.use("/employees", employeesRouter);

// create the srever --> in the server.js

module.exports = { app };
