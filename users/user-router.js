const express = require('express');

const db = require('../database/dbConfig.js');
const Users = require('./user-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    const users = Users.find()
    .then (users => {
        res.json(users)
    })
    .catch(err => {
        res.status(500).json({message: 'Failed to get users'})
    })
})

module.exports = router