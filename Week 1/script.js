

console.log('=========================================');
console.log('  TIENDA DE ACCESORIOS DEPORTIVOS - FICHA  ');
console.log('=========================================');
console.log('');



console.log('INFORMACIÓN GENERAL');
console.log('--------------------');
console.log('Nombre:          \'Balón de fútbol profesional\'');
console.log('Código:          \'001\'');
console.log('Categoría:       \'Balones - Fútbol\'');
console.log('Estado:          \'Disponible\'');
console.log('');



console.log('DETALLES');
console.log('--------------------');
console.log('Valor principal:    150.000');
console.log('Valor calculado:    ', 150.000 * 0.9); 
console.log('Estado booleano 1:  true');  
console.log('Estado booleano 2:  false'); 
console.log('');



console.log('RESUMEN DEL DOMINIO');
console.log('--------------------');
console.log('Dominio:          \'Accesorios deportivos\'');
console.log('Entidad:          \'producto\'');
console.log('Total registros:  120');
console.log('');



console.log('=========================================');
console.log('\'  ¡Equipa tu deporte con estilo y calidad!\'');
console.log('=========================================');


if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('add-cart');
    if (btn) {
      btn.addEventListener('click', () => {
        console.log('Producto agregado al carrito.');
        alert('¡Balón añadido al carrito!');
      });
    }
  });
}
