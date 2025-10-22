# 🏛️ Business Structure - EthicIA (versión refinada)

## 👤 Usuario aprendiz

**Objetivo principal:** Aprender el uso ético y responsable de la inteligencia artificial mediante una experiencia guiada por IA.

### Interacciones esperadas

- Registro e inicio de sesión.

- Acceso libre a los cursos disponibles.

- Navegación por las lecciones de cualquier curso, en cualquier orden.

- Uso de un chat con el agente IA como tutor personal.

- Recibe retroalimentación textual automática basada en sus interacciones.

- Visualiza un porcentaje de progreso general por cursos completados.

---

## 📘 Cursos

**Definición:** Conjuntos temáticos que agrupan lecciones centradas en una dimensión específica del uso ético de la IA.

**Secuencia:** No hay desbloqueo progresivo. Todos los cursos están disponibles desde el inicio.

**Interacción:** Cada curso tiene un bloque de contenido teórico + lecciones aplicativas.

---

## 📂 Lecciones

**Definición:** Unidades prácticas breves que aplican lo aprendido en los cursos.

**Interacción:** El usuario responde dentro del chat (texto libre) y el sistema responde con retroalimentación.

---

## 🤖 Tutor IA (Chat + LLM + MCP + A2A)

**Rol:** Asistente conversacional que guía al usuario, evalúa sus respuestas, y ofrece retroalimentación educativa.

### Flujo de funcionamiento

1. El usuario escribe texto libre en el chat.

2. El LLM interpreta y responde según su avance (dato obtenido vía MCP desde Supabase).

3. Los agentes A2A colaboran para:

   - Evaluar el nivel de dependencia a la IA.

   - Modificar el tipo de retroalimentación (más guiada o más libre), sin cambiar contenidos.

   - Si el nivel de dependencia cambia, se actualiza en la base de datos del estudiante.

**Historial de chat:**

- No es visible para el usuario.

- El contenido no se almacena para revisión posterior.

---

## 🎓 Administrador / Profesor

- Visualiza el porcentaje de cursos completados por cada aprendiz.

- Puede generar mensajes de intervención desde una interfaz en la web.

- n8n toma ese mensaje y lo envía por correo a través de la API de Gmail.

- El estudiante no puede responder al mensaje ni interactuar con el docente directamente.

---

## 📊 Visualización del progreso

- El aprendiz puede ver un porcentaje general de cursos completados.

- El docente ve ese mismo resumen para todos los usuarios registrados.

---

## ⚙️ Infraestructura técnica MVP

- **Frontend:** React + Vite + Tailwind (desplegado en Vercel).

- **Backend / Base de datos:** Supabase + PostgreSQL.

- **IA & Automatización:**

  - n8n como orquestador del flujo de datos entre el frontend, Supabase, el LLM y los agentes A2A.

  - LLM vía API para respuestas educativas.
