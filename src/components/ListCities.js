
import React,{useEffect, useState} from 'react'
import { GetCitiesList } from '../functions_api/get_functions'
import CardCity from './CardCity'

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
    <div className='flex w-full  flex grid grid-cols-4 gap-3 p-4'>
      {data && data.map((city)=>{
        return(
            <CardCity 
              key={city.id}
              id={city.id}
              city_name={city.city_name}
              city_weather={city.city_weather}
            />
        )   
      })}
    </div>
  )
}

export default ListCities