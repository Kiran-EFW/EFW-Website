import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <header id="Home" className="section_home-header">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-top padding-small">
            <div className="home-header_component">
              <div className="home-header_content-wrapper">
                <h1>Invest in green energy projects<span className="text-span-2"></span></h1>
                <div className="padding-bottom padding-medium"></div>
                <p className="text-size-medium text-weight-medium">
                  Energy Future World (EFW) helps local communities to develop renewable energy projects.
                  Investors receive tradeable tokens which constitute voluntary carbon offsets.
                </p>
                <div className="padding-bottom padding-medium hide-mobile-landscape"></div>
                <div className="home-header_button-wrapper hide-mobile-landscape">
                  <Button className="button w-button">EFWT Presale Live Now</Button>
                </div>
              </div>
              <div className="home-hero_image-wrapper">
                <img
                  src="/images/Earth-EFW-Homepage-1.png"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 490px"
                  width="490"
                  alt="3D Earth with white stroke"
                  className="home-section_image-earth"
                />
                <img
                  src="/images/Frame-126.svg"
                  loading="lazy"
                  className="home-section_image-frame"
                  alt=""
                />
                <img
                  src="/images/Group-103.png"
                  loading="lazy"
                  width="34"
                  alt="Wave Map Pin Icon"
                  className="icon-homepage is-wave"
                />
                <img
                  src="/images/Group-104.png"
                  loading="lazy"
                  width="34"
                  alt="Windmill Map Pin Icon"
                  className="icon-homepage is-wind"
                />
                <img
                  src="/images/Group-100.png"
                  loading="lazy"
                  width="34"
                  alt="Sun Map Pin Icon"
                  className="icon-homepage is-sun"
                />
                <img
                  src="/images/Group-106.png"
                  loading="lazy"
                  width="34"
                  alt="Green Energy Map Pin Icon"
                  className="icon-homepage is-leaf"
                />
              </div>
              <div className="home-header_button-wrapper mobile">
                <Button className="button w-button">EFWT Presale Live Now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
