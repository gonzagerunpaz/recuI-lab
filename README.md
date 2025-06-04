# 💻 Laboratorio de Programación y Lenguajes

## 🧪 Recuperatorio

- 📅 Fecha: 05-Junio
- 📚 Temas: Manejo de múltiples funciones, `filter`, `map`, `any`, `some`. Manejo de Express. Métodos GET y POST. Manejo de objetos en `request`.

# 🛒 Filtrado de Productos con Validaciones Configurables

## 📝 Consigna

Desarrollar un servidor Express con un endpoint **/productos/filtrar** que filtre productos de un archivo **productos.json**, el cual tiene la siguiente estructura:

```json
[
    {
        "nombre": "string",
        "precio": "number",
        "categorias": ["string1", "string2", "string3", ...],
        "stock": "number"
    },
    {
        ...
    }
]
```

Escribir en un archivo independiente de validaciones todas las funciones de filtros que pueden llegar a aplicarse. Cada función debe recibir el producto y un valor de referencia, y retornar **true** si el producto **sí** cumple la regla.

Validaciones a realizar:

- Si el **stock** es mayor que el valor recibido
- Si el **precio** es menor o igual al valor recibido
- Si el **nombre** contiene menos de X caracteres
- Si la **categoría** está en un array de categorías permitidas

## 📥 Requisitos del Endpoint:

El cliente debe enviar en el body (JSON) un array de objetos con:

- `fn`: Nombre de la función de validación (ej: "stock").
- `values`: Valor o array de valores para la validación.

### 📌 Ejemplo del body en el request

Usando 2 funciones llamadas "stock" y "categoria":

```json
[
  {
    "fn": "stock",
    "values": 10
  },
  {
    "fn": "categoria",
    "values": ["electrodomestico", "deportivo"]
  }
]
```

## 🔍 El servidor debe:

El endpoint **/productos/filtrar** tiene la responsabilidad de filtrar aplicando todas las funciones recibidas y retornar los productos que cumplan con todas las reglas.

### ✅ Ejemplo de respuesta

Este ejemplo de respuesta se basa en la aplicación de las funciones "stock" y "categoria" aplicadas al archivo productos.json que se incluye en la carpeta data.

```json
[
  {
    "id": 1,
    "nombre": "Heladera",
    "precio": 1500000,
    "categorias": ["electrodomestico", "hogar"],
    "stock": 15
  },
  {
    "id": 2,
    "nombre": "Pelota de Fútbol",
    "precio": 25000,
    "categorias": ["deportivo", "recreativo"],
    "stock": 12
  },
  {
    "id": 4,
    "nombre": "Zapatillas Running",
    "precio": 60000,
    "categorias": ["deportivo", "calzado"],
    "stock": 20
  },
  {
    "id": 7,
    "nombre": "Camiseta de Fútbol",
    "precio": 30000,
    "categorias": ["deportivo", "indumentaria"],
    "stock": 25
  }
]
```

## 🎯 Dificultad Adicional

🔄 **Validaciones Anidadas:**

Permitir que al menos 2 funciones puedan recibir `values` como un objeto para validaciones más complejas. Ejemplo:

```json
{
  "fn": "precio",
  "values": { "min": 100, "max": 1000 }
}
```
