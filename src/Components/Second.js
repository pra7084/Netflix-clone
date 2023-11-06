import { Fragment } from "react";
import styles from './Second.module.css';
const Second = (props) => {
  let Content;
  if (props.right === true) {
    Content = (
      <div className={styles.second}>
        <div className={styles.content2}>
          {props.data.heading}
          {props.data.para}
        </div>
        <div className={styles.tv}>
          <img src={props.image} alt="tv containing some images" />
        </div>
      </div>
    );
  } else {
    Content = (
      <div className={styles.second}>
        <div className={styles.tv}>
          <img src={props.image} alt="tv containing some images" />
        </div>
        <div className={styles.content2}>
          {props.data.heading}
          {props.data.para}
        </div>
      </div>
    );
  }

  return <Fragment>{Content}</Fragment>;
};
export default Second;
