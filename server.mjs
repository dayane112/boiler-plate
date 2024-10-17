// import
import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";

// Setup
const app = express();
dotenv.config();
let PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }))



// routes




// listner
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});