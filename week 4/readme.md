# ============================================
# PROYECTO SEMANA 04: Generador de Mensajes
# ============================================

🎯 OBJETIVO: Construir un generador de mensajes
en consola usando métodos de string y
template literals.

📋 DOMINIO DEL PROYECTO:
Ventas en Línea de Accesorios Deportivos.

El sistema simula la gestión básica de un
producto dentro de una tienda online de
accesorios deportivos.

El programa procesa información de un
accesorio deportivo, realiza transformaciones
de texto, valida ciertos datos y finalmente
genera una ficha informativa en consola junto
con un mensaje de notificación.

⚠️ POLÍTICA ANTICOPIA:
La implementación debe ser coherente con el
dominio asignado y los valores utilizados en
el proyecto deben ser propios del contexto
de accesorios deportivos.

# ============================================
# SECCIÓN 1: Datos del dominio
# ============================================

En esta sección se definen las variables
principales del dominio.

Se incluye información como:

- Nombre del dominio del sistema
- Nombre del accesorio deportivo
- Categoría del producto
- Código identificador
- Descripción del producto
- Valor numérico representativo
- Estado del producto (activo o inactivo)

Ejemplo de entidad utilizada en el proyecto:

Balón de Fútbol Profesional  
Categoría: Accesorio Deportivo  
Código: ACC-001

# ============================================
# SECCIÓN 2: Transformaciones de string
# ============================================

En esta sección se aplican diferentes
transformaciones al nombre del producto
utilizando métodos de string de JavaScript.

Métodos utilizados:

trim()  
Elimina espacios innecesarios al inicio
y al final del nombre del producto.

toUpperCase()  
Convierte el nombre del producto a
mayúsculas para mostrarlo en el encabezado.

toLowerCase()  
Convierte el nombre a minúsculas para
posibles usos en identificadores o códigos.

slice()  
Permite extraer una parte del código
del producto para obtener el prefijo.

# ============================================
# SECCIÓN 3: Validaciones con búsqueda
# ============================================

Se utilizan métodos de búsqueda para validar
la coherencia de los datos del producto.

Métodos utilizados:

startsWith()  
Verifica que el código del producto
empiece con el prefijo correcto.

includes()  
Comprueba que la descripción del producto
contenga una palabra clave relacionada
con el dominio deportivo.

endsWith()  
Verifica que el código termine con los
números esperados.

Estas validaciones permiten comprobar
que la información del producto sea válida.

# ============================================
# SECCIÓN 4: Generación de la ficha principal
# ============================================

En esta sección se genera una ficha
informativa del producto utilizando
template literals.

También se utilizan separadores visuales
generados con repeat() para mejorar
la presentación en consola.

La ficha incluye:

- Nombre del dominio
- Nombre del producto
- Categoría
- Código
- Prefijo
- Valor
- Estado
- Descripción

# ============================================
# SECCIÓN 5: Validaciones
# ============================================

Aquí se muestran los resultados de las
validaciones realizadas anteriormente.

Los resultados se imprimen en consola
utilizando template literals para que
el mensaje sea más claro y legible.

# ============================================
# SECCIÓN 6: Mensaje de notificación
# ============================================

Finalmente el sistema genera un mensaje
corto de notificación en consola.

Este mensaje simula una alerta dentro
de una tienda en línea indicando que
un nuevo accesorio deportivo está
disponible para los clientes.

Ejemplo de notificación:

📢 Nuevo accesorio disponible:
Balón de Fútbol (ACC-001)