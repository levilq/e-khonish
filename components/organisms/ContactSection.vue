<script setup lang="ts">
import { reactive } from 'vue'
import { globalTranslate as translate } from 'assets/js/language'

const submitRequest = async () => true
const isSubmitting = false
const error = ''
const success = false
const resetForm = () => {}
const validatePhoneNumber = () => true
const applyPhoneMask = () => {}
const preventLongInput = () => {}

const formData = reactive({
  full_name: '',
  school_name: '',
  email: '',
  phone: ''
})

const errors = reactive({
  full_name: '',
  school_name: '',
  email: '',
  phone: ''
})

const validateForm = () => {
  let isValid = true
  Object.keys(errors).forEach(k => (errors[k as keyof typeof errors] = ''))

  if (!formData.full_name.trim()) {
    errors.full_name = translate('field_required')
    isValid = false
  }
  if (!formData.school_name.trim()) {
    errors.school_name = translate('field_required')
    isValid = false
  }
  if (!formData.email.trim()) {
    errors.email = translate('field_required')
    isValid = false
  } else {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!re.test(formData.email)) {
      errors.email = translate('invalid_email')
      isValid = false
    }
  }
  if (!formData.phone.trim()) {
    errors.phone = translate('field_required')
    isValid = false
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = translate('invalid_phone')
    isValid = false
  }
  return isValid
}

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  if (!validateForm()) return
  const res = await submitRequest(formData)
  if (res) {
    Object.keys(formData).forEach(k => (formData[k as keyof typeof formData] = ''))
    setTimeout(() => resetForm(), 3000)
  }
}
</script>

<template>
  <section class="contact-section">
    <div class="headline-wrap">
      <h2 class="headline">
        {{ translate('start_digitalizing_your_school_today') }}
      </h2>
    </div>

    <div class="contact-container">
      <div class="image-col">
        <img src="/images/webp/laptop.webp" alt="Laptop" class="image-desktop" />
        <img src="/images/webp/contacts-mobile.webp" alt="Mobile" class="image-mobile" />
      </div>

      <div class="form-col">
        <div v-if="error" class="alert alert-error">{{ error }}</div>
        <div v-if="success" class="alert alert-success">{{ translate('success_message') }}</div>

        <form class="form" @submit="handleSubmit">
          <div class="field">
            <label class="label">{{ translate('label_name') }}</label>
            <input
                v-model="formData.full_name"
                type="text"
                :placeholder="translate('placeholder_name')"
                class="input"
                :class="{ 'input-error': errors.full_name }"
            />
            <div v-if="errors.full_name" class="error-text">{{ errors.full_name }}</div>
          </div>

          <div class="field">
            <label class="label">{{ translate('label_school') }}</label>
            <input
                v-model="formData.school_name"
                type="text"
                :placeholder="translate('placeholder_school')"
                class="input"
                :class="{ 'input-error': errors.school_name }"
            />
            <div v-if="errors.school_name" class="error-text">{{ errors.school_name }}</div>
          </div>

          <div class="field">
            <label class="label">{{ translate('label_email') }}</label>
            <input
                v-model="formData.email"
                type="email"
                placeholder="domain@domain.com"
                class="input"
                :class="{ 'input-error': errors.email }"
            />
            <div v-if="errors.email" class="error-text">{{ errors.email }}</div>
          </div>

          <div class="field">
            <label class="label">{{ translate('label_phone') }}</label>
            <input
                v-model="formData.phone"
                type="tel"
                maxlength="13"
                :placeholder="translate('placeholder_phone')"
                @input="applyPhoneMask"
                @keydown="preventLongInput"
                @paste="preventLongInput"
                class="input"
                :class="{ 'input-error': errors.phone }"
            />
            <div v-if="errors.phone" class="error-text">{{ errors.phone }}</div>
          </div>

          <div class="actions">
            <button
                type="submit"
                class="btn"
                :disabled="isSubmitting"
                :class="{ 'btn-disabled': isSubmitting }"
            >
              <span v-if="isSubmitting">{{ translate('submitting') }}</span>
              <span v-else>{{ translate('submit') }} →</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 4rem 0;
  width: 100%;
  overflow-x: hidden;
}

