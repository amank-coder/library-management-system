// const connect = require('./../database/db')
const ObjectId  = require('mongodb').ObjectId
const Book = require('../model/bookModel')

exports.index= async(req, res) => {
        
        // const db= await connect()
        // const books= await db.collection('book').find().toArray()
        const books= await Book.find()
        res.json(books)

    }

exports.store = async(req, res, next) => {

    try{
        await Book.create(req.body)
    // const db =await connect()
    // let data = {
    //     title: "Power of Consistency",
    //     author: "unknown"
    // }
    // await db.collection('book').insertOne(req.body)
    res.status(201).json({data:"Book is stored"})    
    }catch(error){
        res.json(error.errors)
    }
    
}

exports.show= async(req, res) => {
    const o_id = new ObjectId(req.params.id)
    const book = await Book.find({_id:o_id})
    // const db =await connect()
    // const book = await db.collection('book').find({_id:o_id}).toArray()
    res.json(book)
}

exports.update = async(req, res) => {
    const o_id = new ObjectId(req.params.id)
    await Book.updateOne({_id:o_id}, {$set: req.body})
    // const db =await connect()
    // await db.collection("book").updateOne({_id:o_id}, {$set: req.body})
    res.json({data:"book is updated"})
}

exports.delete= async(req, res) => {
    const o_id = new ObjectId(req.params.id)
    await Book.deleteOne({_id:o_id})
    // const db =await connect()
    // await db.collection("book").deleteOne({_id:o_id}, {$set: req.body})
    res.status(204).json()
}

