
| 1. Inicio | 2. Perfil | 3. Ajustes | 4. Contador |
| :---: | :---: | :---: | :---: |
| <img src="https://github.com/user-attachments/assets/60d8f720-2425-4d80-a6fa-3da8fee40c10" width="180" /> | <img src="https://github.com/user-attachments/assets/db540539-df89-4715-be29-6efc0e4a0bfc" width="180" /> | <img src="https://github.com/user-attachments/assets/9550554c-94e0-47d2-bec3-ae18db3830f8" width="180" /> | <img src="https://github.com/user-attachments/assets/354b0357-c60d-491e-bf9e-9aac6005711c" width="180" /> |


# ContextApp - Practica de Estado 🔢👤

> Aplicación móvil de práctica centrada en la implementación eficiente, limpia y escalable del gestor de estado global Zustand en React Native.

---

### 📖 Descripción

**ContextApp** es un proyecto de práctica desarrollado con **React Native (Expo SDK 52)** y **TypeScript**. El objetivo principal de este desarrollo es dominar la centralización del estado global de la aplicación sustituyendo el Context API tradicional por **Zustand**. La aplicación implementa un flujo síncrono compartido entre cuatro pantallas de navegación inferior que reflejan los cambios de estado (actualización de perfil y control de un contador global) de manera inmediata y reactiva.

---

### ✨ Características

- 🧠 **Estado Global con Zustand:** Despliegue de stores independientes para la gestión mutua del perfil de usuario y valores numéricos.
- 🗺️ **Navegación Fluida:** Menú de pestañas inferior configurado nativamente con `@react-navigation/bottom-tabs`.
- 📱 **Feedback Táctil Mejorado:** Uso de componentes `TouchableOpacity` para garantizar una respuesta visual limpia (`activeOpacity`) al interactuar con las opciones de configuración y botones del contador.
- 🎨 **Interfaz Minimalista Limpia:** Estilos unificados mediante un contenedor global optimizado con bordes suaves, colores semánticos (verde de adición, rojo de sustracción) e indicadores visuales emoji de alta resolución.

---

### 🏗️ Arquitectura del Proyecto

El código fuente se encuentra organizado dentro del directorio modular `src/` estructurado de la siguiente forma:

```text
src/
├── navigation/
│   └── BottomTabNavigator.tsx  # Configuración y estilos de las pestañas de navegación inferior
├── screens/
│   ├── about/
│   │   └── AboutScreen.tsx     # Vista de Perfil: Muestra los datos del usuario y el contador actual
│   ├── counter/
│   │   └── CounterScreen.tsx   # Vista de Contador: Panel interactivo para sumar o restar valores
│   ├── home/
│   │   └── HomeScreen.tsx      # Vista de Inicio: Mensaje personalizado con el nombre del store
│   └── settings/
│       └── SettingsScreen.tsx  # Vista de Ajustes: Botones de control para mutar el estado global
├── store/
│   ├── counter-store.ts        # Store de Zustand encargado de la lógica del contador
│   └── profile-store.ts        # Store de Zustand encargado de la información del usuario
├── theme/
│   └── app-theme.ts            # Definición centralizada de estilos globales y botones de la UI
└── Main.tsx                    # Punto de entrada principal de los componentes de la aplicación
```

---

### 💻 Instalación Local

**1. Clona el repositorio:**

```bash
git clone https://github.com
cd zustand-state-rn
```

**2. Instala las dependencias:**

```bash
npm install --legacy-peer-deps
```

**3. Ejecuta el servidor de desarrollo mediante Expo:**

```bash
npm run android
```

*Nota: Abre la aplicación **Expo Go** en tu dispositivo de pruebas (asegurándote de contar con la versión compatible del SDK 52) y escanea el código QR desplegado en la terminal.*

---

### 🌐 Compilación & Despliegue

La distribución y empaquetado del instalador nativo está gestionado mediante los servicios en la nube de **EAS Build**.

**Stack del Proyecto:**

[![Stack](https://skills.syvixor.com/api/icons?i=reactnative,typescript,zustand,expo&perline=12&radius=40)](https://skills.syvixor.com)

---
