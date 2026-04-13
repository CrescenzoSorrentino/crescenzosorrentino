import Link from "next/link";
import Image from "next/image";
import styles from "./Card.module.css";

// Il componente riceve queste props:
// - title: titolo del progetto
// - description: descrizione breve
// - tags: array di stringhe (tecnologie usate)
// - href: link al progetto o alla pagina dettaglio
// - image: src dell'immagine (opzionale — mostra placeholder se assente)

export default function Card({ title, description, tags = [], href, image }) {
  return (
    <article className={styles.card}>
      <div className={styles.anteprima}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>

      <div className={styles.corpo}>
        {tags.length > 0 && (
          <ul className={styles.tags} aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>{tag}</li>
            ))}
          </ul>
        )}
        <h3 className={styles.titolo}>{title}</h3>
        <p className={styles.descrizione}>{description}</p>
        <Link href={href} className={styles.link}>
          View project
        </Link>
      </div>
    </article>
  );
}
