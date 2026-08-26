// import { useEffect } from "react";

// export default function MBGWebchatWidget() {
//   useEffect(() => {
//     const channelKey = import.meta.env.VITE_MBG_CHANNEL_KEY;

//     if (!channelKey) {
//       console.warn(
//         "[MBGWebchatWidget] VITE_MBG_CHANNEL_KEY is not set — the MBG webchat widget will not load. Add it to your .env file."
//       );
//       return;
//     }

//     const existing = document.querySelector('script[data-mbg-webchat="true"]');
//     if (existing) return;

//     const script = document.createElement("script");
//     script.src = `https://chatbotbe.digitalmbg.com/webchat/embed.js?channelKey=${encodeURIComponent(
//       channelKey
//     )}`;
//     script.async = true;
//     script.setAttribute("data-mbg-webchat", "true");
//     document.body.appendChild(script);
//   }, []);

//   return null;
// }


import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

/**
 * LEXA — SSMLEC Website Chatbot Widget
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
      "SSMLEC offers career-focused training in Industrial Automation & AVEVA software (SCADA, HMI, MES, Historian), AI & Software Technologies, and CAD Design — delivered both as corporate training for companies and as campus skill-development programs for engineering colleges. Which one would you like details on?",
  },
  {
    keywords: ["automation", "plc", "scada", "robotics", "industry 4.0", "industrial"],
    answer:
      "Our Industrial Automation track covers PLC programming, SCADA systems, with hands-on lab work aimed at Industry 4.0 job roles.",
  },
  {
    keywords: [
      "aveva",
      "hmi",
      "historian",
      "mes",
      "batch management",
      "system platform",
      "intouch",
      "omi",
      "work tasks",
      "gisize",
    ],
    answer:
      "We specialize in AVEVA industrial software: System Platform, InTouch & Edge HMI, Historian, MES (including Model-Driven MES), Batch Management, OMI, Work Tasks, GISIZE, and Reports for Operation. These are the core of our corporate training programs.",
  },
  {
    keywords: ["ai", "ml", "machine learning", "python", "data science", "data analytics", "software", "coding", "programming", "development", "it", "mern", "dotnet", ".net", "devops", "laravel", "database", "react"],
    answer:
      "Our AI & Software Technologies programs cover Python, AI/ML, Data Science & Analytics, MERN, .NET, DevOps, PHP Laravel, React, and databases — run for both corporate teams and college students.",
  },
  {
    keywords: ["cad", "design", "drafting", "solidworks", "autocad"],
    answer:
      "The CAD Design program (including AutoCAD) builds practical design and drafting skills used in engineering and manufacturing roles.",
  },
  {
    keywords: [
      "corporate",
      "clients",
      "companies trained",
      "who have you trained",
      "case studies",
      "past clients",
      "worked with",
    ],
    answer:
      "We've delivered corporate training for companies including Reliance Industries, TCS, Accenture, Infosys, LTIMindtree, Schneider Electric, Rockwell Automation, GAIL, Colgate-Palmolive, Bridgestone, SAIL, Tetra Pak, Hitachi Energy, and more — mostly on AVEVA industrial software.",
  },
  {
    keywords: [
      "college",
      "colleges",
      "university",
      "universities",
      "campus program",
      "campus training",
      "student training",
      "workshop for students",
      "institute",
    ],
    answer:
      "Our Campus Skill Development Program has run hands-on workshops at colleges like PP Savani University, R. N. G. Patel Institute of Technology, Dr. S.&S.S. Gandhi College of Engineering & Technology, and N. G. Patel Polytechnic — covering AI & ML, AutoCAD, PLC & SCADA Automation, PHP Laravel, and DevOps.",
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
    keywords: ["address", "location", "where", "located", "directions"],
    answer:
      "SSMLEC is located at 704, Luxuria Business Hub, Udhana Magdalla Road, New Magdalla, Surat, Gujarat – 395007.",
  },
  {
    keywords: ["contact", "phone", "number", "call", "email", "reach"],
    answer:
      "You can reach SSMLEC at +91 99740 61290 or Learning@ssm-infotech.com . You can also use our Contact page for a callback.",
  },
  {
    keywords: ["event", "events", "workshop", "workshops", "seminar", "webinar", "upcoming", "techfest"],
    answer:
      "We regularly run hands-on workshops and expert sessions for both corporates and colleges. Check the Events page on this site for the latest schedule.",
  },
  {
    keywords: ["admission", "admissions", "apply", "enroll", "enrolment", "enrollment", "register", "join"],
    answer:
      "To enroll, you can reach out through our Contact page or +91 99740 61290 and our team will guide you through the next steps.",
  },
  {
    keywords: ["hello", "hi", "hey", "namaste"],
    answer: "Hi there! I'm LEO AI, SSMLEC's assistant. Ask me about our AVEVA/automation training, corporate clients, campus programs, placements, or how to get in touch.",
  },
];

const FALLBACK_ANSWER =
  "I don't have an exact answer for that yet. Could you rephrase, or would you like our contact details so our team can help directly?";

const WELCOME_MESSAGE = "Hello, I am LEO AI. Ready to Assist You!";

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
        <div className="ssmlec-panel" role="dialog" aria-label="LEO AI chat assistant">
          <div className="ssmlec-glow" aria-hidden="true" />
          <div className="ssmlec-panel-header">
            <div className="ssmlec-header-left">
              <span className="ssmlec-header-icon">
                <Sparkles size={16} />
              </span>
              <div>
                <div className="ssmlec-title">LEO AI</div>
                <div className="ssmlec-subtitle">Ready to assist you</div>
              </div>
            </div>
            <button
              className="ssmlec-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={16} />
            </button>
          </div>

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
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      <button
        className="ssmlec-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chatbot" : "Open chatbot"}
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        <span>{open ? "Close" : "Chat with LEO AI"}</span>
      </button>
    </div>
  );
}

/*
 * THEME NOTE: colors below are matched from your Home.tsx (the navy hero
 * gradient, the "text-[#343968]" glass-card text, and the accent gradient
 * that ends at oklch(0.72 0.18 35), a warm orange/coral). If your actual
 * --primary / --accent CSS variables differ, just edit the four values
 * below — everything else derives from them.
 */
