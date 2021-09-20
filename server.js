require("dotenv").config()

const cookieParser = require("cookie-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const PORT = process.env.PORT || 1998;

async function server() {
    const app = express();
    // middlewares 
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true
        })
    );
    app.use(morgan("dev"));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "src", "public")));


    // settings
    app.set("view engine", "ejs");
    

}
    


