const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(
  session({
    store: new session.MemoryStore(),
    secret: 'The secret itself should be not easily guessed',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 86400000
    }
  })
);

app.get('/*', (req, res) => {
  // Add your code here
  
  // print the current route
  let message = `Currently on route: ${req.url}<br /><br />`;
  res
    .status(200)
    .set({ 'Conent-Type': 'text/html' });

 // if it is the first time visit
 if (req.session.history === undefined) {
  req.session.history = []; // create history
  req.session.history.push(req.url) // push the route into the history
  message += `Welcome to http://localhost:${port}`
  res.send(message);
 }
 // ignore the favicon.ico
 else if (req.url === '/favicon.ico') {
  res.end() // do nothing and end
 }
 // not the fisrt time
 else {
  req.session.history.push(req.url) // add the current visit to the list
  message += 'Previously visited:<br />'
  // go through the history array and append the item
  for (let item of req.session.history) {
    message += `&emsp;${item}<br />`
  }
  res.send(message)
 }

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
