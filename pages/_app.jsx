import '../styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';

function MyApp({ Component, pageProps, currentItem }) {
  return (
    <AnimatePresence>
      <motion.div key={currentItem} exit={{ opacity: 0, x: 100, transition:{ duration: 1.5 } }}>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
};

export default MyApp;