
import '../styles/globals.css';
import { motion, AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' exit='pageExit' variants={{
        pageInitial: {
          opacity: 0,
          x: -50
        },
        pageAnimate: {
          opacity: 1,
          x: 0
        },
        pageExit: {
          opacity: 0,
          x: 50,
          transition: {
            duration: 1
          }
        },
      }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MyApp;

// import React from 'react';
// import App from 'next/app';
// import { AnimatePresence } from 'framer-motion';
// import '../styles/globals.css';

// class MyApp extends App {
//   render() {
//     const { Component, pageProps, router } = this.props;

//     return (
//       <AnimatePresence exitBeforeEnter>
//         <Component { ...pageProps } key={router.route} />
//       </AnimatePresence>
//     );
//   };
// };

// export default MyApp;