// SEÇÃO DE DECLARAÇÃO DE FUNÇÕES

function areaTriangulo() {
    const base = parseFloat(prompt("Digite o valor da base: "))
    const altura = parseFloat(prompt("Digite o valor da altura:"))
    const resultado = base * altura / 2
    return resultado 
}

function areaRetangulo() {
    const base = parseFloat(prompt("Digite o valor da base: "))
    const altura = parseFloat(prompt("Digite o valor da altura:"))
    const resultado = base * altura
    return resultado 
}

function areaQuadrado() {
    const lado = parseFloat(prompt("Digite o valor de qualquer lado: "))
    const resultado = lado * lado
    return resultado 
}

function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Digite o valor da base maior: "))
    const baseMenor = parseFloat(prompt("Digite o valor da base menor: "))
    const altura = parseFloat(prompt("Digite o valor da altura:"))
    const resultado = (baseMaior + baseMenor) * altura / 2
    return resultado 
}

function areaCirculo() {
    const pi = 3.14
    const raio = parseFloat(prompt("Digite o valor do raio: "))
    const resultado = pi * (raio * raio)
    return resultado
}

// -----------------------------------------------------------------------------------------

// Criando a função do menu
function menu() {
    const resultado = prompt(
        "Bem vindo à calculadora geométrica (EM METROS)\n\n" +
        "Escolha uma operação das abaixo: \n" +
        "1)Calcular área de um triângulo\n" +
        "2)Calcular área de um retângulo\n" +
        "3)Calcular área de quadrado\n" +
        "4)Calcular área de um trapézio\n" +
        "5)Calcular área de um círculo\n" +
        "6)Sair"
    )
    return resultado
}

// ------------------------------------------------

// Função principal 
function calculadora(){
    let opcao = ""
    let resultado = ""

    do {

        opcao = menu()

        switch (opcao) {
            case "1" :
                resultado = areaTriangulo()
                break
            
            case "2" :
                resultado = areaRetangulo()
                break

            case "3" :
                resultado = areaQuadrado()
                break
                
            case "4" :
                resultado = areaTrapezio()
                break

            case "5" :
                resultado = areaCirculo()
                break

            case "6" :
                resultado = 0
                alert("Encerrando...")
                break

            default :
                resultado = 0
                alert("Opção inválida!")
                break
            
        }

        if (resultado !== 0) {
            alert("Resultado: " + resultado + "m.")
        }

    } while (opcao !== "6");
}

// --------------------------------------------------------------------

// CHAMANDO A FUNÇÃO PRINCIPAL
calculadora()