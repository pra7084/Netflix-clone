import { useState } from "react";
import "./Questions.css";
const Questions = () => {
  let addPara = (
      <p>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries and more-on
        thousands of internet-connected devices.
    
        You can watch as much as you want, whenever you want, without a single
        ad-all for one low monthly price. There's always something new to
        discover, and new TV shows and movies are added every week!
      </p>
   
  );
  const [clicked, setClicked] = useState(false);
  function clickHandler() {
    setClicked(true);
    console.log("hello");
  }
  return (
    <div className="six">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="ques" onClick={clickHandler}>
        <h5>What is Netflix</h5>
        {clicked&&addPara}
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="ques">
        <h5>How much does Netflix cost?</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="ques">
        <h5>Where can I watch</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="ques">
        <h5>How do i cancel</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="ques">
        <h5>What can i watch on netflix</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="ques">
        <h5>Is Netflix good for kids</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="foot-sign">
        <div className="foot-para">
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className="wrapper">
          <div className="foot-mail">
            <label style={{ fontSize: "15px" }}>Email address</label>
            <input type="email" id="gmail" />
          </div>
          <div className="get-star">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Questions;
