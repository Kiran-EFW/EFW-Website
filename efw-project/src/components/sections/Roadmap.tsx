import { Link } from 'react-router-dom';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q2 2023",
      items: [
        "Preparation of documentation and conceptual whitepaper",
        "LOI signed with Orbital Farms energy"
      ],
      logos: ["/images/Artboard1_12x-z095f-2.svg"]
    },
    {
      quarter: "Q1-Q2 2023",
      items: [
        "TNW Amsterdam Demo day",
        "MVP Development",
        "Startupbootcamp Energy and Net-Zero Accelerator Programme"
      ],
      logos: ["/images/images-removebg-preview-3.svg", "/images/Tnw-logo-red1458828878logoBLACK-2.svg"]
    },
    {
      quarter: "Q3 2024",
      description: "EFW Platform Launch Beta Testing",
      items: [
        "Innovator International",
        "Endorsement achieved",
        "Deployment of EFWT Testnet v1.0"
      ],
      logos: ["/images/innovator-international-1.svg"]
    },
    {
      quarter: "Q4 2024",
      items: [
        "Web Summit Exhibition",
        "Internal performance tests (TPS evaluations, network stability)",
        "LOI signed with llumi energy"
      ],
      logos: ["/images/PHOTO-2024-10-01-16-12-53-2.png", "/images/Web_Summit_logo.svg-2.png"]
    },
    {
      quarter: "Q1 2025",
      items: [
        "EFWT Mainnet",
        "Presale sale of EFWT commence",
        "Third Web Wallet Integration"
      ],
      logos: ["/images/image-182.png", "/images/thirdweb-logo-png_seeklogo-446721-1.png"]
    },
    {
      quarter: "Q2 2025",
      items: [
        "EFW DAO DUNA Registration",
        "Smart contract audits",
        "Presale Phase 2, phase 3",
        "Activation of on chain governance in snapshot.box"
      ],
      logos: ["/images/feature-7-removebg-preview-1.svg"]
    },
    {
      quarter: "Q3 2025",
      items: [
        "EFWT Seed 1",
        "Commence development of Smart grid blockchain solutions"
      ],
      logos: ["/images/pngtree-dangerous-high-voltage-power-line-tower-png-image_4577636-removebg-preview-1.png"]
    },
    {
      quarter: "Q4 2025",
      items: [
        "EFWT seed 2",
        "Launching of staking reward",
        "Institutional Adoption",
        "EFW Project expansion"
      ],
      logos: ["/images/Group-1000004196.svg"]
    },
    {
      quarter: "Q1 2026",
      items: [
        "Private sale of EFWT (TBD by DAO DUNA)",
        "EFW Platform Launch"
      ],
      logos: []
    }
  ];

  return (
    <section className="section_roadmap">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="home-projects_heading-wrapper">
              <div className="home-projects_heading">
                <h2>Roadmap</h2>
              </div>
            </div>
            <div className="w-layout-grid home-projects_component">
              {roadmapItems.map((item, index) => (
                <div key={index} className="roadmap_item">
                  <div className="home-projects_item-content">
                    <h3 className="heading-style-h5">{item.quarter}</h3>
                    {item.description && (
                      <p className="text-size-medium">{item.description}</p>
                    )}
                    <ul role="list" className="list_roadmap">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="roadmap_list-item">
                          <div>{listItem}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {item.logos.length > 0 && (
                    <div className="roadmap_logo_wrap">
                      {item.logos.map((logo, logoIndex) => (
                        <img
                          key={logoIndex}
                          src={logo}
                          loading="lazy"
                          alt=""
                          className="home-projects_icon"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="home-projects_button-wrapper">
              <Link to="/faqs" className="button is-black w-button">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
