const db = require("../database/dbConfig");

module.exports = {
  find,
  add,
  findBy,
  findById
};

function find() {
  return db("howTos").select("id", "username", "password");
}

function findById(id) {
  return db("howTos")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("howTos").where(filter);
}

async function add(howTo) {
  const [id] = await db("howTos").insert(howTo);

  return findById(id);
}
