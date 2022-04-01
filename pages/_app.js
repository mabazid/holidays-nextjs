import Head from 'next/head';
import { Fragment } from 'react';
import DenseAppBar from '../components/layout/header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Worlds Holidays</title>
        <meta
          name="description"
          content="Get to know world wide countries public holidays!"
        />
      </Head>
      <DenseAppBar>
        <Component { ...pageProps } />
      </DenseAppBar>
    </Fragment>
  );
}

export default MyApp;
