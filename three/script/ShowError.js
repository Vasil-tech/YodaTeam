export default function(File = "Unknown file", Method = "Unknown method", Ext = "Unknown extension", Type = "General"){
    if(type="canvas"){
        let canvas = document.querySelector("canvas"),
        context = canvas.getContext("2d");
        context.font = "22px Verdana";
        context.fillText(ext, 20, 50);
        console.log("Method: "+meth)
        alert(title + " " + ext);
    }
    else{
        console.log("Method: "+meth)
        alert("Wow"+title + " " + ext);
    }
}