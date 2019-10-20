const mongoose = require('mongoose');

let summarySchema = mongoose.Schema({
  employeeId: String,
      quizId: String,
      quizName: String,
      dateTaken:String,
      score: String

});
{collection: 'Summary'}

module.exports = mongoose.model('Summary', summarySchema);