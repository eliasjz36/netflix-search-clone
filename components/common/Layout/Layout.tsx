import Head from 'next/head';
import { ReactNode } from 'react';

import Footer from '../Footer';
import Navbar from '../Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar />

      <div className="min-h-screen px-5 lg:px-14 text-white">{children}</div>

      <Footer />
    </>
  );
};

export default Layout;
