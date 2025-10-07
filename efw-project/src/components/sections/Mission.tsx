const Mission = () => {
  return (
    <section id="Mission" className="section_home-mission">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-bottom padding-xlarge">
            <div className="home-mission_component">
              <div className="home-mission_content-left">
                <div className="home-mission_main-image-wrapper">
                  <img
                    src="/images/Solar.png"
                    loading="lazy"
                    alt="Solar Power Plant Illustration"
                    width="333"
                    className="home-mission_image is-solar"
                  />
                  <img
                    src="/images/Wind.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 333.5px"
                    width="333.5"
                    alt="Windmills Project Illustration"
                    className="home-mission_image is-windmill"
                  />
                  <img
                    src="/images/Hydro.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, 333.5px"
                    width="333.5"
                    alt="Hydropower project Illustration"
                    className="home-mission_image is-hydro"
                  />
                </div>
              </div>
              <div className="home-mission_content-wrapper">
                <div className="home-mission_headline">
                  <div className="horizontal-divider"></div>
                  <div className="small-caps-headline">Mission</div>
                </div>
                <div className="padding-bottom padding-custom1"></div>
                <h2>Democratising renewable energy investments</h2>
                <div className="padding-bottom padding-custom1"></div>
                <p className="text-size-medium">
                  EFW tokens give investors digital ownership of the EFW Project Portfolio providing a fractional
                  and tokenised share in renewable energy assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
