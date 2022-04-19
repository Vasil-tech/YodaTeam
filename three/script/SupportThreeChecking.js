export default function(canvas){
    let gl = null;
    try {
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    }
    catch(e) {
        if (!gl) {
        gl = null;
    }
}
  return gl;
}