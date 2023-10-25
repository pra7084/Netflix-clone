import image from  '../Assets/tv.png'
const Second = () => {

  return (
    
      <div className="second">
        <div className="content2">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="tv">
          <img src={image} alt="tv containing some images" />
        </div>
      </div>
    
  );
};
export default Second;
