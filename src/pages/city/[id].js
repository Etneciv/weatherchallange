'use client';
import '../../app/globals.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ContentPage from '@/ContentPage'
import { GetSpecificCity } from '@/functions_api/get_functions';
import CardWeather from '@/components/specific/CardWeather';
import CardPronostcis from '@/components/specific/CardPronostics'
export default function SpecifcPage(){
  const [city, setCity] = useState();
  const [date, setDate] = useState();
  
  const router = useRouter();
  const { id } = router.query; // Utiliza destructuring para acceder al parámetro 'id'
  
  
  useEffect(() => {
    async function fetchData() {
      if (id) {
        const result = await GetSpecificCity(id);
        setCity(result);
        setDate(new Date())
        return result;
       
      }
    }
    fetchData();
  }, [id]);

  return (
    <ContentPage>
      <div className='w-full grid grid-cols-6 gap-4 p-2 text-black'>
        <CardWeather 
          date={date?date:''}
          city={city?city:''}
          weather_now={city?city.weather_now:''}
        />
        <CardPronostcis 
          pronostic_weather={city?city.pronostic_weather:''}
        />
      </div>
    </ContentPage>
  )
}

