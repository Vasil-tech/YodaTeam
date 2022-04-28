<template>
    <div class="threeContainerRoot">
        <div class="canvasContainer">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
let session = [];
let rotationStatus;
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
        this.emitter.on("FullScreenCanvas", data=>{
            start3d(THREE, this.color, this.orbValue, data, true)
        })
    }
}

function start3d(THREE, color = 'black', orbCont, autoRotate, fullScreen=false){
    try{
        if(orbCont){
            rotationStatus = true;
            session[0] = new threeLogic(THREE, color, OrbitControl, autoRotate, fullScreen)
            //console.log(session[0].Camera)
        }
        else{
            if(rotationStatus){
                console.log(session[0].rend.controls.position)
            }
                session[0] = new threeLogic(THREE, color, false, autoRotate, fullScreen)
            }
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
