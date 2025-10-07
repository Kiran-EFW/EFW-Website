const PoweredBy = () => {
  return (
    <section id="Powered-By-EFW" className="section_powered">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="powered_component">
              <div className="powered_text-wrapper">
                <p className="text-size-medium text-weight-medium">Powered by:</p>
              </div>
              <div className="powered_logo-list">
                <div className="powered_logo-wrapper">
                  <a href="http://presale.efwt.energyfuture.world" target="_blank" rel="noopener">
                    <img src="/images/references.svg" loading="lazy" alt="" className="powered_logo" />
                  </a>
                </div>
                <div className="powered_logo-wrapper">
                  <img src="/images/EFW-Projects-Logo.svg" loading="lazy" alt="EFW Projects Logo" className="powered_logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
