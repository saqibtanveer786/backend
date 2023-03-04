const mongoose = require('mongoose')
 
// const server = '127.0.0.1:27017'
// const database = 'Test'

const connectToMongo = async()=>{
   await mongoose.connect(`mongodb+srv://saqibtanveer:132547698@mynotesdb.1mmegyr.mongodb.net/test`|| `mongodb//localhost/test`)
   console.log('connected to mongo db Atlas')
}
module.exports = connectToMongo