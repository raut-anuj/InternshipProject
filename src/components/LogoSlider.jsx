import LogoCard from "./LogoCard";

// const logos = [
//   "PaperBoat",
//   "IIFL",
//   "SpiceJet",
//   "Tata Play",
//   "Max Life",
//   "HDFC Bank",
// ];

const logos = [
  "/logo/1.png",
  "/logo/2.png",
  "/logo/3.png",
  "/logo/4.png",
  "/logo/5.png",
  "/logo/6.png",
  "/logo/7.png",
];

export default function LogoSlider() {
  const items = [...logos, ...logos];

  return (
    <section className="py-16 px-16 overflow-hidden">
      <h2 className="text-center text-xl font-semibold mb-10">
        Names Test
      </h2>

      <div className="overflow-hidden">
        <div className="marquee">
          {items.map((item, i) => (
            <LogoCard key={i} src={item} />
          ))}
        </div>
      </div>
    </section>
  );
}