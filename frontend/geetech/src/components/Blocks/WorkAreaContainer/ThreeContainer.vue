<template><!--Блок гипертекстовой разметки-->
    <div class="threeContainerRoot">
        <div class="canvasContainer">
            <canvas id="canvas"></canvas><!--Вызов канваса-->
        </div>
    </div>
</template>

<script>//Блок скрипта
let session = [];
import Rendering from '../scripts/Three/Renderering.js' //импорт файла для вызова метода обновления параметров сцены
import * as THREE from 'three' 
import OrbitControl from 'three-orbitcontrols' // импорт файла для вызова метода вращения фигуры
import {camera} from '../scripts/Three/Renderering.js' //импорт переменных
import {orbValue} from "../scripts/Three/Variables.js" //импорт переменных
import { canvasHeight } from '../scripts/bus.js'; //импорт переменных
import { canvasWidht } from '../scripts/bus.js'; //импорт переменных
import { fullScrnSet } from '../scripts/bus.js';//импорт переменных

export default {
    data(){
        return{
        }
    },
    methods:{
    },
    mounted: function(){//функция для открытия канваса
        start3d(THREE, orbValue)
    },
    created: function(){
        this.emitter.on("Rerender", data=>{ //вызов метода обновления параметров сцены
            if(data){
                start3d(THREE, orbValue) //Открытие канваса
            }
        })
        this.emitter.on("FullScreenCanvas", data =>{ //вызов функции FullScreenCanvas для открытия на весь экран
            let canvas = document.getElementById("canvas") //переменная для упрощеннго написания
            if(data){
                fullScrnSet() //функция для открытия на весь экран
                canvas.style.position = 'fixed'
                canvas.width = window.innerWidth //принимает значение ширины монитора
                canvas.height = window.innerHeight  //принимает значение высоты монитора
                canvas.style.top = 0; //отступ сверху
                canvas.style.left = 0; //отступ слева
                this.emitter.emit("Rerender", true) //вызов метода обновления параметров сцены
            }
            else{
                canvas.style.position = 'absolute'
                canvas.style.height = canvasHeight() + 'px'; //Применение импортируемых данных из файла(высота канваса)
                canvas.style.width = canvasWidht() + 'px'; //Применение импортируемых данных из файла(ширина канваса)
                this.emitter.emit("Rerender", true)//Вызов метода обновления параметров сцены
            }
        })
    }
}
function start3d(THREE, orbCont){ // вызов функции открытия канваса с заданными параметрами
    try{
        
        let cameraPosition = {}; //задаем позицию камеры
        if(typeof session[0] == 'object'){
            cameraPosition = camera.position
        }else{
            cameraPosition.x = 0;
            cameraPosition.y = 0;
            cameraPosition.z = 1000;
        }
        if(orbCont){ //функция включения-отключения вращения
            session[0]=new Rendering(THREE, OrbitControl, cameraPosition) //если true задаем вращение
        }
        else{
            session[0]=new Rendering(THREE,  false,  cameraPosition);//иначе отключаем функцию вращения
        }
    }
    catch(e){
        this.emitter.emit("CanvasError", {'file': 'ThreeContainer', 'method':'start3d', 'ext':e}) //Вызов метода обработчика ошибок
    }
}
</script>
<style>/*Блок каскадной таблицы стилей */
</style>