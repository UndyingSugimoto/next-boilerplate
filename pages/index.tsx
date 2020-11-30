import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

type Props = {
  className?: string;
};

const Base: React.FC<Props> = ({ className }) => {
  return (
    <Layout>
      <div className={className}>test</div>
    </Layout>
  );
};

const Index = styled(Base)`
  color: blue;
`;

export default Index;
