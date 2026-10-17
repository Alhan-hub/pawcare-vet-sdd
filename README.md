# 🐾 PawCare — Plataforma de Gestión de Citas Veterinarias (SDD)

Aplicación web frontend interactiva desarrollada para la asignatura de **Diseño de Sistemas (ITM)** aplicando el flujo metodológico **Spec-Driven Development (SDD)** asistido por agentes de Inteligencia Artificial.

---

## 🚀 Características Principales (Módulos)

1. **Catálogo Clínico de Servicios (`#servicios`):** Visualización de 6 servicios veterinarios con tarifas transparentes en COP, duración estimada y conexión contextual directa con el agendador.
2. **Simulador Interactivo de Agendamiento (`#agendamiento`):**
   - Selección de especie (Perro, Gato, Exótico), servicio, fecha y franja horaria.
   - Validación de reglas de negocio: bloqueo de fechas pasadas y detección de colisiones de horario.
   - Generación de código único (`#VET-XXXX`), persistencia en `localStorage` y cancelación en tiempo real.
3. **Guía Interactiva de Cuidado Animal (`#consejos`):** Filtrado dinámico por categorías (*Nutrición*, *Prevención*, *Primeros Auxilios*, *Comportamiento*) y buscador instantáneo por palabras clave.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Astro v5.x](https://astro.build/) (Static Site Generation + Hidratación ligera)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (Diseño responsivo Mobile-First)
- **Lenguaje:** TypeScript (`strict mode`)
- **Testing (TDD):** [Vitest](https://vitest.dev/)

---

## 📋 Trazabilidad del Flujo SDD en el Repositorio

| Fase SDD | Descripción | Ubicación en el Repositorio |
| :--- | :--- | :--- |
| **Fase 0: Init** | Contexto del sistema, reglas OWASP y registro de skills | `AGENTS.md`, `.agents/skills/astro-vet-ui/SKILL.md` |
| **Fase 1: Explore** | Análisis del entorno y módulos requeridos | `.ts/01-explore.md` |
| **Fase 2: Propose** | Propuesta arquitectónica y comunicación de componentes | `.ts/02-proposal.md` |
| **Fase 3: Tasks** | Desglose de tareas principales (T1 a T6) | `.ts/03-tasks.md` |
| **Fase 4: Specs** | Requisitos Funcionales (RF-01 a RF-06) y No Funcionales (RNF) | `.ts/04-specs.md` |
| **Fase 5: Code** | Implementación modular del frontend | `src/data/`, `src/layouts/`, `src/pages/index.astro` |
| **Fase 6: Verify** | Pruebas unitarias bajo enfoque TDD (Red-Green-Refactor) | `tests/booking.test.ts` |
| **Fase 7: Delivery** | Documentación y entrega unificada mediante `Single PR` | `README.md` y Pull Request #1 |

---

## 💻 Instalación y Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar suite de pruebas unitarias (Fase 6: Verify)
npx vitest run

# 3. Iniciar servidor de desarrollo en http://localhost:4321
npm run dev
