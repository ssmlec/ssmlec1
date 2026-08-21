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
// ============================================================================
// SSMLEC Chatbot Knowledge Base — Expanded
// Drop this in place of your current KNOWLEDGE_BASE + FALLBACK_ANSWER +
// WELCOME_MESSAGE. Keyword matching logic (findAnswer) stays the same.
// ============================================================================

const KNOWLEDGE_BASE = [
   {
    keywords: ["google location", "map"],
    answer:
      "Google map : google.com/maps?ll=21.147038,72.759704&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=7659867885406725320",
  },
  // ---------------------------------------------------------------------
  // GREETING
  // ---------------------------------------------------------------------
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good afternoon", "good evening"],
    answer:
      "Hi there! I'm LEXA, SSM LEC's assistant. Ask me about our courses, AVEVA/automation training, corporate clients, campus programs, placements, or how to get in touch.",
  },

  // ---------------------------------------------------------------------
  // ABOUT / COMPANY
  // ---------------------------------------------------------------------
  {
    keywords: ["about", "who are you", "what is ssmlec", "what is ssm lec", "company", "who is ssm", "background", "history", "founded", "established"],
    answer:
      "SSM Learning Excellence Centre (SSM LEC) is the talent development and workforce transformation division of SSM Infotech Solutions, which has 25+ years of expertise in Industrial Software, Industrial Automation, Digital Engineering, and IT solutions. SSM LEC was established in April 2023 to bridge the gap between academic education and industry expectations by building industry-ready professionals for engineering and digital transformation.",
  },
  {
    keywords: ["vision"],
    answer:
      "Our vision is empowering India's future workforce through industry-led learning that accelerates careers, inspires innovation, and transforms businesses.",
  },
  {
    keywords: ["mission"],
    answer:
      "Our mission: bridge the gap between academia and industry through experiential learning, develop professionals ready for Industry 4.0 and beyond, partner with enterprises to build agile future-ready workforces, deliver globally benchmarked learning experiences, and create meaningful career opportunities through skill development and industry partnerships.",
  },
  {
    keywords: ["promise", "philosophy", "values"],
    answer:
      "At SSM LEC, we believe education should create measurable outcomes, not just certificates. Every program is designed to build competence, confidence, and career success — while helping organizations develop skilled talent that delivers business impact from day one.",
  },
  {
    keywords: ["different", "why choose", "unique", "usp", "what makes you", "special"],
    answer:
      "SSM LEC delivers an industry-driven learning ecosystem, not conventional classroom training. That means: curriculum designed around current and future workforce needs, hands-on learning through real projects and case studies, training from experienced industry-certified practitioners, globally recognized technology platforms and certifications, strong career-readiness and placement support, and customized corporate learning for enterprise capability development.",
  },
  {
    keywords: ["domain", "domains", "focus area", "what do you cover", "core areas"],
    answer:
      "Our core learning domains include Industrial Automation, Industrial Software & Digital Engineering, AVEVA Technologies, SCADA & HMI Systems, PLC/DCS & Process Automation, Manufacturing Execution Systems (MES), Industrial Data Intelligence & PI System, Industrial AI & Digital Transformation, Data Analytics & Power BI, Full Stack Development, SQL & Database Technologies, Artificial Intelligence & Machine Learning, and Leadership/Professional/Corporate Capability Development.",
  },

  // ---------------------------------------------------------------------
  // COURSES / PROGRAMS — GENERAL
  // ---------------------------------------------------------------------
  {
    keywords: ["course", "courses", "program", "programs", "training", "offer", "teach", "learn", "curriculum"],
    answer:
      "SSMLEC offers career-focused training across three academies: the AI-Driven Industrial Automation Academy (Automation, SCADA, MES, AVEVA), the AI-Powered Software Engineering Academy (AI/ML, full stack, data, Power BI), and the Engineering Design Academy (AutoCAD). We deliver this as corporate training for companies and as campus skill-development programs for engineering colleges. Which one would you like details on?",
  },
  {
    keywords: ["solutions", "services", "what services", "internship program", "certification program", "corporate learning"],
    answer:
      "Our learning & workforce development solutions include: Corporate Learning & Technical Training (including Authorized AVEVA Certified Training), Industry Internship Programs (project-based, bridging academics and industry), Professional Certification Programs, Campus Skill Development Programs for universities, and Workshops/Seminars/Faculty Development sessions on emerging tech.",
  },

  // ---------------------------------------------------------------------
  // TECHNOLOGY ACADEMIES / FLAGSHIP PROGRAMS
  // ---------------------------------------------------------------------
  {
    keywords: ["academy", "academies", "flagship", "technology academy"],
    answer:
      "We run three Technology Academies: 1) AI-Driven Industrial Automation Academy, 2) AI-Powered Software Engineering Academy, and 3) Engineering Design Academy. Ask me about any one of these for its flagship programs.",
  },
  {
    keywords: ["automation academy", "smart manufacturing", "intelligent manufacturing", "industrial data analytics engineer"],
    answer:
      "The AI-Driven Industrial Automation Academy offers: the Intelligent Manufacturing Systems Program, the Smart Manufacturing Engineer Program, and the Industrial Data Analytics Engineer Program.",
  },
  {
    keywords: ["software engineering academy", "genai", "asp.net", "mvc", "front-end engineering", "power bi specialist", "nextgen ai", "predictive analytics program", "full stack program"],
    answer:
      "The AI-Powered Software Engineering Academy offers: SQL Database Specialist with GenAI, AI-Integrated Full Stack Program (MERN/Python), AI-Embedded Laravel Program, AI-Accelerated ASP.NET Core MVC Program, AI-Assisted Front-End Engineering Program, Power BI Specialist Program, NextGen AI & Machine Learning Program, and Industrial Data Science & Predictive Analytics Program.",
  },
  {
    keywords: ["engineering design academy", "autocad 2d", "autocad 3d", "mechanical design", "electrical design"],
    answer:
      "The Engineering Design Academy offers AutoCAD (2D & 3D) training, specialized for Mechanical and Electrical Engineering applications.",
  },

  // ---------------------------------------------------------------------
  // INDUSTRIAL AUTOMATION / AVEVA
  // ---------------------------------------------------------------------
  {
    keywords: ["automation", "plc", "scada", "robotics", "industry 4.0", "industrial", "dcs", "process automation"],
    answer:
      "Our Industrial Automation track covers PLC programming, SCADA systems, DCS & process automation, and Manufacturing Execution Systems, with hands-on lab work aimed at Industry 4.0 job roles.",
  },
  {
    keywords: [
      "aveva", "hmi", "historian", "mes", "batch management", "system platform",
      "intouch", "omi", "work tasks", "gisize", "reports for operation", "edge hmi",
      "wonderware", "pi system",
    ],
    answer:
      "We specialize in AVEVA industrial software: System Platform, InTouch & Edge HMI, Historian, MES (including Model-Driven MES), Batch Management, OMI, Work Tasks, GISIZE, and Reports for Operation — plus PI System and Industrial Data Intelligence. These are the core of our corporate training programs, and we're an Authorized AVEVA Certified Training provider, so certification is available.",
  },

  // ---------------------------------------------------------------------
  // AI / SOFTWARE
  // ---------------------------------------------------------------------
  {
    keywords: ["ai", "ml", "machine learning", "python", "data science", "data analytics", "software", "coding", "programming", "development", "it", "mern", "dotnet", ".net", "devops", "laravel", "database", "react", "sql", "power bi", "genai"],
    answer:
      "Our AI & Software Technologies programs cover Python, AI/ML, Data Science & Analytics, Power BI, MERN, .NET, DevOps, PHP Laravel, React, SQL/databases, and GenAI-integrated development — run for both corporate teams and college students under our AI-Powered Software Engineering Academy.",
  },

  // ---------------------------------------------------------------------
  // CAD
  // ---------------------------------------------------------------------
  {
    keywords: ["cad", "design", "drafting", "solidworks", "autocad"],
    answer:
      "The CAD Design program (AutoCAD 2D & 3D, specialized for Mechanical & Electrical Engineering) builds practical design and drafting skills used in engineering and manufacturing roles.",
  },

  // ---------------------------------------------------------------------
  // CORPORATE CLIENTS / CASE STUDIES
  // ---------------------------------------------------------------------
  {
    keywords: [
      "corporate", "clients", "companies trained", "who have you trained", "case studies",
      "past clients", "worked with", "corporate clients", "customers",
    ],
    answer:
      "We've delivered 60+ corporate training programs for companies including Reliance Industries, TCS, Accenture, Infosys, LTIMindtree, Schneider Electric, Rockwell Automation, GAIL, Colgate-Palmolive, Bridgestone, SAIL, Tetra Pak, Hitachi Energy, Jio-bp, Nestle, Optima India, Pharmadule (Morimatsu Group), Sage Automation, Mahanagar Gas, Safe-Tronics, Aztec Consulting, M.B. Control & Systems, AD Automatos, Veolia Water, KRIBHCO, Wave Infratech, Syntegon Technology, and Fox Solutions — mostly on AVEVA industrial software.",
  },
  {
    keywords: ["success stories", "stats", "numbers", "how many students", "how many companies", "track record", "impact"],
    answer:
      "SSM LEC has trained 750+ students and ambitious professionals through industry-aligned, expert-led training, and delivered 60+ customized corporate training programs to elevate workforce performance.",
  },
  {
    keywords: ["testimonial", "testimonials", "review", "reviews", "feedback", "what do clients say"],
    answer:
      "Clients like Hitachi Energy, Pharmadule (Morimatsu Group), TCS (Unilever MES program), and Bridgestone have praised our training for being well-structured, practically valuable, and delivered by knowledgeable, patient trainers who supported them through certification. Happy to share more specific feedback if you tell me which program you're interested in.",
  },

  // ---------------------------------------------------------------------
  // COLLEGES / CAMPUS PROGRAMS / MOUs
  // ---------------------------------------------------------------------
  {
    keywords: [
      "college", "colleges", "university", "universities", "campus program", "campus training",
      "student training", "workshop for students", "institute", "mou", "mous", "partnership with college",
    ],
    answer:
      "Our Campus Skill Development Program has run hands-on workshops at colleges including PP Savani University (Kosamba, Surat), R. N. G. Patel Institute of Technology (Bardoli), Dr. S.&S.S. Gandhi College of Engineering & Technology (Surat), N. G. Patel Polytechnic (Bardoli), Uka Tarsadia University, and Kaushalya The Skill University — covering AI & ML, AutoCAD, PLC & SCADA Automation, PHP Laravel, and DevOps. We hold formal MOUs with several of these institutions.",
  },

  // ---------------------------------------------------------------------
  // PLACEMENT
  // ---------------------------------------------------------------------
  {
    keywords: ["placement", "job", "jobs", "career", "hire", "hiring", "company", "companies", "internship", "internships"],
    answer:
      "SSMLEC provides placement support backed by 250+ hiring partners, plus internships and live-project exposure to help you land national and multinational company roles. We also run dedicated Industry Internship Programs that bridge academic learning with real industry requirements.",
  },

  // ---------------------------------------------------------------------
  // FEES / PRICING
  // ---------------------------------------------------------------------
  {
    keywords: ["fee", "fees", "cost", "price", "pricing", "payment"],
    answer:
      "Fees vary by program. Contact us directly at +91 99740 61290 or learning@ssm-infotech.com and our team will share the latest fee structure for the program you're interested in.",
  },

  // ---------------------------------------------------------------------
  // LOCATION
  // ---------------------------------------------------------------------
   {
    keywords: ["google location", "map"],
    answer:
      "Google map : google.com/maps?ll=21.147038,72.759704&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=7659867885406725320",
  },
  {
    keywords: ["address", "location", "where", "located", "directions", "office"],
    answer:
      "SSMLEC is located at 704, Luxuria Business Hub, Udhana Magdalla Road, New Magdalla, Surat, Gujarat – 395007, India. Google map : google.com/maps?ll=21.147038,72.759704&z=15&t=m&hl=en&gl=US&mapclient=embed&cid=7659867885406725320",
  },
 

  // ---------------------------------------------------------------------
  // CONTACT
  // ---------------------------------------------------------------------
  {
    keywords: ["contact", "phone", "email address", "number", "call", "email", "reach", "whatsapp", "instagram", "facebook", "social media"],
    answer:
      "You can reach SSM LEC at +91 99740 61290 / 74860 22026 / 99740 61293, or email learning@ssm-infotech.com. Find us on Facebook (facebook.com/ssminfotech.biz) and Instagram (@ssmlec24), or visit www.ssmlec.com. You can also use our Contact page for a callback.",
  },

  // ---------------------------------------------------------------------
  // EVENTS
  // ---------------------------------------------------------------------
  {
    keywords: ["event", "events", "workshop", "workshops", "seminar", "webinar", "upcoming", "techfest", "industrial visit"],
    answer:
      "We regularly run hands-on workshops, industrial visits, and expert sessions for both corporates and colleges — recent examples include AI & ML, DevOps, PHP Laravel, AutoCAD, and PLC & SCADA Automation workshops at partner universities. Check the Events page on this site for the latest schedule and countdown to the next one.",
  },

  // ---------------------------------------------------------------------
  // ADMISSIONS / ENROLLMENT
  // ---------------------------------------------------------------------
  {
    keywords: ["admission", "admissions", "apply", "enroll", "enrolment", "enrollment", "register", "join", "how to start", "get started"],
    answer:
      "To enroll, you can reach out through our Contact page or call/WhatsApp +91 99740 61290, and our team will guide you through the next steps — whether it's a corporate training program, a campus workshop, or an individual certification course.",
  },

  // ---------------------------------------------------------------------
  // GALLERY
  // ---------------------------------------------------------------------
  {
    keywords: ["gallery", "photos", "pictures", "images of training"],
    answer:
      "You can browse photos from our corporate training sessions, student programs, and events on our Gallery page — filter by Corporate Training, Students Training, or Events.",
  },

  // ---------------------------------------------------------------------
  // CERTIFICATION
  // ---------------------------------------------------------------------
  {
    keywords: ["certificate", "certification", "certified", "aveva certified", "globally recognized"],
    answer:
      "We offer industry-recognized certifications, including Authorized AVEVA Certified Training with optional AVEVA certification, designed to enhance your technical expertise and career opportunities.",
  },
];

const FALLBACK_ANSWER =
  "I don't have an exact answer for that yet. Could you rephrase, or would you like our contact details so our team can help directly?";

const WELCOME_MESSAGE = "Hello, I am LEXA. Ready to Assist You!";

// export { KNOWLEDGE_BASE, FALLBACK_ANSWER, WELCOME_MESSAGE };

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
        <div className="ssmlec-panel" role="dialog" aria-label="LEXA chat assistant">
          <div className="ssmlec-glow" aria-hidden="true" />
          <div className="ssmlec-panel-header">
            <div className="ssmlec-header-left">
              <span className="ssmlec-header-icon">
                <Sparkles size={16} />
              </span>
              <div>
                <div className="ssmlec-title">LEXA</div>
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
        <span>{open ? "Close" : "Chat with LEXA"}</span>
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
