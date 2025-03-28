<script setup>
const email = ref('')
const password = ref('')
const name = ref('')

const handleSubmit = () => {

  fetch('http://localhost:5000/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({ 
      email: email.value, 
      password: password.value,
      username: name.value 
    }),
    headers: {
      'Content-Type': 'application/json'
    }   
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error:', error)
  })
}
</script>

<template>
    <UCard>
      <NoteMeLogo class="mb-4"/>
      <h2>Registro</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input
            type="text"
            id="name"   
            v-model="name"
            required
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Ingresa tu correo"
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Ingresa tu contraseña"
          />
        </div>
    
        <button type="submit">Registrarse</button>
      </form>
    </UCard>
</template>

<style scoped>



h2 {
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #4a90e2;
}

button {
  width: 100%;
  padding: 1rem;
  background-image: linear-gradient(to right, #D5A6A9, #D5D3A6, #D5A6A9);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  background-size: 200% 100%;
}

button:hover {
  background-position: right center;
}
</style> 