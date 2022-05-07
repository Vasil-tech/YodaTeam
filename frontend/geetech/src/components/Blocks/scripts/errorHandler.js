import { emitter } from "@/main";
export default function(File = "Unknown file", Method = "Unknown method", Ext = "Unknow extension", Type){
    switch (Type){
        case "canvas":
            emitter.emit("CanvasError", {'file': File, 'method':Method, 'ext':Ext})
            break;
        case "UI":
            alert("UI error", "file:", File, "method: ", Method, Ext)
            console.log("UI error", "file:", File, "method: ", Method, Ext)
            break;
        case "Backend":
            break;
        case "Connect":
            alert("Connect error", "file:", File, "method: ", Method, Ext)
            console.log("Connect error", "file:", File, "method: ", Method, Ext)
    }
}