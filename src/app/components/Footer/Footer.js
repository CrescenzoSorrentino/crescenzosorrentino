import Link from "next/link";
import { User, FolderOpen, BookOpen, Mail, Shield, Cookie } from "lucide-react";
import styles from "./Footer.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy", icon: Shield },
  { href: "/cookie-policy", label: "Cookie Policy", icon: Cookie },
];

function FooterCol({ title, links }) {
  return (
    <div className={styles.col}>
      <span className={styles.colTitle}>{title}</span>
      <nav>
        {links.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} className={styles.link}>
            {Icon && <Icon size={14} />}
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Let&apos;s work together</h2>
          <p className={styles.ctaText}>
            Have a project in mind? I&apos;m available for freelance work and
            open to new opportunities.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Get in touch
          </Link>
        </div>

        <div className={styles.top}>
          <div className={styles.brand}>
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
                  fill="rgba(255,255,255,0.15)"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 29.7128V15.8564M16 15.8564L28 8.92822M16 15.8564L4 8.92822"
                  stroke="rgba(255,255,255,0.75)"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="16" cy="16" r="3" fill="var(--color-accent)" />
              </svg>
            </Link>
            <p className={styles.description}>
              Building fast, polished Next.js interfaces that turn visitors into
              customers.
            </p>
          </div>

          <FooterCol title="Navigation" links={NAV_LINKS} />
          <FooterCol title="Legal" links={LEGAL_LINKS} />
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Crescenzo Sorrentino</p>
          <p>
            Designed & Developed by{" "}
            <Link href="https://linkedin.com/in/crescenzo-sorrentino" target="_blank" rel="noopener noreferrer">
              <span>Crescenzo Sorrentino</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
