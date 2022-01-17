import styles from './styles/style.module.css';
import { FaUserTag, FaBezierCurve, FaGraduationCap, FaGlobe, FaBehanceSquare, FaGithub } from "react-icons/fa";
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={ styles.headTextAndImg }>
                    <img src='/me.png' alt="Eduardo Nascimento" width={ 120 } height={ 120 } />

                    <h1>
                        Eduardo Nascimento
                    </h1>
                </div>

                <div className={ styles.about }>
                    <p>
                        <b>Web designer,</b> morando em Curitiba/PR, graduado em Design Gráfico pela Unicuritiba.
                    </p>

                    <p>
                        Sou um entusiasta do desenvolvimento e dos avanços tecnológicos, hoje com foco em tecnologias que envolvem o <b>front-end</b>.
                    </p>
                </div>


                <ul className={ styles.aboutList }>
                    <li>
                        <Link href='/about' passHref>
                            <a>
                                <FaUserTag />
                                <span>Mais sobre mim</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/jobs' passHref>
                            <a>
                                <FaBezierCurve />
                                <span>Trabalhos/Projetos</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/experiences' passHref>
                            <a>
                                <FaGraduationCap />
                                <span>Experiência</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/contact' passHref>
                            <a>
                                <FaGlobe />
                                <span>Contato</span>
                            </a>
                        </Link>
                    </li>
                </ul>

                <div className={ styles.socialContact }>
                    <span>
                        <Link href='https://www.behance.net/eduardosgndfc0'>
                            <a><FaBehanceSquare /></a>
                        </Link>
                    </span>

                    <span>
                        <Link href='https://github.com/eduardosgn'>
                            <a><FaGithub /></a>
                        </Link>
                    </span>
                </div>
            </div>
        </>
    );
};