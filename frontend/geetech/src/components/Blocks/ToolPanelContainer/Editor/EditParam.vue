<template> <!--Блок гипертекстовой разметки-->
    <div class="EditParamRoot">
        <div class="MenuButtons">
            <hr v-if="HRvisible"><!--Отображение линии-->
            <div class="component1" v-if="EditTool1"> <!--Отображение блока с кнопкой детали-->
                    <div class="NavBut1">
                        <button v-if="buttonVisible" @click="NavButtonClick(1)">Детали</button> <!--Вызов метода для отображения блока информации о модели-->
                    </div>
                <hr>
                <div v-if="componentVisible"> <!--Отображение блока информации о модели-->
                    <div class="BtnBack">
                    <button @click="NavButtonClick(0) ">Назад</button> <!--Вызов метода для отображения блока с кнопками детали и настройки-->
                    </div>
                    <ModelInfo></ModelInfo>
                </div>
            </div>
            <div class="component2" v-if="EditTool2"> <!--Отображение блока с кнопкой настройки-->
                <div class="NavBut2">
                    <button v-if="buttonVisible" @click="NavButtonClick(2)">Настройки</button> <!--Вызов метода для отображения блока настроек-->
                </div>
                <hr>
                <div v-if="componentVisible"> <!--Отображение блока настроек-->
                    <div class="BtnBack">
                        <button @click="NavButtonClick(0)"><a>Назад</a></button> <!--Вызов метода для отображения блока с кнопками детали и настройки-->
                    </div>
                    <SceneParam></SceneParam>
                </div>
            </div>
        </div>
    </div>
</template>

<script>  //Блок скрипта
import ModelInfo from './EditParamContainer/ModelInfo.vue' //импорт файла для его отображения 
import SceneParam from './EditParamContainer/SceneParam.vue' //Импорт файла для его отображения 
export default{ 
    components:{
        ModelInfo,
        SceneParam,
    },
    data(){
        return{ //Дефолтная видимость элементов
            buttonVisible:true,
            componentVisible: false,
            EditTool1: true,
            EditTool2: true,
            HRvisible: true
        }
    },
    methods:{
        NavButtonClick(val){//метод для отображения блоков
            switch (val){
                case 0://отображения блока с кнопками детали и настройки
                    this.componentVisible = false;
                    this.buttonVisible = true;
                    this.EditTool1 = this.EditTool2 = true
                    this.HRvisible = true;
                    break;
                case 1://отображение блока с информацией о модели
                    this.EditTool2 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    this.HRvisible=false;
                    break;
                case 2://Отобраение блока с настройками
                    this.EditTool1 = false;
                    this.componentVisible = true;
                    this.buttonVisible = false;
                    this.HRvisible = false;
                    break;
            }
        },
        downloadButtonClick(){

        }
    }
}
</script>

<style>/*Блок каскадных таблиц стилей*/
.EditParamRoot{/*Стили для всего блока HTML */
    font-family: 'Montserrat', 'sans-serif';
  font-size: 18pt;
  font-style: normal;
}

.NavBut1 button{/*Стили для кнопки детали */
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: #fbfaff;
}
.NavBut2 button{ /*Стили для кнопки настройки */
    text-align: left;
    position: relative;
    width: 100%;
    margin: 0;
    padding: 10px;
    background-color: #fbfaff;
}
.NavBut1 button:hover {/*Стили для кнопки детали при наведении */
    background-color: #B0E0E6;
}
.NavBut2 button:hover {/*Стили для кнопки настройки при наведении */
    background-color: #B0E0E6;
}
.MenuButtons     hr{/*Стили для линий */
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;  
}
.component1 hr{/*Стили для линий в блоке детали */
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;    
}
.component2 hr{/*Стили для линий в блоке настройки */
    position: relative;
    width: 100%;
    margin: 0;
    border-top: 1px solid #B0E0E6;
}
button{/*Стили для кнопок */
     background-color: #fbfaff;
}
.BtnBack button{/*Стили для кнопки "Назад" */
    background-color: #fbfaff;
    background-image: url("@/assets/ArrowBack.png");/*Добавление картинки на кнопку */
    background-repeat: no-repeat;
    padding-left: 5%;
}
.BtnBack button:hover{/*Стили для кнопки "Назад" при наведении */
    background-color: #B0E0E6;
}
</style>
