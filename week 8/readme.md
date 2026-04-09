# ============================================
# PROYECTO SEMANA 04: Gestión de Inventario
# ============================================

🎯 OBJETIVO: Desarrollar un sistema que permita
gestionar un inventario de productos utilizando
arreglos, funciones y métodos de manipulación
de datos en JavaScript.

El programa simula el funcionamiento básico
de un sistema de gestión para una tienda
de accesorios deportivos.

El sistema permite agregar productos,
eliminarlos, buscarlos dentro del inventario
y generar reportes con información detallada
de cada elemento.

📋 DOMINIO DEL PROYECTO:
Tienda de Accesorios Deportivos.

El programa trabaja con diferentes productos
relacionados con actividades deportivas,
como fútbol, ciclismo, fitness y boxeo.

Cada producto incluye información relevante
como su precio, categoría, marca y estado
de disponibilidad en inventario.

⚠️ POLÍTICA ANTICOPIA:
La implementación debe mantener coherencia
con el dominio asignado y utilizar datos
relacionados con accesorios deportivos
dentro de un contexto de inventario.

# ============================================
# SECCIÓN 1: Constantes del dominio
# ============================================

En esta sección se definen las constantes
globales del sistema.

DOMAIN_NAME  
Representa el nombre del sistema que
gestiona los productos.

VALUE_LABEL  
Define la unidad utilizada para mostrar
la cantidad total de elementos dentro
del inventario.

Estas constantes ayudan a mantener el
código organizado y facilitan su reutilización.

# ============================================
# SECCIÓN 2: Array inicial — Inventario
# ============================================

En esta sección se define el arreglo
principal llamado items.

Este arreglo representa el inventario
de productos disponibles dentro de
la tienda deportiva.

Cada elemento del arreglo es un objeto
que contiene información sobre un producto.

Las propiedades utilizadas son:

id  
Identificador único del producto.

name  
Nombre del producto.

price  
Precio del producto.

inStock  
Indica si el producto se encuentra
disponible en inventario.

category  
Categoría deportiva del producto.

brand  
Marca del producto.

Ejemplos de productos incluidos:

Pelota de Fútbol  
Raqueta de Tenis  
Guantes de Boxeo  
Bicicleta de Montaña  
Pesas de Mano

Este conjunto de datos representa el
inventario inicial del sistema.

# ============================================
# SECCIÓN 3: Funciones de gestión
# ============================================

En esta sección se implementan diferentes
funciones para manipular el inventario.

addItem()

Permite agregar un nuevo producto
al final del inventario utilizando
el método push().

removeLastItem()

Elimina el último elemento del inventario
utilizando el método pop().

addPriorityItem()

Permite agregar un elemento prioritario
al inicio del inventario utilizando
el método unshift().

removeByIndex()

Elimina un producto específico del
inventario utilizando el método splice()
y su posición dentro del arreglo.

Estas funciones permiten simular
operaciones comunes dentro de un
sistema de inventario.

# ============================================
# SECCIÓN 4: Búsqueda y filtrado
# ============================================

El sistema incluye funciones para
buscar y filtrar productos dentro
del inventario.

getActiveItems()

Filtra los productos que se encuentran
disponibles en stock utilizando el
método filter().

findByName()

Busca un producto específico dentro
del inventario utilizando su nombre
y el método find().

Estas funciones permiten localizar
información dentro del catálogo
de forma rápida.

# ============================================
# SECCIÓN 5: Función de formato
# ============================================

La función formatItem() se utiliza
para mostrar la información de cada
producto de forma organizada.

La función recibe un objeto del
inventario y devuelve un texto
formateado que incluye:

ID del producto  
Nombre  
Precio  
Categoría  
Marca  
Estado de disponibilidad

Esto permite mostrar los datos
de forma clara dentro del reporte.

# ============================================
# SECCIÓN 6: Generación del reporte
# ============================================

En esta sección el programa genera
un reporte completo del inventario.

Primero se muestra el estado inicial
del inventario utilizando el método
forEach() para recorrer el arreglo.

Luego se realizan varias operaciones
de modificación en el inventario,
como agregar productos nuevos,
agregar productos prioritarios
y eliminar elementos.

Después de estas operaciones se
muestra nuevamente el inventario
actualizado.

# ============================================
# SECCIÓN 7: Snapshot inmutable
# ============================================

En esta sección se utiliza el operador
spread (...) para crear una copia
del inventario.

Esta copia permite agregar nuevos
elementos sin modificar el arreglo
original.

Esto demuestra cómo trabajar con
datos de forma segura sin alterar
la información principal.

# ============================================
# SECCIÓN 8: Transformaciones con map
# ============================================

El programa utiliza el método map()
para transformar la información del
inventario.

Primero se crea un arreglo que contiene
solo los nombres de los productos.

Después se genera otro arreglo que
contiene los precios con un descuento
del 10%.

Estas transformaciones permiten
analizar la información del inventario
de diferentes formas.

# ============================================
# SECCIÓN 9: Resumen final
# ============================================

Finalmente el sistema muestra un
resumen del estado del inventario.

Este resumen incluye:

Cantidad total de productos  
Cantidad de productos en stock  
Cantidad de productos agotados  

Esta información permite tener
una visión general del estado
del inventario de la tienda.

# ============================================
# SALIDA DEL SISTEMA
# ============================================

El programa genera un reporte en consola
que incluye diferentes secciones de
información sobre el inventario.

Ejemplo de salida:

==================================================
📦 GESTIÓN DE TIENDA DE ACCESORIOS DEPORTIVOS
==================================================

Inventario inicial:
[1] Pelota de Fútbol — Precio: $25
[2] Raqueta de Tenis — Precio: $80
[3] Guantes de Boxeo — Precio: $45
[4] Bicicleta de Montaña — Precio: $300
[5] Pesas de Mano — Precio: $20

Operaciones realizadas:
Agregado: Balón de Baloncesto
Elemento prioritario agregado: Casco de Ciclismo
Eliminado por índice: Raqueta de Tenis
Eliminado: Balón de Baloncesto

Resumen final:
Total en inventario: 5 productos
En stock: 4 | Agotados: 1

==================================================
✅ Reporte completado
==================================================