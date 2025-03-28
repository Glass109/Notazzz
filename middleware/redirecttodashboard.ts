export default defineNuxtRouteMiddleware((to) => {
  // Solo redirigir si estamos en la ruta raíz
  if (to.path === '/') {
    return navigateTo('/dashboard')
  }
}) 