const http = require('http');
const { URLSearchParams } = require('url');
const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  else if (req.url === '/attributes?hello=world&lorem=ipsum') {
    result();
  } else if (req.url === '/items?first=1&second=2&third=3&fourth=4') {
    result();
  } else if (
    req.url === '/characters?spongebob=squarepants&patrick=star&sandy=cheeks'
  ) {
    result();
  }

  function result() {
    // search parameters and creat the table and store them in a string
    const searchParams = new URLSearchParams(url.searchParams);
    let content = '<table border="1">';
    searchParams.forEach((value, key) => {
      content += '<tr><td>' + key + '</td><td>' + value + '</td></tr>';
    });
    content += '</table>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
  }

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
