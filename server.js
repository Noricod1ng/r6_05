'use strict';

// eslint-disable-next-line @hapi/hapi/capitalize-modules
const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
});

server.listen(8001);

console.log('Server running at http://127.0.0.1:8001/');
