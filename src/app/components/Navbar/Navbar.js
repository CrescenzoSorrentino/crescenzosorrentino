"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Sun,
  Moon,
  Menu,
  X,
  FolderOpen,
  Mail,
} from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tema, setTema] = useState(() => {
    if (typeof window === "undefined") return "light";
    return document.documentElement.getAttribute("data-theme") || "light";
  });

  function toggleTema() {
    const nuovo = tema === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nuovo);
    localStorage.setItem("theme", nuovo);
    setTema(nuovo);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Home">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2L28 8.9282V22.7846L16 29.7128L4 22.7846V8.9282L16 2Z"
              fill="var(--color-primary)"
              fillOpacity="0.15"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M16 29.7128V15.8564M16 15.8564L28 8.92822M16 15.8564L4 8.92822"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
          </svg>
        </Link>

        <div className={styles.destra}>
          <div className={`${styles.links} ${isOpen ? styles.aperto : ""}`}>
            {NAV_LINKS.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className={styles.link}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={16} />
                {label}
              </Link>
            ))}
          </div>

          <span className={styles.divisore} aria-hidden="true" />

          <button
            className={`${styles.iconButton} ${styles.toggleTema}`}
            onClick={toggleTema}
            aria-label={
              tema === "light" ? "Enable dark mode" : "Enable light mode"
            }
          >
            {tema === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            className={`${styles.iconButton} ${styles.hamburger}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
