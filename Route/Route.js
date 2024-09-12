const Express = require('express')
const Route = Express.Router()
const {Welcome,AddDoctor,AddPatientData,FindAlldoctor,FindPatientData,DeleteDoctor,DeletePatientData,Appoitment,GetAppoitment,DeleteAppoitment} = require('../Controller/Hospitalcontroller')


Route.get('/',Welcome)
Route.post('/AddDoctor',AddDoctor)
Route.get('/FindAllDoctor',FindAlldoctor)
Route.delete('/DeleteDoctor/:id',DeleteDoctor)
Route.post('/AddPatient',AddPatientData)
Route.get('/FindPatient',FindPatientData)
Route.delete('/DeletePatient/:id',DeletePatientData)
Route.post('/Appoitment',Appoitment)
Route.get('/Getappoitment',GetAppoitment)
Route.delete('/deleteAppoitment/:id',DeleteAppoitment)




module.exports = Route

