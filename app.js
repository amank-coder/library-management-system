 const http =require('http')
 const fs = require('fs')
//  const circle = require('./circle')
 const PORT=4000
// const Circle = require('./circle')
// const circle= new Circle()
// console.log(circle.circumference(5))

 const server= http.createServer((req,res)=>{
    if(req.url==='/about'){
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.readFile('./pages/test.html','utf8',(err,data)=>{
            if (err) throw err
            res.write(data)
            res.end()
        })
    }
    else if(req.url==='/write-file'){
        const data='<h1>This is test page</h1>'
        res.writeHead(200, {'Content-Type':'text/html'})
        for(let i=0;i<100;i++){
            fs.appendFile('pages/test.html',data, (err)=>{
                if(err) throw err
            })
            }
        res.write("File created with content")
        res.end()
        
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'})
        fs.readFile('./pages/404.html','utf8',(err,data)=>{
            if (err) throw err
            res.write(data)
            res.end()
        })
    }
 
    
 })

 console.log(`It's running at http://localhost:${PORT}`)
 server.listen(PORT)