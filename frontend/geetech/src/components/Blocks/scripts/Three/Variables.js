export let orbValue = false;
export let color = "black"
export let autoRotate = false;
export let modelNum = 0;
export function setVarData(key, value){
    switch(key){
        case "color":
            color = value; 
        break;
        case "orbValue":
            orbValue = value;
        break;
        case "autoRotate":
            autoRotate = value
        break;
        case "modelNum":
            modelNum = value;
        break;
    }
}