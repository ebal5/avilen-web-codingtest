const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
   const queryObject = url.parse(req.url, true).query;
   console.log(queryObject.obj);

   // ここに処理を記述してください。
   ans = "answer";

   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(ans);
   res.end();
});
server.listen(8080); 