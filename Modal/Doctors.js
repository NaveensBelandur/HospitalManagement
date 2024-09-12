const Mongoose = require('mongoose');

const DoctorSchema = new Mongoose.Schema({
  name: {
    type: String,  
  },
  speciality: {
    type: String,
  }
});

const DoctorModel = Mongoose.model('Doctor', DoctorSchema);
module.exports = DoctorModel;