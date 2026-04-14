import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "../data.js";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects",
  description:
    "Next.js projects by Crescenzo Sorrentino — landing pages and web applications.",
  alternates: {
    canonical: "https://crescenzosorrentino.com/projects",
  },
};

const categories = ["Websites", "Web Apps"];

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
          {categories.map((category) => {
            const filtered = projects.filter((p) => p.category === category);
            if (filtered.length === 0) return null;
            return (
              <div key={category} className={styles.group}>
                <span className={styles.categoryLabel}>{category}</span>
                <ul className={styles.list}>
                  {filtered.map((project) => (
                    <li key={project.href} className={styles.item}>
                      <Link href={project.href} className={styles.row}>
                        <span className={styles.title}>{project.title}</span>
                        <span className={styles.tags}>
                          {project.tags.join(" · ")}
                        </span>
                        <ArrowRight className={styles.arrow} size={20} aria-hidden="true" />
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
