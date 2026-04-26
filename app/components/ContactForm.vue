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

<template>
  <form class="form" @submit.prevent="handleSubmit" @reset.prevent="handleReset" novalidate>
    <fieldset class="fieldset">
      <legend class="legend">Your details</legend>

      <div class="field">
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          v-model="form.name"
          @input="clearError('name')"
          placeholder="Your name"
          :class="{ 'input--error': errors.name }"
        />
        <span v-if="errors.name" class="error">{{ errors.name }}</span>
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          v-model="form.email"
          @input="clearError('email')"
          placeholder="your@email.com"
          :class="{ 'input--error': errors.email }"
        />
        <span v-if="errors.email" class="error">{{ errors.email }}</span>
      </div>

      <div class="field">
        <label for="message">Message</label>
        <textarea
          id="message"
          name="message"
          v-model="form.message"
          @input="clearError('message')"
          placeholder="Tell me about your project..."
          :class="{ 'input--error': errors.message }"
        />
        <span v-if="errors.message" class="error">{{ errors.message }}</span>
      </div>
    </fieldset>

    <div class="form-actions">
      <Button type="submit" variant="primary" size="sm">Send message</Button>
      <Button type="reset" variant="secondary" size="sm">Reset</Button>
    </div>
  </form>
</template>

<style scoped>
/* FORM */

.form {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.fieldset {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.legend {
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: var(--space-6);
}

/* ACTIONS */

.form-actions {
  display: flex;
  gap: var(--space-4);
}

@media (max-width: 639px) {
  .form-actions > * {
    flex: 1;
  }
}

/* FIELD */

.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.field label {
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-primary);
}

.field input,
.field textarea {
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

.field input {
  min-height: unset;
}

/* ERRORI */

.input--error {
  border-color: var(--color-error, #e53e3e) !important;
}

.error {
  font-size: var(--text-xs);
  color: var(--color-error, #e53e3e);
}
</style>
