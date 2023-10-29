import { Fragment } from "react";
import "./Second.css";
const Second = (props) => {
  let Content;
  if (props.right === true) {
    Content = (
      <div className="second">
        <div className="content2">
          {props.data.heading}
          {props.data.para}
        </div>
        <div className="tv">
          <img src={props.image} alt="tv containing some images" />
        </div>
      </div>
    );
  } else {
    Content = (
      <div className="second">
        <div className="tv">
          <img src={props.image} alt="tv containing some images" />
        </div>
        <div className="content2">
          {props.data.heading}
          {props.data.para}
        </div>
      </div>
    );
  }

  return <Fragment>{Content}</Fragment>;
};
export default Second;
