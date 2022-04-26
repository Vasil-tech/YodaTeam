import { emitter } from "@/main";
export default function(File = "Unknown file", Method = "Unknown method", Ext = "Unknow extension", Type){
    switch (Type){
        case "canvas":
            emitter.emit("CanvasError", {'file': File, 'method':Method, 'ext':Ext})

            break;
        case "UI":
            break;
        case "Backend":
            break;
    }
}