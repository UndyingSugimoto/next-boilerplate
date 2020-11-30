import { AppProps, Container } from 'next/app';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'ress';

const GlobalStyle = createGlobalStyle`
  *:not(svg) > * {
    font-family: 'Noto Sans JP', sans-serif;
    color: auto;
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Component {...pageProps} />
    </Container>
  );
}
