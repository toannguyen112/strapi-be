const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  console.log(process.env.NODE_ENV);
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
      },
      debug: false,
    },
  }
};
