const Express = require('express')
const StartDb = require('./Db/database')
const App = Express()
const env = require('dotenv').config()
const Route = require('./Route/Route')
const cors = require('cors')
const Port = process.env.PORT 



StartDb()
App.use(cors())
App.use(Express.json())
App.use('/', Route); 
App.listen(Port,()=>{
    console.log(`Connected to the Port ${Port}`)
})