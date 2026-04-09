

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

// TODO: Define las constantes globales de tu dominio
// Ejemplo: const TAX_RATE = 0.19;
//          const CURRENCY = "USD";
//          const DOMAIN_NAME = "Mi Dominio";
const DOMAIN_NAME = "Ventas en Línea de Accesorios Deportivos";
const VALUE_LABEL = "precio"; // Ej: "precio", "cantidad", "duración"

// TODO: Define un array con al menos 5 elementos de tu dominio.
// Cada elemento debe ser un objeto con propiedades relevantes.
// Ejemplo (Biblioteca):
// const items = [
//   { id: 1, name: "El Quijote",  category: "clásico",    value: 15,  active: true },
//   { id: 2, name: "1984",        category: "distopía",   value: 12,  active: true },
//   ...
// ];
const items = [
  { id: 1, name: "Balón de Fútbol", category: "fútbol", price: 25, stock: 10, available: true },
  { id: 2, name: "Zapatillas de Running", category: "running", price: 80, stock: 5, available: true },
  { id: 3, name: "Raqueta de Tenis", category: "tenis", price: 120, stock: 3, available: false },
  { id: 4, name: "Guantes de Boxeo", category: "boxeo", price: 45, stock: 8, available: true },
  { id: 5, name: "Bicicleta Estática", category: "gimnasio", price: 300, stock: 2, available: true }
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================


// y devuelva un string formateado para mostrar en pantalla.
// Debe usar template literals y al menos 2 propiedades del elemento.
//
// Ejemplo (Biblioteca):
// const formatItem = (book) =>
//   `📚 ${book.name} [${book.category}] — $${book.value}`;
//
// Ejemplo (Farmacia):
// const formatItem = (medicine) =>
//   `💊 ${medicine.name} — Stock: ${medicine.stock} — $${medicine.price}`;

const formatItem = (item) => {
 
  // 1. Incluir el nombre del elemento
  // 2. Incluir la categoría o tipo
  // 3. Incluir el valor numérico relevante
  return `🏀 ${item.name} [${item.category}] — Stock: ${item.stock} — $${item.price}`; // TODO: Expandir este template
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

// TODO: Implementa una función pura que calcule algún valor relevante
// del dominio a partir de parámetros numéricos.
// Debe ser una función pura: mismo input → siempre mismo output.
//
// Ejemplo (Biblioteca): calcular multa por días de retraso
// const calculateValue = (baseValue, factor) => baseValue * factor;
//
// Ejemplo (Farmacia): calcular total de compra con descuento
// const calculateValue = (price, quantity, discountPct = 0) =>
//   +(price * quantity * (1 - discountPct / 100)).toFixed(2);

const calculateValue = (price, discountPct = 0) => {
  
  return +(price * (1 - discountPct / 100)).toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

// TODO: Implementa una función que reciba un elemento y devuelva
// true o false según una regla del dominio.
//
// Ejemplo (Biblioteca): verificar si el libro está disponible
// const isValid = (book) => book.available === true;
//
// Ejemplo (Farmacia): verificar si hay suficiente stock
// const isValid = (medicine) => medicine.stock > 0;
//
// Ejemplo (Gimnasio): verificar si el miembro está activo
// const isValid = (member) => member.active === true;

const isValid = (item) => {
  
  return item.available && item.stock > 0;
};

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================


//
// Ejemplo (Biblioteca): crear un registro con valores por defecto
// const createRecord = (name, category = "general", available = true) =>
//   ({ name, category, available });
//
// Ejemplo (Farmacia): formatear precio con moneda por defecto
// const formatPrice = (price, currency = "USD", showTax = false) =>
//   showTax ? `${currency} ${(price * 1.19).toFixed(2)}` : `${currency} ${price.toFixed(2)}`;

const formatWithDefault = (value, label = VALUE_LABEL, currency = "USD") => {
  
  return `${label}: ${currency} ${value}`;
};

// ============================================
// SECCIÓN 6: Reporte usando las funciones
// ============================================

// TODO: Genera un reporte completo usando las funciones anteriores.
// Debe:
// 1. Mostrar el título del dominio
// 2. Recorrer items con for...of y mostrar cada uno con formatItem()
// 3. Contar los elementos válidos con isValid()
// 4. Calcular el total o promedio con calculateValue()
// 5. Mostrar el resumen final con formatWithDefault()

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);



if (items.length === 0) {
  console.log("\n⚠️  No hay elementos. Agrega datos en la Sección 1.");
} else {
  // --- Listado ---
  console.log("\n📋 Listado:");
  let lineNumber = 1;
  for (const item of items) {
    // TODO: Usa formatItem(item) para mostrar cada elemento
    console.log(`  ${lineNumber}. ${formatItem(item)}`);
    lineNumber++;
  }

  // --- Validación ---
  let validCount = 0;
  for (const item of items) {
    // TODO: Usa isValid(item) para contar los válidos
    if (isValid(item)) {
      validCount++;
    }
  }
  console.log(`\n✅ Elementos válidos: ${validCount} / ${items.length}`);

  // --- Cálculo ---
  let totalValue = 0;
  for (const item of items) {
    // TODO: Usa calculateValue(item.price, 0) para calcular el valor total
    totalValue += calculateValue(item.price, 0); // Sin descuento para el total
  }
  console.log(formatWithDefault(totalValue, `Total ${VALUE_LABEL}`));
}

console.log(`\n${"═".repeat(45)}\n`);
