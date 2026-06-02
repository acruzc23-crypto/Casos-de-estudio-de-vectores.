function cargarVector(dimension){
    let vector = [];

    for(let i = 0; i < dimension; i++){
        vector[i] = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
    }
    return vector
}

function Cargar(){
    let zonas = ["Norte", "Sur", "Este", "Oeste", "Centro", "Noroeste", "Sureste"];
    let envios = cargarVector(zonas.length);
    let total = 0;
    let criticas = 0;

    for(let i = 0; i < envios.length; i++){
        total += envios[i];
    }

    let promedio = total / envios.length;
    let superior = 0;
    let porcentajes = "";

    for(let i = 0; i < envios.length; i++){
        if(envios[i] > promedio){
            superior++
        }
        if(envios[i] < 100){
            criticas++;
        }

        let porcentaje = (envios[i] / total) * 100;
        porcentajes += zonas[i] + ":" + porcentaje.toFixed(1) + "%\n";
    }
    document.getElementById("envios-superior").value ="Zonas superiores al promedio: " + superior;
    document.getElementById("servicioCritico").value ="Zonas con servicio crítico: " + criticas;
    document.getElementById("envios-porcentaje").value = porcentajes;
}
