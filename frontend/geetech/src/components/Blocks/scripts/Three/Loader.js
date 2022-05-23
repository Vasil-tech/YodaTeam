export function LoadSphere(THREE){
    let geometry = new THREE.SphereGeometry(300, 12, 12)
    let material = new THREE.MeshBasicMaterial({color: 0x34F215, wireframe: true})
    let mesh = new THREE.Mesh(geometry, material)
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}

export function LoadCube(THREE){
    const geometry = new THREE.BoxGeometry( 300, 300, 300 );
    const material = new THREE.MeshLambertMaterial({color: 0x34F215});
    const mesh = new THREE.Mesh( geometry, material );
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}

export function LoadTorus(THREE){
    const geometry = new THREE.TorusKnotGeometry( 100, 30, 1000, 160 );
    const material = new THREE.MeshLambertMaterial( {color: 0x34F215} );
    const mesh = new THREE.Mesh( geometry, material );
    let param = mesh.geometry.parameters
    param = JSON.stringify(param)
    document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return(mesh);
}