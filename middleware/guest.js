export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie('token')
  
  // Si el usuario está autenticado y trata de acceder a la página de login
  if (token.value) {
    // Redirigir al dashboard
    return navigateTo('/dashboard')
  }
}) 