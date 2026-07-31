# SSMLEC Website Chatbot

A floating chat widget for ssmlec.com, styled like an industrial control panel
(fits the Automation/PLC/SCADA theme). Answers visitor questions from a
built-in knowledge base — **no API key or backend needed.**

Built for your Vite + React (TypeScript) SPA, routed with `react-router-dom`.

## 1. Add the file to your project
Copy `SSMLECChatbot.tsx` into `src/components/`.

## 2. Render it once, globally
Open `src/App.tsx` — this is where your routes render inside `BrowserRouter`
(set up in `src/main.tsx`). Add the widget as a sibling to your routes so it
persists across every page instead of remounting on navigation:

```tsx
import SSMLECChatbot from "@/components/SSMLECChatbot";
// (adjust the import path if your project doesn't use the "@/" alias)

function App() {
  return (
    <>
      <Routes>
        {/* your existing <Route> elements */}
      </Routes>
      <SSMLECChatbot />
    </>
  );
}
```

The widget uses `lucide-react` for icons (Sparkles, MessageCircle, X, Send) —
your project already has this installed since `Home.tsx` uses it, so no new
package is needed.

## Theme
Colors are matched to your `Home.tsx`: the navy gradient from your hero
section (`--ssmlec-primary: #343968`) and the warm orange/coral accent your
buttons fade into (`--ssmlec-accent` → `--ssmlec-accent-2`, approximating
`oklch(0.72 0.18 35)`). These four CSS variables sit at the top of the
`CSS` block in the component — if your real `--primary` / `--accent` Tailwind
values differ, just swap the hex values there and the whole widget updates.

## 3. Edit the answers
Open `SSMLECChatbot.jsx` and find the `KNOWLEDGE_BASE` array near the top.
Each entry has:
- `keywords`: words that trigger the answer (lowercase)
- `answer`: what the bot says

I've pre-filled it based on what's publicly visible on ssmlec.com (courses,
placements, address). A few spots are marked with `[ADD ... HERE]` —
fill in your real phone number, email, fees, and admissions process there.

To add a new topic, just add a new object to the array:

```js
{
  keywords: ["timing", "hours", "batch", "schedule"],
  answer: "Batches run in morning, afternoon, and evening slots. Contact us for current timings.",
}
```

## Want it smarter (live AI instead of fixed answers)?
This version uses simple keyword matching, so it only knows what's in
`KNOWLEDGE_BASE`. If you'd rather it answer *any* question naturally using
an AI model, that needs a small backend (to keep an API key secret) — happy
to build that version too if you want it; just let me know.
