"use client";
import { motion } from "framer-motion";

// template.js si comporta diversamente da layout.js:
// viene rimontato ad ogni navigazione tra route, mentre layout.js viene riusato.
// Questo lo rende il posto giusto per animazioni di transizione tra pagine —
// ogni cambio di route ricrea il componente e fa ripartire l'animazione.
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
