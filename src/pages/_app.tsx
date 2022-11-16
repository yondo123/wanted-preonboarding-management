import type { AppProps } from 'next/app';
import GlobalStyle from '@styles/GlobalStyles';
import '@styles/globals.css';
import Layout from '@components/Layout';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Modal from '@components/common/Modal';
import Head from 'next/head';
import { Page } from '../types';

function App({ Component, pageProps, ...appProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Modal />
        {[`${Page.LOGIN}`, `${Page.NOTFOUND}`].includes(appProps.router.pathname) ? (
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
