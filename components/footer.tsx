import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterTag>
      <div>footer-content</div>
    </FooterTag>
  );
};

export const FooterTag = styled.footer`
  color: green;
`;

export default Footer;
