import check from './SupportThreeCheck.js'
import errorHandler from '../errorHandler.js'
//import renderering from './Renderering.js'
let canvas = null;

export default class{
    constructor(){
        try{
            const three = check(canvas);
            canvas = document.querySelector("#canvas");
            if(three != null){
                alert("чекай мать");
            }
            else{
                try{
                    //new renderering(canvas, window.innerWidth, window.innerHeight);
                    console.log('await here')
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
