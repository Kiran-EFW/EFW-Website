import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  name: string;
  type: string;
  location: string;
  capacity: string;
  status: string;
  description: string;
  image?: string;
}

const ProjectsListing = () => {
  // Since there are no projects currently, show an empty state
  return (
    <section className="section_projects-listing">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-medium">
            <div className="filter_content">
              <div className="filter_header"></div>
              <div className="content_filter">
                <div className="empty-state">
                  <div className="heading-style-h2 text-style-allcaps">New projects coming soon!</div>
                  <div className="padding-top padding-medium">
                    <p className="text-size-medium text-align-center">
                      We're currently collecting project proposals. If you have a renewable energy project that needs funding,
                      please contact us through our contact form.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsListing;
