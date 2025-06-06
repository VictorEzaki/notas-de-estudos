const { Pool } = require("pg");

const pool = new Pool({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres",
    max: 2
})

async function queryRapida() {
    const result = await pool.query("SELECT 1 + 1 AS soma;")
    console.log(result.rows[0])

    setTimeout(() => {
        console.log('Fechando conexão...')
    }, 2000)
}

queryRapida()
queryRapida()
queryRapida()
queryRapida()