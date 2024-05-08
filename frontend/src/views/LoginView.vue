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
            senha: ''
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
                    console.log(response.data);

                    if (response.status === 200) {
                        const token = response.data._value.data.token;
                        localStorage.setItem('token', token);
                        this.redirect();
                    }
                })
                .catch((error) => {
                    alert(error);
                })
                .finally(() => {
                    this.resetForm();
                });
        },
        resetForm() {
            this.email = null;
            this.senha = null;
        },
        redirect() {
            this.$router.push('/homeview');
            window.location.reload();
        },
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
  