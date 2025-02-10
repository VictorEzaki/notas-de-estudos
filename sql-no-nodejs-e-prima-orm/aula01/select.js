const pg = require('pg')

// Connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres"
})

async function selectPokemons() {
    await db.connect()

    const query = `
        SELECT * FROM "public". "pokemon";
    `
    const result = await db.query(query)
    console.table(result.rows)

    await db.end()
}

selectPokemons()