var mongoose=require("mongoose");
//USER- email,name
var productSchema=new mongoose.Schema({
   imagePath:String,
   name:String,
   description:String,
   category:String,
   price:Number
});
//telling the db to make a collection which will use the above schema
//var User=mongoose.model("User",userSchema);
module.exports=mongoose.model("Product",productSchema);