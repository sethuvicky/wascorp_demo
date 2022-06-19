const mongoose = require("mongoose")


mongoose.connect("mongodb+srv://sethuvicky:beastbrock@cluster0.206kf.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));