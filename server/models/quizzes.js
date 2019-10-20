/**
 * Author: Lea Trueworthy
 * Description: quizzes
 */

const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  score: Number,
  results: Number,
  cumulativeScore: String

});

module.exports = mongoose.model('Quiz', quizSchema);
