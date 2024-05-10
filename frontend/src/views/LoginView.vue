<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login" class="login-form">
            <label for="email">Email:</label>
            <input type="text" v-model="email" required>

            <label for="password">Senha:</label>
            <input type="password" v-model="senha" required>

            <button type="submit">Entrar</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            email: '',
            senha: '',
            token: '',
            isLoged: false
        };
    },
    methods: {
        login() {
            const formData = {
                email: this.email,
                senha: this.senha,
            };
      
            axios.post('http://localhost:8080/login', formData)
                .then((response) => {
                    console.log(response.data)
                    if (!response.data.isSuccess) {
                        alert(response.data.error);
                        return;
                    }

                    this.token = response.data._value.data.token;
                    this.isLoged = this.verify(this.token);
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
        verify(token) {
            axios.post('http://localhost:8080/verify', { token })
                .then((response) => {
                    console.log(response.data)
                    if (!response.data.isSuccess) {
                        alert(response.data.error);
                        return false;
                    }
                    return true
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
        resetForm() {
            this.email = '';
            this.senha = '';
        }
    }
};
</script>

<style scoped>
.login-container {
    background-color: #f0f8ff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-form {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #333;
}

input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>