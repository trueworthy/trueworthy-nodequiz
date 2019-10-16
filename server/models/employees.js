/**
 * Author: Lea Trueworthy
 * Description: employee numbers allowed to sign in
 */

 const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
    employeeId: String,
    firstName: String,
    lastName: String
  });

module.exports = mongoose.model('Employee', employeeSchema);