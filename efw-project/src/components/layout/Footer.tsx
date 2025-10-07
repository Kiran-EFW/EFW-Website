import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer_component">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-top padding-xlarge">
            <div className="padding-bottom padding-0">
              <div className="w-layout-grid footer_top-wrapper-copy">
                <div className="footer_left-wrapper">
                  <Link to="/" className="footer_logo-link w-nav-brand">
                    <img src="/images/Logo-bg-removed.png" loading="lazy" alt="Energy Future World Logo" />
                  </Link>
                  <div className="footer_company-details">
                    <div className="footer_credit-text">ENERGY FW Ltd<br />Registered number: 14600160</div>
                    <div className="footer_company-address">
                      <a href="https://g.co/kgs/v7HLP9" target="_blank" className="footer_map-link w-inline-block">
                        <div className="footer_pin-icon w-embed">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M128 16a88.1 88.1 0 0 0-88 88c0 75.3 80 132.17 83.41 134.55a8 8 0 0 0 9.18 0C136 236.17 216 179.3 216 104a88.1 88.1 0 0 0-88-88Zm0 56a32 32 0 1 1-32 32a32 32 0 0 1 32-32Z"></path>
                          </svg>
                        </div>
                      </a>
                      <div className="footer_credit-text">
                        <strong>5 Brayford Square, London, E1 0SG</strong>
                      </div>
                    </div>
                  </div>
                  <div className="footer_credit-text">
                    Disclaimer: Investment presents a risk of loss of capital and liquidity.
                  </div>
                  <div className="footer_social-link-list">
                    <a href="https://web.facebook.com/people/Energy-Future-World/61560371544557/" target="_blank" className="footer_social-link w-inline-block">
                      <img src="/images/facebook-app-symbol.png" loading="lazy" alt="Facebook" className="image-12" />
                    </a>
                    <a href="https://www.instagram.com/efw_energyfutureworld/" target="_blank" className="footer_social-link w-inline-block">
                      <div className="footer_social-icon w-embed">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z" fill="CurrentColor"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://x.com/EFW_Protocol" target="_blank" className="footer_social-link w-inline-block">
                      <img src="/images/twitter.png" loading="lazy" alt="Twitter" className="image-12" />
                    </a>
                    <a href="https://uk.linkedin.com/company/energy-future-world-efw" target="_blank" className="footer_social-link w-inline-block">
                      <div className="footer_social-icon w-embed">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8 18C8.27614 18 8.5 17.7761 8.5 17.5V10.5C8.5 10.2239 8.27614 10 8 10H6.5C6.22386 10 6 10.2239 6 10.5V17.5C6 17.7761 6.22386 18 6.5 18H8ZM7.25 9C6.42157 9 5.75 8.32843 5.75 7.5C5.75 6.67157 6.42157 6 7.25 6C8.07843 6 8.75 6.67157 8.75 7.5C8.75 8.32843 8.07843 9 7.25 9ZM17.5 18C17.7761 18 18 17.7761 18 17.5V12.9C18.0325 11.3108 16.8576 9.95452 15.28 9.76C14.177 9.65925 13.1083 10.1744 12.5 11.1V10.5C12.5 10.2239 12.2761 10 12 10H10.5C10.2239 10 10 10.2239 10 10.5V17.5C10 17.7761 10.2239 18 10.5 18H12C12.2761 18 12.5 17.7761 12.5 17.5V13.75C12.5 12.9216 13.1716 12.25 14 12.25C14.8284 12.25 15.5 12.9216 15.5 13.75V17.5C15.5 17.7761 15.7239 18 16 18H17.5Z" fill="CurrentColor"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://discord.com/invite/VK3J9hN7gm" target="_blank" className="footer_social-link w-inline-block">
                      <div className="footer_social-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://t.me/EnergyFutureWorldToken" target="_blank" className="footer_social-link w-inline-block">
                      <div className="footer_social-icon w-embed">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M9.98 17.2c-.3 0-.25-.11-.36-.39L8.7 13.5l8.4-5.3c.39-.26.09-.4-.3-.14l-10.4 6.5l-4.5-1.4c-.98-.31-.99-.98.2-1.44l17.6-6.8c.8-.3 1.5.2 1.2 1.4L19.5 19.4c-.2.98-.8 1.2-1.6.75l-4.4-3.2l-2.2 2.1c-.1.1-.2.1-.3.1z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="w-layout-grid footer_menu-wrapper">
                  <div className="footer_link-list">
                    <div className="footer_column-title">Company</div>
                    <a href="#Mission" className="footer_link">Mission</a>
                    <a href="#How-it-works" className="footer_link">How it works</a>
                    <Link to="/efwt" className="footer_link">EFWT</Link>
                    <a href="https://docs.energyfuture.world/" target="_blank" className="footer_link" rel="noopener">Whitepaper</a>
                    <Link to="/projects" className="footer_link">Projects</Link>
                  </div>
                  <div className="footer_link-list">
                    <div className="footer_column-title">Site</div>
                    <Link to="/contact" className="footer_link">Contact us</Link>
                    <Link to="/privacy-policy" className="footer_link">Privacy Policy</Link>
                    <a href="#" className="footer_link">Cookie Settings</a>
                  </div>
                </div>
              </div>
              <div className="div-block-26">
                <div className="footer_credit-text">© 2025 ENERGY FW Ltd. All Rights Reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
