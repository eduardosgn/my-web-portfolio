import Link from 'next/link';
import styles from './styles.module.scss';

export default function ProjectsList() {
    return (
        <>

            <div className={ styles.projectsContainer }>

                    <div id={ styles.projectWrapper } className={ styles.liderWrapper }>
                        <Link href="https://web.educacaodofuturo.com.br/portal-lideres-do-futuro/">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.projectTitle }>Liderança do Futuro</p>
                    </div>

                    <div id={ styles.projectWrapper } className={ styles.psicanaliseWrapper }>
                        <Link href="https://www.posead.unifemm.edu.br/pre-lancamento-pos-graduacao-em-psicanalise-teoria-clinica-extensao-unifemm/">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.projectTitle }>Pós em Psicanálise | UNIFEMM</p>
                    </div>

                    <div id={ styles.projectWrapper } className={ styles.trilhaElosWrapper }>
                        <Link href="https://www.elosonline.org/curso-trilhas-elos1">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.projectTitle }>Trilha Elos | IEDT</p>
                    </div>

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

                    <div id={ styles.projectWrapper } className={ styles.githubReposWrapper }>
                        <Link href="https://github-repos-issues-project.netlify.app/">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.githubTitle }>Github Repos</p>
                        <p id={ styles.githubSubtext }>ex: angular/angular</p>
                    </div>

                    <div id={ styles.projectWrapper } className={ styles.insureWrapper }>
                        <Link href="https://insure-landingpage-project.netlify.app/">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.projectTitle }>Insure Landing Page</p>
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

                    <div id={ styles.projectWrapper } className={ styles.pingWrapper }>
                        <Link href="https://ping-coming-soon-webpage.netlify.app/">
                            <a target='_blank'>
                                <div id={ styles.projectHover }>
                                    <p>Ver página</p>
                                </div>
                            </a>
                        </Link>
                        <p id={ styles.projectTitle }>Ping Coming Soon Page</p>
                    </div>
            </div>
        </>
    );
};