const http = require('http');
const srv = http.createServer((req, res) => {
  res.writeHead(200, { 'Access-Control-Allow-Origin': '*' }); // Sensitive
  res.end('ok');
});
srv.listen(3000)
