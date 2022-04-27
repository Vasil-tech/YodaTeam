import { Loader } from './Loader.js';
import errorHandler from '../errorHandler.js'

let camera, controls, scene, renderer, light;


export default class{
    constructor(canvas, width, height, THREE, color, OrbitControl, autoRotate) {
        if(this.setCanvasSize(canvas, width, height)){
            if(this.init(THREE, canvas, color, width, height)){
                this.addToScene(THREE)
                if(OrbitControl!=false){
                    this.setControls(OrbitControl, canvas)
                    controls.autoRotateSpeed = 2;
                    controls.autoRotate = autoRotate
                    console.log(controls)
                    animate()
                }
            }
        }
        else{
            errorHandler('Rendering', 'constructor', 'setCanvasSize', 'canvas');
        }
    }

    init(THREE, canvas, color, width, height){
        try{
            renderer = this.Renderer(canvas, THREE);
            scene = this.Scene(THREE, color);
            camera = this.Camera(width, height, THREE);
            light = this.Light(THREE);
            return true;
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
        }
        catch(e){
            errorHandler('Rendering', 'addToScene_1', e, 'canvas')
        }
        try{
            scene.add(light)
            renderer.render(scene, camera);
        }
        catch(e){
            errorHandler('Rendering', 'addToScene_2', e, 'canvas')
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