const mongoosee = require('mongoose')

const Appoint = new mongoosee.Schema({
    patientName:{
        type:String
    },
    doctorName:{
        type:String
    },
    description:{
        type:String
    },
    date:{
        type:String,
    }
})

const Appointment = new mongoosee.model('appoint',Appoint)
module.exports = Appointment