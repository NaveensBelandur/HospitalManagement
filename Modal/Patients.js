const Mongoose = require('mongoose')

const PatientsSchema = new Mongoose.Schema({
    name:{
        type:String
    },
    age:{
        type:String
    },
    gender:{
        type:String,
        enum:['male','female'],
        default:'male'
    }
})





const Patient = new Mongoose.model('Patient',PatientsSchema)
module.exports = Patient