<template>
    <div class="AuthPageRoot">
        <h2>{{title}}</h2>
        <div class="inputs" v-if="AuthForm">
            <p>Логин</p>
            <input type="text">
            <p>Пароль</p>
            <input type="password">
        </div>
        <div class="inputs" v-if="RegistForm">
            <p>E-mail</p>
            <input>
            <p>Логин</p>
            <input>
            <p>Пароль</p>
            <input type="password">
        </div>
        <button>Вход</button>
    </div>
</template>

<script>
export default {
    props:{
        way: String,
        title: String
    },
    data(){
        return{
            AuthForm: false,
            RegistForm: false
        }
    },
    created: function(){
        if(this.way == "Registration"){
            this.RegistForm = true;
            this.AuthForm = false
        }
        else if(this.way == "Authorisation"){
            this.AuthForm = true;
            this.RegistForm = false
        }
    },
    updated(){
        if(this.way == "Registration"){
            this.RegistForm = true;
            this.AuthForm = false
        }
        else if(this.way == "Authorisation"){
            this.AuthForm = true;
            this.RegistForm = false
        }
    }
}

</script>

<style>

</style>