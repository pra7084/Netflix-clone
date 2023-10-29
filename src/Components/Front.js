import logo from '../Assets/logo1.png';
import './Front.css';
const Front=()=>{
    return <div>
        <div className="front">
      <div className="navbar_logo">
        <img src={logo} alt="netflix logo" />
      </div>
      <div className="nav-button">
        <div>
          <button id="lang">English</button>
        </div>

        <button id="sign-in">Sign in</button>
      </div>
      <div className="content-front">
        <h1>Enjoy big Movies, hit series and more from $149.</h1>
        <p>Join today. Cancel anytime.</p>
        <p>
          Ready to watch ? Enter you email to create or restart your membership
        </p>
        <div className="email-form">
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