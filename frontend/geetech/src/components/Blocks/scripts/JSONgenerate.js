export default async function(obj){
    try{
      let data = JSON.stringify(obj)
      let url = '/'
      try {
          const response = await fetch(url, {
            method: 'POST', 
            body: data,
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const json = await response.json();
          console.log('Успех:', JSON.stringify(json));
        } catch (error) {
          console.error('Ошибка:', error);
        }        
    }
    catch(e){
        console.error(e)
    }
}


