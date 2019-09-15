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
    .first();
}

function findMethods(id) {
  return db("methods as m")
    .join("howTos as h", "h.id", "m.id")
    .select("m.id", "h.howTo_Name", "m.method_name", "m.Description")
    .where("h.id", id);
}

async function add(howTo) {
  const [id] = await db("howTos").insert(howTo, "id");
  return findById(id);
}

function update(id, changes) {
  return db("howTos")
    .where("id", id)
    .update(changes);
}

function remove(id) {
  return db("howTos")
    .where("id", id)
    .del();
}
