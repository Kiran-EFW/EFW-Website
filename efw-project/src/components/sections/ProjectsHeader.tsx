const ProjectsHeader = () => {
  return (
    <section className="section_projects-header">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-vertical padding-xhuge">
            <div className="projects-header_component">
              <div className="projects-header_content-wrapper">
                <div className="projects-header_logo-wrapper">
                  <img
                    src="/images/EFW-Projects-Logo-Large.png"
                    loading="lazy"
                    width="102"
                    alt="EFW Projects Logo Large"
                  />
                </div>
                <h1 className="text-color-white">EFW PROJECTS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay-blur"></div>
    </section>
  );
};

export default ProjectsHeader;
