function calcular(){
let ventas = [120, 95, 140, 170, 210, 130, 105]
let categorias = ["Arroz","Azúcar", "Leche", "Aceite", "Pan", "Bebidas", "Galletas"]
let total = 0
let criticas = 0

for(
    let i = 0; i < ventas.length; i++){
    total += ventas [i]
}
let promedio = total/ventas.length
let superior = 0
let porcentajes = ""
for(
    let i = 0; i < ventas.length; i++ 
){
    

    if(ventas[i] > promedio){
        superior++
    }
    
    if(ventas[i] < 100
    ){
        criticas++
    }

let porcentaje = (ventas[i]/total) * 100
porcentajes += categorias[i] + ":" + porcentaje.toFixed(1) + "%\n" 
}

document.getElementById("Promedio-superior").value = superior
document.getElementById("ventas-criticas").value = criticas
document.getElementById("porcentajes").value = porcentajes
}
