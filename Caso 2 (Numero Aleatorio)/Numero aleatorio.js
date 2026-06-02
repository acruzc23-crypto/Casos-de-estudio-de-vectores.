function cargarVector(dimension){
    let vector = [];
    for(let i = 0; i < dimension; i++){
        vector[i] = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    }
    return vector;
}

function Cargar(){
    let especialidades = ["Ortodoncia", "Periodoncia", "Endodoncia", "Estética dental", "Implantes", "Urgencias", "Limpieza"];
    let citas = cargarVector(7);
    let total = 0;
    let criticas = 0;
    
    for(let i = 0; i < citas.length; i++){
        total += citas[i];
    }

    let promedio = total / citas.length;
    let superior = 0;
    let porcentajes = "";

    for(let i = 0; i < citas.length; i++){
        if(citas[i] > promedio){
            superior++;
        }
        if(citas[i] < 100){
            criticas++;
        }
        let porcentaje = (citas[i] / total) * 100;
        porcentajes += especialidades[i] + ":" + porcentaje.toFixed(1) + "%\n";
    }
    document.getElementById("superiorPromedio").value = superior;
    document.getElementById("criticasCitas").value = criticas;
    document.getElementById("porcentaje").value = porcentajes;
}
