const HomeProjects = () => {
  const features = [
    {
      icon: "/images/Sun-icon-EFW-Project.svg",
      title: "100% Renewable",
      description: "All projects are renewable energy generation and distribution projects."
    },
    {
      icon: "/images/People-icon-EFW-Project.svg",
      title: "Community Owned",
      description: "All listings are Public-Private partnership initiated projects."
    },
    {
      icon: "/images/Carbon-icon-EFW-Project.svg",
      title: "Carbon Neutral",
      description: "No carbon is emitted during the life cycle of the project."
    },
    {
      icon: "/images/Earth-icon-EFW-Project.svg",
      title: "SDG 7, 11, 13",
      description: "Each listed project is vital to combat climate change and help create sustainable human settlements with affordable clean energy."
    },
    {
      icon: "/images/Glass-icon-EFW-Project.svg",
      title: "100% Transparent",
      description: "All the listed projects publish their relevant legal and business documents and undergo due diligence."
    },
    {
      icon: "/images/Vote-icon-EFW-Project.svg",
      title: "Governance",
      description: "EFW users have voting rights to choose future projects in the portfolio."
    }
  ];

  return (
    <section id="EFW-Projects" className="section_projects-home">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="home-projects_heading-wrapper">
              <div className="home-projects_heading">
                <div className="home-projects_heading-logo-wrapper">
                  <img src="/images/Logo-EFW-Projects.svg" loading="lazy" alt="Yellow Logo EFW Projects" />
                </div>
                <h2>EFW Projects</h2>
              </div>
              <div className="padding-bottom padding-custom1"></div>
              <p className="text-size-medium">
                We digitalize ownership of real world renewable energy infrastructure projects and provide secondary market access on a global scale.
              </p>
            </div>
            <div className="w-layout-grid home-projects_component">
              {features.map((feature, index) => (
                <div key={index} className="home-projects_item">
                  <img src={feature.icon} loading="lazy" alt={`${feature.title} icon`} className="home-projects_icon" />
                  <div className="home-projects_item-content">
                    <h3 className="heading-style-h5">{feature.title}</h3>
                    <p className="text-size-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="home-projects_button-wrapper">
              <a href="projects.html" className="button is-black w-button">Explore Live Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
