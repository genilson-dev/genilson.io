import React from 'react'
import Link from 'next/link';
import styles from './page.module.scss';
export default function Navbar() {
  return (
    <div className={styles.navbar}>
        <h1>NavBar...</h1>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.contact}>Contact</Link>

    </div>
  )
}

