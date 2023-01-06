module.exports = {
    development: {
        client: 'mysql',
        connection: {
          host: process.env.DATABASE_HOST,
          port: process.env.DATABASE_PORT,
          user: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME
      },
        migrations: {
            directory: __dirname +'/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds/production',
          },
      },
  };

// var environment = process.env.NODE_ENV || 'development';
// var config = options[environment];
//module.exports = require('knex')(config);