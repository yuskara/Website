require('dotenv').config();

exports.up = function(knex, Promise){
  return knex.schema
  .createTable('users', table =>{
    table.increments('id');
    table.varchar('name', 45).notNullable();
  })
  .createTable('userTypes', table =>{
    table.increments('id');
    table.varchar('name', 45).notNullable();
  })
};

exports.down = function(knex, Promise){
  return knex.schema
          .dropTable('userTypes')
          .dropTable('users')
};
