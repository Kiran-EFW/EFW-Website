import { type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
