export default function(File = "Unknown file", Method = "Unknown method", Ext = "Unknow extension", Type){
    switch (Type){
        case "canvas":
            alert("Surprise mazafaka, check console bitch");
            console.error(File, Method, Ext)
            break;
        case "UI":
            break;
        case "Backend":
            break;
    }
}