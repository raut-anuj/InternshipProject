import { useState } from "react";

export default function Slider() {
  const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];
  const [active, setActive] = useState(1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 gap-6 px-4">
      {/* Left Arrow */}
      <button
        onClick={() => setActive(active - 1)}
        disabled={active === 0}
        className="h-12 w-12 shrink-0 rounded-full bg-black text-white shadow-lg transition active:scale-90 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>

      {/* Viewport (Fixed 600px = exact 3 cards ki width) */}
      <div className="w-150 overflow-hidden py-10">
        <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(${(1 - active) * 200}px)` }}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={`w-44 h-60 mx-3 shrink-0 flex items-center justify-center rounded-2xl border bg-white font-semibold text-lg transition-all duration-500 select-none ${
                i === active ? "scale-110 z-10 shadow-2xl -translate-y-3 border-gray-400 text-black" : "scale-90 opacity-40 text-gray-400"
              }`}
            >
              {c}
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => setActive(active + 1)}
        disabled={active === cards.length - 1}
        className="h-12 w-12 shrink-0 rounded-full bg-black text-white shadow-lg transition active:scale-90 disabled:opacity-30 disabled:pointer-events-none flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}