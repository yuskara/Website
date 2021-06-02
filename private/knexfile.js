require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: './private/DB/migrations',
    },
    seeds: {
      directory: './private/DB/seeds/dev',
    },
  production: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      migrations: {
        directory: './private/DB/migrations',
      },
      seeds: {
        directory: './private/DB/seeds/dev',
      },
    },
      useNullAsDefault: true,
  },
};
