<template><!--Блок гипертекстовой разметки-->
    <div class="HomeWorkArea">
        <h1>Загрузите свою первую модель</h1>
        <button>(Виды поддерживаемых форматов)</button>
        <nav class="navb">
            <p>примеры моделей:</p>
            <ul>
                <li><button class="Primer1" @click="ModelNum(0)">Сфера</button></li><!--Вызов события ModelNum(0) для открытия модели "Сфера"-->
                <li><button class="Primer2" @click="ModelNum(1)">Куб</button></li> <!--Вызов события ModelNum(1) для открытия модели "Куб"-->
                <li><button class="Primer3" @click="ModelNum(2)">Торический узел</button></li> <!--Вызов события ModelNum(2) для открытия модели "Торический узел"-->
            </ul>
        </nav>
    </div>
</template>
<script>//Блок скрипта
import { setVarData } from '../scripts/Three/Variables'; //импорт файла для записи данных
export default {
    data(){
      return{
      }
    },
    methods:{
      ModelNum(num){
          setVarData("modelNum", num)//Принимает значение ModelNum
          this.emitter.emit("OpenEditor", {modelNum: num}); // Вызов метода OpenEditor для отображения канваса с заданной моделью
      }
    },
}
</script>
<style>/*Блок каскадной таблицы стилей */
.HomeWorkArea{/*Стили блока домашней страницы*/
    align-content: center;
    margin-top: 20%;
    text-align: center;
}
.navb li{/*Стили кнопок примеров моделей */
    display: inline;
}
h1{/*Стили заголовка домашней страницы */
    position: relative;
    text-align: center;
    font-family: 'Montserrat';
    font-size: 30px;
    margin-bottom: 0;
}
button{/*Стили кнопок */
    position: relative;
    border: none;
    background: #FFFFFF;
    font-family: 'Montserrat';
    font-size: 18px;
}
p{/*Стили текста */
    text-decoration: none;
    text-align: center;/*Выравнивание текста по цетру */
    font-family: 'Montserrat';
    font-size: 18px;
    padding: 5px 10px;
    margin-bottom: 0;
}
ul{/*Стили списка кнопок */
    padding: 0px;
    margin: 0;
}
.navb button{/*Стили кнопок примеров моделей */
    color: black;
    text-align: center;
    text-decoration: none;
    padding: 5px 10px;
    font-family: 'Montserrat';
    font-size: 18px;
    border-right: 1px solid black;
}
.navb button.last{ /*Стили для последней кнопки */
    border-right: none;
}
.navb button:hover{/*Стили для кнопок при наведении*/
    cursor: pointer;
}
</style>