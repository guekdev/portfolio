const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const projects = require('./routes/api/projects');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(allowCorsMiddleware);


const db = 'mongodb://admin:asdadmin123@ds046037.mlab.com:46037/portfolio';

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/projects', projects);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));



/* MISC */

/* Add CORS-headers to every request */
function allowCorsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE") // Las till av Gustav
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}
