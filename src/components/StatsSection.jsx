// src/components/StatsSection.jsx
import AnimationCard from "./AnimationCard";

export default function StatsSection() {
  // Yahan aapke 4 cards ka data hai. Aap numbers aur text ko badal bhi sakte hain.
  const statsData = [
    { number: 1000, title: "Successful Batches", suffix: "+" },
    { number: 250, title: "Acres Green Campus", suffix: "+" },
    { number: 500, title: "Expert Faculties", suffix: "" },
    { number: 950, title: "Placements Done", suffix: "+" },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 flex flex-col items-center justify-center min-h-screen">
      

      {/* 4 Cards Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full justify-items-center">
        {statsData.map((card, index) => (
          <AnimationCard
            key={index}
            number={card.number}
            title={card.title}
            suffix={card.suffix}
          />
        ))}
      </div>
    </div>
  );
}