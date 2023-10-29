import "./App.css";
import images from "./Assets/tv.png";
import image2 from "./Assets/str.jpg";
import image3 from "./Assets/tv3.png";
import image4 from "./Assets/child.png";
import Front from "./Components/Front.js";
import Second from "./Components/Second";
import Questions from "./Components/Questions"; 
function App() {
      const Ddata = [
    {
      para: (
        <p>
          Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
          players and more.
        </p>
      ),
      heading: <h1>Enjoy on your tv</h1>
    },
    {
         para: (
        <p>
          Save your favourites easily and always have something to watch.
        </p>
      ),
      heading: <h1>Download your shows to watch offline</h1>
    },
    {
         para: (
        <p>
         Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
        </p>
      ),
      heading: <h1>Watch everywhere</h1>
    },
    {   para: (
        <p>
        Send children on adventures with their favourite characters in a space made just for them—free with your membership.
        </p>
      ),
      heading: <h1>Create profiles for kids
</h1>}
  ];
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
