export let width = 0;
export let height = 0;
export function canvasWidht(){
    width = document.getElementById("workAreaRoot").offsetWidth -2
}
export function canvasHeight(){
    height = document.getElementById("workAreaRoot").offsetHeight -2
}
export function fullScrnSet(){
    height = window.innerHeight
    width = window.innerWidth
}