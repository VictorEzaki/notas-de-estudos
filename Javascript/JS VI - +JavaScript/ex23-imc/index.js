function calculateIMC(weight, height) {
    return new Promise((resolve, reject) => {
        if (typeof weight !== 'number' || typeof height !== 'number') {
            reject('arguments must be of type number')
        } else {
            resolve(weight / (height * height))
        }
    })
}

function showIMC(weight, height) {
    calculateIMC(weight, height).then((result) => {
        console.log(`O resultado do imc foi: ${result}`)

        if (result < 18.5) {
            console.log('Situação: Magreza')
        } else if(result < 25) {
            console.log('Situação: Normal')
        } else if(result < 30) {
            console.log('Situação: SobrePeso')
        } else if(result < 40) {
            console.log('Situação: Obesidade')
        } else {
            console.log('Situação: Obesidade Grave')
        }
    }).catch((erro) => {
        console.log(erro)
    })

    console.log('Calculando...')
}

showIMC(71, 1.75)
showIMC(71, 'err')
showIMC(121, 1.95)