import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import BackToTop from './BackToTop';

const Layout = () => {
  return (
    <div className="layout-wrapper">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<div className="loading-state">Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
