
//
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define el nombre de tu dominio
const DOMAIN_NAME = "Ventas en Línea de Accesorios Deportivos";


const rawEntityName = "  Balón de Fútbol  ";


const entityCategory = "Accesorio Deportivo";


const entityCode = "ACC-001";


const entityDescription = "Balón de fútbol de alta calidad para partidos profesionales.";


const mainValue = 25;


const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================


const entityName = rawEntityName.trim();


const entityNameUpper = entityName.toUpperCase();


const entityNameLower = entityName.toLowerCase();


const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================


const hasValidPrefix = entityCode.startsWith(codePrefix);


const descriptionIsRelevant = entityDescription.includes("deportivo");


const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);


const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE ENTIDAD
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       ${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);
console.log(`¿Descripción contiene 'deportivo'?: ${descriptionIsRelevant}`);
console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);
console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");


const notification = `📢 Nuevo accesorio disponible: ${entityName} (${entityCode})`;
console.log(notification);
console.log("");
