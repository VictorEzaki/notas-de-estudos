let pessoa = {
    nome: "Victor",
    idade: 21,
    dizerOla() {
        console.log("Olá, Mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()