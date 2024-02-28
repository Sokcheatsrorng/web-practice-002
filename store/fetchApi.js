const BASE_URL = 'http://localhost:5500/data/';
export async function getData(endpoint){
    try{
       const res =  await fetch(BASE_URL+endpoint+".json",{
        method : 'GET',
        headers:{
            "Content-Type":"application/json"
        } 
       })
       const data = await res.json();
       return data;
    }catch(error){
        console.log(error);
    }
}