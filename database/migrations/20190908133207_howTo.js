exports.up = function(knex) {
  return knex.schema
    .createTable("howTos", tbl => {
      tbl.increments();
      tbl.text("howTo_name", 128).notNullable;
      tbl.text("description").notNullable;
    })

    .createTable("methods", tbl => {
      tbl.increments();
      tbl
        .text("method_name")
        .unique()
        .notNullable();
      tbl.text("description");
    })
    .createTable("howTo_methods", tbl => {
      tbl
        .integer("howTo_id")
        .unsigned()
        .notNullable()
        .references("howTos.id");
      tbl
        .integer("method_id")
        .unsigned()
        .notNullable()
        .references("methods.id");
      tbl.primary(["howTo_id", "method_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("howTo_methods")
    .dropTableIfExists("methods")
    .dropTableIfExists("howTos");
};
