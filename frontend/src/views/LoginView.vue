<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login" class="login-form">
            <label for="username">Usuário:</label>
            <input type="text" v-model="username" required>

            <label for="password">Senha:</label>
            <input type="password" v-model="password" required>

            <button type="submit">Entrar</button>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        resetForm() {
            this.username = null;
            this.password = null;
        },
        redirect() {
            this.$router.push('/login');
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
  