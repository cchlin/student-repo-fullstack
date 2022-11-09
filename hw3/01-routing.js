const http = require('http');

const port = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  const routes = [
    'welcome',
    'redirect',
    'redirected',
    'cache',
    'cookie',
    'check-cookies',
    'other',
  ];

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.write(`<h1>Exercise 01</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
    res.end();
  }

  // Add your code here

  // http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format
  else if (req.method === 'GET' && req.url === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello! This is the welcome page</h1>');
    res.end();
  }

  // http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the
  // redirected page should return a redirected message of your choice
  else if (req.method === 'GET' && req.url === '/redirect') {
    console.log('redirecting...');
    res.writeHead(302, { Location: '/redirected' });
    res.end();
  }

  // redirected
  else if (req.method === 'GET' && req.url === '/redirected') {
    console.log('page redirected');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Redirected from /redirect<br>');
    res.end();
  }

  // http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day
  else if (req.method === 'GET' && req.url === '/cache') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Cache-control': 'max-age=86400',
    });
    res.write('<p>this resource was cached</p>');
    res.end();
  }

  // http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie
  else if (req.method === 'GET' && req.url === '/cookie') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Set-Cookie': 'hello=world',
    });
    res.write('cookies... yummm');
    res.end();
  }

  // http://localhost:5001/check-cookies should return 'yes' / 'no' in plain text depending on whether the browser has the 'hello' cookie
  else if (req.method === 'GET' && req.url === '/check-cookies') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    let found = 'no';
    let cookies = req.headers.cookie;

    // do here if there is someting in cookie

    if (cookies) {
      // split cookies [name1=value1; name2=value2; name3...]
      cookies = req.headers.cookie.split('; ');
      // go through the cookies list
      cookies.forEach((cookieName) => {
        // split name and value of cookie into [name1, value1]
        const name = cookieName.split('=');
        if (name[0] === 'hello') {
          // if the name of the cookie is found set the value to true
          found = 'yes';
        }
      });
    }
    res.write(found);
    res.end();
  }

  // For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format
  else {
    res.write('<h1>404 - page not found</h1>');
    res.end();
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
