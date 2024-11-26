<template><!--Блок гипертекстовой разметки-->
    <div class="MainContainerRoot">
        <div class="navMenu">
            <nav-menu></nav-menu> <!--Вызов метода для загрузки файла меню-->
        </div>
        <div class="toolPanel">
            <tool-panel></tool-panel> <!--Вызов метода для загрузки файла панели управления-->
        </div>
        <div class="workArea" id="workArea">
            <work-area></work-area> <!--Вызов метода для загрузки файла рабочей области-->
        </div>
    </div>
</template>
<script>//Блок скрипта
import NavMenu from './Blocks/NavMenu.vue' //импорт меню
import ToolPanel from './Blocks/ToolPanel.vue' //Импорт панели управления 
import WorkArea from './Blocks/WorkArea.vue'   //Импорт рабочей области
export default{
    components:{//Объявление компонент
        NavMenu,
        WorkArea,
        ToolPanel
    },
    data(){
    }
}
</script>
<style>/*Блок каскадной таблицы стилей */
.navMenu{/*Стили для меню */
    width: 100%;
}
.MainContainerRoot{/*Стили для всей страницы*/
    position: absolute;
}
</style>