const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  try {
    await knex.truncate("howTo_methods");
    await knex.truncate("methods");
    await knex.truncate("howTos");
  } catch (err) {
    console.log(err);
  }
};
