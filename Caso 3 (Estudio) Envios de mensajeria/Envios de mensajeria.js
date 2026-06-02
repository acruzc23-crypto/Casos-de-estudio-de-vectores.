function Cargar() {
    let zona = ["Norte", "Sur", "Este", "Oeste", "Centro", "Noroeste", "Sureste"];
    let envios = [140, 140, 110, 125, 160, 190, 110];
    let total = 0;
    let promedio = 0;
    let superiorPromedio = 0;
    let servicioCritico = 0;
    let porcentajes = "";
    
    for (let i = 0; i < envios.length; i++) {
        total += envios[i];
    }

    promedio = total / envios.length;

    for (let i = 0; i < envios.length; i++) {
        if (envios[i] > promedio) {
            superiorPromedio++;
        }
        if (envios[i] < 100) {
            servicioCritico++;
        }

    let porcentaje = (envios[i] / total) * 100;
    porcentajes += zona[i] + ": " + porcentaje.toFixed(1) + "%\n";
    }

    document.getElementById("envios-superior").value ="Zonas superiores al promedio: " + superiorPromedio;
    document.getElementById("servicioCritico").value ="Zonas con servicio crítico: " + servicioCritico;
    document.getElementById("envios-porcentaje").value =porcentajes;
}
