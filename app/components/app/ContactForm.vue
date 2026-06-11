<template>
  <form class="form" @submit.prevent="handleSubmit" @reset.prevent="handleReset" novalidate>
    <fieldset class="form__fieldset">
      <legend class="form__legend">Your details</legend>

      <div class="form__field">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          v-model="form.name"
          @input="clearError('name')"
          placeholder="Your name"
          :class="{ 'form__field--error': errors.name }"
        />
        <span v-if="errors.name" class="form__error">{{ errors.name }}</span>
      </div>

      <div class="form__field">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="form.email"
          @input="clearError('email')"
          placeholder="your@email.com"
          :class="{ 'form__field--error': errors.email }"
        />
        <span v-if="errors.email" class="form__error">{{ errors.email }}</span>
      </div>

      <div class="form__field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          @input="clearError('message')"
          placeholder="Tell me about your project..."
          :class="{ 'form__field--error': errors.message }"
        />
        <span v-if="errors.message" class="form__error">{{ errors.message }}</span>
      </div>
    </fieldset>

    <div class="form__actions">
      <BaseButton type="submit" variant="primary" size="sm">Send message</BaseButton>
      <BaseButton type="reset" variant="secondary" size="sm">Reset</BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { EMAIL } from "~/data/contact"

const form   = reactive({ name: "", email: "", message: "" })
const errors = reactive({ name: "", email: "", message: "" })

// Valida tutti i campi e popola errors. Restituisce true se il form è valido.
function validate(): boolean {
  errors.name    = form.name.trim()    ? "" : "Name is required."
  errors.email   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? "" : "Enter a valid email address."
  errors.message = form.message.trim() ? "" : "Message is required."
  return !errors.name && !errors.email && !errors.message
}

// Svuota l'errore del singolo campo non appena l'utente inizia a correggerlo
function clearError(field: keyof typeof errors) {
  errors[field] = ""
}

function handleReset() {
  Object.assign(form,   { name: "", email: "", message: "" })
  Object.assign(errors, { name: "", email: "", message: "" })
}

function handleSubmit() {
  if (!validate()) return

  const subject = encodeURIComponent(`Project inquiry from ${form.name}`)
  const body    = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
/* FORM */

.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.form__fieldset {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
  margin: 0;
  padding: 0;
  border: none;
}

.form__legend {
  margin-bottom: var(--space-6);
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* ACTIONS */

.form__actions {
  display: flex;
  gap: var(--space-4);
}

@media (max-width: 639px) {
  .form__actions > * {
    flex: 1;
  }
}

/* FIELD */

.form__field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form__field label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
}

.form__field input,
.form__field textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  background: var(--bg-page);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: var(--text-base);
  color: var(--text-primary);
  transition: border-color 180ms ease;
  resize: vertical;
  min-height: 120px;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
}

.form__field input {
  min-height: unset;
}

/* ERRORI */

.form__field--error {
  border-color: var(--color-error, #e53e3e) !important;
}

.form__error {
  font-size: var(--text-xs);
  color: var(--color-error, #e53e3e);
}
</style>
