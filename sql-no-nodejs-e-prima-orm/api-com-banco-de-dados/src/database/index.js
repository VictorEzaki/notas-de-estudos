const { Pool } = require('pg')

const pool = new Pool({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres"
})

async function query(queryString, params, callback) {
    return pool.query(queryString, params, callback)
}

async function getClient() {
    return pool.connect()
}

module.exports = { query, getClient }