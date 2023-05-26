// const EventEmitter = require("events")
// const myEvent = new EventEmitter()

// myEvent.on("test-event", (data)=>{
//     console.log("This event is listening.")
//     console.log(data)
// })


const express= require('express')
const app = express()
const bodyParser =require('body-parser')

const port =3001

const routes= require('./routes/index.js')
const connectDB= require('./database/db')

app.set("view engine","pug")

app.use(bodyParser.json())
app.use(routes)

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server is running at http://localhost:${port}`)
    })
})



