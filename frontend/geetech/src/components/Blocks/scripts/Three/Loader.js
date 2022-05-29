import { obj } from './objParser.js';

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

export function customLoad(THREE){
    const positions = obj.position;
    const normals = obj.normal;
    const uvs = obj.texcoord;
    console.log(obj)
    let geometry = new THREE.BufferGeometry();
    const positionNumComponents = 3;
    const normalNumComponents = 3;
    const uvNumComponents = 2;
    geometry.addAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
    geometry.addAttribute(
        'normal',
        new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
    geometry.addAttribute(
        'uv',
        new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
        const material = new THREE.MeshLambertMaterial( {color: 0x34F215} );
        const mesh = new THREE.Mesh( geometry, material );
        let param = mesh.geometry.parameters
        param = JSON.stringify(param)
        document.cookie = encodeURIComponent("modelParams")+ '=' + encodeURIComponent(param)
    return mesh;
}