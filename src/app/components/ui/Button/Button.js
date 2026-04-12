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
}) {
  const classeVariant =
    variant === 'primary'   ? styles.primary   :
    variant === 'secondary' ? styles.secondary :
    variant === 'ghost'     ? styles.ghost     :
    styles.primary;

  const classeSize =
    size === 'sm' ? styles.sm :
    size === 'lg' ? styles.lg :
    styles.md;

  const classe = `${styles.button} ${classeVariant} ${classeSize}`;

  if (href) {
    return (
      <Link href={href} className={classe}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classe}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}