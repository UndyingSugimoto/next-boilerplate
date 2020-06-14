import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
