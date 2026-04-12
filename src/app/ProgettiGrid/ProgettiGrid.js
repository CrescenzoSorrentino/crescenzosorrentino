"use client";
import { motion } from "framer-motion";
import Card from "../components/ui/Card/Card";
import styles from "./ProgettiGrid.module.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function ProgettiGrid({ progetti }) {
  return (
    <motion.div
      className={styles.grid}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {progetti.map((progetto) => (
        <motion.div key={progetto.href} variants={item}>
          <Card {...progetto} />
        </motion.div>
      ))}
    </motion.div>
  );
}
