const faker = require('faker');
const moment = require('moment');

const createFakeUsers = () => ({
  creationDate: moment(faker.date.past()).format('YYYY-MM-DD'),
  first_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  dateOfBirth: moment(faker.date.past()).format('YYYY-MM-DD'),
  amka: faker.datatype.number({ min: 1, max: 100 }),
  afm: faker.datatype.number({ min: 1, max: 100 }),
  role_id: faker.datatype.number({ min: 1, max: 2 }),
  profession_id: faker.datatype.number({ min: 1, max: 100 }),
});

exports.seed = async function (knex) {
  const fakeUsers = [];
  const desiredFakeUsers = 100;

  for (let i = 0; i < desiredFakeUsers; i += 1) {
    fakeUsers.push(createFakeUsers());
  }

   //await knex('a003_users').insert(fakeUsers);
};
