import Head from 'next/head';

import NavBar from '../components/NavBar/NavBar';
import SocialContacts from '../components/SocialContacts/SocialContacts';
import Exp from '../components/Exp/Exp';

import { motion } from "framer-motion";

export default function Experiences() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: {
                duration: 1
            }}}
        >
            <Head>
                <title>Experiências | Eduardo Nascimento</title>
            </Head>
            <NavBar />
            <Exp />
            <SocialContacts />
        </motion.div>
    );
};