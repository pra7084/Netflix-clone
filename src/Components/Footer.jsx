import { Fragment } from "react"
import './Footer.css'
const Footer =()=>{
    return (
        <Fragment>
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
      </Fragment>
    );
}
export default Footer;