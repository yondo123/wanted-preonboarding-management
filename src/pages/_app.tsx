import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyles';
import '@styles/globals.css';
import Layout from '@components/Layout';
import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
export default App;
