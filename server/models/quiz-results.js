/**
 * Author: Lea Trueworthy
 * Description: store data from employee quizzes
 */

const mongoose = require('mongoose');

let resultSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  result: String
})

module.exports = mongoose.model('result', resultSchema);
/*
const mongoose = require('mongoose');

let resultsSchema = mongoose.Schema({
  employeeId: String,
  quizId: String,
  q1: String,
  q2: String,
  q3: String,
  q4: String,
  q5: String,
  q6: String,
  q7: String,
  q8: String,
  q9: String,
  q10: String

});

module.exports = mongoose.model('Results', resultsSchema);*/