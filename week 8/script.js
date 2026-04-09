
const DOMAIN_NAME = "Tienda de Accesorios Deportivos"; // TODO: Cambiar por tu dominio
const VALUE_LABEL = "productos";     // TODO: Cambiar por unidad de tu dominio

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

// TODO: Definir el array con mínimo 5 objetos de tu dominio.
// Cada objeto debe tener:
//   - id: número único
//   - name: nombre del elemento
//   - [propiedad numérica]: precio, cantidad, puntuación, etc.
//   - [propiedad booleana]: active, available, inStock, etc.
//   - [otras 2+ propiedades relevantes a tu dominio]
//
// Ejemplos por dominio:
// Biblioteca:  { id, name, author, year, available: true }
// Farmacia:    { id, name, price, stock, requiresPrescription: false }
// Gimnasio:    { id, name, memberSince, plan, active: true }
// Restaurante: { id, name, price, category, available: true }

const items = [
  { id: 1, name: "Pelota de Fútbol", price: 25, inStock: true, category: "Fútbol", brand: "Nike" },
  { id: 2, name: "Raqueta de Tenis", price: 80, inStock: false, category: "Tenis", brand: "Wilson" },
  { id: 3, name: "Guantes de Boxeo", price: 45, inStock: true, category: "Boxeo", brand: "Everlast" },
  { id: 4, name: "Bicicleta de Montaña", price: 300, inStock: true, category: "Ciclismo", brand: "Trek" },
  { id: 5, name: "Pesas de Mano", price: 20, inStock: true, category: "Fitness", brand: "Adidas" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed.name}`);
  return removed;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  const removed = items.splice(index, 1)[0];
  console.log(`Eliminado por índice: ${removed.name}`);
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  return items.filter(item => item.inStock);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  return items.find(item => item.name === name);
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  return `[${item.id}] ${item.name} — Precio: $${item.price}, Categoría: ${item.category}, Marca: ${item.brand}, En stock: ${item.inStock ? 'Sí' : 'No'}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// TODO: Crear un nuevo elemento de tu dominio y usar addItem para agregarlo
addItem({ id: 6, name: "Balón de Baloncesto", price: 30, inStock: true, category: "Baloncesto", brand: "Spalding" });

// TODO: Usar addPriorityItem para agregar un elemento prioritario
addPriorityItem({ id: 0, name: "Casco de Ciclismo", price: 50, inStock: true, category: "Ciclismo", brand: "Bell" });

// TODO: Usar removeByIndex para eliminar un elemento del medio
removeByIndex(2);

// TODO: Usar removeLastItem para quitar el último elemento
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
// TODO: Mostrar el inventario actualizado con forEach + formatItem
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// TODO: Usar find para buscar un elemento específico por nombre
const found = findByName("Raqueta de Tenis");
console.log(`Encontrado: ${found ? formatItem(found) : "No encontrado"}`);

// TODO: Usar getActiveItems() y mostrar cuántos están activos
const activeItems = getActiveItems();
console.log(`Productos en stock: ${activeItems.length}`);

// TODO: Crear un snapshot inmutable con spread [...items]
// y agregar un elemento extra sin modificar items
const snapshot = [...items];
snapshot.push({ id: 7, name: "Red de Voleibol", price: 40, inStock: true, category: "Voleibol", brand: "Mikasa" });
console.log("Snapshot con elemento extra:");
snapshot.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Transformación con map ---\n");

// TODO: Usar map para crear un array de solo los nombres de los elementos
const names = items.map(item => item.name);
console.log("Nombres de productos:", names.join(", "));

// TODO: Usar map para crear un array con alguna propiedad numérica transformada
const discountedPrices = items.map(item => ({ name: item.name, precioDescuento: item.price * 0.9 }));
console.log("Precios con descuento del 10%:");
discountedPrices.forEach(item => {
  console.log(`  ${item.name}: $${item.precioDescuento.toFixed(2)}`);
});

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`En stock: ${activeCount} | Agotados: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
