//import { emitter } from "@/main";
import errorHandler from "./errorHandler";
import $ from "ajax"
export default function(obj){
    try{
        obj = JSON.stringify(obj)
        let check = IsJsonString(obj)
        if(check){
            console.log(window.location.pathname)
            $.ajax({
                type : "POST",
                contentType : "application/json; charset=utf-8",
                url : window.location.pathname,
                data : obj,
                complete: function () {
                    // По завершению
                    $("#titleId").val("");
                    $("#textId").val("");
                    //emitter.emit("Responce", "a")
                    console.log(" request: " )
                }
            });
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
    } catch (e) {
        return false;
    }
    return true;
}