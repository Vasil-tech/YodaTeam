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
import OrbitControl from 'three-orbitcontrols'
export default {
    data(){
        return{
            color: "black",
            orbValue: false,
        }
    },
    methods:{

    },
    mounted: function(){
        start3d(THREE)
        //console.log(OrbitControl)
    },
    created: function(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color), this.color= color
        })
        this.emitter.on("OrbitControlStatus", orbValue =>{
            start3d(THREE, this.color, this.orbValue = orbValue)
        })
    }
}

function start3d(THREE, color = 'black', orbCont=false){
    try{
        if(orbCont == true){
            orbCont = OrbitControl
        }
        //создание экземпляров 
        const answ = new threeLogic(THREE, color, orbCont)
        console.log(answ, orbCont)
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
