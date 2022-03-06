// Initialize express 
const express = require('express');
const mongoose = require('mongoose');

// initialize app
const app = express();

// connect to mongoose server
mongoose.connect("mongodb+srv://admin-q:akkari619@cluster0.y18nt.mongodb.net/blogCollection?retryWrites=true&w=majority");

// Set ejs as the main view engine 
app.set('view engine', 'ejs');

// Set 'Public' as the static folder. Also use body-parser. 
app.use(express.static('Public'));
app.use(express.urlencoded());

//initialize mongoose schema and model
const blogSchema = new mongoose.Schema({
    title: String,
    body: String,
})

const Blog = mongoose.model('Blog', blogSchema);

//
const StartingContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


app.get('/', (req, res) => {
    Blog.find({}, function (err, itemsFound) {
        if (!err) {
            res.render('home', { homeStartingContent: StartingContent, entries: itemsFound });
        }
    })
});

app.post('/', (req, res) => {
    const blogTitle = req.body.entry_title;
    const blogbody = req.body.entry_body;

    const blog = new Blog({
        title: blogTitle,
        body: blogbody
    });

    blog.save();

    res.redirect('/');
})

app.get('/about', (req, res) => {
    res.render('about', { aboutContent: StartingContent });
});

app.get('/contact', (req, res) => {
    res.render('contact', { contactContent: StartingContent });
});

app.get('/compose', (req, res) => {
    res.render('compose');
});

app.get('/posts/:postId', (req, res) => {
    const requestedBlogId = req.params.postId;
    console.log(requestedBlogId);

    Blog.findOne({ _id: requestedBlogId }, function (err, foundBlog) {
        if (!err) {
            res.render('post', { title: foundBlog.title, content: foundBlog.body });
        }
        else
            console.log(err);
    })

    // entries.forEach((entry) => {
    //     const stored_post = entry.title.toLowerCase();

    //     if (requested_post == stored_post) {

    //     }
    // })
})

// Initialize the local server 
app.listen(process.env.PORT || 8080, () =>
    console.log('Server is running on http://localhost:8080/')
);