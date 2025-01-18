// function Decorator() {
//     return function (target, key, descriptor) {
//         descriptor.value = function (value: number) {
//             console.log(`Calculando ${value} elevado ao quadrado`)
//             return value ** 2
//         }
//     }
// }

function Log() {
    return function (target, key, descriptor) {
        const originalMethod = descriptor.value

        descriptor.value = function (...args: any[]) {
            console.log('---------------------------------------')
            console.log(`Chamando o método ${key} com os parâmetros: ${JSON.stringify(args)}`)

            const result = originalMethod.apply(this, args)

            console.log(`O método ${key} retornou o valor: ${JSON.stringify(result)}`)
            console.log('---------------------------------------')
        }
    }
}

class Planet {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @Log()
    calculate(value: number) {
        // ...
        console.log(`Calculando ${value} por dois`)
        return value * 2;
    }

    @Log()
    invertName() {
        return this.name.split('').reverse().join('')
    }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)
console.log(`Resultado: ${result}`)
planet.invertName()