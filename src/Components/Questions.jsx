import { useState } from "react";
import "./Questions.css";
const Questions = () => {
  let addPara1 = (
      <p>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV shows, movies, anime, documentaries and more-on
        thousands of internet-connected devices.
       <br/>
       <br/>
        You can watch as much as you want, whenever you want, without a single
        ad-all for one low monthly price. There's always something new to
        discover, and new TV shows and movies are added every week!
      </p>
         
  );
  let addPara2=(
       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to 
        ₹ 649 a month. No extra costs, no contracts.</p>
  );
    let addPara3=(
       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to 
        ₹ 649 a month. No extra costs, no contracts.</p>
  );

    let addPara4=(
       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to 
        ₹ 649 a month. No extra costs, no contracts.</p>
  );
    let addPara5=(
       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to 
        ₹ 649 a month. No extra costs, no contracts.</p>
  );
    let addPara6=(
       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to 
        ₹ 649 a month. No extra costs, no contracts.</p>
  );

  const [clicked1, setClicked1] = useState(false);
  function clickHandler1() {
    if(clicked1===true){
       setClicked1(false);
    }
    else
    setClicked1(true);
  }
    const [clicked2, setClicked2] = useState(false);
  function clickHandler2() {
   if(clicked2===true){
       setClicked2(false);
    }
    else
    setClicked2(true);
   
  }

    const [clicked3, setClicked3] = useState(false);
  function clickHandler3() {
    if(clicked3===true){
       setClicked3(false);
    }
    else
    setClicked3(true);
  }
    const [clicked4, setClicked4] = useState(false);
  function clickHandler4() {
    if(clicked4===true){
       setClicked4(false);
    }
    else
    setClicked4(true);
  }
    const [clicked5, setClicked5] = useState(false);
  function clickHandler5() {
    if(clicked5===true){
       setClicked5(false);
    }
    else
    setClicked5(true);
  }
    const [clicked6, setClicked6] = useState(false);
  function clickHandler6() {
    if(clicked6===true){
       setClicked6(false);
    }
    else
    setClicked6(true);
  }
  return (
    <div className="six">
      <div className="title">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="ques" onClick={clickHandler1}>
        <h5>What is Netflix</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked1&&<span className="ques-content1">{addPara1}</span>}
      <div className="ques" onClick={clickHandler2}>
        <h5>How much does Netflix cost?</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked2&&<span className="ques-content1">{addPara2}</span>}
      <div className="ques" onClick={clickHandler3}>
        <h5>Where can I watch</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked3&&<span className="ques-content1">{addPara3}</span>}
      <div className="ques" onClick={clickHandler4}>
        <h5>How do i cancel</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked4&&<span className="ques-content1">{addPara4}</span>}
      <div className="ques" onClick={clickHandler5}>
        <h5>What can i watch on netflix</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked5&&<span className="ques-content1">{addPara5}</span>}
      <div className="ques" onClick={clickHandler6}>
        <h5>Is Netflix good for kids</h5>
        <i className="fa-solid fa-plus"></i>
      </div>
      {clicked6&&<span className="ques-content1">{addPara6}</span>}
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
