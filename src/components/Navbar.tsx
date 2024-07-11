import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">Explicacion de Datos</Link>
            </li>
            <li>
              <Link href="/favorits">Estadisticas favoritas</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
