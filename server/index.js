require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const cardRouter = require('./router/products-router/card-router');
const creditRouter = require('./router/products-router/credit-router');
const depositRouter = require('./router/products-router/deposit-router')
const errorMiddleware = require('./middlewares/error-middleware');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use('/api', router);
app.use('/products', cardRouter);
app.use('/products', creditRouter);
app.use('/products', depositRouter);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
