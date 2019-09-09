exports.seed = function(knex, Promise) {
  return knex("howTo_methods").insert([
    { howTo_id: 1, method_id: 1 },
    { howTo_id: 2, method_id: 2 }
  ]);
};
