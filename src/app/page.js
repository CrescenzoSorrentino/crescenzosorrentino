import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Button from "./components/ui/Button/Button";
import Avatar from "./components/ui/Avatar/Avatar";
import Card from "./components/ui/Card/Card";
import Footer from "./components/Footer/Footer";
import HeroText from "./HeroText/HeroText";
import { faq, faqSchema, progetti, servizi } from "./data.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.contenuto}>
          <HeroText />
          <p className={styles.sottotitolo}>
            I build Next.js interfaces with one goal: turning your visitors into
            customers.
          </p>
          <Button variant="ghost" size="lg" href="/projects">
            View my work
          </Button>
        </div>
      </header>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.chiSonoInner}>
            <Avatar src="/foto.jpg" alt="Crescenzo Sorrentino" size={280} />
            <div className={styles.chiSonoTesto}>
              <h2>I build the frontend your product deserves</h2>
              <p>
                I&apos;m a frontend developer specializing in Next.js.
                I work with startups and professionals who know that a great
                interface isn&apos;t a nice-to-have. It&apos;s what drives
                growth.
              </p>
              <p>
                I care about every visual detail and performance metric, because
                I know that user experience is what decides whether a customer
                stays or leaves.
              </p>
              <Button variant="primary" size="md" href="/contact">
                Let&apos;s talk about your project
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.progettiHead}>
            <h2>Selected Work</h2>
            <p>A few projects that show what I can do for your business.</p>
          </div>
          <div className={styles.progettiGrid}>
            {progetti.map((progetto) => (
              <div key={progetto.href}>
                <Card {...progetto} />
              </div>
            ))}
          </div>
          <div className={styles.progettiCta}>
            <Button variant="secondary" size="md" href="/projects">
              View all projects
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className={styles.serviziHead}>
            <h2>What I can do for you</h2>
            <p>From concept to deployment: I cover the full frontend stack.</p>
          </div>
          <div className={styles.serviziGrid}>
            {servizi.map((servizio) => (
              <div key={servizio.title} className={styles.servizioCard}>
                <div className={styles.servizioIcona}>{servizio.icon}</div>
                <h3>{servizio.title}</h3>
                <p>{servizio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className={styles.faqHead}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know before we start working together.</p>
          </div>
          <div className={styles.faqList}>
            {faq.map(({ q, a }) => (
              <details key={q} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>{q}</summary>
                <p className={styles.faqAnswer}>{a}</p>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>

      <Footer />
    </main>
  );
}