const CSS = `
:root {
  --ssmlec-primary: #343968;      /* deep navy/indigo — matches your hero + glass-card text */
  --ssmlec-primary-dark: #20234A; /* darker navy for gradient depth */
  --ssmlec-accent: #FF7A45;       /* warm orange — start of your accent gradient */
  --ssmlec-accent-2: #F2664B;     /* coral — approx. oklch(0.72 0.18 35) */
}

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
  background: linear-gradient(135deg, var(--ssmlec-accent), var(--ssmlec-accent-2));
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 14px 22px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(242, 102, 75, 0.35), 0 2px 8px rgba(0,0,0,0.15);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.ssmlec-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(242, 102, 75, 0.45), 0 2px 8px rgba(0,0,0,0.15);
}

.ssmlec-panel {
  position: absolute;
  bottom: 72px;
  right: 0;
  width: 350px;
  max-width: calc(100vw - 32px);
  height: 470px;
  max-height: 70vh;
  background: linear-gradient(180deg, var(--ssmlec-primary) 0%, var(--ssmlec-primary-dark) 100%);
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(32, 35, 74, 0.45);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.ssmlec-glow {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: var(--ssmlec-accent);
  opacity: 0.25;
  filter: blur(50px);
  pointer-events: none;
  z-index: 0;
}

.ssmlec-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  position: relative;
  z-index: 2;
}
.ssmlec-header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.ssmlec-header-icon {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--ssmlec-accent), var(--ssmlec-accent-2));
  color: #fff;
  flex-shrink: 0;
}
.ssmlec-title {
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.01em;
}
.ssmlec-subtitle {
  font-size: 11.5px;
  color: rgba(255,255,255,0.65);
  margin-top: 1px;
}
.ssmlec-close-btn {
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.1);
  border: none;
  color: rgba(255,255,255,0.85);
  border-radius: 999px;
  width: 28px;
  height: 28px;
  cursor: pointer;
  transition: background 0.15s ease;
}
.ssmlec-close-btn:hover { background: rgba(255,255,255,0.2); }

.ssmlec-messages {
  flex: 1;
  overflow-y: auto;
  padding: 6px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  z-index: 1;
}

.ssmlec-msg {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 13.5px;
  line-height: 1.5;
}
.ssmlec-msg-bot {
  align-self: flex-start;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.12);
  color: #fff;
  border-top-left-radius: 4px;
}
.ssmlec-msg-user {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--ssmlec-accent), var(--ssmlec-accent-2));
  color: #fff;
  font-weight: 500;
  border-top-right-radius: 4px;
}

.ssmlec-typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 13px 15px;
}
.ssmlec-typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.6);
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
  position: relative;
  z-index: 2;
}
.ssmlec-input {
  flex: 1;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 999px;
  padding: 10px 16px;
  color: #fff;
  font-size: 13px;
  outline: none;
}
.ssmlec-input:focus {
  border-color: var(--ssmlec-accent);
}
.ssmlec-input::placeholder { color: rgba(255,255,255,0.55); }

.ssmlec-send-btn {
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--ssmlec-accent), var(--ssmlec-accent-2));
  color: #fff;
  border: none;
  border-radius: 999px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s ease;
}
.ssmlec-send-btn:hover { transform: scale(1.06); }

@media (max-width: 420px) {
  .ssmlec-panel {
    width: calc(100vw - 32px);
  }
}
`;
