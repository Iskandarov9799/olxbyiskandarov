const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;

async function mongo (){
    try {
        await mongoose.connect(MONGO_URL);
        
    } catch (error) {
        console.error("MONGOERROR:", error + "");
    }
}

mongo();

module.exports = mongo;