<template>
    <div class="threeContainerRoot">
        <button @click="check()">Загрузить</button>
        <div class="canvasContainer">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
import threeLogic from '../scripts/Three/threeLogic.js'
export default {
    data(){

    },
    methods:{
        check(){
            new threeLogic();
            
        }
    }
}
</script>

<style>

</style>
