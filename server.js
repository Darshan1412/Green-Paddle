const express = require('express');
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
const { request } = require("http");
const stripe = require('stripe');
// mongoose.connect('mongodb+srv://darshan:darshanjain1412@greenpaddle.dsqvgnm.mongodb.net/test', {useNewUrlParser:true});
const env = require('dotenv').config();
var ejs = require('ejs');
// const Razorpay = require('razorpay');
const router = express.Router();
const routes = require('./routes')
const authroute = require('D:/GreenPaddle/routes/index.js')
const user = require('D:/GreenPaddle/models/user.js')
const serverless = require("serverless-http");
const port = process.env.PORT || 80

// const instance = new Razorpay({
//     key_id: 'rzp_test_qCbga03jedC1C5',
//     key_secret: 'exck0ohI81kvweD73580vif6',
//   });

// app.use(cors());

// app.use(express.json())
// app.use(express.static("public"))
// var express = require('express');
// var app = express();

app.use(`/.netlify/functions/api`, router);
module.exports = app;
module.exports.handler = serverless(app);

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var mongoUrl = 'process.env.DATABASE'
var db;

// MongoClient.connect(mongoUrl,(err,client)=>{
//   if(err) console.log("Error while connecting")
//   else db = client.db('signin');
// })



mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (!err) {
    console.log('MongoDB Connection Succeeded.');
  } else {
    console.log('Error in DB connection : ' + err);
  }
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//Making mongoose schema
const infoSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    message : String

});


const Info = mongoose.model('Info', infoSchema);

//Making mongoose schema
const PaySchema = new mongoose.Schema({
    uname: String,
    email: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    ccname: String,
    ccnum: String,
    exp: String,
    cvv: String
});


const pay = mongoose.model('pay', PaySchema);

//Express specific stuff
app.use(express.static('public'));
app.use(express.json())



var index = require('./routes/index');
app.use('/', index);

app.use('/auth',authroute);
app.get('/contact', (req,res)=>{
    
    res.sendFile(__dirname + '/public/contactform.html')
})
app.get('/', (req,res)=>{
    
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/accessories', (req,res)=>{
    
    res.sendFile(__dirname + '/public/accessories.html')
})
app.get('/faqs', (req,res)=>{
    
    res.sendFile(__dirname + '/public/faq.html')
    
})
app.get('/book', (req,res)=>{
   
    res.sendFile(__dirname + '/public/book.html')
})
app.get('/explore', (req,res)=>{
   
    res.sendFile(__dirname + '/public/explore.html')
})
app.get('/cart', (req,res)=>{
   
    res.sendFile(__dirname + '/public/cart.html')
})
// app.get('/user', (req,res)=>{
   
//     res.sendFile(__dirname + 'GreenPaddle-main/index.html')
// })


//stipe payment
// var stripeGateway = stripe('process.env.stripe_key');

// var DOMAIN = process.env.DOMAIN;

// app.post('/stripe-checkout',async (req,res) => {
//     const session = await stripeGateway.checkout.sessions.create({
//             payment_method_types:["card"],
//             mode:"payment",
//             success_url: `${DOMAIN}/thank.html`,
//             cancel_url:`${DOMAIN}/cart.html`,
//             line_items: req.body.items.map(item => {
//                 return {
//                     price_data: {
//                         currency: "inr",
//                         product_data: {
//                             name: item.name,
//                             image: [item.tag],
//                         },
//                         unit_amount: item.price * 100,
//                     },
//                     quantity: item.inCart,
//                 };
//             }),
            // get line_items() {
            //     return this.line_items;
            // },
            // set line_items(value) {
            //     this.line_items = value;
            // },
            // get line_items() {
            //     return this._line_items;
            // },
            // set line_items(value) {
            //     this.line_items = value;
            // },
       
//     })
//     res.json(session.url)
// })

app.get('/data', (req,res)=>{
   
    res.sendFile(__dirname + '/public/views/data.html')
})
app.get('/login', (req,res)=>{
   
    res.sendFile(__dirname + '/public/views/login.html')
})
app.get('/register', (req,res)=>{
   
    res.sendFile(__dirname + '/public/views/index.html')
})
app.get('/forgetpass', (req,res)=>{
   
    res.sendFile(__dirname + '/public/views/forget.html')
})
app.get('/payment', (req,res)=>{
   
    res.sendFile(__dirname + '/public/payment.html')
})

app.get('/email', (req,res)=>{
   
    res.sendFile(__dirname + '/public/email.html')
})
app.get('/passcreate', (req,res)=>{
   
    res.sendFile(__dirname + '/public/PassCreate.html')
})
app.get('/passlogin', (req,res)=>{
   
    res.sendFile(__dirname + '/public/passlogin.html')
})
app.get('/sell', (req,res)=>{
   
    res.sendFile(__dirname + '/public/sell.html')
})
app.get('/ev', (req,res)=>{
   
    res.sendFile(__dirname + '/public/ev.html')
})
app.get('/products', (req,res)=>{
   
    res.sendFile(__dirname + '/public/products.html')
})

// app.get('/api', (req,res)=>{
    
//     res.sendFile(__dirname + '/public/cart.js')
// })


// Post request for storing data of contact form
app.post('/contact', async(req, res)=>{
var myData = new Info({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
});      
    console.log(myData)
    await myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})
})

app.post('/create/orderId', async(req, res)=>{
    var options = {
        amount: req.body.amount,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "rcp1"
      };
      instance.orders.create(options, function(err, order) {
        console.log(order);
        res.send({order : order.id});
      });
      
})

app.post("/api/payment/verify",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'exck0ohI81kvweD73580vif6')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
         res.send(response);
     });



//Post request for storing data of payment
app.post('/pay', async(req, res)=>{
    var myData = new pay({
        uname: req.body.uname,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        ccname: req.body.ccname,
        ccnum: req.body.ccnum,

    });      
        console.log(myData)
        await myData.save().then(()=>{
         res.redirect('/thank.html')
    
    })
    })


//Post request for email
app.post('/',(req,res)=>{
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'darshanjain768@gmail.com',
            pass: '*********'
        }
        
    })
const mailOptions={
    from: 'darshanjain768@gmail.com',
    to: req.body.email,
    subject: 'greenpaddle',
    text: 'Thank you for subscribing to greenPaddle. You will receive all new offers and deals.'
}
    transporter.sendMail(mailOptions, (error ,info)=>{
        if(error){
            console.log(error);
            res.send('error');
           
        } else{
            console.log('Email sent');
            res.send('success');
                
        }
    })
});

//app.listen
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on port ${process.env.PORT}`);
});
