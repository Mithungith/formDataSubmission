var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const userModel = require("./users");

/* GET home page. */

router.use(bodyParser.urlencoded({extended:false}));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.post("/submit",function(req,res){
//   let name = req.body.name;
//   let emailData = req.body.email;
//   let passwordData = req.body.password;

//   console.log(name,emailData,passwordData);
//   res.send("Check console");
// });

router.post("/submit",async function(req,res,next){
  const userData = await userModel.create({
    username:req.body.name,
    email:req.body.email,
    password:req.body.password
  });

  res.send("check database mongodb");
})

module.exports = router;
