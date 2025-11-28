# CCLE - Compras Colectivas La Esmeralda

## 📝 Descripción del Proyecto

**CCLE** es una aplicación móvil diseñada para revolucionar la cadena de suministro de los comerciantes de la galería "La Esmeralda" en Popayán. El objetivo principal es romper la cadena de intermediarios permitiendo a los vendedores agruparse para realizar pedidos masivos directamente a los mayoristas, logrando así precios más competitivos y optimizando la logística de compra.

## Funcionalidades Implementadas

La aplicación cuenta actualmente con las siguientes funcionalidades:

- **Inicio de Usuario:** Pantalla de inicio de sesión para el acceso a la aplicación.
- **Navegación Principal:** Una interfaz moderna con una barra de pestañas inferior (Bottom Tab Navigator) para acceder a las secciones principales:
  - 🏠 **Inicio:** Muestra la lista de "Pedidos Colectivos Abiertos" en los que se puede participar.
  - 🛒 **Carrito:** Muestra los productos seleccionados, permite eliminarlos y se actualiza en tiempo real.
  - 👤 **Perfil:** Sección de usuario desde donde se puede acceder a otras funcionalidades.
- **Gestión de Carrito de Compras:** Usando React Context API, la aplicación cuenta con un estado global para el carrito, permitiendo:
  - Añadir productos desde la pantalla de Inicio.
  - Visualizar los productos en la pantalla de Carrito.
  - Eliminar productos del carrito.
  - Un indicador visual (badge) en el ícono del carrito que muestra la cantidad de productos en tiempo real.
- **Sección "Mis Pedidos":**
  - Accesible desde el Perfil, esta pantalla muestra los pedidos del usuario.
  - Cuenta con una sub-navegación de pestañas superiores (Top Tab Navigator) para filtrar entre pedidos **Activos** e **Historial**.
  - Visualiza el estado de cada pedido (CONSOLIDANDO, CONFIRMADO, EN REPARTO) con un estilo distintivo.

## 🛠️ Tecnologías Utilizadas

- **Framework:** React Native con Expo
- **Lenguaje:** TypeScript
- **Navegación:** React Navigation (Stack, Bottom Tabs, Material Top Tabs)
- **Gestión de Estado:** React Context API
- **Control de Versiones:** Git y GitHub

## 🚀 Cómo Empezar

Para ejecutar este proyecto en mi entorno local, segui estos pasos:

1.  **Clona el repositorio:**

    git clone https://github.com/LeannySc/ccle-app.git

2.  **Navega a la carpeta del proyecto:**

    cd ccle-app

3.  **Instala las dependencias:**

    npm install

4.  **Ejecuta la aplicación con Expo:**
    npx expo start --tunnel
    Luego, escanea el código QR con la aplicación de Expo Go en tu dispositivo Android.

## 📁 Estructura del Proyecto

El proyecto sigue una estructura de carpetas organizada para promover la mantenibilidad y escalabilidad:

- `src/components`: Componentes reutilizables (ej: `ProductCard`, `OrderCard`).
- `src/screens`: Pantallas principales de la aplicación (ej: `HomeScreen`, `LoginScreen`).
- `src/context`: Lógica de gestión de estado global (ej: `CartContext`).
- `src/navigation`: Configuraciones de los diferentes navegadores de React Navigation.
- `src/styles`: Estilos globales y paleta de colores.

## 🌿 Flujo de Cambios y Estrategia de Ramas

Para mantener un código limpio y facilitar el trabajo colaborativo, se sigue el modelo de flujo de Git (Git Flow) adaptado a los requerimientos del proyecto.

1.  **`main`**: Esta rama representa la versión de producción estable de la aplicación. Solo se fusiona desde `dev` (o `test`) cuando una versión ha sido probada y aprobada.

2.  **`dev`**: Es la rama principal de desarrollo. Integra las funcionalidades completas que han sido terminadas y probadas en las ramas personales.

3.  **Ramas Personales (ej: `dev-leanny`)**: Cada desarrollador trabaja en su propia rama, creada a partir de `dev`. Aquí se realizan los commits frecuentes y el desarrollo de nuevas características de forma aislada para no afectar el trabajo de los demás.

**Flujo de un Cambio:**
Un cambio nace en una **rama personal** (`dev-leanny`). Una vez la funcionalidad está completa y probada por el desarrollador, se crea un **Pull Request** hacia la rama `dev`. Este PR es revisado por el equipo y, si es aprobado, se fusiona. El flujo completo sería: `rama-personal` -> `dev` -> `test` -> `main`.

## 🧩 Componentes Reutilizables Documentados

- **`ProductCard`**: Tarjeta que muestra un producto disponible para una compra colectiva en la `HomeScreen`. Incluye imagen, nombre, precio, meta del pedido y el botón de "PARTICIPAR", cuya lógica se conecta al `CartContext`.

- **`OrderCard`**: Tarjeta utilizada en la pantalla de "Mis Pedidos". Muestra un pedido previamente realizado por el usuario, sus detalles y un distintivo de estado visual (ej: "CONSOLIDANDO", "CONFIRMADO") que cambia de color según el estado del pedido.
