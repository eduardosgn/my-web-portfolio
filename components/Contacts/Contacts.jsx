import styles from './styles/styles.module.scss';

import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

import { motion } from 'framer-motion';

function Contacts() {
    return (
        <>
            <div className={ styles.container }>
                <motion.h1
                    initial='titleInit'
                    animate='titleAnim'
                    exit='titleExit'
                    variants={{
                        titleInit: {
                            opacity: 0,
                            y: 30
                        },
                        titleAnim: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        },
                        titleExit: {
                            opacity: 0,
                            y: -30,
                            transition: {
                                duration: 1,
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        }
                    }}
                >
                    Entre em contato<b>!</b>
                </motion.h1>

                <motion.p
                    initital='subtitleInit'
                    animate='subtitleAnim'
                    exit='subtitleExit'
                    variants={{
                        subtitleInit: {
                            opacity: 0,
                            y: -30
                        },
                        subtitleAnim: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1,
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        },
                        subtitleExit: {
                            opacity: 0,
                            y: 30,
                            transition: {
                                duration: 1,
                                type: 'tween',
                                ease: 'easeInOut'
                            }
                        }
                    }}
                >
                    Saiba como falar comigo pelos canais abaixo, ou preencha o formulário e escreva uma mensagem, entrarei em contato contigo <b>em breve!</b>
                </motion.p>

                <div className={ styles.formContainer }>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div className={ styles.formLabels }>
                            <p id={ styles.name }>
                                <label>Seu nome: <input type="text" name="name" autoFocus /></label>   
                            </p>
                            <p id={ styles.email }>
                                <label>Seu e-mail: <input type="email" name="email" /></label>
                            </p>
                            <p id={ styles.message }>
                                <label>Mensagem: <textarea name="message"></textarea></label>
                            </p>
                            <p id={ styles.submitBtn }>
                                <button type="submit" id={ styles.btn }>Enviar</button>
                            </p>
                        </div>
                    </form>
                </div>

                
                <motion.ul>
                    <motion.li
                        initital='liInit'
                        animate='liAnim'
                        exit='liExit'
                        variants={{
                            liInit: {
                                opacity: 0,
                                scale: 1.2
                            },
                            liAnim: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: 1,
                                    duration: 1,
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            },
                            liExit: {
                                opacity: 0,
                                y: -30,
                                transition: {
                                    duration: .5,
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }
                        }}
                    >
                        <span><RiWhatsappFill /></span> <p><b>(41) 99206-0662</b></p>
                    </motion.li>
                    <motion.li
                        initital='liInit'
                        animate='liAnim'
                        exit='liExit'
                        variants={{
                            liInit: {
                                opacity: 0,
                                scale: 1.2
                            },
                            liAnim: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    delay: 1,
                                    duration: 1,
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            },
                            liExit: {
                                opacity: 0,
                                y: -30,
                                transition: {
                                    duration: .7,
                                    type: 'tween',
                                    ease: 'easeInOut'
                                }
                            }
                        }}
                    >
                        <span><MdEmail /></span> <p><b>eduardosgn19@gmail.com</b></p>
                    </motion.li>
                </motion.ul>

                <p>
                    Se quiser, confira nos links abaixo o meu <b>Behance</b> e <b>Github!</b>
                </p>
            </div>
        </>
    );
};

export default Contacts;