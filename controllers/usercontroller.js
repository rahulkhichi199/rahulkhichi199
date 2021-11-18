require("../models/conn");
// require("./views/index");


const AccountData = require("../models/registers");



exports.index =(req,res)=>{
    res.render("index");
} 





// exports.index = {
//     get : (req,res)=>{
//         res.render("index");
//     },

//     post : async(req,res)=>{
//         try{
        
    
    
    
//             const BankData = new AccountData({
//                 firstname:req.body.firstname,
//                 lastname:req.body.lastname,
//                 Accounttype:req.body.Accounttype,
//                 gender:req.body.gender,
//                 phone:req.body.phone,
//                 address:req.body.address,
//                 email:req.body.email 
//             })
            
//             const Registered = await BankData.save();
//             res.render("index");
    
    
            
    
//         }catch(error){
//              res.send(400).send(error);
//         }
// }
// }

 



exports.index = (req,res)=>{
                        
        
                const BankData = new AccountData({
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    Accounttype:req.body.Accounttype,
                    gender:req.body.gender,
                    phone:req.body.phone,
                    address:req.body.address,
                    email:req.body.email 
                })
                
                const Registered =  BankData.save();
                res.render("index");
        
        
                
        
          
    }