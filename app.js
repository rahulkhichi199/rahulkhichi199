const express = require("express");
const path = require("path");
const app = express();
const router = require('./router')


// require("./models/conn");



// const AccountData = require("./models/registers");

const port = process.env.PORT || 5000;



// const views_path = path.join(__dirname,"../views");




// app.get("/",controller.get);
// app.post("/",controller.post);














app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("views","views");
app.set("view engine","hbs");




app.use("/",router);

app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);

})