import { AppProps } from 'next/app'
import React from 'react';
import { Header } from '../components/Header';
import { SessionProvider as GitHubAuthProvider } from "next-auth/react";

import '../styles/global.scss';

function MyApp({ 
   Component,
   pageProps: {session, ...pageProps} }) {
  return (
    <>
    <GitHubAuthProvider session={session} >
    <Header />
    <Component {...pageProps} />
    </GitHubAuthProvider>
    </>
    )
}

export default MyApp
