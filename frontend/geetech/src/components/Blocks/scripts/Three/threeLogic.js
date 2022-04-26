import check from './SupportThreeCheck.js'
import errorHandler from '../errorHandler.js'
import renderering from './Renderering.js'
import { canvasHeight } from '../bus.js';
import { canvasWidht } from '../bus.js';
export default class{
    constructor(THREE, color, OrbitControl){
        try{
            const canvas = document.querySelector("#canvass");
            canvas.width = canvasWidht();
            canvas.height = canvasHeight();
            const checking = check(canvas);
            if(checking == null){
                alert("чекай мать");
            }
            else{
                try{
                    new renderering(canvas, canvas.width, canvas.height, THREE, color, OrbitControl); 
                }
                catch(e){
                    errorHandler('threeLogic', 'constructor_2', e, 'canvas');
                }
            }
        }
        catch(e){
            errorHandler('threeLogic', 'constructor_1', e, 'canvas');
        }
    }
}
