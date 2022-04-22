<template>
    <div class="threeContainerRoot">
        <div class="canvasContainer">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
import errorHandler from '../scripts/errorHandler.js';
import threeLogic from '../scripts/Three/threeLogic.js'
import * as THREE from 'three'

export default {
    data(){

    },
    methods:{

    },
    mounted: function(){
        try{
            //создание экземпляров 
            const answ = new threeLogic(THREE)
            console.log(answ)
            }
        catch(e){
            errorHandler('ThreeContainer', 'mounted', e, 'canvas')
        }
    }
}

// window.onresize = function(){
//     try{
//             const answ = new threeLogic(THREE)
//             console.log(answ)
//             }
//         catch(e){
//             errorHandler('ThreeContainer', 'onresize', e, 'canvas')
//         }
// }
</script>

<style>

</style>
