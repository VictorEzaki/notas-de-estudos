let point: [number, number]

point = [2, 5]

// As tuplas devem respeitar o número de valores definidos na sua declaração.
// Neste array como definimos que ele irá receber somente dois números, só pode ser atribuído dois valores do tipo number à ele.

let otherPoint: [number, string, boolean]

otherPoint = [1, 'name', true]

// O typeScript nos permite usar tipos diferentes em um único array, desde que sua regra seja obedecidade na atribuição.