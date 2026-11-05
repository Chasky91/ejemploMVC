import mysql from 'mysql2/promise'

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'VIDEO_JUEGO',
  password: 'root',
  port: '5306',
  waitForConnections: true,
  connectionLimit: 5,
  maxIdle: 5, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

export default pool