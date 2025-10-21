"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "O nas", href: "/o-nas" },
    { name: "Oferta", href: "/oferta" },
    { name: "Realizacje", href: "/realizacje" },
    { name: "Kariera", href: "/kariera" },
    { name: "Aktualności", href: "/aktualnosci" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  return (
    <header id="header-outer" className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          LOGO
        </Link>

        {/* --- ДЕСКТОПНОЕ МЕНЮ --- */}
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={styles.link}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* --- БУРГЕР --- */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.burger}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
