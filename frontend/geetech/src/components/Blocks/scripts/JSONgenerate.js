import errorHandler from "./errorHandler";
export default async function(data){
    try{
      console.log(data)
      let response = await fetch("/",{
          method: "POST",
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body:JSON.stringify(data)
      }
      );
      
      if (response.ok) {
        let json = await response.json();
        console.log(json);
      } else {
        errorHandler("JSONgenerate", "", response.status);
      }      
    }
    catch(e){
        console.error(e)
    }
}


