const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findById,
    findMethods,
    // add,
    // update,
    // remove
}

function find() {
    return db('howTos')
}

function findById(id) {
    return db('howTos')
        .where({id})
}

function findMethods(howto_id) {
    return db()
}
