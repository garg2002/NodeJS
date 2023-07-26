const express = require('express'); // import express module

const app = express(); // express() is a top-level function exported by the express module.

const port = 3009;  // port number


// app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('') relative to the site root. The callback function takes a request and a response object as arguments, and simply calls res.send() with a string. The string is then sent back to the client as the HTTP response body.

app.get('/', (req, res) => {
    res.send('<h1>Welcome Page</h1>');
});

app.get('/courses', (req, res) => {
    res.send('<h1>Courses Page</h1>');
});
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');  
});

app.get('/account', (req, res) => {
    res.send('<h1>Account Page</h1>');
});

// app.listen() method binds and listens for connections on the specified host and port. This method is identical to Node’s http.Server.listen().
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

