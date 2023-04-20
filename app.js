// * we can add and get the products in two ways using mongoose or without using mongoose
// below code has implemented mongoose, we can also implement without using mongoose
// change line no.6 [ const mongoPractice = require('./mongoose'); ] => [ const mongoPractice = require('./mongo'); ]
const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');
const app = express();

app.use(bodyParser.json());

app.post('/products',mongoPractice.createProduct);

app.get('/products',mongoPractice.getProduct);

app.listen(3000);