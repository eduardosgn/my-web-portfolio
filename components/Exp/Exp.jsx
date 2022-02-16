import styles from './styles/styles.module.scss';
import { FaChevronRight } from 'react-icons/fa';

export default function Experiences() {
    return (
        <div className={ styles.container }>
            <div className={ styles.professional }>

                <h1>Histórico Profissional</h1>

                <ul className={ styles.professionalList }>
                        <li>
                            <p id={ styles.date }>Agosto/2020 - Atualmente</p>
                            <div>
                                <span><FaChevronRight /></span><h2>InterEDTech - Web Designer / Dev Frontend</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Desenvolvimento e manutenção de landing pages e funis de vendas de cursos voltados a diversas áreas de atuação, utilizando principalmente as linguagens de programação para a web HTML5, CSS3, JavaScript e software para criação de layout web Figma/Adobe XD.
                            </p>
                        </li>

                        <li>
                            <p id={ styles.date }>Setembro/2019 - Fevereiro/2020</p>
                            <div>
                                <span><FaChevronRight /></span><h2>Nordtech Máquinas e Motores LTDA - Designer Gráfico Jr.</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Desenvolvimento de materiais gráficos impressos e digitais para o setor do marketing. Criação de vídeos promocionais de produtos. Auxiliar na coordenação de eventos internos e externos da empresa.
                            </p>
                        </li>

                        <li>
                            <p id={ styles.date }>Setembro/2018 - Maio/2019</p>
                            <div>
                                <span><FaChevronRight /></span><h2>inFlux Franchising - Designer Gráfico Jr.</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Criação, desenvolvimento e diagramação de materiais gráficos impressos e digitais para o marketing promocional da empresa e para as unidades inFlux por todo o país.
                            </p>
                        </li>

                        <li>
                            <p id={ styles.date }>Março/2017 - Junho/2018</p>
                            <div>
                                <span><FaChevronRight /></span><h2>Federação das Indústrias do Paraná - Estágio em Design Gráfico</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Auxiliar na criação de peças gráficas digitais (social media posts, banners web e e-mails marketing) e impressos (flyers, folders, banners, outdoors, faixas, etc) para o setor de Gestão de Marketing. Criação de identidades visuais para eventos do Colégio Sesi, Senai, Faculdades da Indústria e corporativos.
                            </p>
                        </li>

                        <li>
                            <p id={ styles.date }>Novembro/2015 - Janeiro/2017</p>
                            <div>
                                <span><FaChevronRight /></span><h2>Renault do Brasil - Jovem Aprendiz</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Elaboração, atualização e alteração de fichas de operação de processos (FOP) utilizando softwares como Visview, AutoCAD e MS Excel. Acompanhamento da linha de produção, desenvolvimento de melhorias na automação da linha de carrocerias dos carros de passeio Renault.
                            </p>
                        </li>

                        <li>
                            <p id={ styles.date }>Setembro/2013 - Outubro/2013</p>
                            <div>
                                <span><FaChevronRight /></span><h2>Soft Eletrônica LTDA - Auxiliar Técnico Eletrônico</h2>
                            </div>
                            <p id={ styles.profesionalText }>
                                Teste final em placas eletrônicas de impressoras de recibo, pequenas manutenções nas placas.
                            </p>
                        </li>
                </ul>
            </div>

            <div className={ styles.education }>

                <h1>Educação</h1>

                <ul className={ styles.educationList } id={ styles.educationListPadding }>
                        <li>
                            <p id={ styles.date }>Janeiro 2014 / Completo</p>
                            <div>
                                <span><FaChevronRight /></span><h2>SENAI - Ensino Técnico</h2>
                            </div>
                            <h3>Técnico em Mecatrônica</h3>
                        </li>

                        <li>
                            <p id={ styles.date }>Fevereiro 2016 / Completo</p>
                            <div>
                                <span><FaChevronRight /></span><h2>Unicuritiba - Graduação</h2>
                            </div>
                            <h3>Tecnólogo em Design Gráfico</h3>
                        </li>

                        <li>
                            <p id={ styles.date }>Fevereiro 2022</p>
                            <div>
                                <span><FaChevronRight /></span><h2>PUCPR - Graduação</h2>
                            </div>
                            <h3>Tecnólogo em Análise e <br />Desenvolvimento de Sistemas</h3>
                        </li>
                </ul>
            </div>

            <div className={ styles.courses }>
                <h1>Cursos</h1>

                <ul className={ styles.coursesList }>
                    <li>
                        <p id={ styles.date }>Janeiro 2012 / Dezembro 2012</p>
                        <div>
                            <span><FaChevronRight /></span><h2>SEDUC - Microsoft Office Completo</h2>
                        </div>
                    </li>

                    <li>
                        <p id={ styles.date }>Janeiro 2013 / Dezembro 2014</p>
                        <div>
                            <span><FaChevronRight /></span><h2>Interamericano - Idioma Inglês</h2>
                        </div>
                    </li>

                    <li>
                        <p id={ styles.date }>Janeiro 2015 / Fevereiro 2017</p>
                        <div>
                            <span><FaChevronRight /></span><h2>Wizard - Idioma Inglês</h2>
                        </div>
                    </li>

                    <li>
                        <p id={ styles.date }>Janeiro 2020 / Dezembro 2020</p>
                        <div>
                            <span><FaChevronRight /></span><h2>CD6 - Web Design</h2>
                        </div>
                    </li>

                    <li>
                        <p id={ styles.date }>Maio 2020</p>
                        <div>
                            <span><FaChevronRight /></span><h2>Serfrontend - HTML5, CSS3 e Javascript</h2>
                        </div>
                    </li>

                    <li>
                        <p id={ styles.date }>Setembro 2020</p>
                        <div>
                            <span><FaChevronRight /></span><h2>Cod3r - Princípios da Programação</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};