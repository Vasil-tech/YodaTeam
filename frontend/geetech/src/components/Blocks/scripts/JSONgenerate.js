import { emitter } from "@/main";
import errorHandler from "./errorHandler";
export default function(obj){
    try{
        obj = JSON.stringify(obj)
        let check = IsJsonString(obj)
        if(check){
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.open('POST', "/", true);
            xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlhttp.send("biba")
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if(this.status == 200){
                    console.log(this.responseText);
                    emitter.emit("Response", this.responseText)
                    }
                }
            }
        }
        else{
            errorHandler("JSONgenerate", "default", "not json", "Connection")
        }
        
    }
    catch(e){
        errorHandler("JSONgenerate","default",e, "Connection")
    }
    
}
function IsJsonString(str) {
    try {
        JSON.parse(str);
        console.log(str)
    } catch (e) {
        return false;
    }
    return true;
}