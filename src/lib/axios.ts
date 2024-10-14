import axios from 'axios'
import { env } from '@/env'

// Cria a instância do Axios
export const api = axios.create({
  baseURL: env.VITE_API_URL,
  withCredentials: true, // Utilize somente se sua API requerer envio de cookies
})

// Interceptor para adicionar o accessToken a cada requisição
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(
      '@mba-marketplace/accessToken',
    )
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
      console.log(
        'Authorization Header Adicionado:',
        config.headers.Authorization,
      )
    } else {
      console.log('Nenhum Access Token encontrado.')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Interceptor para simular delay nas requisições, se habilitado
if (env.VITE_ENABLE_API_DELAY) {
  api.interceptors.request.use(async (config) => {
    await new Promise((resolve) =>
      setTimeout(resolve, Math.round(Math.random() * 3000)),
    )
    return config
  })
}
