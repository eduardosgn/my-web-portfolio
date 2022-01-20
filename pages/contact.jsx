import Head from 'next/head';

import NavBar from '../components/NavBar/NavBar';
import Contacts from '../components/Contacts/Contacts';
import SocialContacts from '../components/SocialContacts/SocialContacts';

import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0 }}
            //define animação final
            animate={{ opacity: 1 }}
            //Quando sai da página a animação é feita
            exit={{ opacity: 0 }}
        >
            <Head>
                <title>Contato | Eduardo Nascimento</title>
            </Head>
            <NavBar />
            <Contacts />
            <SocialContacts />
        </motion.div>
    );
};