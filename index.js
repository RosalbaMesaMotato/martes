let totalNiños = 0, totalJovenes = 0, totalAdultos = 0, totalViejos = 0;
let pesoNiños = 0, pesoJovenes = 0, pesoAdultos = 0, pesoViejos = 0;
let contadorPersonas = 1;

do {
    let edad = parseInt(prompt(`Ingrese la edad de la persona ${contadorPersonas}:`));
    let peso = parseFloat(prompt(`Ingrese el peso de la persona ${contadorPersonas} (en kg):`));

    if (edad >= 0 && edad <= 12) {
        totalNiños++;
        pesoNiños += peso;
    } else if (edad >= 13 && edad <= 29) {
        totalJovenes++;
        pesoJovenes += peso;
    } else if (edad >= 30 && edad <= 59) {
        totalAdultos++;
        pesoAdultos += peso;
    } else if (edad >= 60) {
        totalViejos++;
        pesoViejos += peso;
    } else {
        console.log("Edad ingresada no válida.");
    }

    contadorPersonas++;

} while (contadorPersonas <= 50);

let promedioNiños = (totalNiños > 0) ? pesoNiños / totalNiños : 0;
let promedioJovenes = (totalJovenes > 0) ? pesoJovenes / totalJovenes : 0;
let promedioAdultos = (totalAdultos > 0) ? pesoAdultos / totalAdultos : 0;
let promedioViejos = (totalViejos > 0) ? pesoViejos / totalViejos : 0;

console.log(`Promedio de peso de Niños: ${promedioNiños.toFixed(2)} kg`);
console.log(`Promedio de peso de Jóvenes: ${promedioJovenes.toFixed(2)} kg`);
console.log(`Promedio de peso de Adultos: ${promedioAdultos.toFixed(2)} kg`);
console.log(`Promedio de peso de Viejos: ${promedioViejos.toFixed(2)} kg`);







