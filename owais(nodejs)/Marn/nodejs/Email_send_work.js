// npm i nodemailer
// note 

require("dotenv").config()
let nodemailer = require("nodemailer");

let emailinformation ={
    to:["hammadk0500@gmail.com","ammarthehakkiller@gmail.com","subhanaptech8@gmail.com","samreenrafiq@aptechnorth.edu.pk"],
    from:process.env.Email,
    subject:"Test Email",
    text:"Hello, this is a test email sent by Node.js",
    html: "<b>Hello, this is a test email sent by Node.js</b>"
}

let transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.Email,
        pass:process.env.Pass_key,
    }
})

transporter.sendMail(emailinformation,function(error,info){
    if (error) {
        console.log("Something went wrong")
        console.log(error)
    } else {
        console.log("Sent Email")
    }
})