import check from './script/SupportThreeChecking.js'
import showError from './script/ShowError.js'
import threeBuilder from './script/Renderering.js'
const canvas = document.querySelector("#canvas");
let ctx = [];

appMain();
function appMain(){
    try{
        let three = check(canvas)

        if(three == null){
            showError("Your browser not support webGL", "three not null", "appMain 2", "canvas")
        }
        else{
            try{
                ctx[0] = new threeBuilder(canvas, window.innerWidth, window.innerHeight); //массив - окна приложения с различными канвасами.
            }
            catch(e){
                showError('threeBuilder: ', e, "appMain 3", "canvas")
            }
        }
    }catch(e){
        showError("all broken", e, "appMain 1", "canvas")
    }
}


window.onresize = function(){
    try{
        ctx[0].setCanvasSize(canvas, window.innerWidth, window.innerHeight);
    }
    catch(e){
        showError('cannot resize canvas', e, "window.onresize", "canvas");
    }
}