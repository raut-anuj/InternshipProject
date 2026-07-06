import LogoCard from "./SlidngComponents/LogoCard";
import LogoSlider from "./SlidngComponents/LogoSlider";
import NameCard from "./SlidngComponents/NameCard";
import NameSlider from "./SlidngComponents/NameSlider";
import Slider from "./Slider/Slider";
import GovtStyleSlider from "./SlidngComponents/GovtStyleSlider";
import FadingLogoSlider from "./SlidngComponents/FadingLogoSlider";
import DigiCard from "./SlidngComponents/DigiCard";
import AdvancedDualSlider from "./SlidngComponents/AdvancedDualSlider";
import BrandLogo from "./SlidngComponents/BrandLogo";
import BrandSlider from "./SlidngComponents/BrandSlider";
import CardStackCarousel from "./SlidngComponents/CardStackCarousel";

// function App() {
//   const brandNames = ["SRM", "CDot", "IIT", "IIM", "MIT", "UPSC", "NEET", "AIMS", ];
//   const brandLogos = brandNames.map((name, i) => (
//     <BrandLogo key={i} name={name} />
//   ));

//   return (
//     <div>
//       <NameSlider />
//       <AdvancedDualSlider />
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


// {Zoho Image.}

import PhotoSlider from "./ZohoImageSlider/PhotoSlider";
import ExpressiveFeaturesNoCard from "./ExpressiveFeaturesNoCard/ExpressiveFeaturesNoCard"
import ExpressiveFeatures from "./ExpressiveFeatures/ExpressiveFeatures"
import StatsSection from "./ZohoCard/StatsSection"
import "./App.css";

function App() {

  return (
    <div>
      <PhotoSlider />
       <ExpressiveFeatures />
      <ExpressiveFeaturesNoCard />
      <StatsSection />
      <Slider />
    </div>
  );
}

export default App;
