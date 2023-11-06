import logo from '../Assets/logo1.png';
import classes from './Front.module.css';
const Front=()=>{
    return <div>
        <div className={classes.front}>
      <div className={classes.navbar_logo}>
        <img src={logo} alt="netflix logo" />
      </div>
      <div className={classes.nav_button}>
        <div>
          <button id={classes.lang}>English</button>
        </div>

        <button id={classes.sign_in}>Sign in</button>
      </div>
      <div className={classes.content_front}>
        <h1>Enjoy big Movies, hit series and more from $149.</h1>
        <p>Join today. Cancel anytime.</p>
        <p>
          Ready to watch ? Enter you email to create or restart your membership
        </p>
        <div className={classes.email_form}>
          <form>
            <input type="email" placeholder="Email address" />
          </form>
          <button>Get Started</button>
        </div>
      </div>
    </div>
    </div>
}

export default Front;