# 📊 Proyecto de Prueba: Dashboard con Next.js, TypeScript y Tailwind CSS

Este proyecto es una implementación de un Dashboard con autenticación segura, tablas interactivas y gráficos dinámicos, construido con **Next.js 14**, **TypeScript** y **Tailwind CSS**.

---
## credenciales 
    test@example.com
    123456

## 🚀 Características principales
- 🔐 **Autenticación segura** con NextAuth.js (email/password).
- 📈 **Dashboard interactivo** con gráficos y tablas dinámicas.
- 💅 **Componentes reutilizables** usando Tailwind CSS.
- ⚡ **Optimización de rendimiento**:
  - Server Components y Lazy Loading.
  - Renderizado progresivo con `Suspense`.
- ✅ **Pruebas unitarias** con Jest y React Testing Library.

---

## 🛠️ Tecnologías utilizadas
- **Next.js 14**: Framework moderno con App Router.
- **TypeScript**: Tipado seguro para una mejor experiencia de desarrollo.
- **Tailwind CSS**: Estilos rápidos y responsivos.
- **NextAuth.js**: Autenticación.
- **Chart.js**: Visualización de gráficos.
- **Jest** + **React Testing Library**: Pruebas unitarias.

---

## 📋 Requisitos previos
- **Node.js** (v16 o superior).
- **npm** (v8 o superior).

---

## ⚙️ Instalación y ejecución
1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   cd prueba-next
Instala las dependencias:

bash

npm install
Inicia el servidor de desarrollo:

bash

npm run dev
Abre el navegador en:



http://localhost:3000
📁 Estructura del proyecto

prueba-next/
│
├── public/              # Archivos estáticos
├── src/
│   ├── app/             # Rutas del App Router
│   │   ├── page.tsx     # Página principal
│   │   ├── layout.tsx   # Layout global
│   │   ├── dashboard/   # Página del Dashboard
│   │   └── api/         # API para autenticación (NextAuth)
│   │
│   ├── components/      # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── data/            # Generación de datos de prueba
│   ├── styles/          # Archivos CSS globales
│   └── utils/           # Helpers y utilidades
│
├── jest.config.js       # Configuración de Jest
├── jest.setup.js        # Configuración de Jest DOM
├── tailwind.config.ts   # Configuración de Tailwind CSS
├── tsconfig.json        # Configuración de TypeScript
└── package.json         # Dependencias y scripts