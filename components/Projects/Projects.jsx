import styles from './styles/styles.module.scss';

import ProjectsList from '../ProjectsList/ProjectsList.tsx';

import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.div className={ styles.container }>
            <h1>Trabalhos e projetos</h1>

            <div id={ styles.separator }></div>

            <p>
                Confira mais sobre projetos que criei ao longo dos meus estudos em <b>desenvolvimento para a web.</b> São projetos criados a partir de templates do <a href="https://frontendmentor.io/" target='_blank'><b>Frontend Mentor</b></a>, cursos online focados em frontend, projetos pessoais e também páginas de cursos reais para a <a href="https://lp3.interedtech.com.br/principal" target='_blank'><b>InterEDTech</b></a> onde atualmente trabalho como Web Designer.
            </p>

            <div id={ styles.separator }></div>

            <ProjectsList />
        </motion.div>
    );
};