import styles from './styles/style.module.css';

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
                        <b>Web designer,</b> residente em Curitiba/PR, graduado em Design Gráfico pela Unicuritiba.
                    </p>

                    <p>
                        Sou um entusiasta do desenvolvimento e dos avanços tecnológicos, hoje com foco em tecnologias que envolvem o <b>front-end</b>.
                    </p>
                </div>


                <ul className={ styles.aboutList }>
                    <li>Mais sobre mim</li>
                    <li>Meus trabalhos</li>
                    <li>Minhas aptidões</li>
                    <li>Contato</li>
                </ul>
            </div>
        </>
    );
};