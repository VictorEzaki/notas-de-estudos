function dobro(x) {
    alert("O dobro de " + x + " é " + (x*2) + ".")
}

// dobro(4)


function ola(nome) {
    alert("Olá, " + nome + "!")
}

// ola("Victor")


function soma(x, y) {
    alert("A soma entre " + x + " e " + y + " é " + (x + y))
}

soma(10, 15)

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último
function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        nome, // => mesma coisa que escrever (nome: nome,) pode-se abreviar quando as propriedades são iguais
        email,
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Victor", "victor@gmail.com", "1234")

// tomar cuidado com a ordem das propriedades, principalmente quando se usa um valor opcional(que deve ser colocado sempre no final)
function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
  }

novoUsuario("Isaac", "isaac@email.com", "1234")



// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto

function parametrosDoJeitoErrado(nome, email, dataDeNascimento, endereco, escolaridade, estadoCivil, tipo) {
    // ....
}

function parametrosDoJeitoCerto(usuario) {

    usuario.nome,
    usuario.email
    // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("Victor", "victor@outlook.com", "19/03/2003", "...") // Jeito errado de chamar

const dadosUsuario = {
    nome: "",
    email: "",
    dataDeNascimento: "",
    endereco: "",
    escolaridade: "",
    estadoCivil: "",
    tipo: ""
}

parametrosDoJeitoCerto(dadosUsuario)

console.log(dadosUsuario)