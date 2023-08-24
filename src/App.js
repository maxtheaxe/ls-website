import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import template1 from "./images/template1.jpg";
import template2 from "./images/template2.jpg";
import template4 from "./images/template4.jpg";
import "./App.css";

function App() {
  return (
    <Carousel autoPlay={true} interval={5000} infiniteLoop={true} >
      <div>
        <img src={template4} />
      </div>
      <div>
        <img src={template1} />
      </div>
      <div>
        <img src={template2} />
      </div>
    </Carousel>
  );
}

export default App;
