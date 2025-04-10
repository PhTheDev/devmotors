"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export function Header() {
  const [top, setTop] = useState(true);

  const scrollHandler = () => {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className={`${styles.header} ${!top && styles.fixed}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href="/">Dev Motors</Link>
          </div>

          <nav className={styles.navigation}>
            <Link href="/">Home</Link>
            <Link href="/#servicos">Serviços</Link>
            <Link href="/#contato">Contato</Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
