<template>
    <div class="threeContainerRoot">
        <div class="canvasContainer">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
let session = [];
import Rendering from '../scripts/Three/Renderering.js'
import * as THREE from 'three'
import OrbitControl from 'three-orbitcontrols'
export default {
    data(){
        return{
            color: "black",
            orbValue: false,
            renderNum:0,
        }
    },
    methods:{

    },
    mounted: function(){
        start3d(THREE)
    },
    created: function(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color, this.orbValue)
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

function start3d(THREE, color="black", orbCont, autoRotate){
    try{
        if(orbCont){
            session[0]=new Rendering(THREE, color, OrbitControl, autoRotate)
        }
        else{
            session[0]=new Rendering(THREE, color, false);
        }


        // if(orbCont){
        //     rotationStatus = true
        //     session[0] = new Renderering(THREE, color, OrbitControl, autoRotate)
        // }
        // else{
        //     if(rotationStatus){
        //         console.log(session[0].rend.controls.position)
        //     }
        //         session[0] = new Renderering(THREE, color, false, autoRotate)
        //     }
        }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e})
    }
}
</script>

<style>

</style>
