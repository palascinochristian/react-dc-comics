import Icons from "../components/Icons";
import footerLinks from "../Data/footerLinks";

export default function Footer() {
  return (
    <>
      <Icons />
      <footer>
        <div className="footer-top">
          <div className="row container">
            <div className="left-col">
              <div className="row">
                {footerLinks.map((section) => (
                  <div key={section.id} className="col">
                    <h3>{section.title}</h3>
                    {/* Controllo su più sezioni */}
                    {section.sections ? (
                      section.sections.map((subSection) => (
                        <ul key={subSection.id}>
                          {subSection.title && <h4>{subSection.title}</h4>}
                          {subSection.links.map((link, index) => (
                            <li key={index}>
                              <a href={link.url}>{link.name}</a>
                            </li>
                          ))}
                        </ul>
                      ))
                    ) : (
                      <ul>
                        {section.links.map((link, index) => (
                          <li key={index}>
                            <a href={link.url}>{link.name}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
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
