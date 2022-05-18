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
        <div class="control">
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
            <div class="rotate" v-if="checked">
                <button @click="rotateOn()">Auto rotate</button>
            </div>
            <div class="fullScreenButt" id="fullScreenButt">
                <button @click="fullScreen()">Открыть на весь экран</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
                rotateStatus: false,
                checked: false
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
            // try{
            //     this.emitter.emit('FullScreenCanvas', true)
            // }
            // catch(e){
            //     this.emitter.emit("CanvasError", {'file': 'SceneParam', 'method':'fullScreen', 'ext':e})
            // }
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
<style>
.backColor p{
    text-decoration: none;
    margin-top: 5%;
    margin-bottom: 5%;
    border-top: 2px solid #B0E0E6;
    border-bottom: 2px solid #B0E0E6;
}
.colorBar{
    width: 100%;
    margin-bottom: 5%;
}
.colorBar button{
    text-align: center;
    position: relative;
    width: 33%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;
}
.colorBar button:hover{
    background-color: #B0E0E6;
}
label{
    font-family: 'Montserrat','sans-serif';
    font-size: 18px;
}
.control button{
    position: relative;
    width: 100%;
    margin: 0;
    padding: 5px;
    background-color: #fbfaff;
    text-align: left;
}
.control button:hover{
    background-color: #B0E0E6;
}
#checkbox{
    width: 5%;
    height: auto;
    
}


</style>