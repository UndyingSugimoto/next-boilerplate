import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';
import styled from 'styled-components';
import { sideMain } from 'styles/layout';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <Header></Header>
      <div className={`${className}`}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

const Layout = styled(Base)`
  ${sideMain}
`;

export default Layout;
