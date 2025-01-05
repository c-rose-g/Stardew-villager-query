module.exports = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8000,
  // dbFile: process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.DB_FILE
  dbFile: process.env.DB_FILE,
};
