<template>
  <div class="min-h-screen flex flex-col login-page">
    <div v-if="showLogin" class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-md">
        <LoginForm />
        <div class="text-center py-4">
          <p class="text-gray-600">¿No tienes una cuenta?</p>
          <button @click="showLogin = false" class="text-blue-600 hover:text-blue-800 font-medium">
            Regístrate aquí
          </button>
        </div>
      </div>
    </div>
    <div v-else class="flex-1 flex flex-col items-center justify-center">
      <div class="w-full max-w-md">
        <RegisterForm />
        <div class="text-center py-4">
          <p class="text-gray-600">¿Ya tienes una cuenta?</p>
          <button @click="showLogin = true" class="text-blue-600 hover:text-blue-800 font-medium">
            Inicia sesión aquí
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({
  middleware: ['guest']
})

const showLogin = ref(true)
const router = useRouter()

</script>

<style scoped>
.login-page {
  background-image: url('/images/background.png');
  background-size: cover;
  background-position: center;
  position: relative;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #D5A6A9, #D5D3A6);
  opacity: 0.5;
  z-index: 0;
}

/* Asegurar que el contenido esté por encima del overlay */
.login-page > div {
  position: relative;
  z-index: 1;
}

button {
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
  