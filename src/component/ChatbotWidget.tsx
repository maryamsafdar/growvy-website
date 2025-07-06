// components/ChatbotWidget.tsx
"use client";

import { useState } from "react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg p-3 z-50 flex items-center justify-center"
      >
        🤖
      </button>

      {/* Chatbot Iframe Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[90vw] max-w-md h-[80vh] bg-white shadow-2xl rounded-xl overflow-hidden z-50">
          <iframe
            src="https://growvyai.streamlit.app/"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px", marginTop: "40px" }}
            allow="clipboard-write"
            loading="lazy"
            title="Growvy Chatbot"
          />
        </div>
      )}
    </div>
  );
}
