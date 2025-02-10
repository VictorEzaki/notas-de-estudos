const { Client } = require("pg");

const client = new Client({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres"
})

async function openConnection() {
    await client.connect()

    const result = await client.query("SELECT 1 + 1 AS resultado;")
    console.log(result.rows)

    setTimeout(() => {
        client.end()
        console.log("Fechando conexão...")
    }, 5000)
}

openConnection()