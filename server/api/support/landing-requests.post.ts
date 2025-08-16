export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const response = await $fetch('https://admin.khonish.ru/api/support/landing-requests', {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    return response

  } catch (error: any) {

    throw createError({
      statusCode: error.status || 500,
      statusMessage: error.message || 'Internal Server Error',
      data: error.data
    })
  }
})
