export default function(title = "Error", Ext = "", meth="", type){
    if(type="canvas"){
        console.log("Method: "+meth)
        alert(title + " " + Ext);
    }
    else{
        console.log("Method: "+meth)
        alert("Wow"+title + " " + Ext);
    }
}