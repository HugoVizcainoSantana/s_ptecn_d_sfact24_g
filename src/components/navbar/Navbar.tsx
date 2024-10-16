'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <nav className={styles.navbar}>
            <h1 className={styles.navbar_title}>S_PTecn_D_SFact24_G</h1>
            <button className={styles.toggle_button} onClick={toggleNavbar}>
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={`${styles.navbar_links} ${isOpen ? styles.open : ''}`}>
                <Link href="/" className={styles.nav_link}>Home</Link>
                <Link href="/all-countries" className={styles.nav_link}>All Countries</Link>
            </div>
        </nav>
    );
};

export default Navbar;
