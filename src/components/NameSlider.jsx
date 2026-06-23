import NameCard from "./NameCard";

 const logos = [
   "PaperBoat",
   "IIFL",
   "SpiceJet",
   "HDFC Bank",
   "IDFC Bank",
   "Anuj Kumar",
   "Union Bank",
   "HDFC Bank",
];


export default function NameSlider() {
  const items = [...logos, ...logos];

  return (
    <section className="py-16 px-16 overflow-hidden">

      <div className="overflow-hidden">
        <div className="marquee">
          {items.map((item, i) => (
            <NameCard key={i} src={item} />
          ))}
        </div>
      </div>
    </section>
  );
}