let mongoose = require("mongoose");
let express = require("express");
let cors = require("cors");
let bodyparser = require("body-parser");

const employeeRoute = require("./routes/Employeeroutes");
const salaryRoute = require("./routes/salaryroutes");


mongoose.connect("mongodb://127.0.0.1:27017/Emp")
.then((x) => {
    console.log(`connected to mongo! Database name:"${x.connections[0].name}"`)
})
.catch((err)=>{
    console.error("error connecting to mongo", err.reason);
});

const app = express();
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended: true,
    }),
);
app.use(cors());
app.use("/employees",employeeRoute);
app.use("/salary",salaryRoute);

const port = 4000;
app.listen(port, () => {
    console.log("connected to port" + port);
});