const express = require('express');

const db = require('../database/dbConfig.js');
const Users = require('./user-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await Users.find()
        res.json(users)
    } catch(err) {
        res.status(500).json({message: 'Failed to to get users'})
    }
})