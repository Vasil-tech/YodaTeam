<template>
    <div class="AuthPageRoot">
        <h2>{{title}}</h2>
        <div class="inputs" v-if="AuthForm">
            <p>Логин</p>
            <input id="loginInput" type="text">
            <p>Пароль</p>
            <input id="passwordInput" type="password">
            <p v-show="fieldAlert">Введите данные корректно</p>
        </div>
        <div class="inputs" v-if="RegistForm">
            <p>E-mail</p>
            <input id="emailInput" type="text">
            <p>Логин</p>
            <input id="loginInput" type="text">
            <p>Пароль</p>
            <input id="passwordInput" type="password">
            <p v-show="fieldAlert">Введите данные корректно</p>
        </div>
        <button @click="fieldAlertCheck()">{{buttonTitle}}</button>
    </div>
</template>

<script>
import jsonGenerate from "../scripts/JSONgenerate.js"
export default {
    props:{
        way: String,
        title: String
    },
    data(){
        return{
            AuthForm: false,
            RegistForm: false,
            fieldAlert: false,
            buttonTitle: ""
        }
    },
    created: function(){
        this.showAuth()
    },
    updated(){
        this.showAuth()
    },
    methods:{
        showAuth(){
        if(this.way == "Registration"){
            this.RegistForm = true;
            this.AuthForm = false
            this.buttonTitle = "Зарегестрироваться"
        }
        else if(this.way == "Authorisation"){
            this.AuthForm = true;
            this.RegistForm = false
            this.buttonTitle = "Войти"
        }
        },
    fieldAlertCheck(){
        if(document.getElementById("loginInput").value.length < 3 || document.getElementById("passwordInput").value.length <= 8){
            this.fieldAlert = true;
        }
        else if(this.way == "Authorisation"){
            this.fieldAlert = false
            jsonGenerate({ action: this.way, login: document.getElementById("loginInput").value, password: document.getElementById("passwordInput").value})
        }
        if(document.getElementById("emailInput").value.length <=  5 || document.getElementById("loginInput").value.length <= 3 || document.getElementById("passwordInput").value.length <= 8){
            this.fieldAlert = true;
        }
        else if(this.way == "Registration"){
            this.fieldAlert = false
            jsonGenerate({action: this.way, email: document.getElementById("emailInput").value, login: document.getElementById("loginInput").value, password: document.getElementById("passwordInput").value})
        }
    }
    }
}
</script>

<style>
.AuthPageRoot{
    font-family: 'Montserrat';
    font-size: 16pt;
    text-align: center;
    font-style: normal;
    font-weight: 500;
}

.AuthPageRoot button{
    align-content: center;
    position: relative;
    text-align: center;
    border: 1px solid #71D4DA;
    border-radius: 50px;
    background-color: #71D4DA;
    width: auto;
    color: white;
    margin-top: 5%;
    padding: 8pt 16pt;
}

.AuthPageRoot button:hover{
    background-color: #B0E0E6;
}
</style>