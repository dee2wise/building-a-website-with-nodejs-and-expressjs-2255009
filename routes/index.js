const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();


//midddleware to serve static files
app.use(express.static('static'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));


module.exports = () =>{
  // route for the root path
router.get('/',(req,res)=>{
    res.sendFile('./pages/index', {pageTitle: 'Welocome'});
    console.log('Request received');
});
// route for speakers
router.get('/speakers',(req,res)=>{
    res.sendFile(path.join(__dirname,'./static/speakers.html'));
    console.log('Request received for speakers');
});

// route for feedback
router.get('/feedback',(req,res)=>{
  res.sendFile(path.join(__dirname,'./static/feedback.html'));
  console.log('Request received for feedback');
});


return router;
}




