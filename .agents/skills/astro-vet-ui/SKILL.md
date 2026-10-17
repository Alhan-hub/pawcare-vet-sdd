```markdown
# Skill: Astro & Vet UI Best Practices
- **Arquitectura de Componentes:** Separar datos estáticos (`/src/data/`) de la vista (`/src/pages/`).
- **Accesibilidad (a11y):** Todo input de formulario debe tener su `<label for="...">` asociado y atributos `aria-live` para notificaciones.
- **Validación:** Bloquear fechas en el pasado e impedir reservas duplicadas en la misma fecha y hora.