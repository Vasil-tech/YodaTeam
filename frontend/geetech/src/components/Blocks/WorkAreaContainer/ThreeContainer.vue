<template>
    <div class="threeContainerRoot">
        <div class="canvasContainer">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
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
    },
    created: function(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color, this.orbValue), this.color= color
        })
        this.emitter.on("OrbitControlStatus", orbValue =>{
            start3d(THREE, this.color, this.orbValue = orbValue)
        })
        this.emitter.on("RotateOn", data=> {
            start3d(THREE, this.color, this.orbValue, data)
        })
    }
}

function start3d(THREE, color = 'black', orbCont, autoRotate){
    try{
        if(orbCont){
            new threeLogic(THREE, color, OrbitControl, autoRotate)
        }
        else{
            new threeLogic(THREE, color, false, autoRotate)
        }
        //создание экземпляров 
        }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e})

    }
}


// window.onresize = function(){
//     try{
//         start3d(THREE, this.color, this.orbValue)
//     }
//     catch(e){
//         errorHandler('ThreeContainer', 'onresize', e, 'canvas')
//     }
// }
</script>

<style>

</style>
