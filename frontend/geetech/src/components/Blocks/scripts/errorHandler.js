export default function(File = "Unknown file", Method = "Unknown method", Ext = "Unknow extension", Type){
    switch (Type){
        case "canvas":
            alert("hello");
            console.log(File, Method, Ext)
            break;
        case "UI":
            break;
        case "Backend":
            break;
    }
}