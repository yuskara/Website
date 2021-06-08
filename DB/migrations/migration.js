require('dotenv').config();

exports.up = function(knex, Promise){
  return knex.schema
  .createTable('userTypes', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('fullName', 100).notNullable();
    table.varchar('userType', 100).notNullable();
    table.varchar('description', 100).notNullable();
  })
  .createTable('cvTemplates', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('cvType', 100).notNullable();
  })
  .createTable('languages', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('langauge', 100).notNullable();
  })
  .createTable('professions', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('profession', 100).notNullable();
  })
  .createTable('genders', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('fullName', 100).notNullable();
    table.varchar('gender', 45).notNullable();
  })
  .createTable('subscriptions', table => {
    table.increments('id');
    table.date('subscriptionDate', 45).notNullable();
    // table.varchar('fullName').notNullable();
    table.varchar('subscribe', 100).notNullable();
    table.integer('cvTemplateId').references('id').inTable('cvTemplates'); 
  })
  .createTable('countries', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('countryName', 100).notNullable();
    // table.varchar('continent').notNullable();
    // table.integer('cityId').references('id').inTable('cities');
    // table.integer('stateId').references('id').inTable('states');
  })
  .createTable('states', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('state', 100).notNullable();
    // table.integer('cityId').references('id').inTable('cities');
    table.integer('countryId').references('id').inTable('countries');
  })
  .createTable('cities', table => {
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('cityName', 100).notNullable();
    table.integer('stateId').references('id').inTable('states');
    // table.integer('countryId').references('id').inTable('countries');
  })
  .createTable('users', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('firstName', 100).notNullable();
    table.varchar('lastName', 100).notNullable();
    table.varchar('email', 100).notNullable();
    table.varchar('password', 100).notNullable();
    table.date('dateOfBirth', 100).notNullable();
    table.varchar('lookingJobAt', 100).notNullable();
    table.integer('userTypeId').references('id').inTable('userTypes'); // Foreign Key example
    // table.integer('countryId').references('id').inTable('countries'); 
    table.integer('languageId').references('id').inTable('languages'); 
    table.integer('professionId').references('id').inTable('professions'); 
    table.integer('cityId').references('id').inTable('cities'); 
    // table.integer('stateId').references('id').inTable('states'); 
    table.integer('subscriptionId').references('id').inTable('subscriptions'); 
    table.integer('genderId').references('id').inTable('genders'); 
  })
  .createTable('purchases', table =>{
    table.increments('id');
    table.date('creationDate', 45).notNullable();
    table.varchar('fullName', 100).notNullable();
    table.varchar('cvType', 100).notNullable();
    table.float('amount', 45).notNullable(); 
    table.integer('userId').references('id').inTable('users'); 
    table.integer('cvTemplateId').references('id').inTable('cvTemplates'); 
    // table.integer('countryId').references('id').inTable('countries'); 
    // table.integer('cityId').references('id').inTable('cities'); 
    // table.integer('stateId').references('id').inTable('states');
    // table.integer('languageId').references('id').inTable('languages'); 
    // table.integer('professionId').references('id').inTable('professions'); 
    table.integer('intNumber').notNullable(); // 52, 12, 65
    table.float('floatNumber').notNullable(); // 12.56 , 8.90
  })
};

exports.down = function(knex, Promise){
  return knex.schema
  .dropTable('users')
  .dropTable('userTypes')
  .dropTable('purchases')
  .dropTable('cvTemplates')
  .dropTable('countries')
  .dropTable('languages')
  .dropTable('professions')
  .dropTable('cities')
  .dropTable('states')
  .dropTable('subscriptions')
  .dropTable('genders')
};
