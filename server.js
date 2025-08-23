const express = require('express');
const path = require('path');
const routes = require('./routes');
const app = express();
const port = 3000;


//midddleware to serve static files
app.use(express.static('static'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));
app.use('/',routes());

// server is listening on port 3000
app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Server listening on port',port);
    }
});


