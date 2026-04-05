# ============================================
# PROYECTO SEMANA 04: Clasificación de Productos
# ============================================

🎯 OBJETIVO: Construir un sistema sencillo
que procese información de un producto
deportivo utilizando estructuras de control
de JavaScript y operadores modernos.

📋 DOMINIO DEL PROYECTO:
Ventas en Línea de Accesorios Deportivos.

El sistema simula la gestión básica de un
producto dentro de una tienda online de
artículos deportivos.

El programa procesa información de un
producto, analiza su estado, clasifica
su valor dentro del catálogo y genera
una ficha informativa en consola.

⚠️ POLÍTICA ANTICOPIA:
La implementación debe ser coherente con el
dominio asignado. Los datos utilizados deben
corresponder al contexto de accesorios
deportivos dentro de una tienda en línea.

# ============================================
# SECCIÓN 1: Datos del elemento de tu dominio
# ============================================

En esta sección se definen las variables
principales que representan un producto
dentro del sistema.

Se incluyen datos como:

- Nombre del producto
- Estado del producto
- Valor o puntuación del producto
- Tipo de producto
- Información adicional del producto

Ejemplo de producto utilizado en el proyecto:

Mochila Running Elite  
Marca: SportGear Pro  
Color: Azul  
Capacidad: 25L  

Estos datos representan un accesorio deportivo
disponible dentro de una tienda online.

# ============================================
# SECCIÓN 2: Clasificación con if / else if / else
# ============================================

En esta sección se utiliza una estructura
condicional para clasificar el producto
según su valor.

La clasificación se basa en la puntuación
del producto dentro del catálogo.

Reglas de clasificación:

Si el valor es mayor o igual a 80  
→ Producto Destacado

Si el valor es mayor o igual a 60  
→ Producto Recomendado

Si el valor es menor a 60  
→ Producto Básico

Esto permite destacar los productos con
mejor valoración dentro del sistema.

# ============================================
# SECCIÓN 3: Estado binario con operador ternario
# ============================================

Aquí se utiliza el operador ternario para
mostrar el estado del producto de forma
más clara.

Si el producto está disponible:
→ "En Stock"

Si el producto no está disponible:
→ "Agotado"

Esto simplifica la visualización del estado
del producto dentro de la ficha.

# ============================================
# SECCIÓN 4: Tipo con switch
# ============================================

En esta sección se utiliza una estructura
switch para identificar el tipo de producto
y asignar una categoría descriptiva.

Tipos posibles dentro del sistema:

footwear → Calzado Deportivo  
backpack → Mochilas y Bolsas  
accessories → Accesorios Deportivos  
clothing → Ropa Deportiva  

Esto permite organizar mejor los productos
dentro del catálogo de la tienda.

# ============================================
# SECCIÓN 5: Valor por defecto con ??
# ============================================

Se utiliza el operador de coalescencia nula
(??) para asignar valores por defecto cuando
alguna propiedad del producto no está definida.

Por ejemplo:

Si el nombre del producto no existe
se mostrará "Producto sin nombre".

Si la marca no está definida
se mostrará "Marca no especificada".

Esto evita errores al mostrar la información.

# ============================================
# SECCIÓN 6: Acceso seguro con ?.
# ============================================

En esta sección se utiliza el operador de
encadenamiento opcional (?.) para acceder
de forma segura a propiedades dentro de
objetos.

Esto evita errores cuando alguna propiedad
no existe dentro del objeto.

Por ejemplo:

- Capacidad de la mochila
- Garantía del producto

Si alguno de estos datos no existe,
se muestra un mensaje alternativo.

# ============================================
# SECCIÓN 7: Ficha de salida
# ============================================

Finalmente, el sistema genera una ficha
informativa del producto en la consola.

La ficha muestra:

- Nombre del producto
- Marca
- Estado
- Calificación
- Clasificación del producto
- Categoría del producto
- Capacidad
- Garantía

Todo esto se presenta de forma organizada
utilizando separadores visuales generados
con el método repeat().

Ejemplo de salida:

==================================================
FICHA DE PRODUCTO - ACCESORIOS DEPORTIVOS
==================================================
Nombre: Mochila Running Elite
Marca: SportGear Pro
Estado: En Stock
Calificación: 85/100
Clasificación: Producto Destacado
Categoría: Mochilas y Bolsas
Capacidad: 25L
Garantía: Sin garantía especificada
==================================================