import check from './SupportThreeCheck.js'
import errorHandler from '../errorHandler.js'
import renderering from './Renderering.js'
import { canvasHeight } from '../bus.js';
import { canvasWidht } from '../bus.js';
export default class{
    constructor(THREE){
        try{
            const canvas = document.querySelector("#canvas");
            canvas.width = canvasWidht();
            canvas.height = canvasHeight();
            const checking = check(canvas);
            if(checking == null){
                alert("чекай мать");
            }
            else{
                try{
                    new renderering(canvas, canvas.width, canvas.height, THREE); 
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
