"use client";
import { motion } from "framer-motion";
import styles from "./HeroText.module.css";

const words = "Crescenzo Sorrentino".split(" ");

export default function HeroText() {
  return (
    <h1 className={styles.title} aria-label="Crescenzo Sorrentino">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className={styles.word}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: i * 0.12,
          }}
          aria-hidden="true"
        >
          {word}
        </motion.span>
      ))}
    </h1>
  );
}
