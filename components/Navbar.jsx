"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "O nas", href: "/o-nas" },
    { name: "Oferta", href: "/oferta" },
    { name: "Galeria", href: "/galeria" },
    { name: "Dostępny sprzęt", href: "/sprzet" },
    { name: "Referencje", href: "/referencje" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  // Добавляем эффект появления тени при скролле
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      id="header-outer"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo2.webp"
            alt="logo"
            width={104}
            height={29}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navDesktop}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.link}>
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Burger button */}
        <button
          aria-label="Open mobile menu"
          aria-expanded={isOpen}
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile menu */}
        <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
