import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";

const CardCity = (props) => {
    const {id, city_name, city_weather} = props;
    const {main, weather} = city_weather;
    console.log(weather[0])
    const img_url=`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png?appid=0eebd1fcf852d29ca0340c5c451d4c9a`
  return (
    <Link href={`/city/${id}`} className='lg:col-span-1 md:col-span-2 col-span-full'>
      <div className='border border-gray-300 lg:rounded-lg md:rounded-lg shadow-lg bg-white w-full p-2 flex flex-col text-center items-center justify-center text-black'>
        <div className='flex gap-2 justify-center items-center'>
          <h3 className='text-2xl font-bold'>{city_name}</h3>
          <FaMapMarkerAlt className='w-6 h-6'/>
        </div>
        <Image 
          src={img_url}
          width={1200}
          height={1200}
          alt=''
          className='w-30 h-30'
        />
        <p className='text-4xl text-gray-500'> {main.temp?`${Math.trunc(main.temp)}°C`:'Not found'}</p>
        <div className='flex gap-2 text-md'>
          <p className='text-red-600'>{main.temp?`${Math.trunc(main.temp_max)}°C`:'Na:Na'}</p>
          /
          <p className='text-blue-500'>{main.temp?`${Math.trunc(main.temp_min)}°C`:'Na:Na'}</p>
        </div>
        <p className='text-lg'>{weather?weather[0].main:'Na'}</p>
    </div>
    </Link>
  )
}

export default CardCity
