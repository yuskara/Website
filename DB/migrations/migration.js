require('dotenv').config();

exports.up = function(knex, Promise){
  return knex.schema
  .createTable('users', table =>{
    table.increments('id');
    table.varchar('name', 45).notNullable();
    table.integer('userTypeId').references('id').inTable('userTypes'); // Foreign Key example
  })
  .createTable('userTypes', table =>{
    table.increments('id');
    table.varchar('name', 45).notNullable();
  })
  .createTable('purchases', table =>{
    table.increments('id');
    table.date('creationDate').notNullable();
    table.integer('intNumber').notNullable(); // 52, 12, 65
    table.float('floatNumber').notNullable(); // 12.56 , 8.90
  })
};

exports.down = function(knex, Promise){
  return knex.schema
          .dropTable('userTypes')
          .dropTable('users')
};
