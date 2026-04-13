import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { progetti } from "../data.js";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects",
  description:
    "Next.js projects by Crescenzo Sorrentino — landing pages, dashboards, and web applications.",
};

const categorie = ["Websites", "Web Apps"];

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />

      <section className={`section section--alt section--pb-sm ${styles.sectionTop}`}>
        <div className="container container--narrow">
          <div className={styles.intro}>
            <h1>Projects</h1>
            <p>A selection of work I&apos;ve built for clients and personal projects.</p>
          </div>
        </div>
      </section>

      <section className="section section--pt-sm">
        <div className="container container--narrow">
          {categorie.map((categoria) => {
            const filtrati = progetti.filter((p) => p.category === categoria);
            if (filtrati.length === 0) return null;
            return (
              <div key={categoria} className={styles.gruppo}>
                <span className={styles.categoriaLabel}>{categoria}</span>
                <ul className={styles.list}>
                  {filtrati.map((progetto) => (
                    <li key={progetto.href} className={styles.item}>
                      <Link href={progetto.href} className={styles.row}>
                        <span className={styles.titolo}>{progetto.title}</span>
                        <span className={styles.tags}>
                          {progetto.tags.join(" · ")}
                        </span>
                        <ArrowRight className={styles.freccia} size={20} aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />

    </main>
  );
}
