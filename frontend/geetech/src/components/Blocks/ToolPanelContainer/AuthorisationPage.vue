<template>
    <div class="authRoot">
        <div class="entire" v-if="visible1">
            <button @click="authorisationButtonClick(1)" v-if="buttonVisible">Вход</button>
            <div class="entireForm" v-if="!buttonVisible">
                <input type="text" id="loginInput">
                <p v-if="alertVisible">Введите логин</p>
                <input type="text" id="passwordInput">
                <p v-if="alertVisible">Введите пароль</p>
                <button @click="checkInputs()">Вход</button>
            </div>
        </div>
        <div class="registration" v-if="visible2">
            <button @click="authorisationButtonClick(2)" v-if="buttonVisible">Регистрация</button>
            <div class="registrationForm" v-if="!buttonVisible">
                <input>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    data(){
        return{
            visible1: true,
            visible2: true,
            buttonVisible: true,
            alertVisible: false,
        }
    },
    methods:{
        checkInputs(){
            if(document.getElementById("loginInput".value == "" || document.getElementById("passwordInput").value == "")){
                this.alertVisible = true
            }
        },
        authorisationButtonClick(type){
            switch(type){
                case 0:
                    break;
                case 1:
                    this.visible2 = false
                    this.buttonVisible = false;
                    break;
                case 2:
                    this.visible1 = false;
                    this.buttonVisible = false;
            }
        }
    }
})
</script>

<style>

</style>