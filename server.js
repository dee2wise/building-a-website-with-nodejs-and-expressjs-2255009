const express = require('express');
const path = require('path');

const app = express();
const port = 3000;


//midddleware to serve static files
app.use(express.static('static'));



// server is listening on port 3000
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server listening on port',port);
    }
});

// route for the root path
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/index.html'));
    console.log('Request received');
});

app.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'));
    console.log('Request received for speakers');
});

