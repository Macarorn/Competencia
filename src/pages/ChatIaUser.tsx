import { createChat } from "@n8n/chat";
import "@n8n/chat/style.css";
import { useEffect } from "react";

export default function ChatIaUser() {
  

  useEffect(() => {
    createChat({
      webhookUrl:
        "https://macarron.app.n8n.cloud/webhook/e8156249-8860-4140-9880-1b61133b60d4/chat",
      webhookConfig: {
        method: "POST",
        headers: {},
      },
      target: "#n8n-chat",
      mode: "window",
      chatInputKey: "chatInput",
      chatSessionKey: "sessionId",
      loadPreviousSession: true,
      metadata: {},
      showWelcomeScreen: true,
      defaultLanguage: "en",
      initialMessages: [
        "¡Hola! Soy tu asistente de IA Responsable. ¿En qué puedo ayudarte hoy?",
      ],
      i18n: {
        en: {
          title: "Ethic-IA!",
          subtitle:
            "Tu asistente para aprender sobre inteligencia artificial",
          footer: "",
          getStarted: "Nueva Conversación",
          inputPlaceholder: "Escribe tu pregunta..",
          closeButtonTooltip: "Cerrar el chat",
        },
      },
      enableStreaming: false,
    });
  }, []);

  

  return (
    <div id="n8n-chat" className="flex-1 overflow-y-auto p-4 space-y-4"></div>
  );
}
