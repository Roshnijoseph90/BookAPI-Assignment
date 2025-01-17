const express = require('express')
const router = express.Router()
const books = require('../books')
//Localhosst:3000/products

router.get('/',(req,res)=>{
  // res.send("inside product")
  try{
   res.status(200).json(books)

  }catch(error){
    res.status(404).json({error:"Book not found"})

  }
})
// Get product by id
router.get('/:id',(req,res)=>{
   try{
       const bookID = parseInt(req.params.id)
       
       const book = books.find(book=>book.id === bookID)
       if(!book){
         res.status(404).json({error:"Books not found"})
       }
       res.status(200).json(book)

   }catch(error){
      res.status(404).json({error:error.message})

   }
})


module.exports = router