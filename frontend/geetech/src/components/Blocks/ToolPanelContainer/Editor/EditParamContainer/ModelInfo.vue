<template> <!--Блок гипертекстовой разметки-->
    <div class="ModelInfoRoot">
        <p>Информация о модели</p>
        <li v-for="item in modelInfo" :key="item.id"><!--Открытие информации в виде списка-->
            {{ item }}
        </li>
    </div>
</template>

<script>
import getCookie from "@/components/Blocks/scripts/getCookie.js" // Импорт файла для получения информации о модели
export default{
    data(){
        return{
            modelInfo:[] // Возвращение информации о модели на страницу
        }
    },
    created: function(){ // Вызов функции для отображения информации с указанием ключа и значения
        let data = JSON.parse(getCookie('modelParams'));
        for (let key in data){
            this.modelInfo.push(key+": "+ data[key]) //вывод информации в div
        }
    }
}
</script>
<style>
.ModelInfoRoot p{ /*Стили для текста*/
    text-decoration: none;
    margin-top: 5%;  
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;/*Обрисовка границ текста*/
    border-bottom: 2px solid #B0E0E6;
}
.ModelInfoRoot li { /*Стили для выводящейся информации в виде списка*/
font-family: 'Montserrat';
    font-size: 16px;
    margin-top: 3%;
}
</style>
