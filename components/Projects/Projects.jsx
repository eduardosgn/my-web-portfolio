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
                <div id={ styles.projectWrapper } className={ styles.orderSummaryWrapper }>
                    <Link href="https://order-checkout-project.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Order summary card</p>
                </div>

                <div id={ styles.projectWrapper } className={ styles.huddleWrapper }>
                    <Link href="https://huddle-landing-page-scss.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Huddle landing page</p>
                </div>

                <div id={ styles.projectWrapper } className={ styles.statsCardWrapper }>
                    <Link href="https://stats-card-component-project.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Stats card</p>
                </div>

                <div id={ styles.projectWrapper } className={ styles.travellyWrapper }>
                    <Link href="https://travelly-portfolio-website.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Travelly Website</p>
                </div>

                <div id={ styles.projectWrapper } className={ styles.elenaWrapper }>
                    <Link href="https://elena-joy-portfolio-website.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Elena Joy Website</p>
                </div>

                <div id={ styles.projectWrapper } className={ styles.sunnysideWrapper }>
                    <Link href="https://sunnyside-portfolio.netlify.app/">
                        <a target='_blank'>
                            <div id={ styles.projectHover }>
                                <p>Ver página</p>
                            </div>
                        </a>
                    </Link>
                    <p id={ styles.projectTitle }>Sunnyside Website</p>
                </div>
            </div>
        </motion.div>
    );
};