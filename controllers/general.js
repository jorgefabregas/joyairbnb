const express = require('express')
const router = express.Router();



//home route
router.get("/",(req,res)=>{

    res.render("general/index",{
        tittle: "Home Page"
    });
});

//contact us route
router.get("/contact-us",(req,res)=>{
     
    res.render("general/contactUs",{ 
        title: "Contact Us", 
        description: "Contact Us" 
    }) 
});

//process contact us form (when user submits form)
router.post("/contact-us", (req,res)=>{

    const {firstName,lastName,eMail,message} = req.body;

    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
    to: `fabregas.jorge@yahoo.es`,
    from: `${eMail}`,
    subject: 'Contact Us Form Submit',
    html:
    `Visitor's Full name ${firstName} ${lastName} <br>
    Visitor's Email Address ${eMail} <br>
    Visitor's Message ${message} <br>
    `,
    };

//Asynchornous operation (who don't know how long this will take to execute)
    sgMail.send(msg)
    .then(()=>{
        res.redirect("/");
    })
    .catch(err=>{
        console.log(`Error ${err}`);
    });

});

//about us route
router.get("/about",(req,res)=>{ 
    res.render("general/about",{ 
        title: "About Us", 
        description: "About to Joy BB" 
    }) 
});




module.exports = router;