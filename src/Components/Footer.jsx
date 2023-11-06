import { Fragment } from "react"
import styles from './Footer.module.css';
const Footer =()=>{
    return (
        <Fragment>
  <div className={styles.foot_sign}>
        <div className={styles.footpara}>
          Ready to watch? Enter your email to create or restart your membership.
        </div>
        <div className={styles.wrapper}>
          <div className={styles.foot_mail}>
            <label style={{ fontSize: "15px" }}>Email address</label>
            <input type="email" id="gmail" />
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      </Fragment>
    );
}
export default Footer;