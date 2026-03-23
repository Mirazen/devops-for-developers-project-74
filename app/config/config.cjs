require('dotenv').config();

const postgresConfig = {
  dialect: 'postgres',
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT || 5432,
};

const sqliteConfig = (path) => ({
  dialect: 'sqlite',
  storage: path,
});

module.exports = {
  // Если DATABASE_HOST есть, используем Postgres, иначе SQLite
  development: process.env.DATABASE_HOST ? postgresConfig : sqliteConfig('./database.sqlite'),
  test: process.env.DATABASE_HOST ? postgresConfig : sqliteConfig('./database.test.sqlite'),
  production: postgresConfig,
};