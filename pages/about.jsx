import NavBar from '../components/NavBar/NavBar';
import AboutMe from '../components/AboutMe/AboutMe';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0 }}
            //define animação final
            animate={{ opacity: 1 }}
            //Quando sai da página a animação é feita
            exit={{ opacity: 0 }}
        >
            <NavBar />
            <AboutMe />
        </motion.div>
    );
};