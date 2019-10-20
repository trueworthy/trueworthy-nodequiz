/**
 * Author: Lea Trueworthy
 * Description: store data from employee quizzes
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let QuizResultSchema = new Schema({
  employeeId: { type: String },
  quizId: { type: String },
  date: { type: String },
  score: { type: String },
  result: { type: String }
});
{collection: 'results'};

module.exports = mongoose.model("QuizResult", QuizResultSchema);
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