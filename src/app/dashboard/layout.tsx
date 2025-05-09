import React from 'react';

import NavBar from '../_components/NavBar';
const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;
