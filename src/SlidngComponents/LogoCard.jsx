export default function LogoCard({ src }) {
  return (
    <div className="shrink-0 px-4">
      <img
        src={src}
        alt="photo"
        draggable="false"
        className="h-62.5 w-auto object-cover rounded-xl select-none"
      />
    </div>
  );
}