const db = require('../database/dbConfig.js')

module.exports = {
    find,
    // findById,
    // findMethods,
    // add,
    // update,
    // remove
}

function find() {
    return db('users')
}