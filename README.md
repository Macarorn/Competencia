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
    - `src/pages/aprendiz/ChatPage.tsx` — (interfaz de chat dedicada) — en reemplazo o complemento del widget flotante.
    - `src/App.tsx`, `src/main.tsx` — enrutado y bootstrap de la aplicación.

- Chat UI / integración cliente

  - Se integró `@n8n/chat` mediante `createChat(...)` dentro de `ChatIaUser.tsx`. El componente inicializa el widget apuntando a la ruta de chat del backend/n8n y define textos iniciales e i18n.

- Orquestación con n8n (workflows y agentes)
  - Workflows relevantes (exportados / definidos en n8n):
    - `Agent-Competencia` — flujo que orquesta agentes de chat: triggers de webhook, nodos de agente (Agent 1, Agente 2), memoria y clientes MCP.
    - `MCP - Competencia` — flujo que expone MCP Server Trigger y acciones para consultar Supabase.
  - Nodos usados: Chat Trigger / webhook, Agent, memory (Postgres), LM connectors (OpenRouter, AWS Bedrock), MCP Client.

# Competencia — Overview integral del proyecto

## Propósito

Este repositorio contiene la plataforma de aprendizaje y automatización centrada en el uso ético de la inteligencia artificial. El proyecto orquesta una interfaz de usuario (React + Vite + Tailwind), flujos conversacionales con agentes (n8n) y persistencia en Supabase/Postgres. Aquí se documenta el estado actual, las implementaciones ya realizadas y las áreas previstas para evolución.

## Estado actual — implementaciones principales

A continuación se listan las piezas ya integradas en el proyecto y dónde encontrarlas en el código:

- Frontend (React + Vite + Tailwind)

  - Componentes y páginas clave:
    - `src/pages/ChatIaUser.tsx` — integración del widget de chat (`@n8n/chat`) y configuración inicial del asistente.
    - `src/pages/aprendiz/CoursesPage.tsx` — página de cursos con grid de tarjetas, progreso y acciones.
    - `src/pages/aprendiz/ChatPage.tsx` — interfaz de chat dedicada (complemento del widget flotante).
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

## Enfatizando el rol de n8n

n8n es el núcleo orquestador del proyecto. Su papel clave incluye:

- Exponer webhooks que reciben eventos del frontend (por ejemplo, mensajes de chat).
- Encadenar agentes conversacionales (Agent 1 = tutor, Agent 2 = herramienta de consulta) y delegar tareas a MCP cuando es necesario.
- Conectar modelos LLM (OpenRouter, AWS Bedrock, Mistral) a través de nodos específicos.
- Mantener memoria conversacional (Postgres) y permitir recuperación contextual.
- Ofrecer trazabilidad de ejecución y posibilidad de ajuste visual de workflows sin redeploy extensivo del código.

En la práctica, la arquitectura de conversación se diseña como una serie de agentes coordinados por n8n: el agente tutor guía la sesión, y un agente herramienta consulta `conocimiento-chat` (vía MCP) para devolver contenidos estructurados.

## Artefactos y archivos clave para revisar

- Frontend

  - `src/pages/ChatIaUser.tsx` — entrada del widget `@n8n/chat`.
  - `src/pages/aprendiz/CoursesPage.tsx` — layout de cursos y punto donde se inyectó el chat flotante.
  - `src/pages/` — revisar otras páginas y componentes.

- n8n (exported workflows — disponibles como JSON en /downloads o en la instancia n8n):

  - `Agent-Competencia` — agente conversacional (chat trigger → Agent 1 → Agente 2 → LLM/MCP).
  - `MCP - Competencia` — trigger MCP Server y llamadas a Supabase.

- Base de datos
  - Tabla de referencia: `conocimiento-chat` (contiene títulos, prompts y objetivos de módulos de aprendizaje).

## Decisiones de diseño y motivos técnicos

- Separación de responsabilidades: la UI maneja la interacción y el render; n8n gestiona la lógica conversacional y la orquestación de LLMs y herramientas externas.
- Seguridad: las consultas a la base de datos y la recuperación de prompts se realizan desde el backend/orquestador (MCP) para evitar exponer credenciales o lógica sensible al cliente.
- Flexibilidad: la integración con múltiples LLMs se realiza a través de nodos n8n, lo que permite cambiar proveedor sin tocar el frontend.

## Estado actual — lista de implementaciones técnicas (resumida)

- Widget de chat integrado (`@n8n/chat`) y configurado.
- Páginas React: Cursos y Chat (interfaz), layout responsivo con Tailwind.
- Workflows n8n: agentes coordinados y MCP client/server para interacción con Supabase.
- Persistencia: uso de Supabase/Postgres para contenidos y memoria conversacional.

## Próximos pasos y espacio para futuras implementaciones

Sugerencias prioritarias:

1. Conectar la lista de cursos en `CoursesPage` a Supabase para cargar dinámicamente contenido y progreso del usuario.
2. Añadir autenticación robusta (Supabase Auth) y controlar rutas protegidas (curso, progreso, dashboard).
3. Mejorar UX del chat: colapsable/expandible, notificaciones, transcripciones de sesión (si aplica), y guardado opcional para revisión.
4. Tests automatizados: unitarios para componentes React y tests de integración para workflows críticos en n8n.
5. CI/CD para frontend y despliegue documentado de n8n (Cloud vs Docker/K8s) con variables de entorno y secretos gestionados.

