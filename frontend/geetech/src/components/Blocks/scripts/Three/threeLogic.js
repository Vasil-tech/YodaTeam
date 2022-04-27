import check from './SupportThreeCheck.js'
import errorHandler from '../errorHandler.js'
import renderering from './Renderering.js'
import { canvasHeight } from '../bus.js';
import { canvasWidht } from '../bus.js';


export default class{
    constructor(THREE, color, OrbitControl, autoRotate, fullScreen){
        try{
            let rend;
            const canvas = document.querySelector("#canvas");
            canvas.width = canvasWidht();
            canvas.height = canvasHeight();
            const checking = check(canvas);
            if(checking == null){
                errorHandler('threeLogic', 'checking', 'trouble', 'canvas');
            }
            else{
                try{
                    if(fullScreen){
                        rend = new renderering(canvas, window.innerWidth, window.innerHeight, THREE, color, OrbitControl, autoRotate); 
                    }
                    else{
                        rend = new renderering(canvas, canvas.width, canvas.height, THREE, color, OrbitControl, autoRotate); 
                    }
                    return rend;
                }
                catch(e){
                    errorHandler('threeLogic', 'constructor_3', e, 'canvas');
                }
            }
        }
        catch(e){
            errorHandler('threeLogic', 'constructor_2', e, 'canvas');
        }
    }
}
