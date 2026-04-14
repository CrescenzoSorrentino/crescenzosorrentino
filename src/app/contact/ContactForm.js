"use client";
import { useState } from "react";
import Button from "../components/ui/Button/Button";
import styles from "./page.module.css";
import { EMAIL } from "../data.js";

const emptyForm = { name: "", email: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleReset() {
    setForm(emptyForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} onReset={handleReset} noValidate>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Your details</legend>
        <div className={styles.field}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Tell me about your project..."
          />
        </div>
      </fieldset>

      <div className={styles.formActions}>
        <Button type="submit" variant="primary" size="sm">
          Send message
        </Button>
        <Button type="reset" variant="secondary" size="sm">
          Reset
        </Button>
      </div>
    </form>
  );
}
