
const browserify = require('browserify-middleware');
const express = require('express');
const app = express();

app.use(`/`, browserify("./example.js"));

const server = app.listen(3000, () => {
    const address = server.address();
    console.log(`http://localhost:${address.port}\n`);
 });
  