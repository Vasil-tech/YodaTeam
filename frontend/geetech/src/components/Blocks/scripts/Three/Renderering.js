import * as THREE from 'three'
import loader from './Loader.js'
import errorHandler from '../errorHandler.js'

export default class{
    constructor(canvas, width, height) {
        let answ = this.setCanvasSize(canvas, width, height)
        if(answ){
            this.draw(canvas, width, height);
        }
        else{
            errorHandler('Rendering', 'constructor', answ, 'canvas');
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
            let renderer = this.Renderer(canvas);
            let scene = this.Scene();
            let camera = this.Camera(width, height);
            let light = this.Light();
            try{
                let ldr = new loader();
                try{
                    scene.add(light, ldr);
                    renderer.render(scene, camera);
                }
                catch(e){
                    errorHandler('Rendering', 'draw_3', e, 'canvas');
                }
            }
            catch(e){
                errorHandler('Rendering', 'draw_2', e, 'canvas');
            }

        }
        catch(e){
            errorHandler('Rendering', 'draw_1', e, 'canvas');
        }
    }
    Light(){
        try{
            let light = new THREE.AmbientLight(0xffffff);
            return light;
        }
        catch(e){
            errorHandler('Rendering', 'Light', e, 'canvas');
        }
    }
    Camera(width, height){
        try{
            let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
            camera.position.set(0, 0, 1000);
            return camera;
        }
        catch(e){
            errorHandler('Rendering', 'Camera', e, 'canvas');
        }
    }
    Scene(){
        try{
            const scene = new THREE.Scene;
            scene.background = new THREE.Color('black');
            return scene;
        }
        catch(e){
            errorHandler('Rendering', 'Scene', e, 'canvas');
        }
    }
    Renderer(canvas){
        try{
            const rend =  new THREE.WebGLRenderer({canvas});
            return rend;
        }
        catch(e){
            errorHandler('Rendering', 'Renderer', e, 'canvas');
        }
    }
}