import Head from 'next/head';

import NavBar from '../components/NavBar/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0, x: -50 }}
            //define animação final
            animate={{ opacity: 1, x: 0, transition: {
                duration: 1
            }}}
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Sobre mim | Eduardo Nascimento</title>
            </Head>
            <NavBar />
            <AboutMe />
        </motion.div>
    );
};