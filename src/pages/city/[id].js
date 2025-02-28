'use client';
import '../../app/globals.css'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import ContentPage from '@/ContentPage'
import { GetSpecificCity } from '@/functions_api/get_functions';
export default function SpecifcPage(){
  const [city, setCity] = useState();

  //QUEDA PENDIENTE DESARROLLAR ESTA PÁGINA EN FRONTEND
  const router = useRouter();
  const { id } = router.query; // Utiliza destructuring para acceder al parámetro 'id'

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const result = await GetSpecificCity(id);
        setCity(result);
        console.log(result);
        return result;
      }
    }
    fetchData();
  }, [id]);

  return (
    <ContentPage>
      Hola Mundoss
    </ContentPage>
  )
}

