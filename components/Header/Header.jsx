import Link from 'next/link';
import Head from 'next/head';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import styles from './styles/style.module.scss';
import { FaUserTag, FaBezierCurve, FaGraduationCap, FaGlobe, FaBehanceSquare, FaGithub } from "react-icons/fa";

import SocialContacts from '../SocialContacts/SocialContacts';

export default function Header() {
    //Animações com GSAP
    let app = useRef(null);
    let title = useRef(null);
    let image = useRef(null);

    //Quando a página for carregada, as animações dão start
    useEffect(() => {
        //Animação do titulo
        const titleH1 = title;
        gsap.from(titleH1, { opacity: 0, y: 30, ease: "power3.inOut", duration: 1.3 });

        //animação minha foto
        const myImage = image;
        gsap.from(myImage, 
            { 
                opacity: 0,
                y: -35,
                scale: 0.8,
                ease: "power3.inOut",
                duration: 1
            });

        //Animação de entrada da página
        gsap.from(app, { opacity: 0, ease: "power3.inOut", duration: 1 });

        //quando a página for carregada pela primeira vez, não haverá um "flash" sem animação antes da animação acontecer
        gsap.set(app, {autoAlpha: 1});
    });

    return (
        <>
            <Head>
                <title>Portfólio | Eduardo Nascimento</title>
            </Head>
            <div className={styles.headerContainer} ref={el => app = el}>
                <div className={ styles.headTextAndImg }>
                    <img 
                        src='/me.png' 
                        alt="Eduardo Nascimento" 
                        width={ 120 } 
                        height={ 120 } 
                        ref={el => image = el} 
                    />

                    <h1 ref={el => title = el}>
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

                <SocialContacts />
            </div>
        </>
    );
};