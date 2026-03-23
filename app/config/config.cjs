require('dotenv').config();

// Проверяем, задан ли хост. Если нет — мы на хосте, используем SQLite
const usePostgres = Boolean(process.env.DATABASE_HOST);

const postgresConfig = {
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'postgres',
  host: process.env.DATABASE_HOST, // Здесь НЕ ставим 'db' по умолчанию!
  port: process.env.DATABASE_PORT || 5432,
  dialect: 'postgres',
};

const sqliteConfig = (storage) => ({
  dialect: 'sqlite',
  storage,
});

module.exports = {
  development: usePostgres ? postgresConfig : sqliteConfig('./database.sqlite'),
  test: usePostgres ? postgresConfig : sqliteConfig('./database.test.sqlite'),
  production: postgresConfig,
};