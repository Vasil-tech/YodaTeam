<template> <!--Блок гипертекстовой разметки-->
    <div class="ToolPanelRoot">
        <editMenu v-if="editMenuVisible"></editMenu> <!--Открытие страницы с кнопками детали и настройки-->
        <authorisation-page 
        v-if="AuthorisationPageVisible"
        :title="title"
        :way="way"
        ></authorisation-page> <!--Открытие страниц форм регистрации и авторизации-->
        <div class="homePage" v-if="HPEvisible"> <!--Открытие домашней страницы-->
            <HomePageEdit></HomePageEdit>
        </div>
    </div>
</template>
<script>// Блок скрипта
import editMenu from "./ToolPanelContainer/Editor/EditParam.vue"  //Импорт страницы
import AuthorisationPage from "./ToolPanelContainer/AuthorisationPage.vue" //Импорт страницы
import HomePageEdit from "./ToolPanelContainer/HomePageEdit.vue"//Импорт страницы
export default ({
    components:{ //Объявление компонентов
        editMenu,
        AuthorisationPage,
        HomePageEdit
    },
    data(){ 
        return{ //Дефолтная загрузка страницы
            HPEvisible: true,
            editMenuVisible: false,
            AuthorisationPageVisible: false,
            way: String,
            title: String,
            defWinVisible: true
        }
    },
    methods:{   
    },
    created: function(){
        this.emitter.on("OpenAuthorisation", data =>{ //Вызов метода открытия окна регистрации
        if(data == 0){ //Прописание видимости элементов
            this.HPEvisible = false;
            this.AuthorisationPageVisible = true;
            this.editMenuVisible = false;
            this.way = "Registration" //Открытие окна регистрации
            this.title = "Регистрация"
            }
        else if(data == 1){ //Прописание видимости элементов
            this.HPEvisible = false;
            this.AuthorisationPageVisible = true;
            this.editMenuVisible = false;
            this.way = "Authorisation"//Открытие окна авторизации
            this.title = "Вход"
        }
        })
        this.emitter.on("OpenEditor", data => { //Открытие панели для редактора
            if(data){//Прописание выдимости элементов
                this.HPEvisible = false;
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = true;
            }
        })
        this.emitter.on("OpenHomePage", data =>{ //Открытие дефолтной страницы
            if(data == true){ //Прописание видимости элементов
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
            }
        })
        this.emitter.on("MarketStore", data =>{ //Открытие дефолтной страницы
            if(data == true){//Прописание видимости элементов
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
            }
        })
        this.emitter.on("OpenAboutUS", data =>{ //Открытие дефолтной страницы
            if(data == true){//Прописание видимости элементов
                this.AuthorisationPageVisible = false;
                this.editMenuVisible = false;
                this.HPEvisible = true;
            }
        })
    }
})
</script>
<style>/*Блок касадной таблицы стилей */
.ToolPanelRoot{ /*Глобальные стили для  */
    position: fixed;
    float: right;
    width: 25%;
    height: 85%;
    right: 1vw;
    top: 12%;
    bottom: 3px;
    background-color: #fbfaff;
}
</style>
