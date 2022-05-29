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
import {orbValue} from "../scripts/Three/Variables.js"
import { canvasHeight } from '../scripts/bus.js';
import { canvasWidht } from '../scripts/bus.js';
import { fullScrnSet } from '../scripts/bus.js';

export default {
    data(){
        return{
        }
    },
    methods:{

    },
    mounted: function(){
        start3d(THREE, orbValue)

    },
    created: function(){
        this.emitter.on("Rerender", data=>{
            if(data){
                start3d(THREE, orbValue)
            }
        })
        this.emitter.on("FullScreenCanvas", data =>{
            let canvas = document.getElementById("canvas")
            if(data){
                fullScrnSet()
                canvas.style.position = 'fixed'
                canvas.width = window.innerWidth
                canvas.height = window.innerHeight
                canvas.style.top = 0;
                canvas.style.left = 0;
                this.emitter.emit("Rerender", true)
            }
            else{
                canvas.style.position = 'absolute'
                canvas.style.height = canvasHeight() + 'px';
                canvas.style.width = canvasWidht() + 'px';
                this.emitter.emit("Rerender", true)
            }
        })
    }
}


function start3d(THREE, orbCont){
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
            session[0]=new Rendering(THREE, OrbitControl, cameraPosition)
        }
        else{
            session[0]=new Rendering(THREE,  false,  cameraPosition);
        }
    }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e})
    }
}
</script>
<style>

</style>