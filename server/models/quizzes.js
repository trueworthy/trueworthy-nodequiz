/**
 * Author: Lea Trueworthy
 * Description: quizzes
 */

const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  quizResults: Number,
});

module.exports = mongoose.model('Quiz', quizSchema);