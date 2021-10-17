// Initialize express 
const express = require('express');

// initialize app
const app = express();

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());

app.get('/' , (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);