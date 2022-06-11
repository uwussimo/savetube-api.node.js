require('dotenv').config();
const express = require('express');
const app = express();

const main = async () => {
  app.use('/', require('./routes/'));
  app.listen(3000, () => {
    console.log('Server has been started on port 3000');
  });
};

main().catch((err) => {
  console.log(err);
});
