<template> <!--Блок гипертекстовой разметки-->
<div class="mainCont">
  <MainContainer></MainContainer> <!--Вызов метода загрузки страницы-->
</div>
</template>
<script>//Блок скрипта
import MainContainer from './components/MainContainer.vue' //Импорт файла
import { emitter } from './main' //Импорт библиотеки
import { canvasHeight } from './components/Blocks/scripts/bus.js'; //Импорт переменных
import { canvasWidht } from './components/Blocks/scripts/bus.js'  //Импорт переменных
export default { //Дефолтная загрузка
  name: 'App',
  components: { //Объявление компонентов
    MainContainer
  }
}
window.onload = function(){ //Загрузка окна
  canvasHeight();
  canvasWidht();
}
window.onresize = function(){ //Изменение размеров
  canvasHeight();
  canvasWidht();
  emitter.emit("Rerender", true) //Вызов события обновления параметров сцены
}
window.onkeydown = function( event ) { //При нажатии на esc убирает полноэкранный канвас
    if ( event.keyCode == 27 ) {
        emitter.emit("FullScreenCanvas", false)
    }
};
</script>
<style>/*Блок каскадной таблицы стилей */
.mainCont{
  position:absolute;
}
</style>
