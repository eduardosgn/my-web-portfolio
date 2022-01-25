import Projects from '../components/Projects/Projects';
import NavBar from '../components/NavBar/NavBar';
import SocialContacts from '../components/SocialContacts/SocialContacts';

import { motion } from "framer-motion";

export default function Jobs() {
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
            <Projects />
            <SocialContacts />
        </motion.div>
    );
};