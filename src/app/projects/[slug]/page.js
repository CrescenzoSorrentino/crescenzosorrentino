import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/ui/Button/Button";
import { progetti } from "../../data.js";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return progetti.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const progetto = progetti.find((p) => p.slug === slug);
  if (!progetto) return {};
  return {
    title: progetto.title,
    description: progetto.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const progetto = progetti.find((p) => p.slug === slug);
  if (!progetto) notFound();

  return (
    <main>
      <Navbar />

      <section className={`section section--alt section--pb-sm ${styles.sectionTop}`}>
        <div className="container container--narrow">

          <Link href="/projects" className={styles.back}>
            <ArrowLeft size={16} aria-hidden="true" />
            All projects
          </Link>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.year}>{progetto.year}</span>
              <span className={styles.category}>{progetto.category}</span>
            </div>
            <h1 className={styles.titolo}>{progetto.title}</h1>
            <ul className={styles.tags} aria-label="Technologies">
              {progetto.tags.map((tag) => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.links}>
              {progetto.liveUrl && (
                <Button href={progetto.liveUrl} target="_blank" variant="primary" size="sm">
                  <ExternalLink size={16} aria-hidden="true" />
                  View live site
                </Button>
              )}
              {progetto.githubUrl && (
                <Button href={progetto.githubUrl} target="_blank" variant="secondary" size="sm">
                  <GitBranch size={16} aria-hidden="true" />
                  View on GitHub
                </Button>
              )}
            </div>
          </header>
        </div>
      </section>

      <section className="section section--pt-sm">
        <div className="container container--narrow">
          <div className={styles.corpo}>
            <div className={styles.blocco}>
              <h2 className={styles.label}>About the project</h2>
              <p className={styles.descrizione}>{progetto.longDescription}</p>
            </div>

            <div className={styles.blocco}>
              <h2 className={styles.label}>Highlights</h2>
              <ul className={styles.highlights}>
                {progetto.highlights.map((h) => (
                  <li key={h} className={styles.highlight}>{h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
