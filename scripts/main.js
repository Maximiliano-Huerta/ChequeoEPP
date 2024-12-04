// Simulador interactivo de chequeo de EPP

alert("Bienvenido al Simulador de Chequeo de EPP");

// Lista de elementos de protección personal requeridos
const equipoUtilizado = [
  "Casco",
  "Botines",
  "Lentes de Seguridad",
  "Chaleco Reflectivo",
  "Arnés de Seguridad",
  "Ropa de Trabajo",
];

// Entrada del usuario
let usuarioEPP = {};

// Solicitar por consola el estado de cada EPP
for (let equipo of equipoUtilizado) {
  let respuesta = prompt(`¿Llevas ${equipo}? (si/no)`).trim().toLowerCase();
  usuarioEPP[equipo] = respuesta === "si";
}

// Algoritmo condicional: Verificar que todos los EPP sean correctos
let cumpleEPP = true;
for (let equipo of equipoUtilizado) {
  if (!usuarioEPP[equipo]) {
    console.log(`No cumples con el requisito: ${equipo}.`);
    cumpleEPP = false;
  }
}

if (cumpleEPP) {
  console.log(
    "¡Cumples con todos los EPP requeridos! Estás listo para trabajar."
  );
} else {
  console.log("No cumples con todos los EPP. Por favor, completa tu equipo.");
}

// Algoritmo con ciclos: Revisar individualmente cada EPP y simular inspección
console.log("--- Inspección de cada elemento ---");
for (let equipo of equipoUtilizado) {
  if (usuarioEPP[equipo]) {
    console.log(`${equipo}: En buen estado.`);
  } else {
    console.log(`${equipo}: FALTA o está en mal estado.`);
  }
}
