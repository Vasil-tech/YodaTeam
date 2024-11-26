export default function(canvas){
    let gl = null;
    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {
        return {status: false, ext: e}
}
  return gl;
}