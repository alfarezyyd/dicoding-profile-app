import http from 'http'
import * as fs from "node:fs";

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
})

server.listen(8081);