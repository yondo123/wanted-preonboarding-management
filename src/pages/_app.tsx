import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyles';
import '@styles/globals.css';
import Layout from '@components/Layout';
import React from 'react';
import { ExcludeLocation } from '../types';

function App({ Component, pageProps, ...appProps }: AppProps) {
  if ([`${ExcludeLocation.Login}`, `${ExcludeLocation.NOTFOUND}`].includes(appProps.router.pathname))
    return <Component {...pageProps} />;
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
