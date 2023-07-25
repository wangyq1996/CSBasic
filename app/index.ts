const express = require('express');
const cookieSession = require('cookie-session');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.setHeader('Set-Cookie', 'test_cookie=12345678; SameSite=None;');
  res.setHeader('access-control-allow-origin', req.headers.origin || '*');
  res.setHeader('Access-Control-Allow-Credentials', true)
//   res.send('Hello 123 World!');
res.sendFile(path.join(__dirname, '../index.html'));
});

// app.options('/', (req, res) => {
// //   res.setHeader('access-control-allow-origin', req.headers.origin || '*');
//   res.setHeader(
//     'access-control-allow-headers',
//     req.headers['access-control-request-headers'] || '',
//   );
//   console.log('options');
//   res.sendStatus(204);
// });

app.listen(port, () => {
  console.log(
    `=============Example app listening on port ${port}================`,
  );
});
