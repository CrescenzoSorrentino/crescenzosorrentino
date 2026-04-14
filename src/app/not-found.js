import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Button from "./components/ui/Button/Button";
import styles from "./not-found.module.css";

// Next.js mostra questo componente automaticamente quando:
// - una route non esiste
// - il codice chiama notFound() da next/navigation
// Non serve registrarlo da nessuna parte — il filename è sufficiente.
export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <Navbar />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.content}>
            <span className={styles.code}>404</span>
            <h1>Page not found</h1>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <Button href="/" variant="primary" size="md">
              Back to home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
