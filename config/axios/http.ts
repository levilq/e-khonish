export const apiFetch = {
    async get<T>(path: string, params?: Record<string, any>) {
        const base = useRuntimeConfig().public.baseURL_API
        const url = `${base}${path}${buildQuery(params)}`

        const res = await fetch(url)
        if (!res.ok) {
            throw new Error(`GET ${url} failed with status ${res.status}`)
        }

        const text = await res.text()
        return text ? (JSON.parse(text) as T) : undefined
    },

    async patch<T>(path: string, body?: any) {
        const base = useRuntimeConfig().public.baseURL_API
        const url = `${base}${path}`

        const res = await fetch(url, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            throw new Error(`PATCH ${url} failed with status ${res.status}`)
        }

        const text = await res.text()
        return text ? (JSON.parse(text) as T) : undefined
    }
}

function buildQuery(params?: Record<string, any>) {
    if (!params) return ''

    const qs = new URLSearchParams()
    Object.entries(params).forEach(([key, val]) => {
        if (val !== undefined && val !== null) {
            qs.append(key, String(val))
        }
    })

    const query = qs.toString()
    return query ? `?${query}` : ''
}
