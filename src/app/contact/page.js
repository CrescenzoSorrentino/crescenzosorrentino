import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your Next.js project. I reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className={`section section--alt ${styles.sectionTop}`}>
        <div className="container container--narrow">
          <div className={styles.intro}>
            <h1>Get in touch</h1>
            <p>Fill in the form or reach me directly. I reply within 24 hours.</p>
          </div>

          <div className={styles.infoStrip}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:crescenzo.sorrentino@icloud.com" className={styles.infoValue}>
                crescenzo.sorrentino@icloud.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone</span>
              <a href="tel:+393241301276" className={styles.infoValue}>
                +39 324 130 1276
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Naples, Italy · Remote worldwide</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Working hours</span>
              <span className={styles.infoValue}>Mon–Fri, 9:00–18:00 CET</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>LinkedIn</span>
              <a
                href="https://linkedin.com/in/crescenzo-sorrentino"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoValue}
              >
                crescenzo-sorrentino
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  );
}
