import check from './script/SupportThreeChecking.js'
import showError from './script/ShowError.js'
import threeBuilder from './script/Renderer.js'
const canvas = document.querySelector("#canvas");
let ctx = [];

appMain();
function appMain(){
    try{
        let three = check(canvas)

        if(three == null){
            showError("Your browser not support webGL")
        }
        else{
            try{
                ctx[0] = new threeBuilder(canvas, window.innerWidth, window.innerHeight);
            }
            catch(e){
                showError('threeBuilder: '+ e)
            }
        }
    }catch(e){
        showError(e)
    }
}

//window.onload = appMain();

window.onresize = function(){
    try{
        ctx[0].setCanvasSize(canvas, window.innerWidth, window.innerHeight);
    }
    catch(e){
        showError('biba'+e);
    }
}