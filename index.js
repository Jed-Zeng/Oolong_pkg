// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express
const app = express();

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use cors middleware to handle CORS errors
app.use(cors());

// Define a middleware function to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Define another route
app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

// Define a route with a parameter
app.get('/users/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Define a route to handle POST requests
app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received!');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});