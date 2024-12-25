async function calculateIMC(weight, height) {
    if (typeof weight !== 'number' || typeof height !== 'number') {
        return Promise.reject('arguments must be of type number')
    }
    return weight / (height * height)
}

async function showIMC(weight, height) {
    try {
        console.log(`Calculando o IMC para peso ${weight} e altura ${height}`)

        const result = await calculateIMC(weight, height)
        console.log(`O resultado do imc foi: ${result}`)
        if (result < 18.5) {
            console.log('Situação: Magreza')
        } else if (result < 25) {
            console.log('Situação: Normal')
        } else if (result < 30) {
            console.log('Situação: SobrePeso')
        } else if (result < 40) {
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade Grave')
        }
    } catch (error) {
        console.log(error)
    }
}

showIMC(71, 1.75)
showIMC(71, 'err')
showIMC(121, 1.95)