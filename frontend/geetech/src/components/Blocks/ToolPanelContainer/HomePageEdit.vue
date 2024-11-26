<template><!--Блок гипертекстовой разметки-->
<div class="HomePageEdit">
    <div class="container2">
        <p>Выберете модель, которую необходимо просмотреть</p>
    </div>
    <div class="container3">
    <hr>
        <label class="ForFile" @click="loadClick()"> <!--Вызов метода для загрузки файлов с пользовательского ПК-->
            <span>Выберите файл</span>
        </label>
        <input id="input" class="inputForFile" type="file" accept=".obj"> <!--Выбирает расширение выбираемого файла-->
    </div>
</div>
</template>

<script>//Блок скрипта
import { setVarData } from "../scripts/Three/Variables"; //Импорт файла для занесения данных в него
import objParser from "@/components/Blocks/scripts/Three/objParser.js" // импорт файла для парсинга пользовательского файла
import { emitter } from "@/main";
export default{
    methods:{
         loadClick(){ //Вызов метода загрузки файла
            document.querySelector('.inputForFile').click()//Отображение окна выбора файла
            const inputElement = document.getElementById("input");
            inputElement.addEventListener("change", function (){//Вызов функции после выбора пользователем файла
            let reader = new FileReader();
            reader.readAsText(inputElement.files[0]) //Чтение файла как текста
            emitter.emit("OpenEditor", {modelNum: null})//Открывает чистый канвас
            reader.onload = function(){//Функция загрузки пользовательского файла после парсинга
            objParser(reader.result)
            setVarData("modelNum", 3)//Вызов метода для вывода на канвас пользовательского файла
            emitter.emit("Rerender", true)//Вызов метода обновления параметров сцены
            }
          }, true);
         }

    }
}
</script>

<style>/*Блок каскадной таблицы стилей */
.HomePageEdit{ /*Стили для изначальной страницы */
    position:fixed;
    height: 85vh;
    width: 24vw;
}
.container2{/*Стили для блока с текстом */
    position: relative;
    top: 25vh;
}
.container3{/*Стили для блока загрузки файла */
    top: 85%;
    position:absolute;
    margin:auto;
    left:0;
    right:0;
    display: block;
    text-align: center;
}
p{/*Стили для текста */
    vertical-align: middle;
    font-family: 'Montserrat';
    font-size: 18px;
}
hr{/*Стили для линии */
    border: none;
    border: 1px solid #8E8E8E;
    width: 80%;
}
label.ForFile{/*Стили для кнопки загрузки файла */
    margin-top: 10px;
    padding: 15px;
    border-radius: 40px;
    background: #71D4DA;
    font-family: 'Montserrat';
    font-size: 18px;
    display: inline-block;
    color: #FFFFFF;
    cursor: pointer;/*При наведении курсор меняется */
}
input.inputForFile{/*Стили для инпута */
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	z-index: -1;/*На задний план */
}
</style>