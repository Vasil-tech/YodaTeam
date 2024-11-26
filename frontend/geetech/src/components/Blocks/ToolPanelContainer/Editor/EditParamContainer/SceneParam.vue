<template><!--Блок гипертекстовой разметки-->
    <div class="SceneParamRoot">
            <button @click="openBlock('colors')" class="title">Смена цвета фона сцены</button><!--Открытие блока для настроек цвета фона канваса-->
            <div class="backColor" v-if="colorVisible">
            <div class="colorBar">
                <a>Выберите цвет:</a>
                <div class="FirstStorka"><!--Создание кнопок которые вызывают событие changeColor и передают значение в скобках-->
                    <button class="BtnWhite" id="white" @click="changeColor('#FFFFFF')"></button>
                    <button class="BtnBlue" id="blue" @click="changeColor('#0000FF')"></button>
                    <button class="BtnRed" id="red" @click="changeColor('#FF0000')"></button>
                    <button class="BtnGrey" id="grey" @click="changeColor('#808080')"></button>
                    <button class="BtnBlack" id="black" @click="changeColor('#000000')"></button>
                </div>
                <div class="SecondStroka"><!--Создание кнопок которые вызывают событие changeColor и передают значение в скобках-->
                    <div class="defaultColor"></div>
                    <button class="BtnYellow" id="yellow" @click="changeColor('#FFFF00')"></button>
                    <button class="BtnGreen" id="green" @click="changeColor('#008000')"></button>
                    <button class="BtnPurple" id="purple" @click="changeColor('#800080')"></button>
                    <button class="BtnOrange" id="orange" @click="changeColor('#FFA500')"></button>
                    <button class="BtnTema" id="pink" @click="changeColor('#FFC0CB')"></button>
                </div>
                <div class="inputColor">
                        <a>Палитра:</a>
                        <input type="color" id="color" value="#000000" @change="Changed(this.value)"><!--Передает значение на канвас при изменении-->
                    </div>
            </div>
        </div>
        <button class="title" @click="openBlock('control')">Управление</button> <!--Открытие блока для настроек отображения моделей-->
        <div v-if="controlVisible" class="control">
            <div class="orbControl"> <!--Включить orbControl для модели-->
            <input 
                type="checkbox" 
                id="checkbox" 
                v-model="checked" 
                :value="checkboxVal"
                :checked="booleanValue"
                @input="orbContChecked(!checked)"
            >
            <label for="checkbox">Включить orbit control</label>
            </div>
            <div class="rotate" v-if="checked"><!--Использование директивы для получения значения элемента input-->
                <button @click="rotateOn()">Auto rotate</button>
            </div>
            <div class="fullScreenButt" id="fullScreenButt"> <!--Вызов метода открытия на весь экран-->
                <button @click="fullScreen()">Открыть на весь экран</button>
            </div>
            <div class="setka" id="setka" >
                <button @click="AddSetka()">Добавить сетку</button><!--Вызов метода для отображения сетки-->
            </div>
        </div>
            <button @click="openBlock('light')" class="title">Настройка освещения</button><!--Отображение блока для настроек освещения-->
                <div class="lightControl" v-if="lightVisible">

                <div class="Osveshenie">
                    <form>
                        <div class="firsElem">
                    <input type="radio" id="contactChoice1" @change="selectLight('ambient')"
                        name="light" value="Ambient Light"> <!--Вызов метода для передачи стандартного значения освещения -->
                        <label for="contactChoice1">Ambient Light</label>
                        <div v-if="ambientParam" class="ambientParam">
                            <a>sajn</a>
                        </div>
                        </div>
                        <div class="secElem">
                        <input type="radio" id="contactChoice2" @change="selectLight('directional')"
                        name="light" value=""><!--Вызов метода для передачи значения освещения directional-->
                        <label for="contactChoice2">Directional light</label>
                            <div v-if="directionalParam" class="directionalParam">
                                <div class="">
                                    <label>Цвет:</label>
                                    <input type="color" id="DirLight" value="#ffffff" @change="dirLightChange(this.value)"><!--Передает значение цвета освещения-->
                                </div>
                                <div class="dirLightIntensity">
                                    <label>Интенсивность:</label>
                                    <input id="inputDirLightIntencity" value="1" type="text" @input="setIntensity()"><!--Передает значение интенсивности освещения-->
                                </div>
                            </div>
                        </div>
                        <div class="thirElem">
                        <input type="radio" id="contactChoice3" @change="selectLight('point')"
                        name="light" value="mail"><!-- Вызов метода для передачи значения освещения point-->
                        <label for="contactChoice3">Point light</label>
                        <div v-if="pointParam" class="pointParam">
                            <div class="">
                                <label>Цвет:</label>
                                    <input type="color" id="DirLight" value="#ffffff" @change="pointLightChange(this.value)"><!--Передает значение цвета освещения-->
                                </div>
                                <div class="pointLightIntensity">
                                    <label>Интенсивность:</label>
                                    <input id="pointLightIntencity" value="1" type="text" @input="setIntensity()"><!--Передает значение интенсивности освещения-->
                                </div>
                                <div class="pointLightIntensity">
                                    <label>Дистанция:</label>
                                    <input id="pointDirLightDistance" value="1" type="text" @input="setDistance()"><!--Передает значение дистанции от источника освещения-->
                                </div>
                                <div class="pointLightIntensity">
                                    <label>Распад:</label>
                                    <input id="inputDirLightDecay" value="100" type="text" @input="setDecay()"><!--Передает значение распада-->
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</template>

