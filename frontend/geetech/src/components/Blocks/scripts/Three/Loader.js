
export default class Loader{
    constructor(THREE){
        let geometry = new THREE.SphereGeometry(300, 12, 12)
        let material = new THREE.MeshBasicMaterial({color: 0x9197AE, wireframe: true});
        let mesh = new THREE.Mesh(geometry, material);
    
        return(mesh);
    }
}