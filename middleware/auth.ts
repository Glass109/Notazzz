
export default defineNuxtRouteMiddleware((to, from) => {
  const cookies = useCookie('token')
  console.log("token", cookies.value);
  
  if (!cookies.value) {
    return navigateTo('/login')
  }
}) 