<script> //Блок скрипта
import { setVarData } from '@/components/Blocks/scripts/Three/Variables';//Импорт файла для изменения данных

export default{// дефолтная загрузка страницы
    data(){
        return{
            checked: false,
            rotation: false,
            colorVisible: false,
            controlVisible: false,
            lightVisible: false,
            ambientParam: false,
            directionalParam: false,
            pointParam: false,
        }
    },
    methods:{
        setDistance(){// Вызов метода для регулирования дистанции источника освещения 
            setVarData('pointLightDistance',document.getElementById('pointDirLightDistance').value)
            this.emitter.emit('Rerender', true)
        },
        setIntensity(){// Вызов метода для регулировки интенсивности освещения
            setVarData('directionalLightIntensity', document.getElementById('inputDirLightIntencity').value)
            this.emitter.emit('Rerender', true)
        },
        dirLightChange(value){// Вызов метода для изменения освещения
            value = document.getElementById('DirLight').value;
            setVarData('directionalLightColor', value)
            this.emitter.emit('Rerender', true)
        },
        openBlock(block){ //Метод для отображения блоков настроек
            switch(block){
                case "colors"://метод для отображения блока изменение цвета фона канваса
                    this.colorVisible = !this.colorVisible
                    break;
                case 'control': //Метод для отображения блока настроек
                    this.controlVisible = !this.controlVisible
                    break;
                case 'light': //Метод для отображения блка освещения
                    this.lightVisible = !this.lightVisible;
                    break;
            }
        },
        selectLight(light){// Метод для выбора типа освещения
            switch(light){
                case 'ambient'://Изменение типа освещения на ambient
                    this.directionalParam = false
                    this.pointParam = false
                    this.ambientParam = true
                    break;
                case 'directional':// Изменение типа освещения на directional
                    this.directionalParam = true
                    this.pointParam = false
                    this.ambientParam = false
                    break;
                case 'point'://Изменение типа освещения на point 
                    this.directionalParam = false
                    this.pointParam = true
                    this.ambientParam = false
                    break;
            }
            setVarData('light', light)
            this.emitter.emit("Rerender", true) //Вызов события обновления параметров сцены
        },
        changeColor(color){// Метод для смены фона канваса
            try{
                setVarData("color", color)
                document.getElementById('color').value = color;
                this.emitter.emit("Rerender", true);//вызов события обновления параметров сцены
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})//Отображения обработчика ошибок с указанием метода
            }
            },

        Changed(color){// Метод для смены цвета фона канваса через input
            try{
                color = document.getElementById('color').value;
                setVarData("color", color)
                this.emitter.emit("Rerender", true);//Вызов события обновления параметров сцены
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})//Отображение обработчика ошибок с указанием метода
            }
        },
            
        orbContChecked(orbValue){// Метод для изменения параметра Orbit Control
            try{
                setVarData("orbValue", orbValue)
                this.emitter.emit("Rerender", true)// Вызов события обновления параметров сцены
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'orbContChecked', 'ext':e})//Отображение обработчика ошибок с указанием метода
            }
        },
        fullScreen(){//метод для открытия канваса на весь экран
            try{
                this.emitter.emit('FullScreenCanvas', true) //Вызов метода для открытия на весь экран
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})//Отображение обработчика ошибок с указанием метода
            }
        },
        rotateOn(){//Метод для автоматического вращения модели 
            try{
                this.rotation = !this.rotation
                setVarData("autoRotate", this.rotation)
                this.emitter.emit("Rerender", true)//Вызов события обновления параметров сцены
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'rotateOn', 'ext': e})//Отображение обработчика ошибок с указанием метода
            }
        },
        AddSetka(){//Метод для отображения сетки на канвасе
            try{
                this.setka = !this.setka
                setVarData("AddSetka", this.setka)//Вызов события получения значений для сетки
                this.emitter.emit("Rerender", true)//Вызов события обновления параметров сцены
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'AddSetka', 'ext': e})//Отображение обработчика ошибок с указанием метода
            }
        }

    }
    
}
</script>

