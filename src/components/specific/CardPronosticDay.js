import Image from 'next/image';
import React from 'react'

const CardPronosticDay = (props) => {
    const {day} = props;
    const img_url=`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png?appid=0eebd1fcf852d29ca0340c5c451d4c9a`
    const date = new Date(day.dt_txt)
    return (
    <div className='w-full rounded-lg shadow-lg bg-white p-2 flex flex-col text-center items-center justify-center text-black'>
            <div>
              <p className='lg:text-lg md:text-md text-sm font-bold'>{date?date.toLocaleString('en-US', { weekday: 'long' }):''}</p>
              <p className='lg:text-md md:text-sm text-xs text-gray-500'>{date?`${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}`:''}</p>
            </div>
            <Image 
              src={img_url}
              width={1200}
              height={1200}
              alt=''
              className='lg:w-30 lg:h-30'
            />
            <p className='lg:text-4xl md:text-3xl text-2xl text-gray-500'> {day.main.temp?`${Math.trunc(day.main.temp)}°C`:'Not found'}</p>
            <div className='flex gap-2 text-md'>
              <p className='text-red-600'>{day.main.temp?`${Math.trunc(day.main.temp_max)}°C`:'Na:Na'}</p>
              /
              <p className='text-blue-400'>{day.main.temp?`${Math.trunc(day.main.temp_min)}°C`:'Na:Na'}</p>
            </div>
            <p className='text-lg md:text-md text-sm'>{day.weather?day.weather[0].main:'Na'}</p>
        </div>
  )
}

export default CardPronosticDay
