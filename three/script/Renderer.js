import * as THREE from 'https://threejs.org/build/three.module.js';
import showError from './ShowError.js';

export default class threeBuilder{
    constructor(canvas, width, height) {
        let answ = this.setCanvasSize(canvas, width, height)
        if(answ){
            this.draw(canvas, width, height);
        }
        else{
            showError(answ);
        }
    }

    setCanvasSize(canvas, width, height){
        try{
            canvas.setAttribute("width", width);
            canvas.setAttribute("height", height);
            return true;
        }
        catch(e){
            return e;
        }
    }

    draw(canvas, width, height){
        try{
            const renderer = new THREE.WebGLRenderer({canvas});
            console.log(canvas)
            const scene = new THREE.Scene;
            scene.background = new THREE.Color('black');
            try{
                let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
                camera.position.set(0, 0, 1000);
                let light = new THREE.AmbientLight(0xffffff);
                scene.add(light);
                renderer.render(scene, camera);
            }
            catch(e){
                showError("set camera or light error"+e);
            }
        }
        catch(e){
            showError("make scene error: "+ e)
        }
    }
}