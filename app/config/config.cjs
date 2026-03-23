require('dotenv').config();

// Если DATABASE_HOST не задан, значит мы не в Docker-окружении, используем sqlite
const dialect = process.env.DATABASE_HOST ? 'postgres' : 'sqlite';

const config = {
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'postgres',
  host: process.env.DATABASE_HOST, // Здесь НЕ ставим значение по умолчанию 'db'
  port: process.env.DATABASE_PORT || 5432,
  dialect: dialect,
  storage: dialect === 'sqlite' ? './database.sqlite' : undefined,
};

module.exports = {
  development: config,
  test: {
    ...config,
    storage: dialect === 'sqlite' ? './database.test.sqlite' : undefined,
  },
  production: {
    ...config,
    dialect: 'postgres', // В продакшене всегда Postgres
  },
};