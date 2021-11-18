const express = require("express");
const router = express.Router()

const controller = require("./controllers/usercontroller");



router.get("/",controller.index);
router.post("/",controller.index);


module.exports = router;


