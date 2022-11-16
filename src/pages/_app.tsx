import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyles';
import '@styles/globals.css';
import Layout from '@components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Modal from '@components/common/Modal';
import { ExcludeLocation } from '../types';

function App({ Component, pageProps, ...appProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Modal />
        {[`${ExcludeLocation.Login}`, `${ExcludeLocation.NOTFOUND}`].includes(appProps.router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </RecoilRoot>
    </QueryClientProvider>
  );
}
export default App;
