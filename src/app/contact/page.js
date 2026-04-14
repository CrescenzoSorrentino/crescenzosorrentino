import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactForm from "./ContactForm";
import styles from "./page.module.css";
import { EMAIL } from "../data.js";

const CONTACT_INFO = [
  { label: "Email",         value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "Phone",         value: "+39 324 130 1276",                href: "tel:+393241301276" },
  { label: "Location",      value: "Naples, Italy · Remote worldwide" },
  { label: "Working hours", value: "Mon–Fri, 9:00–18:00 CET" },
  { label: "LinkedIn",      value: "crescenzo-sorrentino",            href: "https://linkedin.com/in/crescenzo-sorrentino", external: true },
];

export const metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your Next.js project. I reply within 24 hours.",
  alternates: {
    canonical: "https://crescenzosorrentino.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className={`section section--alt section--pb-sm ${styles.sectionTop}`}>
        <div className="container container--narrow">
          <div className={styles.intro}>
            <h1>Get in touch</h1>
            <p>Fill in the form or reach me directly. I reply within 24 hours.</p>
          </div>
        </div>
      </section>

      <section className="section section--pt-sm">
        <div className="container container--narrow">
          <div className={styles.infoStrip}>
            {CONTACT_INFO.map(({ label, value, href, external }) => (
              <div key={label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{label}</span>
                {href ? (
                  <a
                    href={href}
                    className={styles.infoValue}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {value}
                  </a>
                ) : (
                  <span className={styles.infoValue}>{value}</span>
                )}
              </div>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>


      <Footer />
    </main>
  );
}
