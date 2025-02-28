'use client';
import '../../app/globals.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ContentPage from '@/ContentPage'
import { GetSpecificCity } from '@/functions_api/get_functions';
import CardWeather from '@/components/specific/CardWeather';
import CardPronostcis from '@/components/specific/CardPronostics'
import Link from 'next/link';
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
        <div className='lg:col-span-4 lg:col-start-2 col-span-full flex '>
          <Link href='/' className='w-fit h-fit p-2 bg-[#032B44] text-white rounded-md font-bold text-center justify-center items-center'>
            <div className='h-full w-full pointer'>Regresar</div>
          </Link>
        </div>
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

