# ============================================
# PROYECTO SEMANA 04: Reporte de Accesorios Deportivos
# ============================================

🎯 OBJETIVO: Construir un sistema sencillo
que procese múltiples elementos del dominio
utilizando ciclos (loops), contadores y
acumuladores en JavaScript.

📋 DOMINIO DEL PROYECTO:
Ventas en Línea de Accesorios Deportivos.

El programa simula el análisis de varios
productos dentro de una tienda online de
accesorios deportivos.

Se trabaja con una colección de elementos
como guantes, calcetas, tapetes de yoga
y otros accesorios utilizados en diferentes
disciplinas deportivas.

El sistema recorre la lista de productos,
genera reportes, calcula estadísticas y
muestra información organizada en consola.

⚠️ POLÍTICA ANTICOPIA:
La implementación debe mantenerse coherente
con el dominio de accesorios deportivos
y utilizar datos relacionados con productos
de este tipo.

# ============================================
# SECCIÓN 1: Datos del dominio
# ============================================

En esta sección se define una colección
de elementos del dominio utilizando un
arreglo de objetos.

Cada objeto representa un accesorio deportivo
dentro del catálogo de la tienda.

Cada elemento contiene:

- Nombre del producto
- Categoría deportiva
- Valor o precio del producto

Ejemplos de productos utilizados:

Guantes de entrenamiento  
Calcetas de compresión  
Cinturón de hidratación  
Muñequeras de gimnasio  
Funda para bicicleta  
Tapete de yoga plegable  

También se define una lista de categorías
deportivas para poder clasificar los productos.

# ============================================
# SECCIÓN 2: Listado completo con for...of
# ============================================

En esta sección se utiliza el ciclo
for...of para recorrer todos los productos
del arreglo.

Cada producto se muestra en consola con:

- Número de línea
- Nombre del producto
- Categoría
- Precio

Este listado permite visualizar todo el
catálogo de accesorios deportivos.

# ============================================
# SECCIÓN 3: Conteo por categoría
# ============================================

Aquí se utiliza un ciclo anidado para
contar cuántos productos existen dentro
de cada categoría.

El sistema revisa cada producto y
verifica a qué categoría pertenece.

De esta forma se obtiene el número
total de elementos en categorías como:

fitness  
running  
ciclismo  
yoga  

Esto permite analizar cómo se distribuyen
los productos dentro del catálogo.

# ============================================
# SECCIÓN 4: Totales y promedio
# ============================================

En esta sección se utiliza un acumulador
para calcular el valor total de todos
los productos.

Posteriormente se calcula el promedio
del precio de los accesorios.

Esto permite obtener estadísticas
generales del catálogo de productos.

Resultados calculados:

- Valor total del catálogo
- Precio promedio de los productos

# ============================================
# SECCIÓN 5: Máximo y mínimo
# ============================================

Aquí el sistema identifica:

- El producto con mayor precio
- El producto con menor precio

Se recorre nuevamente el arreglo
comparando los valores de cada
producto.

Esto permite encontrar los extremos
de precio dentro del catálogo.

# ============================================
# SECCIÓN 6: Reporte detallado con for clásico
# ============================================

En esta sección se utiliza un ciclo
for tradicional basado en índices.

El sistema compara el precio de cada
producto con el precio promedio.

Dependiendo del resultado se indica
si el producto está:

sobre el promedio  
o  
bajo el promedio

Esto genera un pequeño análisis del
valor de cada accesorio dentro del
catálogo.

# ============================================
# SALIDA DEL SISTEMA
# ============================================

El programa genera diferentes reportes
en consola:

- Listado completo de productos
- Conteo de elementos por categoría
- Estadísticas de precio
- Producto más caro y más económico
- Análisis comparativo con el promedio

Todo esto permite visualizar la
información del catálogo de accesorios
deportivos de forma organizada.

=== FIN DEL REPORTE ===