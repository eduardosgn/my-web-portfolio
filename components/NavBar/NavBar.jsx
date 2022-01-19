import Link from 'next/link';

import { motion } from 'framer-motion';

import styles from './styles/styles.module.scss';
import { FaHouseUser, FaBezierCurve, FaGraduationCap, FaGlobe, FaUserTag } from "react-icons/fa";

export default function NavBar() {
    return (
            <motion.div
                key="navContainer"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0, transition: {
                    duration: 1
                }}}
                exit={{ opacity: 0, x: 100, transition: { duration: 1 } }}
            >
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
            </motion.div>
    );
};