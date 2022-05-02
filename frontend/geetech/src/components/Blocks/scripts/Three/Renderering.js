import { Loader } from './Loader.js';
import errorHandler from '../errorHandler.js'
import check from './SupportThreeCheck.js'
import { canvasHeight } from '../bus.js';
import { canvasWidht } from '../bus.js';
let camera, controls, scene, renderer, light;


export default class{
    constructor(THREE, color, OrbitControl, autoRotate) {
        const ans = this.supportAndCnvsSize();
        const canvas = ans.canvas;
        let height = ans.height;
        let width = ans.width;
        try{
            this.init(THREE, canvas, color, width, height);
            this.addToScene(THREE);
            if(OrbitControl!=false){
                this.setControls(OrbitControl, canvas)
                if(autoRotate){
                    controls.autoRotate = autoRotate
                    controls.autoRotateSpeed = 2;
                }
                animate()
            }
            else{
                renderer.render(scene, camera);
            }
        }
        catch(e){
            errorHandler("Rendering", "constructor", e, "canvas")
        }
    }

    supportAndCnvsSize(){
        try{
            const canvas = document.querySelector("#canvas");
            canvas.width = canvasWidht();
            canvas.height = canvasHeight();
            const checking = check(canvas);
            if(checking.status == false){
                errorHandler('threeLogic', 'checking', checking.ext, 'canvas');
            }
            else{   
                return {canvas: canvas, width: canvas.width, height: canvas.height}
            }
        }
        catch(e){
            errorHandler("Rendering", "supportAndCnvsSize_1", e, "canvas");
        }
        return false;
    }
    init(THREE, canvas, color, width, height){
        try{
            renderer = this.Renderer(canvas, THREE);
            scene = this.Scene(THREE, color);
            camera = this.Camera(width, height, THREE);
            light = this.Light(THREE);
        }
        catch(e){
            errorHandler('Rendering', 'init', e, 'canvas')
        }
    }

    setControls(OrbitControl, canvas){
        controls = new OrbitControl(camera, canvas)
        controls.target.set(0, 0, 0);
        controls.update();
    }
    addToScene(THREE){
        try{
            scene.add(Loader(THREE))
            scene.add(light)
        }
        catch(e){
            errorHandler('Rendering', 'addToScene', e, 'canvas')
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

function animate(){
    try{
        controls.update();
        render();
        requestAnimationFrame( animate );
    }
    catch(e){
        errorHandler('Rendering', 'animate', e, 'camvas')
    }
}
function render(){
    renderer.render(scene, camera)
}