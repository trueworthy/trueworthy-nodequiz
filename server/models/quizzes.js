/**
 * Author: Lea Trueworthy
 * Description: quizzes
 */

 const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizName: String,
  quizDescription: String,
  questions: [
    {
      id: Number,
      text: String,
      answers: [
        {
          id: Number,
          answerText: { type: String },
          isCorrect: { type: Boolean }
        }

      ]
    }
  ]
}
)

module.exports = mongoose.model('Quiz', quizSchema);