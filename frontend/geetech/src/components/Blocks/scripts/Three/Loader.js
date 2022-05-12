export function Loader(THREE){
    let geometry = new THREE.SphereGeometry(300, 12, 12)
    let material = new THREE.MeshBasicMaterial({color: 0x34F215, wireframe: true})
    let mesh = new THREE.Mesh(geometry, material)
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}
//import {fs} from 'fs';
export function userLoader(fs, file){
    console.log(fs, file)
    // const tolw = require("tolw");
    // // initialise tolw
    // //const fs = require('fs');
    // tolw.init().then(() => {
    // // have fun
    // let objFile = new Uint8Array(fs.readFileSync(file, null));
    // let { attrib, shapes } = tolw.loadObj(objFile);
    // console.log(attrib, shapes)
    // });
}