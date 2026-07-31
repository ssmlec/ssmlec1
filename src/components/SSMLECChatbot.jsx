import React, { useState, useRef, useEffect } from "react";

/**
 * SSMLEC Website Chatbot Widget
 * ------------------------------------------------------------
 * Drop this component anywhere in your React app (e.g. once in App.jsx,
 * outside your main <Routes>) and it renders a floating chat button
 * in the bottom-right corner on every page.
 *
 * No API key required — it answers from the KNOWLEDGE_BASE below using
 * simple keyword matching. Edit KNOWLEDGE_BASE to keep answers accurate
 * as your courses, fees, and contact details change.
 *
 * Usage:
 *   import SSMLECChatbot from "./SSMLECChatbot";
 *   function App() {
 *     return (
 *       <>
 *         <YourSite />
 *         <SSMLECChatbot />
 *       </>
 *     );
 *   }
 */

// ---------------------------------------------------------------
// 1. EDIT THIS: your knowledge base. Add/remove entries freely.
//    "keywords" = words that trigger this answer.
//    "answer"   = what the bot replies (plain text, keep it short).
// ---------------------------------------------------------------
const KNOWLEDGE_BASE = [
  {
    keywords: ["course", "courses", "program", "programs", "training", "offer", "teach", "learn"],
    answer:
      "SSMLEC offers career-focused training in three main areas: Industrial Automation (PLC, SCADA, robotics), AI & Software Technologies, and CAD Design. Programs include hands-on labs and live projects. Which one would you like details on?",
  },
  {
    keywords: ["automation", "plc", "scada", "robotics", "industry 4.0", "industrial"],
    answer:
      "Our Industrial Automation track covers PLC programming, SCADA systems, and robotics, with hands-on lab work aimed at Industry 4.0 job roles.",
  },
  {
    keywords: ["ai", "software", "coding", "programming", "development", "it"],
    answer:
      "Our AI & Software Technologies program focuses on practical software and AI skills for IT and Industry 4.0 roles, with live-project experience.",
  },
  {
    keywords: ["cad", "design", "drafting", "solidworks", "autocad"],
    answer:
      "The CAD Design program builds practical design and drafting skills used in engineering and manufacturing roles.",
  },
  {
    keywords: ["placement", "job", "jobs", "career", "hire", "hiring", "company", "companies"],
    answer:
      "SSMLEC provides placement support backed by 250+ hiring partners, plus internships and live-project exposure to help you land national and multinational company roles.",
  },
  {
    keywords: ["fee", "fees", "cost", "price", "pricing", "payment"],
    answer:
      "Fees vary by program. [ADD YOUR FEE INFO OR A LINK TO YOUR FEES PAGE HERE] — or contact us directly and we'll share the latest fee structure.",
  },
  {
    keywords: ["address", "location", "where", "located", "directions", "campus"],
    answer:
      "SSMLEC is located at 704, Luxuria Business Hub, Udhana Magdalla Road, New Magdalla, Surat, Gujarat – 395007.",
  },
  {
    keywords: ["contact", "phone", "number", "call", "email", "reach"],
    answer:
      "You can reach SSMLEC at [ADD PHONE NUMBER] or [ADD EMAIL ADDRESS]. You can also use our Contact page for a callback.",
  },
  {
    keywords: ["event", "events", "workshop", "workshops", "seminar", "webinar", "upcoming"],
    answer:
      "We regularly run hands-on workshops and expert sessions (e.g. IoT, automation, and software topics). Check the Events page on this site for the latest schedule.",
  },
  {
    keywords: ["admission", "admissions", "apply", "enroll", "enrolment", "enrollment", "register", "join"],
    answer:
      "To enroll, you can reach out through our Contact page or [ADD ADMISSIONS PROCESS / LINK HERE] and our team will guide you through the next steps.",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    answer: "Hi there! I'm the SSMLEC assistant. Ask me about our courses, placements, fees, or how to get in touch.",
  },
];

const FALLBACK_ANSWER =
  "I don't have an exact answer for that yet. Could you rephrase, or would you like our contact details so our team can help directly?";

const WELCOME_MESSAGE =
  "Welcome to SSM Learning Excellence Centre. Ask me about our Automation, AI, or CAD programs, placements, fees, or how to reach us.";

