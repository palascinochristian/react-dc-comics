import Icons from "../components/Icons";

export default function Footer() {
  return (
    <>
      <Icons />
      <footer>
        <div className="footer-top">
          <div className="row container">
            <div className="left-col">
              <div className="row">
                <div className="col">
                  <h3>DC COMICS</h3>
                  <ul>
                    <li>
                      <a href="#">Characters</a>
                    </li>
                    <li>
                      <a href="#">Comics</a>
                    </li>
                    <li>
                      <a href="#">Movies</a>
                    </li>
                    <li>
                      <a href="#">TV</a>
                    </li>
                    <li>
                      <a href="#">Games</a>
                    </li>
                    <li>
                      <a href="#">Videos</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                  </ul>
                  <h3>SHOP</h3>
                  <ul>
                    <li>
                      <a href="#">Shop DC</a>
                    </li>
                    <li>
                      <a href="#">Shop DC Collectibles</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>DC</h3>
                  <ul>
                    <li>
                      <a href="#">Terms Of Use</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy New</a>
                    </li>
                    <li>
                      <a href="#">Ad Choices</a>
                    </li>
                    <li>
                      <a href="#">Advertising</a>
                    </li>
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Subscriptions</a>
                    </li>
                    <li>
                      <a href="#">Talent Workshops</a>
                    </li>
                    <li>
                      <a href="#">CPSC Certificates</a>
                    </li>
                    <li>
                      <a href="#">Ratings</a>
                    </li>
                    <li>
                      <a href="#">Shop Help</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col">
                  <h3>SITES</h3>
                  <ul>
                    <li>
                      <a href="#">DC</a>
                    </li>
                    <li>
                      <a href="#">MAD Magazine</a>
                    </li>
                    <li>
                      <a href="#">DC Kids</a>
                    </li>
                    <li>
                      <a href="#">DC Universe</a>
                    </li>
                    <li>
                      <a href="#">DC Power Visa</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-col">
              <img
                className="footer-logo"
                src="/imgs/dc-logo-bg.png"
                alt="dc logo"
              />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row container">
            <div className="left-col">
              <button>SIGN UP NOW!</button>
            </div>
            <div className="right-col">
              <a className="follow" href="">
                FOLLOW US
              </a>
              <div className="footer-icons">
                <img src="/imgs/footer-facebook.png" alt="facebook" />
                <img src="/imgs/footer-twitter.png" alt="twitter" />
                <img src="/imgs/footer-youtube.png" alt="youtube" />
                <img src="/imgs/footer-pinterest.png" alt="pinterest" />
                <img src="/imgs/footer-periscope.png" alt="periscope" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
