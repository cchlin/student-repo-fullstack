const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

// POST request
app.post('/submit', (req, res) => {
  // Add your code here
  const output = (key, value) => {
    const answer = value || 'n/a';
    return `${key}: ${answer}<br />`;
  }

  res
    .status(200)
    .set({ 'Content-Type': 'text/html' });

  let body = ''
  for (let item in req.body) {
    body += output(item, req.body[item])
  }
  res.send(body)

  res.end()

});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
