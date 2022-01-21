const express = require('express');
const BookDatabase = require('../models/book');
const router = express.Router();

//welcome message
router.get('/', (req, res) => {
    let result = {"result": "Welcome to bookstore api"};
    res.send(result);
});

router.get('/book', (req, res)=>{
    let result = {"result": "Welcome to book store api"};
    res.send(result);
});

// gets all the books from the store
router.get('/book/all', async (req, res) => {
    try{
        const tasks = await BookDatabase.find({});
        if(!tasks){
            return res.send({"result":"no book found"});
        }
        res.status(201).send({"result": tasks});
    }catch(e){
        res.status(500).send();
    }
});

router.get('/book/:id', async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try{
        const book = await BookDatabase.findById(_id).exec();
        if(!book){
            return res.status(404).send({"result":"Book not found"});
        }
        res.send({book});
    }
    catch(e){
        console.log(e);
        res.status(500).send({"error":"server side error"});
    }
});

//creates a new book in the bookstore
router.post('/book/new', async (req, res) => {
    const book = BookDatabase(req.body);
    //console.log(req.body);
    try{
        await book.save();
        res.status(201).send({book});
    }
    catch(e){
        res.status(500).send(e);
    }
});

//updates the book with the given id
router.put('/book/:id', async (req, res) => {
    const _id = req.params.id;
    const updates = req.body;
    console.log(_id);
    console.log(updates);
    try{
        const updatedDoc = await BookDatabase.updateOne({_id}, updates);
        //console.log(updatedDoc);
        res.status(201).send({updatedDoc});
    }
    catch(e){
        res.status(501).send();
        console.log(e);
    }
});

//deletes a book with the given id
router.delete('/book/:id', async (req, res) => {
    const _id = req.params.id;

    try{
        const deletedDoc = await BookDatabase.findByIdAndRemove(_id);
        res.status(201).send({deletedDoc});
    }catch(e){
        console.log(e);
        res.status(501).send();
    }
});

module.exports = router;
