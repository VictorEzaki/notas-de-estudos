const num = prompt("Digite o número que deseja saber a tabuada: ")
let tabuada = "Tabuada do " + num + ":\n" 


for (let i = 1 ; i <= 20 ; i ++) {
    tabuada += "\n" + num + " x " + i + " = " + num * i 
}

alert(tabuada)