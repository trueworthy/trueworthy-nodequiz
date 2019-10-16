/**
 * Author: Lea Trueworthy
 * Description: Demonstration of how to connect to MongoDB and test middleware API's in SoapUI
 */

const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const Employee = require('./models/employees');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const createError = require('http-errors');
const Quiz = require('./models/quizzes');
const quizResults = require('./models/quiz-results')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));

const port = process.env.PORT || 3000, //server port or 3000
//const serverPort = 3000; // port the application listens on

// MongoDB (mLab) connection string
// const connString = 'mongodb://<username>:<password>@<host-name>:<port><database-name>';
const connString = 'mongodb+srv://admin:admin@buwebdev-cluster-1-m4xeg.mongodb.net/nodequiz?retryWrites=true&w=majority';

// MongoDB (Atlas) connection string
// const connString = 'mongodb+srv://<username>:<password>@<url>/<database-name>?retryWrites=true&w=majority'

// MongoDB connect
mongoose.connect(connString, { promiseLibrary: require('bluebird'), useNewUrlParser: true })
  .then(() => console.debug('Connection to the MongoDB instance was successful!'))
  .catch((err) => console.debug('MongoDB Error: ' + err.message));

/************************* API routes go below this line ********************/
app.post('/api/employees', function (req, res, next) {
  const employees = {
    employeeId: req.body.employeeId,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  };

  Employee.create(employees, function (err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
})

app.get('/api/employees', function (req, res, next) {
  Employee.find({}, function (err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
})

app.get('/api/employees/:id', function (req, res, next) {
  Employee.findOne({ 'employeeId': req.params.id }, function (err, employees) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(employees);
      res.json(employees);
    }
  })
})
/*************** Quiz Results API *******************************************/
/*var userSchema = new mongoose.Schema({
  employeeId: Number,
  quizResults: String
});

var User = mongoose.model("User", userSchema);*/
//Create Quiz Result
app.post('/api/results', function(req, res, next) {
  const quizResults = {
    employeeId: req.body.employeeId,
    quizId: req.body.quizId,
    result: req.body.result
  };
})

/**
 * Creates an express server and listens on port 3000
 */
http.createServer(app).listen(serverPort, function () {
  console.log(`Application started and listing on port: ${serverPort}`);
})