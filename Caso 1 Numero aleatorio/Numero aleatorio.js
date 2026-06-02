function cargarVector(dimension){
    let vector = [];
    for(let i = 0; i < dimension; i++){
        vector[i] = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
    }
    return vector;
}
function calcular(){
    let categorias = ["Arroz", "Azúcar", "Leche", "Aceite", "Pan", "Bebidas", "Galletas"];
    let ventas = cargarVector(categorias.length);
    let total = 0;
    let criticas = 0;

    for(let i = 0; i< ventas.length; i++){
        total += ventas[i];
    }

    let promedio = total / ventas.length;
    let superior = 0;
    let porcentajes = "";

    for(let i = 0; i< ventas.length; i++){
        if (ventas[i] > promedio){
            superior++
        }

        if (ventas[i] < 100){
            criticas++;
        }
        let porcentaje = (ventas[i] / total) * 100;

        porcentajes += categorias[i] + ":" + porcentaje.toFixed(1) + "%\n";
    }
    document.getElementById("Promedio-superior").value = "Categorías superiores al promedio:" + superior;
    document.getElementById("ventas-criticas").value = "Categoría crítica:" + criticas;
    document.getElementById("porcentajes").value = porcentajes;
}
