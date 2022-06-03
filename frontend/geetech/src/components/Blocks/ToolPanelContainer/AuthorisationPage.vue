<template><!--Блок гипертекстовой разметки-->
    <div class="AuthPageRoot">
        <h2>{{title}}</h2><!--Отображение заголовка в соответствии с нажатой кнопкой-->
        <div class="inputs" v-if="AuthForm"> <!--Отображение блока авторизации-->
            <p>Логин</p>
            <input id="loginInput" type="text"><!--Поле для ввода логина-->
            <p>Пароль</p>
            <input id="passwordInput" type="password"><!--Поле для ввода пароля-->
            <p v-show="fieldAlert">Введите данные корректно</p><!--Вывод текста при неправильном вводе данных-->
        </div>
        <div class="inputs" v-if="RegistForm"><!--Отображение блока регистрации-->
            <p>E-mail</p>
            <input id="emailInput" type="text"><!--Поле для ввода Email-->
            <p>Логин</p>
            <input id="loginInput" type="text"><!--Поле для ввода логина-->
            <p>Пароль</p>
            <input id="passwordInput" type="password"><!--Поле для ввода пароля-->
            <p v-show="fieldAlert">Введите данные корректно</p><!--Вывод текста при неправильном вводе данных-->
        </div>
        <button @click="fieldAlertCheck()">{{buttonTitle}}</button><!--Вызов метода в соответствии с заголовком-->
    </div>
</template>

<script>// Блок скрипта
import jsonGenerate from "../scripts/JSONgenerate.js" // Импорт файла для проверки введенных данных и занесения их в БД
export default {
    props:{ //Принимаемые переменные от родительского элемента
        way: String,
        title: String
    },
    data(){
        return{ //Дефолтная загрузка
            AuthForm: false,
            RegistForm: false,
            fieldAlert: false,
            buttonTitle: ""
        }
    },
    created: function(){ // создание функции отображения блока авторизации
        this.showAuth()
    },
    updated(){ // Отображение функции блока авторизации
        this.showAuth()
    },
    methods:{
        showAuth(){ //Отображение блока регистрации или авторизации
        if(this.way == "Registration"){// Отображение блока регистрации при нажатии на кнопку регистрации
            this.RegistForm = true;
            this.AuthForm = false
            this.buttonTitle = "Зарегестрироваться"
        }
        else if(this.way == "Authorisation"){// Отображение блока авторизации при нажатии на кнопку авторизации
            this.AuthForm = true;
            this.RegistForm = false
            this.buttonTitle = "Войти"
        }
        },
    fieldAlertCheck(){
        if(document.getElementById("loginInput").value.length < 3 || document.getElementById("passwordInput").value.length <= 8){// Проверка вводимых данных при авторизации
            this.fieldAlert = true;//Выводит сообщение об ошибке ввода данных
        }
        else if(this.way == "Authorisation"){//Если данные корректны, передает данные в метод jsonGenerate
            this.fieldAlert = false
            jsonGenerate({ action: this.way, login: document.getElementById("loginInput").value, password: document.getElementById("passwordInput").value})
        }
        if(document.getElementById("emailInput").value.length <=  5 || document.getElementById("loginInput").value.length <= 3 || document.getElementById("passwordInput").value.length <= 8){// Проверка вводимых данных при регистрации
            this.fieldAlert = true;//Выводит сообщение об ошибке ввода данных
        }
        else if(this.way == "Registration"){//Если данные корректны, передает данные в метод jsonGenerate
            this.fieldAlert = false
            jsonGenerate({action: this.way, email: document.getElementById("emailInput").value, login: document.getElementById("loginInput").value, password: document.getElementById("passwordInput").value})
        }
    }
    }
}
</script>

<style>/*Блок каскадных таблиц стилей */
.AuthPageRoot{/*Стили для страницы авторизации и регистрации */
    font-family: 'Montserrat';
    font-size: 16pt;
    text-align: center;
    font-style: normal;
    font-weight: 500;
}
.AuthPageRoot button{ /*Стили для кнопки страницы авторизации и регистрации */
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
.AuthPageRoot button:hover{/*Стили для кнопки страницы авторизации и регистрации при наведении курсора*/
    background-color: #B0E0E6;
}
</style>