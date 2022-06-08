<template><!--Блок гипертекстовой разметки-->
    <div class="workAreaRoot" id="workAreaRoot">
        <div class="default" v-if="HPvisible"><!-- Использование директивы для скрытия элемента HomePage-->
            <HomePage></HomePage>
        </div>
        <div class="Market" v-if="MarketVisible"><!--Использование директивы для скрытия элемента MarketPlace-->
                <MarketPlace></MarketPlace>
        </div>
        <div class="About" v-if="AboutPageVisible"><!--Использование директивы для скрытия элемента AboutUsPage-->
                <AboutUsPage></AboutUsPage>
        </div>
        <div class="WAd" id="WAd" v-if="!Canvasvisible"><!--Использование директивы для скрытия элемента three-container-->
            <div class="threeContainer" v-if="!Error.check"><!--Использование директивы для скрытия элемента errorHandler-->
                <three-container></three-container>
            </div>
            
                <div class="errorHandler" v-if="Error.check"><!--Вызов обработчика ошибок с указанем файла, метода и ошибки-->
                    <h1>ОШИБКА</h1>
                    <p>в файле: {{Error.file}}</p>
                    <p>метод: {{Error.method}}</p>
                    <p>Extension: {{Error.ext}}</p>
                    <button @click="Error.check = !Error.check">открыть канвас</button><!--Вызов события для открытия канваса-->
                </div>
        </div>
            
        </div>
</template>

<script>//Блок скрипта 
import HomePage from './WorkAreaContainer/HomePage.vue' //Импорт страницы из файла
import MarketPlace from './WorkAreaContainer/StoreContainer.vue' //Импорт страницы из файла
import AboutUsPage from './WorkAreaContainer/PageAbout.vue' //Импорт страницы из файла
import { defineAsyncComponent } from 'vue' //Импорт страницы из файла
export default{
    components:{//Объявление компонентов
        HomePage,
        ThreeContainer: defineAsyncComponent(()=> import('./WorkAreaContainer/ThreeContainer.vue')),
        MarketPlace,
        AboutUsPage
    },
    data(){
        return{//Дефолтная загрузка окна
            HPvisible: true,
            MarketVisible: false,
            Canvasvisible: true,
            AboutPageVisible: false,
            Error:{ 
                check: false,
                file: null,
                method: null,
                ext: null,
                type: null,
            },
            
        }
    },
    created(){
        this.emitter.on("CanvasError", data =>  //Вызов метода для отображения окна обработчика ошибок
        {
            this.Error.check = true;
            this.Error.file = data.file;
            this.Error.method = data.method
            this.Error.ext = data.ext
        })
        this.emitter.on("OpenEditor", data=>{ // Вызов метода для отображения данных на канвасе
                this.HPvisible = false;
                this.Canvasvisible = !data;
                this.MarketVisible = false;
                this.AboutPageVisible = false;
        })
        this.emitter.on("MarketStore", data =>{ //Вызов метода MarketStore для отображения страницы "Модели"
            this.HPvisible = false;
            this.Canvasvisible = true;
            this.MarketVisible = data;
            this.AboutPageVisible = false

        }),
        this.emitter.on("OpenHomePage", data =>{ //Вызов метода OpenHomePage для отображения домашней страницы
            this.HPvisible = data;
            this.MarketVisible = false;
            this.Canvasvisible = true;
            this.AboutPageVisible = false;

        })
        this.emitter.on("OpenAboutUS", data=>{ //Вызов метода OpenAboutUS для отображения страницы "О нас"
            this.AboutPageVisible = data;
            this.MarketVisible = false;
            this.Canvasvisible = true;
            this.HPvisible = false;
        })
    },
}
</script>

<style>/*Блок каскадной таблицы стилей */
.workAreaRoot{ /*Установка стилей для элемента класса workAreaRoot*/
    position: fixed;
    width: 72vw;
    height: 85%;
    float: left;
    left: 1vw;
    bottom: 0;
    border: 1px dashed #666666;
    top: 12%;
}
</style>
