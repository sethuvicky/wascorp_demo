require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 4000;
const Users = require("./models/userSchema")
const easyinvoice = require("easyinvoice")
require("./DB/config.js")
const cors = require("cors");
var fs = require('fs');
let path = require("path");

// const PDFDocument = require('pdfkit');
// const doc = new PDFDocument;

app.use(cors());
app.use(express.json());
app.post("/user",async(req,res)=>{
    let {due,sendname,sendaddress,username,useraddress} =req.body
       let user = new Users({
        due:due,
        sendname:sendname,
        sendaddress:sendaddress,
        username:username,
        useraddress:useraddress
    })

    await user.save().then(async()=>{var data = {
      // Customize enables you to provide your own templates
      // Please review the documentation for instructions and examples
      "customize": {
          //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
      },
      "images": {
          // The logo on top of your invoice
          // The invoice background
          "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
      },
      // Your own data
      "sender": {
          "company": username,
          "address": useraddress,
        
          //"custom1": "custom value 1",
          //"custom2": "custom value 2",
          //"custom3": "custom value 3"
      },
      // Your recipient
      "client": {
          "company": `Client : ${sendname}`,
          "address": sendaddress,
   
          // "custom1": "custom value 1",
          // "custom2": "custom value 2",
          // "custom3": "custom value 3"
      },
      "information": {
     
          "due-date": due
      },
      // The products you would like to see on your invoice
      // Total values are being calculated automatically
      "products": [
        {
            "quantity": 2,
            "description": "Graphic design services",
            "tax-rate": 6,
            "price": 33.87
        },
        {
            "quantity": 4.1,
            "description": "other services",
            "tax-rate": 6,
            "price": 12.34
        },
     
    ],
      
      // The message you would like to display on the bottom of your invoice
      "bottom-notice": "Kindly pay your invoice within 15 days.",
      // Settings to customize your invoice
      "settings": {
          "currency": "USD", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
          // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')
          // "tax-notation": "gst", // Defaults to 'vat'
          // "margin-top": 25, // Defaults to '25'
          // "margin-right": 25, // Defaults to '25'
          // "margin-left": 25, // Defaults to '25'
          // "margin-bottom": 25, // Defaults to '25'
          // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
          // "height": "1000px", // allowed units: mm, cm, in, px
          // "width": "500px", // allowed units: mm, cm, in, px
          // "orientation": "landscape", // portrait or landscape, defaults to portrait
      },
      // Translate your invoice to your preferred language
      "translate": {
          // "invoice": "FACTUUR",  // Default to 'INVOICE'
          // "number": "Nummer", // Defaults to 'Number'
          // "date": "Datum", // Default to 'Date'
          // "due-date": "Verloopdatum", // Defaults to 'Due Date'
          // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
          // "products": "Producten", // Defaults to 'Products'
          // "quantity": "Aantal", // Default to 'Quantity'
          // "price": "Prijs", // Defaults to 'Price'
          // "product-total": "Totaal", // Defaults to 'Total'
          // "total": "Totaal" // Defaults to 'Total'
      },
  };
    const result = await easyinvoice.createInvoice(data);
    await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
  })
  

})
const dirname = path.resolve();

  // Serve any static files
  app.use(express.static(path.join(dirname, "frontend/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(dirname, "frontend/build", "index.html"));
  });

// ----

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
   
});