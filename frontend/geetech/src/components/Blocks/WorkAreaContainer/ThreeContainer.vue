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
import {camera} from '../scripts/Three/Renderering.js'

export default {
    props:{
        modelNum: Number
    },
    data(){
        return{
            color: "black",
            orbValue: false,
            renderNum:0,
            autoRotate: false,
        }
    },
    methods:{

    },
    mounted: function(){
        start3d(THREE,this.color, this.orbValue, this.autoRotate, this.modelNum)
    },
    created: function(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color, this.orbValue, this.autoRotate, this.modelNum)
            this.color = color
        })
        this.emitter.on("OrbitControlStatus", orbValue =>{
            this.orbValue = orbValue
            start3d(THREE, this.color, orbValue, null, this.modelNum)
        })
        this.emitter.on("RotateOn", autoRotate=> {
            this.autoRotate = autoRotate
            start3d(THREE, this.color, true, this.autoRotate, this.modelNum)
        })
        this.emitter.on("Resize", data => {
            if(data){
                start3d(THREE, this.color, this.orbValue, this.autoRotate, this.modelNum)
            }
        })
    }
}


function start3d(THREE, color="black", orbCont, autoRotate = false, modelNum){
    try{
        let cameraPosition = {};
        if(typeof session[0] == 'object'){
            cameraPosition = camera.position
        }else{
            cameraPosition.x = 0;
            cameraPosition.y = 0;
            cameraPosition.z = 1000;
        }
        if(orbCont){
            session[0]=new Rendering(THREE, color, OrbitControl, autoRotate, cameraPosition, modelNum)
        }
        else{
            session[0]=new Rendering(THREE, color, false, null, cameraPosition, modelNum);
        }
    }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e})
    }
}
</script>
<style>

</style>