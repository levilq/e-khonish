<template>
  <section class="px-4">
    <div class="flex py-12 px-10">
      <h2
        class="text-3xl lg:text-5xl mb-8 text-center leading-snug font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#005A83] to-[#FF9D00]"
        style="font-family: 'Montserrat', sans-serif"
      >
        {{ t("start_digitalizing_your_school_today") }}
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[45px] items-start">
      <!-- Left image -->
      <div class="">
        <img
          src="/images/png/laptop.png"
          alt="Laptop"
          class="h-[456px] object-cover hidden md:flex ml-[80px]"
        />
        <img
          src="/images/png/contacts-mobile.png"
          alt="Mobile"
          class="w-full flex justify-center object-cover md:hidden"
        />
      </div>

      <!-- Right form -->
      <div class="w-full">
        <div
          v-if="error"
          class="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg"
        >
          {{ error }}
        </div>

        <div
          v-if="success"
          class="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg"
        >
          {{ t("success_message") }}
        </div>

        <form @submit="handleSubmit" class="space-y-4 text-[#005f87]">
          <div>
            <label class="font-bold ml-2">{{ t("label_name") }}</label>
            <input
              v-model="formData.full_name"
              type="text"
              :placeholder="t('placeholder_name')"
              :class="[
                'w-full px-4 py-3 rounded-3xl border-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]',
                errors.full_name ? 'border-red-500' : 'border-[#005f87]',
              ]"
            />
            <div v-if="errors.full_name" class="text-red-500 text-sm mt-1 ml-2">
              {{ errors.full_name }}
            </div>
          </div>

          <div>
            <label class="font-bold ml-2">{{ t("label_school") }}</label>
            <input
              v-model="formData.school_name"
              type="text"
              :placeholder="t('placeholder_school')"
              :class="[
                'w-full px-4 py-3 rounded-3xl border-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]',
                errors.school_name ? 'border-red-500' : 'border-[#005f87]',
              ]"
            />
            <div
              v-if="errors.school_name"
              class="text-red-500 text-sm mt-1 ml-2"
            >
              {{ errors.school_name }}
            </div>
          </div>

          <div>
            <label class="font-bold ml-2">{{ t("label_email") }}</label>
            <input
              v-model="formData.email"
              type="email"
              placeholder="domain@domain.com"
              :class="[
                'w-full px-4 py-3 rounded-3xl border-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]',
                errors.email ? 'border-red-500' : 'border-[#005f87]',
              ]"
            />
            <div v-if="errors.email" class="text-red-500 text-sm mt-1 ml-2">
              {{ errors.email }}
            </div>
          </div>

          <div>
            <label class="font-bold ml-2">{{ t("label_phone") }}</label>
            <input
              v-model="formData.phone"
              @input="applyPhoneMask"
              @keydown="preventLongInput"
              @paste="preventLongInput"
              maxlength="13"
              type="tel"
              :placeholder="t('placeholder_phone')"
              :class="[
                'w-full px-4 py-3 rounded-3xl border-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0077A3]',
                errors.phone ? 'border-red-500' : 'border-[#005f87]',
              ]"
            />
            <div v-if="errors.phone" class="text-red-500 text-sm mt-1 ml-2">
              {{ errors.phone }}
            </div>
          </div>

          <div class="flex justify-end">
            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'bg-[#005A83] text-white font-semibold py-3 px-6 rounded-xl transition w-1/2',
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#00466a] cursor-pointer',
              ]"
            >
              <span v-if="isSubmitting">{{ t("submitting") }}</span>
              <span v-else>{{ t("submit") }} →</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { globalTranslate as t } from 'assets/js/language'

const { submitRequest, isSubmitting, error, success, resetForm } =
  useLandingRequest();
const { validatePhoneNumber, applyPhoneMask, preventLongInput } =
  usePhoneMask();

const formData = reactive({
  full_name: "",
  school_name: "",
  email: "",
  phone: "",
});

const errors = reactive({
  full_name: "",
  school_name: "",
  email: "",
  phone: "",
});

const validateForm = () => {
  let isValid = true;

  Object.keys(errors).forEach((key) => {
    errors[key] = "";
  });

  if (!formData.full_name.trim()) {
    errors.full_name = t("field_required");
    isValid = false;
  }

  if (!formData.school_name.trim()) {
    errors.school_name = t("field_required");
    isValid = false;
  }

  if (!formData.email.trim()) {
    errors.email = t("field_required");
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = t("invalid_email");
      isValid = false;
    }
  }

  if (!formData.phone.trim()) {
    errors.phone = t("field_required");
    isValid = false;
  } else if (!validatePhoneNumber(formData.phone)) {
    errors.phone = t("invalid_phone");
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  const response = await submitRequest(formData);

  if (response) {
    Object.keys(formData).forEach((key) => {
      formData[key] = "";
    });

    setTimeout(() => {
      resetForm();
    }, 3000);
  }
};
</script>

