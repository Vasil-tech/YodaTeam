import * as THREE from 'https://threejs.org/build/three.module.js';
import showError from './ShowError.js';
import loader from './Loader.js'

export default class threeBuilder{
    constructor(canvas, width, height) {
        let answ = this.setCanvasSize(canvas, width, height)
        if(answ){
            this.draw(canvas, width, height);
        }
        else{
            showError("setCanvasSize",answ, "constructor from Rendering", "canvas");
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
                    showError("adding to scene", e, "draw from Rendering 3", "canvas");
                }
            }
            catch(e){
                showError("model make", e, "draw from Rendering 2", "canvas");
            }

        }
        catch(e){
            showError("elements of scene", e, "draw from Rendering 1", "canvas");
        }
    }
    Light(){
        try{
            let light = new THREE.AmbientLight(0xffffff);
            return light;
        }
        catch(e){
            showError("make light",e, "Light from Rendering", "canvas");
        }
    }
    Camera(width, height){
        try{
            let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
            camera.position.set(0, 0, 1000);
            return camera;
        }
        catch(e){
            showError("set camera ",e, "Camera from Rendering", "canvas");
        }
    }
    Scene(){
        try{
            const scene = new THREE.Scene;
            scene.background = new THREE.Color('black');
            return scene;
        }
        catch(e){
            showError("make scene", e, "Scene from Rendering", "canvas");
        }
    }
    Renderer(canvas){
        try{
            const rend =  new THREE.WebGLRenderer({canvas});
            return rend;
        }
        catch(e){
            showError("new renderer", e, "Renderer from Rendering", "canvas");
        }
    }
    addModel(camera, renderer){
        try{
            const control = new THREE.OrbitControls(camera, renderer);
        }
        catch(e){
            showError("error set orbit control", e, "addModel 1 from Rendering", "canvas");
        }
        try{
            let model = new loader();
        }
        catch(e){
            showError("add model", e, "addModel 2 from Rendering", "canvas");
        }
    }
}