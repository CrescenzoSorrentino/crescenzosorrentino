import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/ui/Button/Button";
import { projects } from "../../data.js";
import styles from "./page.module.css";

// Dice a Next.js quali slug prerenderare a build time.
// Senza questa funzione il sito sarebbe completamente statico e le pagine
// di dettaglio non esisterebbero — ogni slug verrebbe trattato come 404.
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Genera i metadati (title, description, canonical) per ogni pagina di dettaglio.
// Viene chiamata da Next.js prima del render — l'output finisce nel <head>.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `https://crescenzosorrentino.com/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

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
              <span>{project.year}</span>
              <span>{project.category}</span>
            </div>
            <h1 className={styles.title}>{project.title}</h1>
            <ul className={styles.tags} aria-label="Technologies">
              {project.tags.map((tag) => (
                <li key={tag} className={styles.tag}>{tag}</li>
              ))}
            </ul>
            <div className={styles.links}>
              {project.liveUrl && (
                <Button href={project.liveUrl} target="_blank" variant="primary" size="sm">
                  <ExternalLink size={16} aria-hidden="true" />
                  View live site
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} target="_blank" variant="secondary" size="sm">
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
          <div className={styles.body}>
            <div className={styles.block}>
              <h2 className={styles.label}>About the project</h2>
              <p className={styles.description}>{project.longDescription}</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.label}>Highlights</h2>
              <ul className={styles.highlights}>
                {project.highlights.map((h) => (
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
