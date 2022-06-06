const express = require('express')
const router = express.Router()

const Cat = require('../models/cat.model')

// Endpoints

router.get('/getAllCats', (req, res) => {

    Cat.find()
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.get('/getOneCat/:cat_id', (req, res) => {

    const id = req.params.cat_id

    Cat.findById(id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.post('/newCat', (req, res) => {

    Cat.create(req.body)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error))
})

router.put('/editCat/:cat_id', (req, res) => {
    const id= req.params.cat_id
    Cat.findByIdAndUpdate(id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.delete('/:cat_id/delete', (req, res) => {

    const id = req.params.cat_id

    Cat.findByIdAndDelete(id) 
        .then(response => res.jason(response))
        .catch(error => res.status(500).json(error))

})


module.exports = router
