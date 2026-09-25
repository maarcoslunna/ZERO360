# ZERO360 — Digital Agency Website

<p align="center">
  <strong>Todo empieza desde cero. Lo llevamos a 360°.</strong>
</p>

<p align="center">
  Una experiencia web moderna para una agencia digital enfocada en diseño, desarrollo y transformación digital.
</p>

<p align="center">
  <a href="#-sobre-el-proyecto">Sobre el proyecto</a> ·
  <a href="#-características">Características</a> ·
  <a href="#-stack">Stack</a> ·
  <a href="#-arquitectura">Arquitectura</a> ·
  <a href="#-ejecución-local">Instalación</a>
</p>

---

## ✦ Sobre el proyecto

**ZERO360** es el sitio web de una agencia digital especializada en crear y mejorar la presencia online de negocios.

El concepto de marca nace de dos ideas:

> **ZERO** — cada proyecto comienza desde cero.

> **360** — una visión completa del ecosistema digital.

La web está diseñada como una experiencia de marca, no simplemente como una colección de páginas: navegación fluida, microinteracciones, animaciones, elementos visuales dinámicos y una identidad basada en una combinación minimalista de **blanco, negro y rojo**.

---

## 🎯 Objetivos

El proyecto busca combinar tres aspectos:

* **Diseño:** una identidad visual reconocible y coherente.
* **Experiencia:** navegación clara con movimiento y microinteracciones.
* **Tecnología:** una arquitectura React sencilla, modular y mantenible.

El objetivo final es transformar una web corporativa tradicional en una **experiencia digital orientada a conversión**.

---

## ✨ Características

### 🚀 Experiencia visual

* Hero section con composición visual dinámica.
* Elementos orbitales inspirados en el concepto **360°**.
* Animaciones y microinteracciones.
* Efectos de interacción con el cursor.
* Reveal animations durante el scroll.
* Transiciones entre contenidos.
* CTA estratégicos orientados a conversión.
* Diseño responsive.

### 🧩 Arquitectura

La aplicación está construida con componentes reutilizables y páginas independientes.

Incluye:

* Home
* Diseño web
* Marketing digital
* Sobre nosotros
* Contacto
* Proyectos
* Páginas individuales de proyectos

### 💼 Portfolio

El sitio incorpora proyectos reales como:

* **ConectaObra**
* **Motor Sev**
* **Nuevo Teleclub Valverde**

Cada proyecto cuenta con sus propios recursos visuales y página dedicada.

### 💰 Servicios

La propuesta comercial incluye diferentes niveles de desarrollo web:

| Servicio      |    Desde |
| ------------- | -------: |
| Landing Page  | **149€** |
| Tienda Online | **369€** |
| Premium       | **599€** |

---

## 🛠 Stack

### Frontend

* **React 18**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**

### Arquitectura

* Componentes reutilizables
* Hooks personalizados
* Routing basado en hash
* Separación entre páginas, componentes, estilos y datos
* Assets optimizados para web

### Build

El proyecto utiliza **Vite** para desarrollo y generación del bundle de producción.

---

## 📁 Arquitectura del proyecto

```text
src/
├── assets/
│   └── projects/
│
├── components/
│   ├── ClientsCarousel.jsx
│   ├── DotField.jsx
│   ├── FinalCTA.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── HeroVisual.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   ├── ReviewForm.jsx
│   ├── ServiceCard.jsx
│   └── Stars.jsx
│
├── data/
│   ├── plans.js
│   └── projects.js
│
├── hooks/
│   └── useReveal.js
│
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── DesignWeb.jsx
│   ├── Home.jsx
│   ├── Marketing.jsx
│   ├── Project.jsx
│   └── ProjectsPage.jsx
│
├── styles/
│   ├── accents.css
│   ├── clients.css
│   ├── cta.css
│   ├── footer.css
│   ├── globals.css
│   ├── hero.css
│   ├── navbar.css
│   ├── pages.css
│   ├── projects.css
│   └── services.css
│
├── App.jsx
└── main.jsx
```

La estructura busca mantener una separación clara entre:

**UI → páginas → datos → estilos → lógica reutilizable.**

---

## 🎨 Identidad visual

La dirección visual de ZERO360 está basada en una paleta minimalista:

| Color | Hex       |
| ----- | --------- |
| White | `#FFFFFF` |
| Black | `#1C1C1C` |
| Red   | `#96090B` |

La tipografía principal es **Poppins**, utilizando especialmente pesos semibold para titulares y elementos de marca.

La intención es mantener una estética:

**Minimal · Modern · Sophisticated · Digital**

---

## ⚡ Instalación

Clona el repositorio:

```bash
git clone https://github.com/TU-USUARIO/zero360.git
```

Entra en el proyecto:

```bash
cd zero360
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en la URL local proporcionada por Vite.

---

## 📦 Build de producción

Para generar la versión optimizada para producción:

```bash
npm run build
```

El resultado se genera en:

```text
dist/
```

Para comprobar localmente la build:

```bash
npm run preview
```

---

## 🧠 Decisiones de desarrollo

Algunas decisiones importantes del proyecto:

### Componentización

Los elementos repetitivos se han separado en componentes para facilitar su mantenimiento y reutilización.

### Datos separados de la UI

Planes y proyectos se mantienen fuera de los componentes visuales, permitiendo modificar el contenido sin tener que reconstruir la interfaz.

### Animaciones controladas

Las animaciones se utilizan como parte de la experiencia de usuario y no únicamente como decoración.

### Responsive

La interfaz está planteada para adaptarse a diferentes tamaños de pantalla, manteniendo jerarquía visual y usabilidad.

---

## 🔭 Próximas mejoras

Algunas mejoras previstas para futuras iteraciones:

* [ ] Integración de dominio personalizado
* [ ] Optimización avanzada de imágenes
* [ ] Mejoras adicionales de accesibilidad
* [ ] SEO técnico avanzado
* [ ] Analítica y medición de conversiones
* [ ] Formulario de contacto conectado a backend
* [ ] CMS para gestión de proyectos
* [ ] Sistema de casos de estudio más completo

---

## 👨‍💻 Proyecto

**ZERO360**
Digital Agency · Web Development · Digital Marketing

Construido con:

**React + Vite + JavaScript + HTML5 + CSS3**

---

<p align="center">
  <strong>Built with intention.</strong><br>
  From zero to 360°.
</p>

