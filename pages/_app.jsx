
import Head from 'next/head';

import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' exit='pageExit' variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            duration: .6
          }
        },
        pageExit: {
          opacity: 0,
          transition: {
            duration: .4
          }
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MyApp;