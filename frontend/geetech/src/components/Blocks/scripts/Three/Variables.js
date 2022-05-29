export let orbValue = false;
export let color = "black"
export let autoRotate = false;
export let AddSetka = false;
export let modelNum = 0;
export let lightType = 'ambient'
export let directionalLightColor = '0xfff'
export let directionalLightIntensity = 1
export let pointLightDistance = 1
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
        case "AddSetka":
            AddSetka = value
            break;
        case "modelNum":
            modelNum = value;
            break;
        case "light":
            lightType = value
            break;
        case 'directionalLightColor':
            directionalLightColor = value;
            break;
        case 'directionalLightIntensity':
            directionalLightIntensity = value;
            break;
        case 'pointLightDistance':
            pointLightDistance = value;
            break;
    }
}