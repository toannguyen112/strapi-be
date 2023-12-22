const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  console.log(process.env.NODE_ENV);
  console.log(host);
  console.log(port);
  console.log(database);
  console.log(user);
  console.log(password);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host,
        port,
        database,
        user,
        password,
        ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : { rejectUnauthorized: true } 
      },
      debug: false,
    }
  }
};
