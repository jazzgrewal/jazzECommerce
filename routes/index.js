var express = require('express');
var router = express.Router();
var Product=require("../models/products");
var bodyParser=require("body-parser");
const { check, validationResult } = require('express-validator');

//use body parser
router.use(bodyParser.urlencoded({extended:true}));
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/products",function(req,res){
  Product.find({},function(err,products){
    if(err){
      console.log("Error connecting db in the index.ejs");
    }
    else
    {
      res.render("index.ejs",{products:products});
    }
  });
});

//New Products creation route
router.get("/products/new",function(req,res){
  res.render("newProducts.ejs");
});
router.post("/products/new",function(req,res){
  var product=req.body.product;
  Product.create(product,function(err,newProduct){
    if(err)
    {
      console.log("Error at the creation jazz");
    }
    else
    {
      console.log("Hey jaz I succesfully added this product:"+newProduct.name);
    }
  });
  res.redirect("/products");

});

          // //server side validation check
          // router.get("/check",function(req,res){
          //   res.render("newProducts1.ejs");
          // });
          // router.post("/check",[
          //   check('name').isLength({ min: 3 }),
          //   check("price").isNumeric(),
          //   check("description").isIP()
            
          // ],function(req,res){
          //   const errors = validationResult(req);
          //   if(!errors.isEmpty()){
          //     console.log("Validation Error bud");
          //   }
          //   else{
          //     res.send("Post Validated!!!!");
          //   }
            
          // });

module.exports = router;
