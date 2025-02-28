const base_url = 'http://localhost:3000/'
export  async function GetCitiesList() {
    try{
        const response = await fetch(`${base_url}`,{
       
            headers:{
            },
            cache:'no-cache'
        })
        return await response.json()

    }catch(err){
        console.log(err);
        return err;
    }
}