const express = require('express');
const app = express();
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const hostels = require('./routes/hostels');

// Body parser
app.use(express.json());

// logger middleware
const logger = (req, res, next) => {
  req.hello = 'Hello World!';
  console.log('middleware ran!!!');
  next();
};
app.use(logger);

// Mount routers
app.use('/api/v1/hostels', hostels);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(
    `Server is listening in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
