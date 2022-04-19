import check from './script/SupportThreeChecking.js'
import showError from './script/ShowError.js'
import renderer from './script/Renderer.js'

class rendering{
    constructor(canvas){
        try{
            renderer(canvas, window.innerWidth, window.innerHeight); //добавить адаптивность размера канваса
        }
        catch(e){
            showError(e)
        }
    }
}

function appMain(canvas){
    try{
        let three = check(canvas)

        if(three == null){
            showError("Ваш браузер не поддерживает webGL")
        }
        else{
            let ctx = new rendering(canvas)
        }
    }catch(e){
        showError(e)
    }
}

window.onresize = setSize();
window.onload = setSize();

function setSize(){
    try{
        const canvas = document.getElementById('canvas');
        appMain(canvas)
    }
    catch(e){
        showError(e);
    }
}