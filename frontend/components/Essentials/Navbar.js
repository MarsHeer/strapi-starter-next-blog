import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [resized, setResized] = useState(0);

  useEffect(() => {
    window.innerWidth > 1100
      ? (document.getElementById("nav").style.display = "flex")
      : "";
    if ((window.innerWidth <= 1100) & menuOpen) {
      document.getElementById("nav").style.display = "flex";
    } else if ((window.innerWidth <= 1100) & !menuOpen) {
      document.getElementById("nav").style.display = "none";
    }

    window.addEventListener("resize", handleResize);
  }, [menuOpen]);

  function handleResize() {
    window.innerWidth > 1100
      ? (document.getElementById("nav").style.display = "flex")
      : "";
  }

  return (
    <div id={styles.navbar}>
      <div id={styles.innerNavbar}>
        <img src="./logo.jpeg" />
        <nav id="nav">
          <Link href="/">
            <a
              class={
                router.asPath === "/" || router.asPath === undefined
                  ? styles.selected
                  : styles.unselected
              }
            >
              Inicio
            </a>
          </Link>
          <Link href="/galeria">
            <a
              class={
                router.asPath === "/galeria"
                  ? styles.selected
                  : styles.unselected
              }
            >
              Galería de Proyectos
            </a>
          </Link>
          <Link href="/iniciate">
            <a
              class={
                router.asPath === "/iniciate"
                  ? styles.selected
                  : styles.unselected
              }
            >
              Iniciate en el 3D
            </a>
          </Link>
          <Link href="/nosotros">
            <a
              class={
                router.asPath === "/nosotros"
                  ? styles.selected
                  : styles.unselected
              }
            >
              Sobre Nosotros
            </a>
          </Link>
          <Link href="/contacto">
            <a
              class={
                router.asPath === "/contacto"
                  ? styles.selected
                  : styles.unselected
              }
            >
              Contacto
            </a>
          </Link>

          <div
            onClick={() => window.open("http://wa.me/0034665441913", "_blank")}
            id={styles.whatsapp}
          >
            <p>665 441 913</p>
            <img src="./whatsapp.png" />
          </div>
        </nav>
        <div onClick={() => setMenuOpen(!menuOpen)} id={styles.menuIcon}>
          <div class={styles.menuBar}></div>
          <div class={styles.menuBar}></div>
          <div class={styles.menuBar}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
