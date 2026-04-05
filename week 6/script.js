

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.

const items = [
  { name: "Guantes de entrenamiento", category: "fitness", value: 25.0 },
  { name: "Calcetas de compresión", category: "running", value: 18.5 },
  { name: "Cinturón de hidratación", category: "running", value: 32.0 },
  { name: "Muñequeras de gimnasio", category: "fitness", value: 12.0 },
  { name: "Funda para bicicleta", category: "ciclismo", value: 22.5 },
  { name: "Tapete de yoga plegable", category: "yoga", value: 28.0 },
];

const categories = ["fitness", "running", "ciclismo", "yoga"];

const valueLabel = "precio";

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;
for (const item of items) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: $${item.value.toFixed(2)}`);
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;
  for (const item of items) {
    if (item.category === category) count++;
  }
  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;
for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: $${totalValue.toFixed(2)}`);
console.log(`Promedio ${valueLabel}: $${averageValue.toFixed(2)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} ($${maxItem.value.toFixed(2)})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} ($${minItem.value.toFixed(2)})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const comparison = item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";
  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
