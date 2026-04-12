"use client";
import { motion } from "framer-motion";
import styles from "./HeroText.module.css";

const parole = "Crescenzo Sorrentino".split(" ");

export default function HeroText() {
  return (
    <h1 className={styles.titolo} aria-label="Crescenzo Sorrentino">
      {parole.map((parola, i) => (
        <motion.span
          key={parola}
          className={styles.parola}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.12,
          }}
          aria-hidden="true"
        >
          {parola}
        </motion.span>
      ))}
    </h1>
  );
}
