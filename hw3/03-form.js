const http = require('http');

const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const postHTML = `<html><head></head><body>
<form method='post' action='/submit'>
<label for="name">Name: </label>
<input type="text" name="Name" id="name"><br />
<label for="email">Email: </label>
<input type="email" name="Email" id="email"><br />
<label for="comments">Comment:</label><br />
<textarea name="Comments" id="comments" rows="4" cols="27"></textarea><br />
<label for="newsletter">Newsletter: </label><br />
<input type="radio" name="Newsletter" value="Yes, sign me up for the newsletter." />Yes, sign me up for the newsletter<br />
<input type="radio" name="Newsletter" value="No, thank you." />No, thank  you.<br />
<input type="submit" value="Submit" />
<input type="reset" vlaue="Reset" />
</form></body></html>`;

let body = '';

const server = http.createServer((req, res) => {
  const output = (key, value) => {
    const answer = value || 'n/a';
    res.write(`${key}: ${answer}<br />`);
  };

  if (req.url === '/form') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // write the form to the page
    res.write(postHTML);
    res.end();

  } else if (req.url === '/submit') {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // store the data to body
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
    const params = new URLSearchParams(body);
    params.forEach((value, key) => {
      output(key, value);
    });
  })
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
