export const usePhoneMask = () => {
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, '')

    if (numbers.startsWith('992')) {
      const limitedNumbers = numbers.slice(0, 12)
      return `+${limitedNumbers}`
    }

    if (numbers.startsWith('0')) {
      const remainingNumbers = numbers.slice(1, 10)
      return `+992${remainingNumbers}`
    }

    if (numbers.length <= 9) {
      return `+992${numbers}`
    }

    if (numbers.length > 9) {
      return `+992${numbers.slice(0, 9)}`
    }

    return numbers ? `+${numbers}` : ''
  }

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^\+992\d{9}$/
    const digitsOnly = phone.replace(/\D/g, '')
    return phoneRegex.test(phone) && digitsOnly.length === 12
  }

  const applyPhoneMask = (event: Event) => {
    const target = event.target as HTMLInputElement
    const currentValue = target.value

    const numbers = currentValue.replace(/\D/g, '')

    if (numbers.length > 12) {
      const previousValue = target.getAttribute('data-previous-value') || ''
      target.value = previousValue
      return
    }


    target.setAttribute('data-previous-value', currentValue)

    const formatted = formatPhoneNumber(currentValue)
    target.value = formatted
  }

  const preventLongInput = (event: Event) => {
    const target = event.target as HTMLInputElement
    const currentValue = target.value
    const numbers = currentValue.replace(/\D/g, '')

    if (numbers.length > 12) {
      event.preventDefault()
      return false
    }
  }

  return {
    formatPhoneNumber,
    validatePhoneNumber,
    applyPhoneMask,
    preventLongInput
  }
}
