// Initialize express 
const express = require('express');

// initialize app
const app = express();

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());


const homeStartingContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const aboutContent  ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const contactContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

app.get('/' , (req,res) => {
    res.render('home', {homeStartingContent: homeStartingContent});
});

app.get('/about' , (req,res) => {
    res.render('about', {aboutContent: aboutContent});
});

app.get('/contact' , (req,res) => {
    res.render('contact', {contactContent: contactContent});
});

app.get('/compose' , (req,res) => {
    res.render('compose');
});

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);