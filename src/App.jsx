import WebsiteStats from "./Archive/UI/WebsiteStats"
import "./Archive/UI/website_counter.css"

import Dashboard1 from "./Archive/Dashboard/Dashboard1"
import Dashboard2 from "./Archive/Dashboard/Dashboard2"
import "./Archive/Dashboard/style.css"

import BrandSlider from "./Archive/Brand Slider/BrandSlider"
import "./Archive/Brand Slider/slider.scss"

import StatsSection from "./Archive/ZohoCard/StatsSection"

function App() {

  return (
    <div>
      {/* <Dashboard1 /> */}
      <Dashboard2 />
      {/* <BrandSlider /> */}
      {/* <WebsiteStats /> */}
      <StatsSection/>
    </div>
  );
}

export default App;