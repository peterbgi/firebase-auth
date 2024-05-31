<template>
<main class="login">
    <section class="forms">
        <form class="register" @submit.prevent="register">

            <h2>Regisztrálok</h2>

            <input 
            type="email"
             placeholder="Email cím"
             v-model="register_form.email">

             <input 
             type="password" 
             placeholder="Jelszó"
             v-model="register_form.password">

             <input type="submit" value="Regisztrálok">

        </form>


        <form class="login" @submit.prevent="login">

            <h2>Belépek</h2>

            <input 
            type="email"
             placeholder="Email cím"
             v-model="login_form.email">

             <input 
             type="password" 
             placeholder="Jelszó"
             v-model="login_form.password">

             <input type="submit" value="Belépek">

        </form>
    </section>
</main>

   
</template>

<script>
import { ref  } from 'vue';
import { useStore } from 'vuex';
export default {
    setup () {
        
        const login_form = ref({})
        const register_form = ref({})
        const store = useStore()

        const login = () => {

            store.dispatch('login', login_form.value);

        }

        const register = () =>{
            store.dispatch('register', register_form.value)
        }

        return {
            login_form,
            register_form,
            login,
            register
        }
    }
}
</script>

<style lang="scss" scoped>

</style>