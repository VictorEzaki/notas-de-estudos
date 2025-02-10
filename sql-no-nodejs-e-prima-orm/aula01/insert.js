const pg = require('pg')

// Connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
    connectionString: "postgresql://postgres:123456@localhost:5432/node_postgres"
})

async function insertPokemon() {
    await db.connect()

    // FORMA BÁSICA
    // const query = `
    //     INSERT INTO "public". "pokemon" (name, type) VALUES ('Sprigatito', 'Grass')
    // `
    // const result1 = await db.query(query)
    // console.log(result1)

    // Dados dinâmicos da FORMA ERRADA - PERMITE A INJENÇÂO DE QUERYS PELAS VARIÁVEIS
    // const name = "Fuecoco"
    // const type = "Fire"
    // const result2 = await db.query(`INSERT INTO "pokemon" (name, type) VALUES ('${name}', '${type}');`)
    // console.log(result2)

    // Dados dinâmicos da FORMA CORRETA
    const pokemon = {
        name: "Pikachu",
        type: "Eletric"
    }

    const result3 = await db.query(`INSERT INTO "pokemon" (name, type) VALUES ($1, $2);`,
        [pokemon.name, pokemon.type]
    )
    console.log(result3)

    await db.end()
}

insertPokemon()