const express = require('express');

const app = express();

// Setting up the server port 
app.listen("8080", () =>{
    console.log('Connected');
})
app.use(express.static('public'));