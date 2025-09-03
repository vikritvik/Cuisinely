
"use client";
import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}           // hidden + down
      whileInView={{ opacity: 1, y: 0 }}        // visible + normal
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}    // animate once when 20% visible
      className=""
    >
      {children}
    </motion.div>
  );
}
