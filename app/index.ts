const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.options('/', (req, res) => {
  res.setHeader('access-control-allow-origin', req.headers.origin || '*');
  res.setHeader(
    'access-control-allow-headers',
    req.headers['access-control-request-headers'] || '',
  );
  console.log('options');
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(
    `=============Example app listening on port ${port}================`,
  );
});
