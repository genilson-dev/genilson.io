import React from 'react'
import styles from './page.module.scss';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()}Creayed By: Genilson Monteiro da
      Silva. Todos os direitos reservados.</p>
    </div>
  )
}
