// { src } Kya Hai?
// function LogoCard({ src })

// Ye props destructuring hai.


// shrink-0

// bolta hai:

// Is element ko compress mat karo.

// Ye component prop ke through aane wale text ko large heading ke form me display karta hai aur marquee animation ke items ko render karne ke liye use hota hai.

// export default function LogoCard({ src }) {
//   return (
//     <div className="shrink-0 px-10">
//       <h2 className="text-3xl font-semibold">
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
        className="h-62.5 w-auto object-cover rounded-xl select-none"
      />
    </div>
  );
}