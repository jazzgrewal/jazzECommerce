var mongoose=require("mongoose");
var bodyParser=require("body-parser");

mongoose.connect("mongodb://jazz:jatt123@ds211268.mlab.com:11268/jazz_shop");

var Product=require("../models/products");

var products= [ 
    new Product({
        imagePath:"https://scene7.zumiez.com/is/image/zumiez/pdp_hero/FILA-Disruptor-II-Premium-Yellow%2C-White-%26-Black-Shoes-_309631-front-US.jpg",
        name:"Fila",
        description:"ye naya vala hi hai",
        category:"clothes",
        price:113
    }),
    new Product({
        imagePath:"https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/kktwh4oa73m3tklzjpxd/air-jordan-1-low-shoe-v2kdOZ.jpg",
        name:"nike",
        description:"ye naya bhi vala hai",
        category:"clothes",
        price:13
    }),
    new Product({
        imagePath:"https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/805239_01.jpg",
        name:"jordan",
        description:"ye mani ka naya vala hai",
        category:"clothes",
        price:222
    }),
    new Product({
        imagePath:"https://cdn.thesolesupplier.co.uk/2018/08/Jordan-4-Raptors-AQ3816-056.png",
        name:"chins",
        description:"china maal h",
        category:"clothes",
        price:203
    }),
    new Product({
        imagePath:"https://2app.kicksonfire.com/kofapp/upload/events_master_images/ipad_bdbe8764411675e95af39b84d5dd4bc25bedf89df3f77.jpg",
        name:"jordan12",
        description:"sab golmaal h",
        category:"clothes",
        price:323
    }),
] ;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,item){
        if(err){
            console.log(err);
        }
        else {
            console.log("Added a product!")
        }
    });
}