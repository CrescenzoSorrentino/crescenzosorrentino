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
          :maxlength="FIELD_LIMITS.name"
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
          :maxlength="FIELD_LIMITS.email"
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
        <div class="form__field-foot">
          <span v-if="errors.message" class="form__error">{{ errors.message }}</span>
          <span
            class="form__counter"
            :class="{ 'form__counter--over': form.message.length > FIELD_LIMITS.message }"
          >{{ form.message.length }} / {{ FIELD_LIMITS.message }}</span>
        </div>
      </div>

      <!-- Honeypot anti-bot: nascosto agli utenti, ignorato dagli screen reader.
           Se valorizzato, il server scarta la richiesta. -->
      <div class="form__honeypot" aria-hidden="true">
        <label for="company">Company</label>
        <input id="company" name="company" type="text" v-model="form.company" tabindex="-1" autocomplete="off" />
      </div>
    </fieldset>

    <div class="form__actions">
      <BaseButton type="submit" variant="primary" size="sm" :disabled="status === 'sending'">
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </BaseButton>
      <BaseButton type="reset" variant="secondary" size="sm" :disabled="status === 'sending'">Reset</BaseButton>
    </div>

    <p v-if="status === 'success'" class="form__status form__status--ok" role="status">
      Thanks, your message is on its way. I'll get back to you within 48 hours.
    </p>
    <p v-else-if="status === 'error'" class="form__status form__status--error" role="alert">
      Something went wrong. Please email me directly at
      <a :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>.
    </p>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue"
import { EMAIL, EMAIL_RE, FIELD_LIMITS } from "~/data/contact"

// "company" e' il campo honeypot: resta sempre vuoto per gli utenti reali.
const form   = reactive({ name: "", email: "", message: "", company: "" })
const errors = reactive({ name: "", email: "", message: "" })

type Status = "idle" | "sending" | "success" | "error"
const status = ref<Status>("idle")

// Valida tutti i campi e popola errors. Restituisce true se il form è valido.
function validate(): boolean {
  errors.name    = !form.name.trim()                  ? "Name is required."
                 : form.name.trim().length > FIELD_LIMITS.name    ? `Name must be at most ${FIELD_LIMITS.name} characters.`
                 : ""
  errors.email   = !EMAIL_RE.test(form.email)         ? "Enter a valid email address."
                 : form.email.trim().length > FIELD_LIMITS.email  ? `Email must be at most ${FIELD_LIMITS.email} characters.`
                 : ""
  errors.message = !form.message.trim()               ? "Message is required."
                 : form.message.trim().length > FIELD_LIMITS.message ? `Message must be at most ${FIELD_LIMITS.message} characters.`
                 : ""
  return !errors.name && !errors.email && !errors.message
}

// Svuota l'errore del singolo campo non appena l'utente inizia a correggerlo
function clearError(field: keyof typeof errors) {
  errors[field] = ""
}

function handleReset() {
  Object.assign(form,   { name: "", email: "", message: "", company: "" })
  Object.assign(errors, { name: "", email: "", message: "" })
  status.value = "idle"
}

async function handleSubmit() {
  if (!validate() || status.value === "sending") return

  status.value = "sending"
  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: { name: form.name, email: form.email, message: form.message, company: form.company },
    })
    status.value = "success"
    Object.assign(form, { name: "", email: "", message: "", company: "" })
  } catch {
    status.value = "error"
  }
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

/* HONEYPOT: tolto dal flusso e invisibile, ma non display:none (alcuni bot lo evitano) */

.form__honeypot {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

/* ACTIONS */

.form__actions {
  display: flex;
  gap: var(--space-4);
}

/* STATUS */

.form__status {
  font-size: var(--text-sm);
  line-height: 1.5;
}

.form__status--ok {
  color: var(--color-accent-text);
}

.form__status--error {
  color: #c0392b;
}

.form__status--error a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
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

/* Footer del campo: errore a sinistra, contatore a destra */

.form__field-foot {
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
}

.form__counter {
  margin-left: auto;
  font-size: var(--text-xs);
  font-variant-numeric: tabular-nums;
  color: var(--text-secondary);
}

.form__counter--over {
  color: var(--color-error, #e53e3e);
}
</style>
