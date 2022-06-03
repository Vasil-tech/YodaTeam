export let width = 0;
export let height = 0;
export function canvasWidht(){
    width = document.getElementById("workAreaRoot").offsetWidth -2 // Функция, возвращающая ширину канваса = ширине workAreaRoot
}
export function canvasHeight(){
    height = document.getElementById("workAreaRoot").offsetHeight -2 // Функция, возвращающая высоту канваса = высоте workAreaRoot
}
export function fullScrnSet(){ // Функция, возвращающая ширину и высоту канваса, которые равны пользовательскому разрешению экрана
    height = window.innerHeight
    width = window.innerWidth
}