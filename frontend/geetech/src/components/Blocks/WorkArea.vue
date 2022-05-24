<template>
    <div class="workAreaRoot" id="workAreaRoot">
        <div class="default" v-if="HPvisible">
            <HomePage></HomePage>
        </div>
        <div class="Market" v-if="MarketVisible">
                <MarketPlace></MarketPlace>
        </div>
        <div class="About" v-if="AboutPageVisible">
                <AboutUsPage></AboutUsPage>
        </div>
        <div class="WAd" id="WAd" v-if="!Canvasvisible">
            <div class="threeContainer" v-if="!Error.check">
                <three-container></three-container>
            </div>
            
                <div class="errorHandler" v-if="Error.check">
                    <h1>Хьюстон, пиздец</h1>
                    <p>в файле: {{Error.file}}</p>
                    <p>метод: {{Error.method}}</p>
                    <p>Extension: {{Error.ext}}</p>
                    <button @click="Error.check = !Error.check">открыть канвас</button>
                </div>
        </div>
            
        </div>
</template>

<script>
import HomePage from './WorkAreaContainer/HomePage.vue'
import MarketPlace from './WorkAreaContainer/StoreContainer.vue'
import AboutUsPage from './WorkAreaContainer/PageAbout.vue'
import { defineAsyncComponent } from 'vue'
export default{
    components:{
        HomePage,
        ThreeContainer: defineAsyncComponent(()=> import('./WorkAreaContainer/ThreeContainer.vue')),
        MarketPlace,
        AboutUsPage
    },
    data(){
        return{
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
        this.emitter.on("CanvasError", data => 
        {
            this.Error.check = true;
            this.Error.file = data.file;
            this.Error.method = data.method
            this.Error.ext = data.ext
        })
        this.emitter.on("OpenEditor", data=>{
            if(typeof(data) == 'object'){
                this.HPvisible = false;
                this.Canvasvisible = !data;
                this.MarketVisible = false;
                this.AboutPageVisible = false;
                }
                else{
                this.HPvisible = false;
                this.Canvasvisible = !data;
                this.MarketVisible = false;
                this.AboutPageVisible = false;
            }
        })
        this.emitter.on("MarketStore", data =>{
            this.HPvisible = false;
            this.Canvasvisible = true;
            this.MarketVisible = data;
            this.AboutPageVisible = false

        }),
        this.emitter.on("OpenHomePage", data =>{
            this.HPvisible = data;
            this.MarketVisible = false;
            this.Canvasvisible = true;
            this.AboutPageVisible = false;

        })
        this.emitter.on("OpenAboutUS", data=>{
            this.AboutPageVisible = data;
            this.MarketVisible = false;
            this.Canvasvisible = true;
            this.HPvisible = false;
        })
    },
}
</script>

<style>
.workAreaRoot{
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
