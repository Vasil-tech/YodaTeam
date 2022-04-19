import * as THREE from 'three';
import showError from './ShowError.js';
export default function(canvas, width, height){
    let answ = setCanvasSize(canvas, width, height)
    if(answ){
        console.log(canvas.width, canvas.height)
    }
    else{
        showError(answ);
    }
}

function setCanvasSize(canvas, width, height){
    try{
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    catch(e){
        return e;
    }
}