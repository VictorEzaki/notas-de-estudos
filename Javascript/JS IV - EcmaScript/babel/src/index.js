const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`A média aritimética é: ${average(5, 5, 5, 5, 5, 5)}`)

const weightedAverage = (...entries) => {
    const sum = entries.reduce((accum, { number, weight }) => accum + number * weight, 0);
    const sumWeight = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0);
    return sum / sumWeight
}

console.log(`A média ponderada é: ${ weightedAverage({number: 5, weight: 2}, {number: 5, weight: 4}, {number: 5, weight: 4}) }`)

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0) {
        return orderedNumbers[middle]
    }
    const firtMiddle = orderedNumbers[middle - 1]
    const secondMiddle = orderedNumbers[middle]
    return average(firtMiddle, secondMiddle)
}

console.log(`A mediana é: ${median(2, 3, 4, 5)}`)

const mode = (...numbers) => {
    // [ [n, qtd], [n, qtd], [n, qtd], ]
    const quantities = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])
    // console.log(quantities)
    quantities.sort((a, b) => b[1] - a[1])
    return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6)}`)