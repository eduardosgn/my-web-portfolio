import Link from 'next/link';

import styles from './styles/styles.module.scss';
import { FaHouseUser, FaBezierCurve, FaGraduationCap, FaGlobe, FaUserTag } from "react-icons/fa";

export default function NavBar() {
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.navIconsContainer }>
                    <Link href="/" passHref>
                        <a>
                            <FaHouseUser />
                        </a>
                    </Link>

                    <Link href="/about" passHref>
                        <a>
                            <FaUserTag />
                        </a>
                    </Link>

                    <Link href="/jobs" passHref>
                        <a>
                            <FaBezierCurve />
                        </a>
                    </Link>

                    <Link href="/experiences" passHref>
                        <a>
                            <FaGraduationCap />
                        </a>
                    </Link>

                    <Link href="/contact" passHref>
                        <a>
                            <FaGlobe />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};