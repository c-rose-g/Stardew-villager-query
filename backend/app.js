const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const { environment } = require('./config');
const isProduction = environment === 'production';
const app = express();

// Enable CORS only in development
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://stardew-valley-search.onrender.com' // Replace with your React Native production URL (e.g., Expo, EAS URL, etc.)
    : 'http://localhost:3000',
  methods: 'GET',
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Only GET requests are allowed.' });
  }
  next();
});
// Routes setup
const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

app.use('/', indexRouter);
// app.use('/users', usersRouter);

// Catch unhandled requests and forward to error handler.
app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

const { ValidationError } = require('sequelize');

// Process sequelize errors
app.use((err, _req, _res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Validation error";
  }
  next(err);
});

// Error formatter
app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

console.log(`Environment: ${process.env.NODE_ENV}`);
module.exports = app;
