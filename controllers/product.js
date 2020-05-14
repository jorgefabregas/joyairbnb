const express = require('express')
const router = express.Router();

//load productModel
const productModel = require("../models/product");

//show all products
router.get("/list",(req,res)=>{ 
    res.render("products/productList",{ 
        title: "Product Listing Page", 
        description: "Product list",
        products: productModel.getAllProducts() 
    }) 
});

router.get("/find",(req,res)=>{ 
    res.render("general/finding",{ 
        title: "Find a Home", 
        description: "Find a Home in JoyBB",
        products: productModel.getAllProducts()  
    }) 
});

//show add product form
router.get("/add",(req,res)=>{ 
    res.render("products/productAdd",{ 
        title: "Add a Product", 
        description: "Adding a Product",
        products: productModel.getAllProducts() 
    }) 
});

//when user sobmits form
router.post("/add",(req,res)=>{ 
    res.render("general/finding",{ 
        title: "Find a Home", 
        description: "Find a Home in JoyBB",
        products: productModel.getAllProducts() 
    }) 
});

module.exports = router;