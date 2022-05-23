export function Loader(THREE){
    let geometry = new THREE.SphereGeometry(300, 12, 12)
    let material = new THREE.MeshBasicMaterial({color: 0x34F215, wireframe: true})
    let mesh = new THREE.Mesh(geometry, material)
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}
export function userLoader(file){
 console.log(file)
}