.headline-wrap {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  text-align: center;
  /* Mobile: 20px padding */
  padding: 0 20px;
}

/* Tablet: 32px padding */
@media (min-width: 768px) {
  .headline-wrap {
    padding: 0 32px;
  }
}

/* Desktop: NO padding */
@media (min-width: 1024px) {
  .headline-wrap {
    padding: 0;
  }
}

.headline {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  line-height: 1.2;
  font-size: 32px;
  background: linear-gradient(90deg, #005A83 0%, #FF9D00 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  /* Mobile: 20px padding */
  padding: 0 20px;
}

/* Tablet: 32px padding */
@media (min-width: 768px) {
  .contact-container {
    padding: 0 32px;
  }
}

/* Desktop: NO padding */
@media (min-width: 1024px) {
  .contact-container {
    padding: 0;
  }
}

.image-col {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.image-desktop {
  display: none;
  height: 440px;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(0,0,0,0.12));
}

.image-mobile {
  display: block;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

.form-col {
  width: 100%;
}

.form {
  padding: 0;
  width: 100%;
}

.field {
  margin-bottom: 1.125rem;
}

.label {
  display: block;
  font-weight: 700;
  color: #005f87;
  margin: 0 0 6px 10px;
  text-align: left;
}

.input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 28px;
  border: 2px solid #005f87;
  outline: none;
  font-size: 15px;
  transition: box-shadow .2s, border-color .2s;
  background-color: transparent;
  box-sizing: border-box;
}

.input::placeholder {
  color: #9aa4af;
}

.input:focus {
  border-color: #0077A3;
  box-shadow: 0 0 0 3px rgba(0, 119, 163, 0.2);
}

.input-error {
  border-color: #ef4444 !important;
}

.error-text {
  color: #ef4444;
  font-size: 13px;
  margin-top: 6px;
  margin-left: 10px;
}

.alert {
  margin-bottom: 16px;
  padding: 12px 14px;
  border-radius: 10px;
  font-weight: 600;
  border: 1px solid;
}

.alert-error {
  background: #fee2e2;
  color: #b91c1c;
  border-color: #fca5a5;
}

.alert-success {
  background: #dcfce7;
  color: #166534;
  border-color: #86efac;
}

.actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.btn {
  background: #005A83;
  color: #fff;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: background .2s, opacity .2s, transform .1s;
  width: 100%;
  max-width: 320px;
}

.btn:hover {
  background: #00466a;
}

.btn:active {
  transform: scale(0.98);
}

.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Tablet */
@media (min-width: 768px) {
  .contact-section {
    padding: 5rem 0;
  }

  .headline {
    font-size: 44px;
  }

  .form {
    padding: 2rem;
  }

  .image-mobile {
    max-width: 400px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .headline {
    font-size: 56px;
  }

  .contact-container {
    grid-template-columns: 1fr 1fr;
    gap: 80px;
  }

  .image-desktop {
    display: block;
  }

  .image-mobile {
    display: none;
  }

  .form {
    padding: 2rem;
  }
}

/* Mobile specific */
@media (max-width: 767px) {
  .contact-section {
    padding: 3rem 0;
    overflow-x: hidden;
  }

  .headline-wrap {
    margin-bottom: 2rem;
  }

  .headline {
    font-size: 1.75rem;
  }

  .contact-container {
    gap: 2rem;
  }

  .field {
    margin-bottom: 1rem;
  }

  .label {
    font-size: 0.95rem;
  }

  .input {
    font-size: 14px;
    padding: 11px 15px;
  }

  .btn {
    padding: 11px 24px;
    font-size: 15px;
  }

  .actions {
    margin-top: 1.25rem;
  }
}
</style>