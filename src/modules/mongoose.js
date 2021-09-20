const mongoose = require("mongoose");

async function mongo (){
    try {
        await mongoose.connect("mongodb://localhost27017/olx_test")
        
    } catch (error) {
        console.error("MONGOERROR:", error + "");
    }
}

mongo();

module.exports = mongo;