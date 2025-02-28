import React from "react";
import Link from "next/link";
import styles from "./page.module.scss";
export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Genilson Monteiro da Silva</h1>
      <p>Dev Frontend</p>
      <p>Dev Backend</p>
    </div>
  );
}
