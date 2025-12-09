interface LandingRequestData {
  full_name: string
  school_name: string
  email: string
  phone: string
}

interface LandingRequestResponse {
  success: boolean
  message: string
  data: {
    id: number
    full_name: string
    school_name: string
    email: string
    phone: string
    created_at: string
  }
}

export const useLandingRequest = () => {

  const isSubmitting = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const submitRequest = async (data: LandingRequestData): Promise<LandingRequestResponse | null> => {
    isSubmitting.value = true
    error.value = null
    success.value = false

    try {
      const response = await $fetch<LandingRequestResponse>('/api/support/landing-requests', {
        method: 'POST',
        body: data
      })

      success.value = true
      return response

    } catch (err: any) {
      console.error('Error submitting landing request:', err)

      if (err.statusCode === 400) {
        error.value = err.statusMessage || t('validation_error')
      } else if (err.statusCode === 422) {
        error.value = t('validation_error')
      } else if (err.statusCode >= 500) {
        error.value = t('server_error')
      } else {
        error.value = t('network_error')
      }

      return null
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    error.value = null
    success.value = false
  }

  return {
    submitRequest,
    isSubmitting: readonly(isSubmitting),
    error: readonly(error),
    success: readonly(success),
    resetForm
  }
}
