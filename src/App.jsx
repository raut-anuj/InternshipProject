// import User from "./components/User"
//  import DigiCard from "./components/DigiCard"
// import LogoSlider from "./components/LogoSlider"
// import Animation  from "./pages/Animation";
// import Carousel from "./components/Carousel";
// import NameSlider from "./components/NameSlider";
// import Slider from "./components/Slider";
// import FadingLogoSlider from "./components/FadingLogoSlider";
// import BrandSlider from "./components/BrandSlider";
// import AdvancedDualSlider from "./components/AdvancedDualSlider";
// import GovtStyleSlider from "./components/GovtStyleSlider";

import CardStackCarousel from "./components/CardStackCarousel";
import SpotlightBrandSlider from "./components/SpotlightBrandSlider";

const data = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 1", "Card 2", "Card 3", "Card 4"];

function App() {
  return (
    <div>
          {/* {<SpotlightBrandSlider  /> } */}
          {<CardStackCarousel items={data} />}

          {/* {<AdvancedDualSlider />} */}
          {/* {<FadingLogoSlider items={data}/>} */}
          {/* {<NameSlider />} */}
          {/* {<BrandSlider />} */}
          {/* {<Carousel items={data} />} */}
          {/* {<LogoSlider />} */}
          {/* {<Animation  /> } */}
          {/* {<Slider />} */}
          {/* {<GovtStyleSlider />} */}
          {/* {<DigiCard />   } */}
          
        

     </div> 
  )
}
export default App;