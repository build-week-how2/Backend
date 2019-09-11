const db = require('../database/dbConfig.js')

module.exports = {
    find,
    findById,
    findMethods,
    add,
    update,
    remove
}

function find() {
    return db('howTos')
}

function findById(id) {
    return db('howTos')
        .where({id})
}

function findMethods(howto_id) {
    return db('methods as m')
        .join('howTos as h', 'h.id', 'm.howto_id')
        .select('m.id', 'h.howTo_name', 'm.description')
        .where({howto_id})
}

function add(howTo) {
    const [id] = db('howTos')
        .insert(howTo)
    
    return findById(id)
}

function update(id) {
    return db('howTos')
        .where({id})
        .update(id)
}

function remove(id) {
    return db('howTos')
        .where({id})
        .del()
}