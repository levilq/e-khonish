export default defineNuxtPlugin(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/eruda'
    script.onload = () => {
        window.eruda.init()
    }
    document.head.appendChild(script)
})