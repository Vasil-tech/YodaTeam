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
    </div>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    methods:{
        changeColor(color){
            try{
                this.emitter.emit("SceneBackgroundColor", color);
            }
            catch(e){
                console.error('fuck')
            }
        },
        orbContChecked(orbValue){
            try{
                this.emitter.emit("OrbitControlStatus", orbValue)
            }
            catch(e){
                console.log('fuckingFuck')
            }
        }
    }
}
</script>
