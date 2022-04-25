import { Loader } from './Loader.js';
import errorHandler from '../errorHandler.js'

export default class{
    constructor(canvas, width, height, THREE, color) {
        if(this.setCanvasSize(canvas, width, height)){
            this.draw(canvas, width, height, THREE, color);
        }
        else{
            errorHandler('Rendering', 'constructor', 'setCanvasSize', 'canvas');
        }
    }

    setCanvasSize(canvas, width, height){
        try{
            canvas.width = width
            canvas.height = height
            return true;
        }
        catch(e){
            return e;
        }
    }

    draw(canvas, width, height, THREE, color){
        try{
            let renderer = this.Renderer(canvas, THREE);
            let scene = this.Scene(THREE, color);
            let camera = this.Camera(width, height, THREE);
            let light = this.Light(THREE);
            
            try{
                scene.add(Loader(THREE));
                scene.add(light)
                renderer.render(scene, camera);
            }
            catch(e){
                errorHandler('Rendering', 'draw_2', e, 'canvas');
            }
        }
        catch(e){
            errorHandler('Rendering', 'draw_1', e, 'canvas');
        }
    }
    Light(THREE){
        try{
            let light = new THREE.AmbientLight(0xffffff);
            return light;
        }
        catch(e){
            errorHandler('Rendering', 'Light', e, 'canvas');
        }
    }
    Camera(width, height, THREE){
        try{
            let camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
            camera.position.set(0, 0, 1000);
            return camera;
        }
        catch(e){
            errorHandler('Rendering', 'Camera', e, 'canvas');
        }
    }
    Scene(THREE, color){
        try{
            const scene = new THREE.Scene;
            scene.background = new THREE.Color(color);
            return scene;
        }
        catch(e){
            errorHandler('Rendering', 'Scene', e, 'canvas');
        }
    }
    Renderer(canvas, THREE){
        try{
            const rend =  new THREE.WebGLRenderer({canvas});
            return rend;
        }
        catch(e){
            errorHandler('Rendering', 'Renderer', e, 'canvas');
        }
    }
}