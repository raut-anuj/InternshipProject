// export default function LogoCard({ src }) {
//   return (
//     <div className="shrink-0 px-10">
//       <h2 className="text-4xl font-bold">
//         {src}
//       </h2>
//     </div>
//   );
// }

export default function LogoCard({ src }) {
  return (
    <div className="shrink-0 px-4">
      <img
        src={src}
        alt="photo"
        draggable="false"
        className="h-[250px] w-auto object-cover rounded-xl select-none"
      />
    </div>
  );
}