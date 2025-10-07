const EFWTBuild = () => {
  const logos = [
    "/images/Group.png",
    "/images/Vector.png",
    "/images/Vector-1.png",
    "/images/Group-1.png",
    "/images/Vector-2.png",
    "/images/Layer-1.png"
  ];

  return (
    <section className="section_efwt_logo">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="home-projects_heading-wrapper">
              <div className="home-projects_heading">
                <h2>EFWT Build on</h2>
              </div>
            </div>
            <div className="eftw-build_logo_wrapp">
              {logos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  loading="lazy"
                  alt=""
                  className={`logo_efwt-build ${index === 5 ? 'new' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EFWTBuild;
