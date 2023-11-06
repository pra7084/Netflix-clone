import { useState } from "react";
import DUMMY_ANS from "./Dummydata";
import Footer from "./Footer";
import classes from './Questions.module.css';
const Questions = () => {
  const [clicked1, setClicked1] = useState(false);
  function clickHandler1() {
    if (clicked1 === false) {
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
    }
    if (clicked1 === true) {
      setClicked1(false);
    } else setClicked1(true);
  }
  const [clicked2, setClicked2] = useState(false);
  function clickHandler2() {
    if (clicked2 === false) {
      setClicked1(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
    }
    if (clicked2 === true) {
      setClicked2(false);
    } else setClicked2(true);
  }
  const [clicked3, setClicked3] = useState(false);
  function clickHandler3() {
    if (clicked4 === false) {
      setClicked1(false);
      setClicked2(false);
      setClicked4(false);
      setClicked5(false);
      setClicked6(false);
    }
    if (clicked3 === true) {
      setClicked3(false);
    } else setClicked3(true);
  }
  const [clicked4, setClicked4] = useState(false);
  function clickHandler4() {
    if (clicked4 === false) {
      setClicked1(false);
      setClicked2(false);
      setClicked3(false);
      setClicked5(false);
      setClicked6(false);
    }
    if (clicked4 === true) {
      setClicked4(false);
    } else setClicked4(true);
  }
  const [clicked5, setClicked5] = useState(false);
  function clickHandler5() {
    if (clicked5 === false) {
      setClicked1(false);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked6(false);
    }
    if (clicked5 === true) {
      setClicked5(false);
    } else setClicked5(true);
  }
  const [clicked6, setClicked6] = useState(false);
  function clickHandler6() {
    if (clicked6 === false) {
      setClicked1(false);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
      setClicked5(false);
    }
    if (clicked6 === true) {
      setClicked6(false);
    } else setClicked6(true);
  }
  return (
    <div className={classes.six}>
      <div className={classes.title}>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={classes.ques} onClick={clickHandler1}>
        <h5>What is Netflix</h5>
       {!clicked1&&<i className="fa-solid fa-plus"></i>}
       {clicked1&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked1 && <span className={classes.ques_content1}>{DUMMY_ANS[0].para}</span>}
      <div className={classes.ques} onClick={clickHandler2}>
        <h5>How much does Netflix cost?</h5>
       {!clicked2&&<i className="fa-solid fa-plus"></i>}
       {clicked2&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked2 && <span className={classes.ques_content1}>{DUMMY_ANS[1].para}</span>}
      <div className={classes.ques} onClick={clickHandler3}>
        <h5>Where can I watch</h5>
        {!clicked3&&<i className="fa-solid fa-plus"></i>}
       {clicked3&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked3 && <span className={classes.ques_content1}>{DUMMY_ANS[2].para}</span>}
      <div className={classes.ques} onClick={clickHandler4}>
        <h5>How do i cancel</h5>
        {!clicked4&&<i className="fa-solid fa-plus"></i>}
       {clicked4&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked4 && <span className={classes.ques_content1}>{DUMMY_ANS[3].para}</span>}
      <div className={classes.ques} onClick={clickHandler5}>
        <h5>What can i watch on netflix</h5>
       {!clicked5&&<i className="fa-solid fa-plus"></i>}
       {clicked5&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked5 && <span className={classes.ques_content1}>{DUMMY_ANS[4].para}</span>}
      <div className={classes.ques} onClick={clickHandler6}>
        <h5>Is Netflix good for kids</h5>
        {!clicked6&&<i className="fa-solid fa-plus"></i>}
       {clicked6&&<i class="fa-solid fa-xmark"></i>}
      </div>
      {clicked6 && <span className={classes.ques_content1}>{DUMMY_ANS[5].para}</span>}
      <Footer/>
    </div>
  );
};
export default Questions;
