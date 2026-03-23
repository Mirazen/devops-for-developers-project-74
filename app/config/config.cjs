require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';
// Проверяем, задан ли хост базы данных (в Докере он будет 'db')
const usePostgres = process.env.DATABASE_HOST || isProduction;

const postgresConfig = {
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'postgres',
  host: process.env.DATABASE_HOST || 'db',
  port: process.env.DATABASE_PORT || 5432,
  dialect: 'postgres',
};

const sqliteConfig = (storage) => ({
  dialect: 'sqlite',
  storage,
});

module.exports = {
  // Если DATABASE_HOST не задан — используем SQLite (для тестов Хекслета на хосте)
  development: usePostgres ? postgresConfig : sqliteConfig('./database.sqlite'),
  test: usePostgres ? postgresConfig : sqliteConfig('./database.test.sqlite'),
  production: postgresConfig,
};