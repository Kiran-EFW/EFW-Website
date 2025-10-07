import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import PoweredBy from '@/components/sections/PoweredBy';
import Mission from '@/components/sections/Mission';
import Overview from '@/components/sections/Overview';
import HowItWorks from '@/components/sections/HowItWorks';
import HomeTokenomics from '@/components/sections/HomeTokenomics';
import HomeProjects from '@/components/sections/HomeProjects';
import HomeCTA from '@/components/sections/HomeCTA';
import ProjectsHeader from '@/components/sections/ProjectsHeader';
import ProjectsListing from '@/components/sections/ProjectsListing';
import ProjectsFeatures from '@/components/sections/ProjectsFeatures';
import CTASection from '@/components/sections/CTASection';
import EFWTTokenomics from '@/components/sections/EFWTTokenomics';
import EFWTBuild from '@/components/sections/EFWTBuild';
import Roadmap from '@/components/sections/Roadmap';
import FAQs from '@/components/sections/FAQs';
import Contact from '@/components/sections/Contact';
import NotFound from '@/components/pages/NotFound';
import './App.css'

function HomePage() {
  return (
    <>
      <Hero />
      <PoweredBy />
      <Mission />
      <Overview />
      <HowItWorks />
      <HomeTokenomics />
      <HomeProjects />
      <HomeCTA />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <ProjectsHeader />
      <ProjectsListing />
      <ProjectsFeatures />
      <CTASection />
    </>
  );
}

function EFWTPage() {
  return (
    <>
      <EFWTTokenomics />
      <EFWTBuild />
      <Roadmap />
    </>
  );
}

function FAQPage() {
  return <FAQs />;
}

function ContactPage() {
  return <Contact />;
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/efwt" element={<EFWTPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
