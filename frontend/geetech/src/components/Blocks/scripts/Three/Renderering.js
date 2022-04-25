import { Loader } from './Loader.js';
import errorHandler from '../errorHandler.js'

let camera, controls, scene, renderer;

function animate(){
    try{
        controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true
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
export default class main{
    constructor(canvas, width, height, THREE, color, OrbitControl) {
        if(this.setCanvasSize(canvas, width, height)){
            let a = this.draw(canvas, width, height, THREE, color, OrbitControl);
            animate(a);
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

    draw(canvas, width, height, THREE, color, OrbitControl){
        try{
            renderer = this.Renderer(canvas, THREE);
            scene = this.Scene(THREE, color);
            camera = this.Camera(width, height, THREE);
            let light = this.Light(THREE);
            if(OrbitControl != false){
                try{
                    controls = new OrbitControl(camera, canvas)
                    controls.target.set(0, 0, 0);
                    controls.update();
                    scene.add(Loader(THREE));
                    scene.add(light)
                    return true;
                }
                catch(e){
                    errorHandler('Rendering', 'draw_3', e, 'canvas');
                }
            }
            else{
                try{

                    scene.add(Loader(THREE));
                    scene.add(light)
                    renderer.render(scene, camera);
                    return true
                }
                catch(e){
                    errorHandler('Rendering', 'draw_2', e, 'canvas');
                }
            }
        }
        catch(e){
            errorHandler('Rendering', 'draw_1', e, 'canvas');
        }
    }
    // Controls(camera, canvas, OrbitControl){
        
    //     return controls
    // }
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