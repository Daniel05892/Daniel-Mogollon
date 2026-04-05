

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================



const elementName = "Mochila Running Elite";           
const elementStatus = "available";                     
const elementValue = 85;                               
const elementType = "backpack";                        
const elementInfo = {                                  
  brand: "SportGear Pro",
  color: "azul",
  capacity: "25L",
  warranty: null                                       
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================


let classification;
if (elementValue >= 80) {
  classification = "Producto Destacado";
} else if (elementValue >= 60) {
  classification = "Producto Recomendado";
} else {
  classification = "Producto Básico";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================



const statusLabel = elementStatus === "available" ? "En Stock" : "Agotado";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================


let typeLabel;
switch (elementType) {
  case "footwear":
    typeLabel = "Calzado Deportivo";
    break;
  case "backpack":
    typeLabel = "Mochilas y Bolsas";
    break;
  case "accessories":
    typeLabel = "Accesorios Deportivos";
    break;
  case "clothing":
    typeLabel = "Ropa Deportiva";
    break;
  default:
    typeLabel = "Tipo de producto desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

 

const displayName = elementName ?? "Producto sin nombre";
const infoDetail = elementInfo?.brand ?? "Marca no especificada";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================



const capacity = elementInfo?.capacity ?? "Capacidad no disponible";
const warranty = elementInfo?.warranty ?? "Sin garantía especificada";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================



console.log("=".repeat(50));
console.log("FICHA DE PRODUCTO - ACCESORIOS DEPORTIVOS");
console.log("=".repeat(50));
console.log(`Nombre: ${displayName}`);
console.log(`Marca: ${infoDetail}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Calificación: ${elementValue}/100`);
console.log(`Clasificación: ${classification}`);
console.log(`Categoría: ${typeLabel}`);
console.log(`Capacidad: ${capacity}`);
console.log(`Garantía: ${warranty}`);
console.log("=".repeat(50));
