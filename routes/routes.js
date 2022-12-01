const express = require('express');
const router = express.Router()
const Model = require('../models/model');
require('dotenv').config();
module.exports = router;
const port = process.env.PORT || 3000;
let apiteststring = "localhost:"+port;
//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        key: req.body.key,
        attribute: req.body.attribute
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();

        //foreach document in the data array add a new property called "url_doc" that will be the url to the document eg: ./api/getOne/document["_id"]
        
        let new_data = [];
        
        data.map((document) => {
            //loop over all doc attributes 
            let new_document = {};
            //loop over the attributes of the document["_doc"]
            for (const [key, value] of Object.entries(document["_doc"])) {
                //if the attribute is the id then add a new attribute called url_doc as a clickable url
                if(key == "_id"){
                    new_document["url_doc"] = `./api/getOne/${value}`;
                }
                //add the attribute to the new_document
                new_document[key] = value;
            }
            //add the new_document to the new_data array
            new_data.push(new_document);
        });
        console.log(new_data);
        //prettify the data
        res.status(200).json(new_data);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})