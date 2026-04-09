# ============================================
# PROYECTO SEMANA 04: Sistema de Reporte
# ============================================

🎯 OBJETIVO: Desarrollar un sistema sencillo
que permita gestionar y analizar productos
de un dominio específico utilizando
funciones, validaciones y cálculos
en JavaScript.

El programa utiliza estructuras de datos,
funciones reutilizables y ciclos para
procesar información y generar un
reporte organizado en consola.

📋 DOMINIO DEL PROYECTO:
Ventas en Línea de Accesorios Deportivos.

El sistema simula una pequeña parte del
funcionamiento de una tienda virtual
especializada en artículos deportivos.

Dentro del programa se manejan diferentes
productos como balones, zapatillas,
raquetas, guantes y equipos de gimnasio,
los cuales contienen información sobre
su categoría, precio, stock disponible
y estado de disponibilidad.

⚠️ POLÍTICA ANTICOPIA:
El proyecto debe mantener coherencia
con el dominio asignado y utilizar
datos relacionados con accesorios
deportivos dentro de un contexto
de comercio electrónico.

# ============================================
# SECCIÓN 1: Constantes y datos del dominio
# ============================================

En esta sección se definen las constantes
principales del sistema.

Las constantes permiten mantener valores
globales que se utilizan a lo largo del
programa.

Entre las constantes utilizadas se encuentran:

DOMAIN_NAME  
Representa el nombre del dominio del sistema,
en este caso una tienda online de accesorios
deportivos.

VALUE_LABEL  
Define la etiqueta utilizada para mostrar
los valores numéricos dentro del sistema,
como por ejemplo el precio de los productos.

También se define un arreglo llamado
items que contiene la información de los
productos disponibles en el catálogo.

Cada producto se representa mediante un
objeto con las siguientes propiedades:

id  
Identificador único del producto.

name  
Nombre del producto deportivo.

category  
Categoría deportiva a la que pertenece.

price  
Precio del producto.

stock  
Cantidad disponible en inventario.

available  
Indica si el producto está disponible
para la venta.

Ejemplos de productos incluidos:

Balón de Fútbol  
Zapatillas de Running  
Raqueta de Tenis  
Guantes de Boxeo  
Bicicleta Estática

Este conjunto de datos representa un
pequeño catálogo de una tienda deportiva.

# ============================================
# SECCIÓN 2: Función de formato
# ============================================

En esta sección se crea una función llamada
formatItem.

El objetivo de esta función es generar
una representación visual clara de cada
producto dentro del reporte.

La función recibe un objeto del arreglo
items y utiliza template literals para
construir un texto formateado.

La información que se muestra incluye:

- Nombre del producto
- Categoría deportiva
- Stock disponible
- Precio del producto

Este formato permite visualizar de forma
rápida la información más importante
de cada elemento del catálogo.

# ============================================
# SECCIÓN 3: Función de cálculo (función pura)
# ============================================

En esta sección se implementa una función
pura llamada calculateValue.

Una función pura es aquella que siempre
devuelve el mismo resultado cuando recibe
los mismos parámetros de entrada.

La función recibe dos parámetros:

price  
Representa el precio base del producto.

discountPct  
Representa un posible porcentaje de
descuento aplicado al producto.

La función calcula el valor final del
producto después de aplicar el descuento
y devuelve el resultado con dos decimales.

Esto permite simular cálculos comunes
en sistemas de comercio electrónico.

# ============================================
# SECCIÓN 4: Función de validación
# ============================================

En esta sección se implementa una función
de validación llamada isValid.

El objetivo de esta función es verificar
si un producto cumple con las condiciones
necesarias para considerarse disponible
en el catálogo.

Las reglas utilizadas son:

El producto debe estar marcado como
disponible dentro del sistema.

El producto debe tener una cantidad
de stock mayor a cero.

Si ambas condiciones se cumplen,
el producto se considera válido
para ser mostrado dentro del reporte.

# ============================================
# SECCIÓN 5: Función con parámetros por defecto
# ============================================

Aquí se implementa una función llamada
formatWithDefault.

Esta función utiliza parámetros con
valores por defecto para generar
una representación de valores numéricos.

La función recibe:

value  
El valor que se desea mostrar.

label  
La etiqueta que describe el valor.

currency  
La moneda utilizada para representar
el valor económico.

Si alguno de estos parámetros no se
especifica, la función utiliza valores
predeterminados.

Esto facilita la reutilización de la
función dentro de diferentes partes
del sistema.

# ============================================
# SECCIÓN 6: Generación del reporte
# ============================================

En esta sección se genera el reporte
final utilizando todas las funciones
definidas anteriormente.

El proceso incluye varios pasos:

Mostrar el título del reporte utilizando
el nombre del dominio.

Recorrer el arreglo de productos
utilizando un ciclo for...of.

Mostrar cada producto utilizando
la función formatItem.

Contar la cantidad de productos
válidos mediante la función isValid.

Calcular el valor total del catálogo
sumando los precios de los productos.

Mostrar el resultado final utilizando
la función formatWithDefault.

Este proceso permite generar un
reporte completo y organizado
de los productos disponibles.

# ============================================
# SALIDA DEL SISTEMA
# ============================================

Al ejecutar el programa se genera
un reporte en consola con información
del catálogo de accesorios deportivos.

El reporte incluye:

Listado de productos  
Información detallada de cada elemento  
Cantidad de productos válidos  
Valor total del catálogo  

Ejemplo de salida:

═════════════════════════════════════════════
REPORTE — VENTAS EN LÍNEA DE ACCESORIOS DEPORTIVOS
═════════════════════════════════════════════

📋 Listado:

1. 🏀 Balón de Fútbol [fútbol] — Stock: 10 — $25
2. 🏀 Zapatillas de Running [running] — Stock: 5 — $80
3. 🏀 Raqueta de Tenis [tenis] — Stock: 3 — $120
4. 🏀 Guantes de Boxeo [boxeo] — Stock: 8 — $45
5. 🏀 Bicicleta Estática [gimnasio] — Stock: 2 — $300

✅ Elementos válidos: 4 / 5
Total precio: USD 570

═════════════════════════════════════════════

# ============================================
# CONCLUSIÓN
# ============================================

Este proyecto permite practicar conceptos
fundamentales de JavaScript como:

uso de arreglos de objetos  
funciones reutilizables  
funciones puras  
validaciones lógicas  
ciclos de recorrido  
formateo de información en consola  

Además, muestra cómo estos conceptos
pueden aplicarse en un contexto real
como el manejo de productos dentro
de una tienda online de accesorios
deportivos.