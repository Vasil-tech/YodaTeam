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
        return{
            color: "purple"
        }
    },
    methods:{

    },
    mounted: function(){
        start3d(THREE)
    },
    created(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color)
        })
    }
}

function start3d(THREE, color = 'black'){
    try{
        //создание экземпляров 
        const answ = new threeLogic(THREE, color)
        console.log(answ)
        }
    catch(e){
        errorHandler('ThreeContainer', 'mounted', e, 'canvas')
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
