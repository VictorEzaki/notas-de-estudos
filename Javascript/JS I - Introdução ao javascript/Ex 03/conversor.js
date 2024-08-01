let medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
let resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))

let medidaConvertida = undefined
let confirmacao = "s"

while (confirmacao === "s"){
    switch (resultado) {
       
        case 1 :
        medidaConvertida = medida * 1000
        alert(medida + "m convertido para milímetro fica = " + medidaConvertida + "mm")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
       
        case 2 :
        medidaConvertida = medida * 100
        alert(medida + "m convertido para centímetros fica = " + medidaConvertida + "cm")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
        
        case 3 : 
        medidaConvertida = medida * 10
        alert(medida + "m convertido para decímetro fica = " + medidaConvertida + "dm")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
      
        case 4 :
        medidaConvertida = medida * 0.1
        alert(medida + "m convertido para decâmetro fica = " + medidaConvertida + "dam")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
        
        case 5:
        medidaConvertida = medida * 0.01
        alert(medida + "m convertido para hectômetro fica = " + medidaConvertida + "hm")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
       
        case 6 :
        medidaConvertida = medida / 1000
        alert(medida + "m convertido para quilêmtros fica = " + medidaConvertida + "km")
        confirmacao = prompt("Deseja realizar outra conversão? (s/n)")
        if (confirmacao === "n"){
            break
        }
        medida = parseFloat(prompt("Diga a medida em metros que você deseja converter"))
        resultado = parseFloat(prompt("Escolha para qual medida deseja converter: \n\n 1)Milímetro (mm)\n 2)Centímetro (cm)\n 3)Decímetro (dm)\n 4)Decâmetro (dam)\n 5)Hectômetro (hm)\n 6)Quilômetro (km)"))
        break
        default :
        alert("Opção inválida!")
        confirmacao = "n"

    }
}   