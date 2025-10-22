## Características principales

# Competencia — Overview integral del proyecto

**Propósito**

Este repositorio contiene la plataforma de aprendizaje y automatización centrada en el uso ético de la inteligencia artificial. El proyecto orquesta una interfaz de usuario (React + Vite + Tailwind), flujos conversacionales con agentes (n8n) y persistencia en Supabase/Postgres. Aquí se documenta el estado actual, las implementaciones ya realizadas y las áreas previstas para evolución.

## Estado actual — implementaciones principales

A continuación se listan las piezas ya integradas en el proyecto y dónde encontrarlas en el código:

- Frontend (React + Vite + Tailwind)

  - Componentes y páginas clave:
    - `src/pages/ChatIaUser.tsx` — integración del widget de chat (`@n8n/chat`) y configuración inicial del asistente.
    - `src/pages/aprendiz/CoursesPage.tsx` — página de cursos con grid de tarjetas, progreso y acciones.
    - `src/pages/aprendiz/ChatPage.tsx` — interfaz de chat dedicada (complemento del widget flotante).
    - `src/pages/aprendiz/CursoVistaUser.tsx` — página dedicada para la visualización detallada de cursos, con tabs interactivos para contenido, actividades y progreso. Implementada siguiendo un diseño de Figma y optimizada para responsividad.
    - `src/pages/aprendiz/DashboardPage.tsx` — vista de dashboard para usuarios, mostrando progreso, cursos activos y notificaciones. Refinada para alinearse con los diseños de Figma.
    - `src/App.tsx`, `src/main.tsx` — enrutado y bootstrap de la aplicación.

- Chat UI / integración cliente

  - Se integró `@n8n/chat` mediante `createChat(...)` dentro de `ChatIaUser.tsx`. El componente inicializa el widget apuntando a la ruta de chat del backend/n8n y define textos iniciales e i18n.

- Orquestación con n8n (workflows y agentes)

  - Workflows relevantes (exportados / definidos en n8n):
    - `Agent-Competencia` — flujo que orquesta agentes de chat: triggers de webhook, nodos de agente (Agent 1, Agente 2), memoria y clientes MCP.
    - `MCP - Competencia` — flujo que expone MCP Server Trigger y acciones para consultar Supabase.
  - Nodos usados: Chat Trigger / webhook, Agent, memory (Postgres), LM connectors (OpenRouter, AWS Bedrock), MCP Client.

- Persistencia y memoria

  - Supabase / PostgreSQL: almacenamiento de contenidos de aprendizaje y tabla `conocimiento-chat` usada por los agentes para recuperar prompts y objetivos.

- MCP (Model Context Protocol)
  - Implementado para permitir que los agentes ejecuten herramientas/queries seguras contra sistemas externos (p. ej. consultas a Supabase) sin exponer credenciales al cliente.

## Despliegue

El proyecto ha sido desplegado exitosamente en vercel y está disponible para su uso. Todas las funcionalidades mencionadas han sido verificadas en el entorno de producción, asegurando que cumplen con los requisitos establecidos.

### Resumen de Cambios Recientes

- Se corrigieron problemas de diseño y se mejoró la responsividad en `CursoVistaUser.tsx`.
- Se implementó y refinó la vista de dashboard (`DashboardPage.tsx`).
- Se verificó la integración con Supabase y n8n para garantizar la funcionalidad completa del sistema.

