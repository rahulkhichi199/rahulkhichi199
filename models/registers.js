const mongoose = require('mongoose');


const bankDataSchema = new mongoose.Schema({
    firstname:"string",
    lastname:"string",
    Accounttype:"string",
    gender:"string",
    phone:"number",
    address:"string",
    email:"string" 
})

const AccountData = new mongoose.model("AccountData",bankDataSchema);

module.exports = AccountData;
