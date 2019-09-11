const express = require('express');

const db = require('../database/dbConfig.js');
const HowTos = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    const howTos = HowTos.find()
    .then (howTos => {
        res.json(howTos)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get users'})
    })
})

router.get('/:id', (req, res) => {
    const [id] = req.params
    const howTo = HowTos.findById(id);

    .then(howTo => {
        const howTo = howTos[0];

        if(howTo) {
            res.json(howTo)
        } else {
            res.status(404).json({message: 'Could not find How To guide with that id'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get How To guide'})
    })
})



module.exports = router