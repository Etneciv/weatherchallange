
import React,{useEffect, useState} from 'react'
import { GetCitiesList } from '../functions_api/get_functions'

//Ya obtengo la lista de ciudades desde mi api, sigue trabjar un poco en el front
const ListCities = () => {
    const [data, setData] = useState()

    useEffect(()=>{
        async function fetchData(){
            const result = await GetCitiesList();
            setData(result)
            console.log(result)
            return result;
        }
        fetchData()
    },[])
  return (
    <div>
      {data && data.map((city)=>{
        return(
            <p key={city.id} className='text-white'>{city.id}</p>
        )
      })}
    </div>
  )
}

export default ListCities