const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
require('dotenv').config();

// const stuffRoutes = require('./routes/stuff');
// const userRoutes = require('./routes/user');


const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//Header security
app.use(helmet());


app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use('/api/sauces', stuffRoutes);
// app.use('/api/auth', userRoutes);

module.exports = app;