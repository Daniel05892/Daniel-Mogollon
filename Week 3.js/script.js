// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Dominio: Ventas de accesorios deportivos
// Este script calcula ingresos, costos y validaciones para una tienda
// de accesorios deportivos.

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================


const PRECIO_BALON = 8_000; 
const PRECIO_ZAPATOS = 45_000; 
const STOCK_DIARIO_BALONES = 50; 
const STOCK_DIARIO_ZAPATOS = 20; 
const MAXIMO_CLIENTES = 30;
// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

const ballsSold = 42;
const shoesSold = 18;

const revenueBalls = BALL_PRICE * ballsSold;
console.log("Ingresos por balones:", revenueBalls);

const revenueShoes = SHOES_PRICE * shoesSold;
console.log("Ingresos por zapatillas:", revenueShoes);

const totalRevenue = revenueBalls + revenueShoes;
console.log("Ingresos totales:", totalRevenue);

const remainingBallStock = DAILY_BALL_STOCK - ballsSold;
console.log("Stock de balones restante:", remainingBallStock);

const remainingShoesStock = DAILY_SHOES_STOCK - shoesSold;
console.log("Stock de zapatillas restante:", remainingShoesStock);

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

let cashRegister = 0;
console.log("Caja al inicio:", cashRegister);

cashRegister += revenueBalls;
console.log("Después de vender balones:", cashRegister);

cashRegister += revenueShoes;
console.log("Después de vender zapatillas:", cashRegister);

const dailyExpenses = 120_000; 
cashRegister -= dailyExpenses;
console.log("Después de gastos diarios:", cashRegister);

const taxRate = 0.19; 
cashRegister *= 1 - taxRate;
console.log("Caja neta después de impuestos (estimado):", cashRegister);

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

const isAtCapacity = ballsSold + shoesSold === MAX_CUSTOMERS;
console.log("¿Se alcanzó la capacidad máxima?", isAtCapacity);

const soldOutBalls = ballsSold === DAILY_BALL_STOCK;
console.log("¿Se agotaron los balones planificados?", soldOutBalls);

const soldMoreShoes = shoesSold > DAILY_SHOES_STOCK;
console.log("¿Se vendieron más zapatillas de lo planificado?", soldMoreShoes);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

const isWeekend = false;
const isPromotionDay = true;

const canOfferDiscount = isWeekend || isPromotionDay;
console.log("¿Se puede ofrecer descuento?", canOfferDiscount);

const isBusy = ballsSold + shoesSold >= 25;
const needsMoreStaff = isBusy && !isWeekend;
console.log("¿Necesita más personal hoy?", needsMoreStaff);

const isSlowDay = !isBusy && !isPromotionDay;
console.log("¿Es un día lento?", isSlowDay);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Total recaudado (antes de gastos e impuestos):", totalRevenue);
console.log("Caja final estimada (después de gastos e impuestos):", cashRegister);
console.log("Clientes atendidos (ventas totales):", ballsSold + shoesSold);
console.log("Capacidad máxima permitida:", MAX_CUSTOMERS);
console.log("¿Se puede ofrecer descuento?", canOfferDiscount);

console.log("Gracias por usar la calculadora de dominio de ventas de accesorios deportivos");