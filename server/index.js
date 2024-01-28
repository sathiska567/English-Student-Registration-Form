const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


// create express app
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// Add port
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
})