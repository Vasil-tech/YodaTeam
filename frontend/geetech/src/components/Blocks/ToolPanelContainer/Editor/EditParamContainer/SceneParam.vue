<template>
    <div class="SceneParamRoot">
        <div class="backColor">
            <p>Смена цвета фона сцены</p>
            <div class="colorBar">
                <button @click="changeColor('grey')">серый</button>
                <button @click="changeColor('red')">красный</button>
                <button @click="changeColor('white')">белый</button>
            </div>
        </div>
        <div class="orbControl">
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
        <div class="fullScreenButt">
            <button @click="fullScreen()">Открыть на весь экран</button>
        </div>
        <div class="rotate">
            <button @click="rotateOn()">Auto rotate</button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
           rotateStatus: false, 
        }
    },
    methods:{
        changeColor(color){
            try{
                this.emitter.emit("SceneBackgroundColor", color);
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'changeColor', 'ext':e})
            }
        },
        orbContChecked(orbValue){
            try{
                this.emitter.emit("OrbitControlStatus", orbValue)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'orbContChecked', 'ext':e})
            }
        },
        fullScreen(){
            try{
                this.emitter.emit('FullScreenCanvas', true)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})
            }
        },
        rotateOn(){
            try{
                this.rotateStatus = !this.rotateStatus
                this.emitter.emit("RotateOn", this.rotateStatus)
            }
            catch(e){
                this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method': 'rotateOn', 'ext': e})
            }
        }
    }
}
</script>
