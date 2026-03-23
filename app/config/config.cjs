const fs = require('fs');
require('dotenv').config();

// Проверяем, запущены ли мы в Docker
const isDocker = fs.existsSync('/.dockerenv');

const postgresConfig = {
  dialect: 'postgres',
  database: process.env.DATABASE_NAME || 'postgres',
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  host: process.env.DATABASE_HOST || 'db',
  port: process.env.DATABASE_PORT || 5432,
};

const sqliteConfig = (storage) => ({
  dialect: 'sqlite',
  storage,
});

module.exports = {
  // Если в докере — Postgres, если на хосте — SQLite
  development: isDocker ? postgresConfig : sqliteConfig('./database.sqlite'),
  test: isDocker ? postgresConfig : sqliteConfig('./database.test.sqlite'),
  production: postgresConfig,
};