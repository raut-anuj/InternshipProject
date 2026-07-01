import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skeleton from "./reactquery/Skeleton";
import SkeletonPlaceHolder from "./cardHolder/SkeletonPlaceHolder";

function App() {
  return (
    <div>
      <SkeletonPlaceHolder />
    </div>
  );
}

export default App;





// import LogoCard from "./components/LogoCard";
// import LogoSlider from "./components/LogoSlider";
// import NameCard from "./components/NameCard";
// import NameSlider from "./components/NameSlider";
// import Slider from "./components/Slider";
// import GovtStyleSlider from "./components/GovtStyleSlider";
// import FadingLogoSlider from "./components/FadingLogoSlider";
// import DigiCard from "./components/DigiCard";
// // import AnimationCard from "./components/AnimationCard";
// import BrandLogo from "./components/BrandLogo";
// import BrandSlider from "./components/BrandSlider";
// import CardStackCarousel from "./components/CardStackCarousel";

// function App() {
//   // Brand names array
//   const brandNames = ["SRM", "CDot", "IIT", "IIM", "MIT", "UPSC", "NEET", "AIMS", ];

//   // BrandLogo components ko items array me convert karo
//   const brandLogos = brandNames.map((name, i) => (
//     <BrandLogo key={i} name={name} />
//   ));

//   return (
//     <div>
//       <NameSlider />
//       {/* Items pass karna zaroori hai */}
//       <CardStackCarousel items={brandLogos} speed={2500} autoplay={true} />
//       <NameCard />
//       <Slider />
//       <LogoCard />
//       <LogoSlider />
//       <GovtStyleSlider />
//       <FadingLogoSlider />
//       <DigiCard />
//     </div>
//   );
// }

// export default App;


