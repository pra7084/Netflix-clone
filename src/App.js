
import images from "./Assets/tv.png";
import image2 from "./Assets/str.jpg";
import image3 from "./Assets/tv3.png";
import image4 from "./Assets/child.png";
import Front from "./Components/Front.js";
import Second from "./Components/Second";
import Questions from "./Components/Questions"; 
import Ddata from "./Components/DummyAppData.jsx";
function App() {
  const first = true;
  return (
    <div>
      <Front />
      <Second image={images} data={Ddata[0]} />
      <Second image={image2} right={first} data={Ddata[1]} />
      <Second image={image3} right={!first} data={Ddata[2]} />
      <Second image={image4} right={first} data={Ddata[3]} />
      <Questions/>

    </div>
  );
};


export default App;
