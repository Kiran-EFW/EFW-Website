import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section_projects-cta">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="w-layout-grid home-cta_component">
              <div className="home-cta_content">
                <h2 className="heading-style-h3">
                  Offset your personal carbon emissions, start investing in our future.
                </h2>
                <div className="home-cta_button-wrapper">
                  <Button className="button white w-button">
                    EFWT Presale Live Now
                  </Button>
                  <Link to="/faqs" className="button is-black w-button">
                    FAQs
                  </Link>
                </div>
              </div>
              <img
                src="/images/logo-cta.png"
                loading="lazy"
                width="116"
                alt="Blue Logo EFW Token"
                className="home-cta_efw-logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
