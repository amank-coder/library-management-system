const express = require('express')

const path= require('path')
const router = express.Router()

const bookRouter= require('./book')
const authRouter = require('./auth')

// router.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname+'/../pages/home.html'))
// })
router.get("/", (req,res)=>{
    res.render("index.pug", {name:"Aman"})
})

router.post("/", (req,res)=>{
    res.json({data:"Hello World from post"})
})

router.use(bookRouter)

router.use(authRouter)


router.all("/*",(req, res)=>{
    res.sendFile(path.join(__dirname+'/../pages/404.html'))
})

module.exports = router
