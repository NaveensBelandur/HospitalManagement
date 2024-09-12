const Mongoosee = require('mongoose')

const StartDb = async () =>{
  try{
     const Connect = await Mongoosee.connect(`mongodb+srv://Naveen:${process.env.DATABASE_PWD}@cluster0.rrtnxw8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
     if(!Connect) {
        console.log('Error in Connection the DataBase',Connect.err)
     }
     return console.log('Connected to the DataBase')
  }
  catch(err){
    throw new Error(err)
  }
}





module.exports = StartDb