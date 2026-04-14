import Image from "next/image";
import styles from "./Avatar.module.css";

// size: dimensione del cerchio in px (default 200)
// src: percorso immagine
// alt: testo alternativo
export default function Avatar({ src, alt, size = 200 }) {
  return (
    <div
      className={styles.avatar}
      style={{ "--size": `${size}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className={styles.image}
      />
    </div>
  );
}
