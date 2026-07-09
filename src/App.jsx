import PhotoSlider from "./ZohoImageSlider/PhotoSlider";
import Slider from "./Slider/ExpressiveFeaturesSlider";
import EnhancedSecurities from "./Enhanced Securities/EnhancedSecurities";
import WebsiteStats from "./MyLocal/UI/WebsiteStats"

import "./Slider/expressive_features_slider.css"
import "./Enhanced Securities/EnhancedSecurities.css";
import "./ZohoImageSlider/slider.scss";
import "./MyLocal/UI/website_counter.css"

import "./App.css";
function App() {

  return (
    <div>
      <WebsiteStats />
      <PhotoSlider />
      <Slider/>
      <EnhancedSecurities />
    </div>
  );
}

export default App;
