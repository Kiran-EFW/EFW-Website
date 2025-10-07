const Overview = () => {
  return (
    <section id="Overview" className="section_home-overview">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="w-layout-grid home-overview_component">
              <div className="home-overview_content-wrapper">
                <div className="home-overview_headline">
                  <div className="horizontal-divider hide-tablet"></div>
                  <div className="small-caps-headline">Overview</div>
                </div>
                <div className="padding-bottom padding-custom1"></div>
                <h2>How EFW works?</h2>
                <div className="padding-bottom padding-custom1"></div>
                <p className="text-size-medium">
                  Investors swap fiat/digital currency and receive tradeable EFWT, EFWT holders get to vote on key EFW Project governance.
                  EFW Projects are designed to democratize access to renewable energy Investments by leveraging blockchain technology to make them transparent, accessible, and efficient.
                </p>
              </div>
              <div className="home-overview_image-wrapper">
                <img
                  src="/images/EFW-Dashboard.png"
                  loading="lazy"
                  alt="EFW Dashboard Overview"
                  width="560"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
