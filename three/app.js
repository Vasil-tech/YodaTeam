import check from './script/SupportThreeChecking.js'
import showError from './script/ShowError.js'
import renderer from './script/Renderer.js'

class rendering{
    constructor(canvas, three){
        try{
            console.log(renderer(canvas, three));
        }
        catch(e){
            showError(e)
        }
    }
}

try{
    const canvas = document.getElementById('canvas');
    try{
        let three = check(canvas)
        if(three == null){
            showError("Ваш браузер не поддерживает webGL")
        }
        else{
            let ctx = new rendering(canvas, three)
        }
    }catch(e){
        showError(e)
    }
}
catch(extensions){
    showError('Не найден элемент canvas');
}

window.onresize = setSize();
window.onload = setSize();

function setSize(){
    console.log('biba');
}