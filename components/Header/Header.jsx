import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';

import styles from './styles/style.module.scss';
import { FaUserTag, FaBezierCurve, FaGraduationCap, FaGlobe } from "react-icons/fa";

import SocialContacts from '../SocialContacts/SocialContacts';

const easing = [.6, -.05, .01, 0.99];

export default function Header() {    
    return (
        //Framer-motion animações
        <motion.div
            //define o estado inicial da animação
            initial={{ opacity: 0, x: -50 }}
            //define animação final
            animate={{ opacity: 1, x: 0, transition: {
                duration: .6
            }}}
            exit={{ opacity: 0 }}
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
                        exit={{ opacity: 0, y: -30, scale: .8, transition: { duration: 1 } }}
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
                        exit={{ opacity: 0, x: 100, transition: { duration: .8 } }}
                    >
                        Eduardo Nascimento
                    </motion.h1>
                </div>

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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .05,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                        exit={{ opacity: 0, y: 8, transition: { delay: .02, } }}
                    >
                        <Link href='/about' passHref>
                            <a>
                                <FaUserTag />
                                <span>Mais sobre mim</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .07,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                        exit={{ opacity: 0, y: 8, transition: { delay: .04 } }}
                    >
                        <Link href='/jobs' passHref>
                            <a>
                                <FaBezierCurve />
                                <span>Trabalhos/Projetos</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .09,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                        exit={{ opacity: 0, y: 8, transition: { delay: .06 } }}
                    >
                        <Link href='/experiences' passHref>
                            <a>
                                <FaGraduationCap />
                                <span>Experiência</span>
                            </a>
                        </Link>
                    </motion.li>

                    <motion.li 
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0, transition: {
                            duration: 1,
                            delay: .1,
                            type: 'tween',
                            ease: 'easeIn'
                        }}}
                        exit={{ opacity: 0, y: 8, transition: { delay: .08 } }}
                    >
                        <Link href='/contact' passHref>
                            <a>
                                <FaGlobe />
                                <span>Contato</span>
                            </a>
                        </Link>
                    </motion.li>
                </motion.ul>

                <motion.div
                className={ styles.about }
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {
                    duration: 1,
                    type: 'tween',
                    ease: "easeInOut"
                }}}
                exit={{ opacity: 0, x: 60, transition: { duration: 1 } }}
                >
                    <p>
                        <b>Web designer,</b> morando em Curitiba/PR, graduado em Design Gráfico pela Unicuritiba.
                    </p>

                    <p>
                        Sou um entusiasta do desenvolvimento e dos avanços tecnológicos, hoje com foco em tecnologias que envolvem o <b>front-end</b>.
                    </p>
                </motion.div>

                <p id={ styles.socialText }>Confira nos links abaixo o meu <b>Behance</b> e <b>Github!</b></p>

                <SocialContacts />
            </div>
        </motion.div>
    );
};