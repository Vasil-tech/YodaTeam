<template>
    <div class="workAreaRoot">
        <div class="threeContainer" v-if="!Error.check">
            <three-container></three-container>
        </div>
        <div class="errorHandler" v-if="Error.check">
            <h1>Хьюстон, пиздец</h1>
            <p>в файле: {{Error.file}}</p>
            <p>метод: {{Error.method}}</p>
            <p>Extension: {{Error.ext}}</p>
            <button @click="Error.check = !Error.check"></button>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default{
    components:{
        ThreeContainer: defineAsyncComponent(()=> import('./WorkAreaContainer/ThreeContainer.vue'))
    },
    data(){
        return{
            Error:{
                check: false,
                file: null,
                method: null,
                ext: null,
                type: null
            },
            
        }
    },
    created(){
        this.emitter.on("CanvasError", data => 
        {
            console.log('sdjfn')
            this.Error.check = true;
            this.Error.file = data.file;
            this.Error.method = data.method
            this.Error.ext = data.ext
        })
    }
}
</script>

<style>
.workAreaRoot{
    position: fixed;
    width: 72%;
    height: 85%;
    float: left;
    left: 1%;
    bottom: 0;
    border: 2px dotted #3A506B;
    top: 12%;
    
}
</style>
