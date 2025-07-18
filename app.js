const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('view engine', 'pug'); // Set the template engine for pug
app.set('views', path.join(__dirname, 'views')); // Set the view directory


// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {};
    res.status(200).render('../views/home.pug', params);
});

app.get('/contact', (req, res)=>{
    const params = {};
    res.status(200).render('../views/contact.pug', params);
});




// START THE SERVER
app.listen(port, ()=>{
    console.log(`The Application is started on port number: ${port}`);
});
