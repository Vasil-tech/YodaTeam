<template>
    <div class="workAreaRoot" id="workAreaRoot">
        <div class="default" v-if="HPvisible">
            <HomePage></HomePage>
        </div>
        <div class="Market" v-if="MarketVisible">
                <MarketPlace></MarketPlace>
        </div>
        <div class="WAd" id="WAd" v-if="!Canvasvisible">
            <div class="threeContainer" v-if="!Error.check">
                <three-container :modelNum="modelNum"></three-container>
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
import { defineAsyncComponent } from 'vue'
export default{
    components:{
        HomePage,
        ThreeContainer: defineAsyncComponent(()=> import('./WorkAreaContainer/ThreeContainer.vue')),
        MarketPlace
    },
    data(){
        return{
            modelNum: 0,
            HPvisible: true,
            MarketVisible: false,
            Canvasvisible: true,
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
            this.HPvisible = false;
            this.Canvasvisible = !data;
            this.MarketVisible = false;
        })
        this.emitter.on("DefaultModel", data => {
        if(typeof(data) == 'object'){
            this.modelNum = data['modelNum']
            this.HPvisible = !this.HPvisible;
            }
            else{
                this.HPvisible = !data
            }

        })
        this.emitter.on("MarketStore", data =>{
            this.HPvisible = false;
            this.Canvasvisible = true;
            this.MarketVisible = data;

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
