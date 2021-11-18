const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/bankData",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`conncection successfull`);
}).catch((e)=>{
    console.log(`no connection`);
})


