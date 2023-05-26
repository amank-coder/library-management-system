const {Schema, mongoose} = require('mongoose')

const BookSchema = new Schema({
    title:{
       type: String,
       required:true,
    },
    author:{
        type: String,
        required:true,
     }
})

module.exports = mongoose.model('Book', BookSchema, 'book') //book is collection name