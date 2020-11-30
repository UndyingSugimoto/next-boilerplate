import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <header className={`${className}`}>
      <div>header-content</div>
    </header>
  );
};

const Header = styled(Base)`
  color: red;
`;

export default Header;
