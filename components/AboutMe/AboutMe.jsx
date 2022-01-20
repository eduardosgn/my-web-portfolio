import { motion } from 'framer-motion';
import SocialContacts from '../SocialContacts/SocialContacts';
import { FaGraduationCap } from 'react-icons/fa';

import styles from './styles/styles.module.scss';

export default function AboutMe() {
    return (
        <div>
            <div className={ styles.container }>
                <motion.h1
                    initial='titleIn'
                    animate='titleAnim'
                    exit='titleExit'
                    variants={{
                        titleIn: {
                            opacity: 0,
                            y: -20
                        },
                        titleAnim: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: .6
                            }
                        },
                        titleExit: {
                            opacity: 0,
                            y: -20,
                            transition: {
                                duration: .6
                            }
                        }
                    }}
                >
                    Mais sobre mim<b>!</b>
                </motion.h1>

                <p>
                    <span>Olá!</span> me chamo Eduardo, tenho <b>26 anos,</b> sou formado <b>Técnólogo em Design Gráfico</b> pela Unicuritiba com formação técnica em <b>Mecatrônica</b> pelo SENAI-PR. O meu perfil é tranquilo, proativo e sempre em busca de novas referências de aprendizado visando a minha carreira na área das tecnologias relacionadas à criação e design para a web.
                </p>

                <p>
                    Sobre as minhas experiências <i>(mais detalhado na página das minhas experiências profissionais <span><b><FaGraduationCap /></b></span>),</i> fui aprendiz na Usina da <b>Renault do Brasil</b> entre 2015/2016. Fiz estágio na <b>Federação das Indústrias do Paraná</b> entre 2017/2018, no setor da Gerência de Marketing, auxiliando na criação de peças gráficas digitais, impressas, diagramação e direção de arte. A minha última experiência foi trabalhando como Designer Gráfico Jr. na matriz da <b>inFlux English School,</b> no setor de criação, desenvolvendo materiais gráficos para o marketing promocional da empresa e para as unidades inFlux por todo o país.
                </p>

                <p>
                    Atualmente estou trabalhando como <b>Web Designer</b> para a InterEDTech, que atua no setor de Educação à distância, criando layouts de páginas de cursos EAD usando ferramentas para criação e desenvolvimento no front-end, como <b>Adobe XD, Figma, HTML, CSS, JavaScript</b> <i>(e seus frameworks).</i>
                </p>

                <p>
                    Tenho facilidade com o idioma <b>inglês (avançado),</b> feito cursos do idioma no Interamericano (3 anos) e na Wizard (2 anos) e atualmente estou conhecendo e aprendendo o idioma <b>alemão (nível básico).</b>
                </p>
            </div>

            <SocialContacts />
        </div>
    );
};