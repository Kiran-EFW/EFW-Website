const ProjectsFeatures = () => {
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
      title: "ESG 7, 11, 13",
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
    <section className="section_projects-features">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="projects-features_component">
              <div className="projects-features_header-wrapper">
                <div className="text-align-center">
                  <h2>EFW Projects</h2>
                  <div className="padding-bottom padding-custom1"></div>
                  <p className="text-size-medium">
                    We digitalize ownership of real world renewable energy infrastructure projects and provide secondary market access on a global scale.
                  </p>
                </div>
              </div>
              <div className="projects-features_content-wrapper">
                {features.map((feature, index) => (
                  <div key={index}>
                    {index > 0 && <div className="divider-projects-features"></div>}
                    <div className="projects-features_item">
                      <img src={feature.icon} loading="lazy" alt={`${feature.title} icon`} />
                      <h3 className="heading-style-h5">{feature.title}</h3>
                      <p className="text-size-custom">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatures;
