<script setup>
const email = ref('')
const password = ref('')
const router = useRouter()
const token = useCookie('token')
const user = useCookie('user')

const handleSubmit = () => {
    fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: email.value, password: password.value }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Error en la autenticación')
            }
            return response.json()
        })
        .then(data => {
            token.value = data.token
            user.value = JSON.stringify(data.user)
            router.push('/dashboard')   
        })
        .catch(error => {
            console.error('Error:', error)
        })
}
</script>

<template>
    <UCard>
        <div class="flex justify-start">
            <NoteMeLogo class="mb-4" />
        </div>
        <h2>Iniciar Sesión</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">    
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" v-model="email" required placeholder="Ingresa tu correo" />
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" id="password" v-model="password" required placeholder="Ingresa tu contraseña" />
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    </UCard>
</template>

<style scoped>
.login-form {
    background: rgba(255, 255, 255, 0.95);
    padding: 4rem;
    border-radius: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    backdrop-filter: blur(10px);
}

h2 {
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
}

.form-group {
    margin-bottom: 2rem;
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
    background-position: 100% 0;
}

@media (max-width: 480px) {
    .login-form {
        padding: 1.5rem;
    }

    h2 {
        font-size: 1.5rem;
    }
}
</style>