const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect('mongodb://0.0.0.0:27017/book_mgmt')
}

module.exports = connectDB



// const {MongoClient} = require('mongodb')

// const url ='mongodb://0.0.0.0:27017'
// const client = new MongoClient(url)

// const dbName= 'book_mgmt'
// async function connect(){
//     await client.connect()
//     const db = client.db(dbName)
//     return db
// }

// module.exports= connect