<style>/*Блок каскадных таблиц стилей*/
button.title{/*Стили для главных кнопок*/
    position: relative;
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #71D4DA;/*Стили рамки для кнопок*/
    border-bottom: 2px solid #71D4DA;
    width: 96%;
    padding: 2%;
    margin: 2%;
}

button.title:hover{/*Стили для главных кнопок при наведении */
    cursor: pointer;
    background-color: #B0E0E6;
}

.inputColor input{/*Стили для input, задающего цвет фона канваса */
    position: relative;
    margin-left: 3%;
}

.orbControl{/*Стили для блока настроек */
    position: relative;
    width: 100%;
}

.backColor p{ /*Стили для текста в блоке изменения фона канваса */
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;/*Стили рамок для текста в блоке изменения цвета канваса*/
    border-bottom: 2px solid #B0E0E6;
}
.colorBar{/*Стили для кнопок изменения цвета фона канваса */
    width: 100%;
    margin-bottom: 5%;
}

label{/* Стили для тега label в блоке освещения*/
    font-family: 'Montserrat','sans-serif';
    font-size: 18px;
}
.control button{/*Стили для кнопок в блоке настроек */
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;
    text-align: left;
}
.control button:hover{/*Стили для кнопок блока настроек при наведении */
    background-color: #B0E0E6;
}
#checkbox{/*Стили для тега checkbox*/
    position: relative;
    width: 5%;
    height: auto;
    
}
.colorBar button{/*Стили для кнопок в блоке изменения цвета фона канваса */
    position: relative;
    width: 25px;
    height: 25px;
    margin: 2%;
    float: left;
}

.colorBar button:hover{/*Стили для кнопок в блоке изменения цвета фона канваса при наведении */
    border-radius: 50%;
}

.FirstStorka{/*Стили для первых пяти кнопок изменения цвета фона канваса */
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}
.SecondStroka{/*Стили для второй части кнопок изменения цвета фона канваса */
    position: relative;
    width: 100%;
    height: 10%;
    float: right;
    align-content: center;
}

button.BtnGrey{/*Стили для серой кнопки изменения цвета фона канваса */
    background-color: grey;
    border: 1px solid #B0E0E6;
}
button.BtnRed{  /*Стили для красной кнопки изменения цвета фона канваса*/
    background-color: red;
    border: 1px solid #B0E0E6;
}
button.BtnWhite{ /*Стили для белой кнопки изменения цвета фона канваса */
    background-color: white;
    border: 1px solid #B0E0E6;
}
button.BtnBlack{ /*Стили для черной кнопки изменения цвета фона канваса */
    background-color: black;
    border: 1px solid #B0E0E6;
}
button.BtnBlue{ /*Стили для синей кнопки изменения цвета фона канваса */
    background-color: blue;
    border: 1px solid #B0E0E6;
}
button.BtnYellow{ /*Стили для желтой кнопки изменения цвета фона канваса */
    background-color: yellow;
    border: 1px solid #B0E0E6;
}
button.BtnGreen{ /*Стили для зеленой кнопки изменения цвета фона канваса */
    background-color: green;
    border: 1px solid #B0E0E6;
}
button.BtnOrange{ /*Стили для оранжевой кнопки изменения цвета фона канваса */
    background-color: orange;
    border: 1px solid #B0E0E6;
}
button.BtnTema{ /*Стили для розовой кнопки изменения цвета фона канваса */
    background-color: pink;
    border: 1px solid #B0E0E6;
}
button.BtnPurple{ /*Стили для фиолетовой кнопки изменения цвета фона канваса */
    background-color: rebeccapurple;
    border: 1px solid #B0E0E6;
}
</style>