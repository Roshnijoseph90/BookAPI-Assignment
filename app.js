const express = require('express')
const path = require('path')
const booksRouter = require('./routers/booksRouter');
const app = express()

app.use('/books',booksRouter)
//console.log(booksRouter)
app.get('/',(req,res)=>{
    //res.send("from the server")
   
    res.sendFile(path.join(__dirname,"/index.html"))
})
app.listen(3000,()=>{
   
    console.log("server started....")
})