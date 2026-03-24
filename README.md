# estructura-de-datos
Repositorios para guardar los proyectos realizados en clase.


# PARCIAL I 

# 🍽️ Sagrada - Aplicación Web Modular

## 📌 Descripción

Este proyecto consiste en el desarrollo de una aplicación web para un restaurante llamado **Sagrada**, en la cual se implementan diferentes funcionalidades como visualización de productos, reservas y un carrito de compras.

El objetivo principal es aplicar conceptos de desarrollo web como la modularización, manipulación del DOM, uso de datos externos y buenas prácticas de programación.

---

## 🧱 Estructura del Proyecto

El proyecto está organizado en diferentes carpetas para separar responsabilidades:

```
sagrada/
│── index.html
│── login.html
│── menu.html
│── reserva.html
│── carrito.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── login.js
│   ├── main.js
│   ├── cart.js
│   ├── components.js
│   └── webcomponent.js
│
├── components/
│   ├── header.html
│   ├── footer.html
│   └── sidebar.html
│
├── data/
│   └── products.json
```

Esta organización permite que el proyecto sea más ordenado y fácil de mantener.

---

## 🧠 Modularización

La modularización consiste en dividir el código en diferentes archivos según su función.

Por ejemplo:

* Un archivo para el login
* Otro para el carrito
* Otro para cargar componentes

Esto es importante porque:

* Hace el código más claro
* Facilita encontrar errores
* Permite reutilizar partes del proyecto

---

## 🔐 Inicio de Sesión

Se implementó un login básico con validación en JavaScript.

Credenciales:

* Usuario: admin
* Contraseña: 1234

Este login redirige al usuario a la página principal si los datos son correctos.

⚠️ Nota: Este sistema no es seguro, ya que las credenciales están en el código. Solo se usa con fines educativos.

---

## 🧩 Componentes Reutilizables

Se crearon tres componentes principales:

* Header
* Sidebar
* Footer

Estos se cargan dinámicamente usando JavaScript con fetch, lo que permite reutilizarlos en varias páginas sin repetir código.

---

## 🌐 Uso de Fetch API

Los productos no están escritos directamente en el código, sino en un archivo externo:

data/products.json

Luego se cargan dinámicamente usando fetch, lo que mejora la organización del proyecto.

---

## 🧾 Renderizado de Productos

Los productos del menú se generan dinámicamente en JavaScript utilizando el DOM.

Cada producto incluye:

* Nombre
* Imagen
* Descripción
* Precio
* Botón para agregar al carrito

---

## 🛒 Carrito de Compras

El carrito permite:

* Agregar productos
* Eliminar productos
* Ver el total de la compra

Además, se utiliza localStorage para guardar los productos, lo que permite que no se pierdan al cambiar de página.

El carrito se encuentra en una página independiente llamada carrito.html.

---

## 📱 Reservas

Se implementó una sección de reservas con dos opciones:

* Reserva interior
* Reserva exterior

Cada una tiene un precio de $10.000 y también puede agregarse al carrito.

---

## 🎨 Diseño

El diseño está basado en una paleta de colores morados, con un estilo moderno tipo Windows 11.

Se aplicaron:

* Efectos hover en los productos
* Diseño en grid para organizar los elementos
* Estilos tipo glass (transparencias y desenfoque)
* Tipografía elegante

---

## 🧹 Buenas Prácticas

Durante el desarrollo se aplicaron buenas prácticas como:

* Uso de camelCase en JavaScript
* Separación de archivos según su función
* Código organizado e indentado
* Uso de nombres claros en variables y funciones

---

## 👨‍💻 Trabajo en Equipo

El proyecto se subió a GitHub, donde se trabajó utilizando:

* Commits
* Ramas
* Pull requests

Esto permitió llevar un control del desarrollo y evidenciar el trabajo colaborativo.

---

## 🎯 Conclusión

Este proyecto permitió aplicar diferentes conceptos vistos en clase, integrando funcionalidades reales en una aplicación web.

Además, ayudó a entender la importancia de organizar el código, trabajar de forma modular y crear interfaces atractivas para el usuario.
