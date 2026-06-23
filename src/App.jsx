<<<<<<< HEAD
import User from "./components/User"
import DigiCard from "./components/DigiCard"
import LogoSlider from "./components/LogoSlider"
import Animation  from "./pages/Animation";
import CardStackCarousel from "./components/CardStackCarousel";
import Carousel from "./components/Carousel";
import NameSlider from "./components/NameSlider";
import Slider from "./components/Slider";

const data = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 1", "Card 2", "Card 3", "Card 4"];

function App() {
  return (
     <div>
          {/* <NameSlider /> */}
          {/* <CardStackCarousel items={data} /> */}
          {/* <Carousel items={data} /> */}
          {/* <LogoSlider /> */}
          {/* <Animation  />  */}
          {/* <Slider /> */}
        
       {/* <DigiCard />    */}
=======
import LogoSlider from "./components/LogoSlider";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <LogoSlider />
      
      <Card
        users="70+ Crore"
        documents="850+ Crore"
        title="DigiLocker" 
      />
    </div>
  );
}
>>>>>>> ce54efb186a258f253bdc99a50eb586695c68393

     </div> 
  )
}
export default App;