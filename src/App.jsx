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


// function App() {
//   return (
//     <div>
//         <NameSlider/>
//         <NameCard/>
//         <Slider/>
//         <LogoCard/>
//         <LogoSlider/>
//         <GovtStyleSlider/>
//         <FadingLogoSlider/>
//     </div>
//   );
// }
// export default App;

