import type { MiddlewareHandler } from 'astro'

export const onRequest: MiddlewareHandler = async (context, next) => {
  // Lógica de middleware, por ejemplo:
  console.log('Request to:', context.url.pathname)
  return next()
}
