import { LoadCube } from './Loader.js';
import { LoadSphere } from './Loader.js';
import { LoadTorus } from './Loader.js';
import errorHandler from '../errorHandler.js'
import check from './SupportThreeCheck.js'
export let camera
export let objLoader
let controls, scene, renderer, light;
import { color } from '../Three/Variables.js';
import { autoRotate } from '../Three/Variables.js';
import { modelNum } from '../Three/Variables.js';
import { width } from '../bus.js';
import { height } from '../bus.js';
import { lightType } from '../Three/Variables.js';
import {directionalLightColor} from '../Three/Variables.js'
import {directionalLightIntensity} from '../Three/Variables.js'
import { pointLightDistance } from '../Three/Variables.js';
import { customLoad } from './Loader.js';
import { AddSetka } from '../Three/Variables.js';

export default class{
        constructor(THREE, OrbitControl, cameraPosition) {
        const ans = this.supportAndCnvsSize();
        const canvas = ans.canvas;
        let height = ans.height;
        let width = ans.width;
        try{
            this.init(THREE, canvas, width, height, cameraPosition);
            this.addToScene(THREE);
            if(OrbitControl!== false){
                this.setControls(OrbitControl, canvas)
                if(autoRotate){
                    controls.autoRotate = autoRotate
                    controls.autoRotateSpeed = 2;
                }
                animate()
            }
            else {
                renderer.render(scene, camera);
            }
        }
        catch(e){
            errorHandler("Rendering", "constructor", e, "canvas")
        }
    }

    supportAndCnvsSize(){
        try{
            const canvas = document.getElementById("canvas");
            canvas.width = width
            canvas.height = height
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
    init(THREE, canvas, width, height, cameraPosition){
        try{
            renderer = this.Renderer(canvas, THREE);
            let clr = color;
            scene = this.Scene(THREE, clr);
            camera = this.Camera(width, height, THREE, cameraPosition);
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

            this.addGreed(THREE);
            let model = modelNum;
            
            switch(modelNum){
                case null:
                    break;
                case 0:
                    model = LoadSphere(THREE)
                    scene.add(model)
                    scene.add(light)
                break;
                case 1:
                    model = LoadCube(THREE)
                    scene.add(model)
                    scene.add(light)
                break;
                case 2:
                    model = LoadTorus(THREE);
                    scene.add(model)
                    scene.add(light);
                    //scene.add(light.target);
                break;
                case 3:
                    model = customLoad(THREE)
                    scene.add(model)
                    scene.add(light);
                    //scene.add(light.target);
                break;
            }
            
        }
        catch(e){
            errorHandler('Rendering', 'addToScene', e, 'canvas')
        }
    }

    addGreed(THREE){
        try{
        if(AddSetka == true){
            let grid = new THREE.GridHelper(1000, 25);
            grid.position.y = 0;  
            scene.add(grid);
        }
    }
    catch(e){
        errorHandler("Rendering", "AddSetka", e, "canvas")
    }
    }

    Light(THREE){
        try{
            if(lightType == 'ambient'){
                const light = new THREE.AmbientLight( 0xffffff ); 
                return light;
            }
            if(lightType == 'directional'){
                const light = new THREE.DirectionalLight( directionalLightColor, directionalLightIntensity);
                return light;
            }
            if(lightType == 'point'){
                const light = new THREE.PointLight( directionalLightColor, pointLightDistance, 10000 );
                light.position.set( 50, 50, 50 );
                return light;
            }
        }
        catch(e){
            errorHandler('Rendering', 'Light', e, 'canvas');
        }
    }
    Camera(width, height, THREE, cameraPosition){
        try{
            const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 3000);
            camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
            camera.lookAt(0, 0, 0)
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
        requestAnimationFrame(animate);
    }
    catch(e){
        errorHandler('Rendering', 'animate', e, 'canvas')
    }
}
function render(){
    renderer.render(scene, camera)
}