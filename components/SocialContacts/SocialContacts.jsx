import Link from 'next/link';

import styles from './styles/styles.module.scss';
import { FaBehanceSquare, FaGithub } from "react-icons/fa";

export default function SocialContacts() {
    return (
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
    );
};