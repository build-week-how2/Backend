const db = require("../database/dbConfig.js");

module.exports = {
  find,
  findById,
  findMethods,
  add,
  update,
  remove
};

function find() {
  return db("howTos");
}

function findById(id) {
  return db("howTos")
    .where({ id })
}

function findMethods(id) {
  return db("methods as m")
    .join("howTos as h", "h.id", "m.id")
    .select("m.id", "h.howTo_Name", "m.method_name", "m.Description")
    .where({howTo_id});
}

async function add(howTo) {
  const [id] = await db("howTos").insert(howTo);

  return findById(id);
}

function update(id, changes) {
  return db("howTos")
    .where({id})
    .update(changes);
}

function remove(id) {
  return db("howTos")
    .where({id})
    .del();
}
