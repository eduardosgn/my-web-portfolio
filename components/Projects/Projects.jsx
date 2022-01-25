import Link from 'next/link';

import styles from './styles/styles.module.scss';

import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div className={ styles.container }>
            <h1>Trabalhos e projetos</h1>

            <div id={ styles.separator }></div>

            <p>
                Confira mais sobre projetos que criei ao longo dos meus estudos em <b>desenvolvimento para a web.</b>
            </p>

            <div id={ styles.separator }></div>

            <div className={ styles.projectsContainer }>
                <div id={ styles.huddle } className={ styles.huddleWrapper }>
                    <Link href="https://huddle-landing-page-scss.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p><b>Ver a página</b></p>
                            </div>
                        </a>
                    </Link>
                    <p>Huddle landing page</p>
                </div>
            </div>
        </motion.div>
    );
};