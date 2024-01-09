const config = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    host: 'localhost',
    dialect: 'postgres'
  }
}

module.exports = config