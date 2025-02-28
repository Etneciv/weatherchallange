import Image from 'next/image';
import React from 'react'

const CardWeather = (props) => {
    const {date,city, weather_now} = props;
    console.log(weather_now)
    const img_url=`https://openweathermap.org/img/wn/${weather_now?weather_now.weather[0].icon:''}@2x.png?appid=0eebd1fcf852d29ca0340c5c451d4c9a`

  return (
    <div className='lg:col-span-4 lg:col-start-2 col-span-full  bg-white px-2 py-4 rounded-lg flex flex-col shadow-lg'>
        <div className='flex flex-col w-full gap-2'>
            <h3 className='w-full lg:text-4xl md:text-3xl text-2xl font-bold'>Weather in {city?city.city_name:''}</h3>
            <div className='flex gap-2 lg:text-2xl md:text-xl text-lg text-gray-500'>
                <p>{date?`${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`:''}</p>
                |
                <p>{date?`${date.toLocaleString('en-US', { weekday: 'long' })},  ${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}`:''}</p>
            </div>
        </div>
        <div className='flex lg:flex-row md:flex-row flex-col w-full gap-2'>
            <div className='w-full flex flex-wrap gap-2 justify-center items-center rounded bg-[#ADD8E6] w-1/2 py-2 px-4'>
                <p className='w-full lg:text-2xl md:text-xl text-lg'>{weather_now?weather_now.weather[0].main:''}</p>
                <p className='lg:text-4xl md:text-3xl text-2xl font-bold'>{weather_now?`${Math.trunc(weather_now.main.temp)}°C`:''}</p>
                <Image 
                    src={img_url}
                    width={1200}
                    height={1200}
                    alt=''
                    className='lg:w-40 lg:h-40 md:w-40 md:h-40 w-32 h-32 '
                />
            </div>
            <div className='w-full flex flex-col gap-2 justify-around items-center rounded bg-gray-200 w-1/2 p-2'>
                {/**feels like , min, max humedity, pressure (presión), */}
                    <div className='w-full flex justify-center lg:text-2xl md:text-xl text-lg gap-2 text-md'>
                        <p className='text-red-600'>{weather_now && weather_now.main.temp?`${Math.trunc(weather_now.main.temp_max)}°C`:'Na:Na'}</p>
                        /
                        <p className='text-blue-500'>{weather_now && weather_now.main.temp?`${Math.trunc(weather_now.main.temp_min)}°C`:'Na:Na'}</p>
                    </div>
                    <p className='lg:text-2xl md:text-xl text-lg '>Feels Like {weather_now && weather_now.main.feels_like?`${Math.trunc(weather_now.main.feels_like)}°C`:''}</p>
                    <p className='lg:text-2xl md:text-xl text-lg '>Humidity {weather_now && weather_now.main?`${weather_now.main.humidity}%`:''}</p>
            </div>
        </div>
    </div>
  )
}

export default CardWeather
