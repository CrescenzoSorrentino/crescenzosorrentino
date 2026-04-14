import Link from "next/link";
import styles from "./Button.module.css";

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  type = 'button',
  disabled = false,
  href,
  target,
  rel,
}) {
  const variantClass =
    variant === 'primary'   ? styles.primary   :
    variant === 'secondary' ? styles.secondary :
    variant === 'light'     ? styles.light     :
    styles.primary;

  const sizeClass =
    size === 'sm' ? styles.sm :
    size === 'lg' ? styles.lg :
    styles.md;

  const cls = `${styles.button} ${variantClass} ${sizeClass}`;

  // Link esterno (_blank): usa <a> nativo invece di <Link> perché Next.js Link
  // è ottimizzato solo per la navigazione interna (prefetch, router client-side).
  if (href) {
    if (target === '_blank') {
      return (
        <a href={href} className={cls} target="_blank" rel={rel ?? 'noopener noreferrer'}>
          {children}
        </a>
      );
    }
    // Link interno: usa <Link> di Next.js per il prefetch automatico della route.
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  // Nessun href: render come <button> con gestione click, type e disabled.
  return (
    <button
      className={cls}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}