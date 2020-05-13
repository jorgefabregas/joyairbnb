const express = require("express");
const exphbs  = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');

//load the environment variable files 
require('dotenv').config({path:"./config/keys.env"}); 


const app = express();
require('./public/js/database')
require('./public/js/local-auth');

//Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
})); 
app.set('view engine', 'handlebars'); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

//load controllers
const generalController = require("./controllers/general");
const productController = require("./controllers/product");

//map each controller
app.use("/", generalController);
app.use("/product", productController);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//routes
//register route
app.get("/register",(req,res)=>{ 
    res.render("general/register",{ 
        title: "Log In ", 
        description: "Register" 
    }) 
});


//process register 
app.post("/register", passport.authenticate('local-register', {
    successRedirect: '/',
    failureRedirect: '/register',
    passReqToCallback: true
}));


//login route
app.get("/login",(req,res)=>{

    res.render("general/login",{
        tittle: "Login Page"
    });
});

//when user login 
app.post("/login",(req,res)=>{

    res.render()
});

app.get('/profile', (req, res, next) => {
    res.render('general/profile');
});



//sets up server
const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log(`Web sever is up and running`);
});
