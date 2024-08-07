// Create web server
var express = require('express');
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the path of the view files
app.set('views', __dirname + '/views');

// Set the path of static files
app.use(express.static(__dirname + '/public'));

// Define the route for the home page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Comments',
        comments: comments
    });
});

// Define the route for the form
app.get('/form', function(req, res) {
    res.render('form', {
        title: 'Form'
    });
});

// Define the route for the form submission
app.get('/submit', function(req, res) {
    // Get the comment from the request
    var comment = req.query.comment;
    if (comment) {
        // Add the comment to the list of comments
        comments.push(comment);
    }
    // Redirect to the home page
    res.redirect('/');
});

// Start the server
app.listen(3000);
console.log('Server is running on http://localhost:3000/');

// Array to store the comments
var comments = [
    'This is a comment.',
    'This is another comment.'
];