function findAnswer(userText) {
  const text = userText.toLowerCase();
  let bestMatch = null;
  let bestScore = 0;

  for (const entry of KNOWLEDGE_BASE) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (text.includes(kw)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK_ANSWER;
}

export default function SSMLECChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "bot", text: WELCOME_MESSAGE }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, open]);

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const replyText = findAnswer(trimmed);

    // Simulated thinking delay so it doesn't feel instant/robotic.
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: replyText }]);
      setIsTyping(false);
    }, 500);
  };

  return (
    <div className="ssmlec-widget-root">
      <style>{CSS}</style>

      {open && (
        <div className="ssmlec-panel" role="dialog" aria-label="SSMLEC chat assistant">
          <div className="ssmlec-panel-header">
            <div className="ssmlec-header-left">
              <span className="ssmlec-led" aria-hidden="true" />
              <div>
                <div className="ssmlec-title">SSMLEC ASSISTANT</div>
                <div className="ssmlec-subtitle">STATUS: ONLINE</div>
              </div>
            </div>
            <button
              className="ssmlec-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              &#10005;
            </button>
          </div>

          <div className="ssmlec-grid-overlay" aria-hidden="true" />

          <div className="ssmlec-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user" ? "ssmlec-msg ssmlec-msg-user" : "ssmlec-msg ssmlec-msg-bot"
                }
              >
                {m.text}
              </div>
            ))}
            {isTyping && (
              <div className="ssmlec-msg ssmlec-msg-bot ssmlec-typing">
                <span></span><span></span><span></span>
              </div>
            )}
          </div>

          <form className="ssmlec-input-row" onSubmit={handleSend}>
            <input
              className="ssmlec-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about courses, fees, placements..."
              aria-label="Type your message"
            />
            <button type="submit" className="ssmlec-send-btn" aria-label="Send message">
              &#9654;
            </button>
          </form>
        </div>
      )}

      <button
        className="ssmlec-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
      >
        <span className="ssmlec-fab-led" aria-hidden="true" />
        {open ? "✕" : "CHAT"}
      </button>
    </div>
  );
}

const CSS = `
.ssmlec-widget-root {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999999;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.ssmlec-fab {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0B1220;
  color: #E2E8F0;
  border: 1px solid #14B8A6;
  border-radius: 999px;
  padding: 14px 20px;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(20, 184, 166, 0.25), 0 2px 8px rgba(0,0,0,0.4);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.ssmlec-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(20, 184, 166, 0.35), 0 2px 8px rgba(0,0,0,0.4);
}
.ssmlec-fab-led {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #F59E0B;
  box-shadow: 0 0 8px 2px rgba(245, 158, 11, 0.7);
  animation: ssmlec-blink 1.6s ease-in-out infinite;
}
@keyframes ssmlec-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

.ssmlec-panel {
  position: absolute;
  bottom: 68px;
  right: 0;
  width: 340px;
  max-width: calc(100vw - 32px);
  height: 460px;
  max-height: 70vh;
  background: #0B1220;
  border: 1px solid #1E293B;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ssmlec-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: linear-gradient(180deg, #111C33 0%, #0B1220 100%);
  border-bottom: 1px solid #1E293B;
  position: relative;
  z-index: 2;
}
.ssmlec-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ssmlec-led {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #14B8A6;
  box-shadow: 0 0 8px 2px rgba(20, 184, 166, 0.8);
  flex-shrink: 0;
  animation: ssmlec-blink 2s ease-in-out infinite;
}
.ssmlec-title {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #E2E8F0;
}
.ssmlec-subtitle {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 10px;
  color: #14B8A6;
  letter-spacing: 0.06em;
  margin-top: 2px;
}
.ssmlec-close-btn {
  background: transparent;
  border: none;
  color: #64748B;
  font-size: 14px;
  cursor: pointer;
  padding: 4px 8px;
}
.ssmlec-close-btn:hover { color: #E2E8F0; }

.ssmlec-grid-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(20,184,166,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(20,184,166,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
  z-index: 0;
}

.ssmlec-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 1;
  background: #0F172A;
}

.ssmlec-msg {
  max-width: 85%;
  padding: 9px 13px;
  border-radius: 10px;
  font-size: 13.5px;
  line-height: 1.45;
}
.ssmlec-msg-bot {
  align-self: flex-start;
  background: #1E293B;
  color: #E2E8F0;
  border-top-left-radius: 2px;
}
.ssmlec-msg-user {
  align-self: flex-end;
  background: #14B8A6;
  color: #0B1220;
  font-weight: 500;
  border-top-right-radius: 2px;
}

.ssmlec-typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 12px 14px;
}
.ssmlec-typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #64748B;
  animation: ssmlec-typing-bounce 1.2s infinite ease-in-out;
}
.ssmlec-typing span:nth-child(2) { animation-delay: 0.15s; }
.ssmlec-typing span:nth-child(3) { animation-delay: 0.3s; }
@keyframes ssmlec-typing-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-4px); opacity: 1; }
}

.ssmlec-input-row {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid #1E293B;
  background: #0B1220;
  position: relative;
  z-index: 2;
}
.ssmlec-input {
  flex: 1;
  background: #1E293B;
  border: 1px solid #334155;
  border-radius: 8px;
  padding: 9px 12px;
  color: #E2E8F0;
  font-size: 13px;
  outline: none;
}
.ssmlec-input:focus {
  border-color: #14B8A6;
}
.ssmlec-input::placeholder { color: #64748B; }

.ssmlec-send-btn {
  background: #14B8A6;
  color: #0B1220;
  border: none;
  border-radius: 8px;
  width: 38px;
  font-size: 13px;
  cursor: pointer;
  flex-shrink: 0;
}
.ssmlec-send-btn:hover { background: #2DD4BF; }

@media (max-width: 420px) {
  .ssmlec-panel {
    width: calc(100vw - 32px);
  }
}
`;
