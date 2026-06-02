function Cargar (){
    let especialidades = ["Ortodoncia", "Periodoncia", "Endodoncia", "Estética dental", "Implantes", "Urgencias", "Limpieza"];
    let citas = [85, 102, 98, 180, 98, 175, 150];
    let total = 0
    let criticas = 0

for( let i = 0; i < citas.length; i++){
    total += citas [i]
}
let promedio = total/citas.length;
let superior = 0;
let porcentajes = "";

for(let i = 0; i < citas.length; i++){
    if (citas[i]>promedio){
        superior++;
    }
    if(citas[i]<100){
        criticas++;
    }
    let porcentaje = (citas[i]/total) * 100;
    porcentajes += especialidades[i] + ":" + porcentaje.toFixed(1) + "%\n";
}
document.getElementById("superiorPromedio").value = superior;
document.getElementById("criticasCitas").value = criticas;
document.getElementById("porcentaje").value = porcentajes;
} 
