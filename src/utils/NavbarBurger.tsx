"use client";
import Link from "next/link";
import CovidSearch from "@/components/CovidSearch";
import { FiAlignJustify } from "react-icons/fi";
import styles from "../styles/navbar.module.css";
import { useState } from "react";

const NavbarBurger = () => {
  const [isActive, setIsActive] = useState(false);

  const handleEvent = () => {
    setIsActive(!isActive);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}><Link href={"/"}>Covid-19</Link></div>

      <button className={styles.burger} onClick={handleEvent}>
        <FiAlignJustify className={styles.burger}/>
      </button>

      <nav className={`${styles.nav} ${isActive ? styles.isActive : ""}`}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/about" className={styles.link}>
              Explicacion de Datos
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/favorit" className={styles.link}>
              Estadisticas favoritas
            </Link>
          </li>
          <li className={styles.li}>
            <CovidSearch />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarBurger;
