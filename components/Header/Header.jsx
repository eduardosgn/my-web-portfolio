import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

import styles from './styles/style.module.scss';
import { FaUserTag, FaBezierCurve, FaGraduationCap, FaGlobe, FaBehanceSquare, FaGithub } from "react-icons/fa";

import SocialContacts from '../SocialContacts/SocialContacts';

const easing = [.6, -.05, .01, 0.99];

const hotlinks = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: 30 }
};

export default function Header() {    
    return (
        //Framer-motion animações
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0, x: -100 }}
            //define animação final
            animate={{ opacity: 1, x: 0, transition: {
                duration: .8
            }}}
            //Quando sai da página a animação é feita
            exit={{ opacity: 0, x: 100 }}
        >
            <Head>
                <title>Portfólio | Eduardo Nascimento</title>
            </Head>
            <div className={styles.headerContainer} >
                <div className={ styles.headTextAndImg }>
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {
                            duration: 1,
                            ease: easing
                        }}}
                    >
                        <img 
                            src='/me.png' 
                            alt="Eduardo Nascimento" 
                            width={ 120 } 
                            height={ 120 } 
                        />
                    </motion.div>

                    <motion.h1 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: {
                            duration: 1.2,
                            type: 'tween',
                            ease: "easeInOut"
                        }}}
                    >
                        Eduardo nascimento
                    </motion.h1>

                </div>

                <motion.div
                className={ styles.about }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {
                    duration: 1,
                    type: 'tween',
                    ease: "easeInOut"
                }}}
                >
                    <p>
                        <b>Web designer,</b> morando em Curitiba/PR, graduado em Design Gráfico pela Unicuritiba.
                    </p>

                    <p>
                        Sou um entusiasta do desenvolvimento e dos avanços tecnológicos, hoje com foco em tecnologias que envolvem o <b>front-end</b>.
                    </p>
                </motion.div>


                <motion.ul 
                    className={ styles.aboutList }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: {
                        duration: 2,
                        type: 'tween',
                        ease: 'easeInOut'
                    }}}
                >
                    <motion.li 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                    >
                        <Link href='/about' passHref>
                            <a>
                                <FaUserTag />
                                <span>Mais sobre mim</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .2,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                    >
                        <Link href='/jobs' passHref>
                            <a>
                                <FaBezierCurve />
                                <span>Trabalhos/Projetos</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .4,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                    >
                        <Link href='/experiences' passHref>
                            <a>
                                <FaGraduationCap />
                                <span>Experiência</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .6,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                    >
                        <Link href='/contact' passHref>
                            <a>
                                <FaGlobe />
                                <span>Contato</span>
                            </a>
                        </Link>
                    </motion.li>
                </motion.ul>

                <SocialContacts />
            </div>
        </motion.div>
    );
};