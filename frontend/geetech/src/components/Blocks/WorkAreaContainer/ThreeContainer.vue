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
        start3d(THREE)
    },
    created: function(){
        this.emitter.on("SceneBackgroundColor", color => {
            start3d(THREE, color, this.orbValue, this.autoRotate)
            this.color = color
        })
        this.emitter.on("OrbitControlStatus", orbValue =>{
            this.orbValue = orbValue
            start3d(THREE, this.color, orbValue)
        })
        this.emitter.on("RotateOn", autoRotate=> {
            this.autoRotate = autoRotate
            start3d(THREE, this.color, true, this.autoRotate)
        })
        // this.emitter.on("FullScreenCanvas", data=>{
        //     start3d(THREE, this.color, this.orbValue, data, true)
        // })
    }
}

function start3d(THREE, color="black", orbCont, autoRotate = false){
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
            session[0]=new Rendering(THREE, color, OrbitControl, autoRotate, cameraPosition)
        }
        else{
            session[0]=new Rendering(THREE, color, false, null, cameraPosition);
        }
    }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e})
    }
}
</script>