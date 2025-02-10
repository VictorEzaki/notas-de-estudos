const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
    max: 2
})

async function openConnection() {
    const client = await pool.connect()

    const result = await client.query("Select 1 + 1 AS soma;")
    console.log(result.rows)

    setTimeout(() => {
        client.release()
        console.log('Fechando conexão...')
    }, 5000)
}

openConnection()
openConnection()
openConnection()