const express = require('express');

const app = express()
app.use(express.json())

app.listen(8080, () => {
   console.log('Server is running on port 8080');
});

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Request-Method', '*');
   res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
   res.header('Access-Control-Allow-Headers', '*');

   if (req.method === 'OPTIONS') {
      res.sendStatus(200);
   } else {
      next();
   }
});

app.post('/', (req, res) => {
   const pattern = req.body.pattern;
   console.log(pattern);

   // 以下に処理を記述し、res.writeに出力内容を渡してください。
   // ===============処理記述部分==================
   let answer = ""
   for (let i = 1; i <= 30; i++) {
      let ians = "";
      for (let kv of req.body.obj) {
         if (i % kv["num"] == 0) {
            ians += ` ${kv["text"]}`
         }
      }
      if (ians == "") {
         answer += ` ${i},`
      } else {
         answer += `${ians},`
      }
   }
   // ===========================================
   res.writeHead(200, { 'Content-Type': 'text/html' });
   // 出力結果を以下に渡してください。
   res.write(answer);
   res.end();
});

